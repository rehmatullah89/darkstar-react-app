"use client"
import React, { useEffect, useState } from 'react';
import useApi from '@/hooks/useApi';
import Heading from '@/ui/common/Heading';
import Button from '@/ui/common/Button';
import { COLORS, FUNC } from '@/utils';
import Link from 'next/link';
import Image from 'next/image';
import PopUp from '@/ui/common/PopUp';
import { useCartContext } from '@/context/CartContext';
import TrackingOrder from '@/ui/order/tracking';
import NoImage from '../../../../public/noImage.png'
import CancelOrder from '@/ui/order/cancel';
import { Rating } from 'react-simple-star-rating'
import { useUser } from '@/context/UserContext';
import ReviewOrder from '@/ui/order/review';
import NoData from '@/ui/common/NoData';
import { useMediaQuery } from 'react-responsive';
import { Loader } from '@/ui/common/Loader';
import { useToast } from '@/context/ToastProvider';
import OrdersLoader from '@/ui/skeletonLoader/OrdersLoader';
import { WP_BASE_URL } from '@/utils/constants';

const Orders = () => {
  const { handleAddToCart, state } = useCartContext();
  const { makeApiCall, loading } = useApi();
  const { userData } = useUser();
  const isDesktop = useMediaQuery({ minWidth: 992 });
  const { showSuccess, showError } = useToast();


  const [orders, setOrders] = useState<any[]>([]);
  const [trackingData, setTrackingData] = useState({});
  const [isTrackingModalOpen, setIsTrackingModalOpen] = useState(false);
  const [isCancelModalOpen, setIsCancelModalOpen] = useState(false);
  const [isReviewModalOpen, setIsReviewModalOpen] = useState(false);
  const [expandedItemId, setExpandedItemId] = useState(null);
  const [isLoading, setIsLoading] = useState<Boolean>(true);
  const [selectedOption, setSelectedOption] = useState('');
  const [selectedOrder, setSelectedOrder] = useState<any>({});
  const [selectedProduct, setSelectedProduct] = useState<any>({});
  const [emptyFields, setEmptyFields] = useState<string[]>([]);
  const [rating, setRating] = useState(0);
  const [selectedCancelReason, setSelectedCancelReason] = useState<any>({ selectedCancelOption: 'The Product is damaged or defective', selectedCancelReason: '', selectedReview: '' });

  const cancelOptions = [
    { name: 'The Product is damaged or defective' },
    { name: 'The Product arrived too late' },
    { name: 'I no longer need the product' },
    { name: 'The product did not match the description' }
  ]
  const getOrderData = async () => {
    try {
      setIsLoading(true);
      const response = await makeApiCall('order/customer-orders', 'GET');
      
      if (response.statusCode === 200 && response.success) {
        const filteredOrders = response.data.map(order => {
          const filteredLineItems = order.line_items.filter(item => !item.name.includes("RM"));
          return {
            ...order,
            line_items: filteredLineItems
          };
        });
        setOrders(filteredOrders);
        setIsLoading(false);
      }
    } catch (error) {
      showError('Something went wrong, while getting order data', error);
    } finally {
      setIsLoading(false);
    }
  };

  const wooCommerceApi = async (consumerKey, consumerSecret, customerId) => {
    const url = new URL(`${WP_BASE_URL}/wp-json/wc/v3/orders`);
    url.searchParams.append('customer', customerId);

    const headers = new Headers();
    headers.set('Authorization', 'Basic ' + btoa(`${consumerKey}:${consumerSecret}`));

    try {
      const response = await fetch(url, {
        method: 'GET',
        headers: headers
      });
      if (!response.ok) {
        throw new Error(`Error fetching WooCommerce orders: ${response.statusText}`);
      }

      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching WooCommerce orders:', error);
      throw error;
    }
  };

  const getOrderTrackingData = async (orderID: number, itemID: number, order: any) => {
    try {
      setSelectedOrder(order)
      const data = {
        id: orderID,
        item_id: itemID,
      };
      const response = await makeApiCall(
        'order/track-order-item',
        'POST',
        data,
      );
      if (response.statusCode === 200 && response.success) {
        setIsTrackingModalOpen(true)
        setTrackingData(response.data)
      }
    } catch (error) {
      showError('Something went wrong, while tracking order', error);
    } finally {
      setIsLoading(false);
    }
  };

  const getInvoiceData = async (orderID: number) => {
    try {
      const response = await makeApiCall(
        `order/order-invoice/${orderID}`,
        'GET',
      );
      if (response.statusCode === 200 && response.success) {
        window.open(response.data, '_blank');
      }
    } catch (error) {
      showError('Something went wrong, while getting invoice', error);

    }
  };

  const cancelOrder = async () => {
    setEmptyFields([])
    const newEmptyFields: string[] = [];
    if (!selectedCancelReason.selectedCancelOption.trim()) newEmptyFields.push('Cancellation reason');
    if (!selectedCancelReason.selectedCancelReason.trim()) newEmptyFields.push('Cancellation Description');
    if (newEmptyFields.length > 0) {
      alert(`Please complete the following fields: ${newEmptyFields.join(', ')}`);
      setEmptyFields(newEmptyFields);
      return;
    }
    try {
      const data = {
        id: selectedOrder.id,
        reason_cancellation: selectedCancelReason.selectedCancelOption,
        message: selectedCancelReason.selectedCancelReason
      }
      const response = await makeApiCall(
        `order/cancel-order`,
        'POST',
        data
      );
      if (response.statusCode === 200 && response.success) {
        setIsCancelModalOpen(false)
        showSuccess('Order Cancel Successfully');

        const updatedOrders: any = orders.map((order: any) => {
          if (order.id === selectedOrder.id) {
            const updatedLineItems = order.line_items.filter(item => item.id !== selectedOrder.id);
            return {
              ...order,
              line_items: updatedLineItems,
            };
          }
          return order;
        });
        setOrders(updatedOrders);
      }
    } catch (error) {
      console.error('Error canceling order:', error);
    }
  };

  const reviewOrder = async () => {
    setEmptyFields([])
    const newEmptyFields: string[] = [];
    if (!selectedCancelReason.selectedReview.trim()) newEmptyFields.push('selectedReview');
    if (newEmptyFields.length > 0) {
      alert(`Please complete the following fields: ${newEmptyFields.join(', ')}`);
      setEmptyFields(newEmptyFields);
      return;
    }
    try {
      const data = {
        id: selectedOrder.id,
        reason_cancellation: selectedCancelReason.selectedCancelOption,
        message: selectedCancelReason.selectedCancelReason,
        user_id: userData.id,
        product_id: selectedProduct.id,
        comment_id: 0,
        rating: rating,
        review: selectedCancelReason.selectedReview
      }
      const response = await makeApiCall(
        `order/review-order-item`,
        'POST',
        data
      );

      if (response.statusCode === 200 && response.success) {
        setIsReviewModalOpen(false)
        showSuccess('Review Added Successfully');

        // const updatedOrders: any = orders.map((order: any) => {
        //   if (order.id === selectedOrder.id) {
        //     const updatedLineItems = order.line_items.filter(item => item.id !== selectedOrder.id);
        //     return {
        //       ...order,
        //       line_items: updatedLineItems,
        //     };
        //   }
        //   return order;
        // });
        // setOrders(updatedOrders);
      }
    } catch (error) {
      console.error('Error canceling order:', error);
    }
  };

  const handleChange = (field: string | undefined, value: any) => {
    if (typeof field === 'string')
      setSelectedCancelReason(prevSocial => ({
        ...prevSocial,
        [field]: value,
      }));
  };

  const cancelOrderModal = async (order) => {
    setSelectedOrder(order)
    setSelectedCancelReason({ ...selectedCancelReason, selectedCancelReason: '' })
    setIsCancelModalOpen(true)
  };

  const reviewOrderModal = async (order, item) => {
    setSelectedOrder(order)
    setSelectedProduct(item)
    setSelectedCancelReason({ ...selectedCancelReason, selectedCancelReason: '', selectedReview: '' })
    setIsReviewModalOpen(true)
  };

  const toggleReorderTray = (orderId, item) => {
    setExpandedItemId(prevId => prevId === orderId ? null : orderId);
  };

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleRating = (rate) => {
    setRating(rate);
    // other logic can go here
  };

  useEffect(() => {
    getOrderData();
    wooCommerceApi('ck_9f8afd0b9a7fb12e72ef2547e6c2f14a97f012a5', 'cs_8a2e4f50d697a6f362b8d3f359a1d11e70513aaa', '174597');
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  if (isLoading) {
    return (
      <OrdersLoader />
    );
  }
  return (
    <div className="pageStainConcealer">
      <Heading
        heading="ORDERS"
        subHeading="Track, return or buy items again."
        border={true}
        lineHeight={false}
      />

      {orders.length > 0 ? (
        orders.map((order, index) => {
          return (
            <div className='order-wrapper-repeater'
              key={index}
              style={{
                border: '1px solid #dee2e6',
                marginBottom: 10,
              }}
            >
              <div className='order-head-wrapper'
                style={{
                  flexDirection: 'row',
                  backgroundColor: '#f8f8f8',
                  alignItems: 'center',
                  padding: '12px 15px',
                  justifyContent: 'space-between',
                  borderBottom: '1px solid #dee2e6',
                  display: 'flex'
                }}
              >
                <div>
                  <Link
                    href={{
                      pathname: `/my-account-new/orders/view-order/${order?.id}`,
                    }}>
                    <div
                      style={{
                        textDecorationLine: 'underline',
                        color: COLORS.primary,
                        fontFamily: 'inherit',
                        fontWeight: 500,
                        fontSize: 14,
                      }}
                    >
                      {order?.meta_data?._order_number_formatted}
                    </div>
                  </Link>
                </div>
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 5,
                  }}
                >
                  {isDesktop && <>
                    <span style={{ color: COLORS.black, fontWeight: 500, fontSize: 14 }}>Date:</span>
                    <span
                      style={{
                        color: COLORS.primary,
                        fontFamily: 'inherit',
                        fontWeight: 500,
                        fontSize: 14,
                        paddingRight: 24,
                      }}
                    >
                      {FUNC.formatDate(order?.date_created.date)}
                    </span>
                    <span style={{ color: COLORS.black, fontWeight: 500, fontSize: 14 }}>Status:</span>
                    <span
                      style={{
                        color: COLORS.primary,
                        fontFamily: 'inherit',
                        fontWeight: 500,
                        fontSize: 14,
                        paddingRight: 24,
                      }}
                    >
                      {order?.status}
                    </span>
                  </>}
                  <span style={{ color: COLORS.black, fontWeight: 500, fontSize: 14 }}>Total:</span>
                  <span
                    style={{
                      color: COLORS.primary,
                      fontFamily: 'inherit',
                      fontWeight: 500,
                      fontSize: 14,
                    }}
                  >
                    ${order?.total}
                  </span>
                  <Button title={'INVOICE'} type={'primary'}
                    onClick={() => getInvoiceData(order.order_id)}
                    textStyle={{
                      fontSize: 12,
                      padding: 5
                    }} />
                  {order.status === "processing" &&
                    <Button title={'Cancel'}
                      type={'primary'}
                      onClick={() => cancelOrderModal(order)}
                      textStyle={{
                        fontSize: 12,
                        padding: 5
                      }}
                    />
                  }

                </div>
              </div>
              {order.line_items.map((item: any, indexKey: number) => (
                <div className='order-wrapper-inner-sec'
                  key={indexKey}
                  style={{
                    padding: '16px',
                    margin: '0 16px',
                    backgroundColor: COLORS.white,
                  }}
                >
                  <div style={{ flexDirection: 'row', display: 'flex' }} className='product-item-description'>
                    <Image
                      src={item.image_url || NoImage}
                      alt={item.name}
                      width={80}
                      height={80}
                      style={{ border: '1px solid #dfe3e7' }}
                    />
                    <div style={{ paddingRight: 10, paddingLeft: 10 }}>
                      <span
                        style={{
                          color: COLORS.black,
                          fontFamily: 'inherit',
                          fontWeight: 500,
                          fontSize: 14,
                        }}
                      >
                        {item.name}
                      </span>
                      <div style={{ flexDirection: 'row', gap: 5 }}>
                        <span
                          style={{
                            color: COLORS.black,
                            fontFamily: 'inherit',
                            fontWeight: 500,
                            fontSize: 14,
                          }}
                        >
                          x
                        </span>
                        <span
                          style={{
                            color: COLORS.primary,
                            fontFamily: 'inherit',
                            fontWeight: 700,
                            fontSize: 14,
                          }}
                        >
                          {item.quantity}
                        </span>
                      </div>
                      <div style={{ flexDirection: 'row', gap: 5 }}>
                        <span
                          style={{
                            color: COLORS.black,
                            fontFamily: 'inherit',
                            fontWeight: 500,
                            fontSize: 14,
                          }}
                        >
                          Price:
                        </span>
                        <span
                          style={{
                            color: COLORS.primary,
                            fontFamily: 'inherit',
                            fontWeight: 700,
                            fontSize: 14,
                          }}
                        >
                          ${item.total}
                        </span>
                      </div>
                      {item.tray_number && (
                        <div style={{ flexDirection: 'row', gap: 5 }}>
                          <span
                            style={{
                              color: COLORS.black,
                              fontFamily: 'inherit',
                              fontWeight: 500,
                              fontSize: 14,
                            }}
                          >
                            Tray Number:
                          </span>
                          <span
                            style={{
                              color: COLORS.primary,
                              fontFamily: 'inherit',
                              fontWeight: 700,
                              fontSize: 14,
                            }}
                          >
                            {item?.tray_number}
                          </span>
                        </div>
                      )}
                    </div>
                  </div>

                  <div className='button-shipped-status' style={{ width: isDesktop ? '28%' : '80%', gap: 5, marginTop: 10, display: 'flex', flexDirection: 'column', }}>
                    {item.status_title === 'shipped' &&
                      <>
                        {(item.tray_price2mm !== null && item.tray_price3mm !== null) &&
                          <>

                            <Button title={'re-order trays'} onClick={() => toggleReorderTray(item.id, item)} bgColor={expandedItemId === item.id ? 'gray' : COLORS.primary} />
                            {expandedItemId === item.id && <div
                              key={index}
                              style={{
                                backgroundColor: '#f8f8f8',
                                padding: '5px 10px',
                                marginBottom: 5,
                              }}
                            >
                              <div style={{ color: COLORS.black, fontWeight: 500, fontSize: 14, borderBottom: '1px solid #dee2e6', paddingBottom: 5 }}>Tray</div>
                              <div style={{ justifyContent: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                                <div>
                                  {item.tray_price2mm !== null && <label style={{ marginRight: 10 }}>
                                    <input
                                      type="radio"
                                      value={item.tray_price2mm}
                                      checked={selectedOption === item.tray_price2mm}
                                      onChange={handleOptionChange}
                                      style={{ marginRight: 10 }}
                                    />
                                    2 mm
                                  </label>}
                                  {item.tray_price3mm !== null && <label>
                                    <input
                                      type="radio"
                                      value={item.tray_price3mm}
                                      checked={selectedOption === item.tray_price3mm}
                                      onChange={handleOptionChange}
                                      style={{ marginRight: 10 }}
                                    />
                                    3 mm
                                  </label>}
                                </div>
                                <div style={{}}>$   <span
                                  style={{
                                    fontFamily: 'inherit',
                                    fontWeight: 500,
                                    fontSize: 25,
                                  }}
                                >
                                  {selectedOption}
                                </span> </div>
                                <div style={{ width: '100%', backgroundColor: 'red' }}>
                                  <Button title={'buy again'} textStyle={{ width: '100%' }} />
                                </div>
                              </div>
                            </div>}

                          </>}
                        <Button title={'re-order system'}
                          onClick={() => handleAddToCart({ ...item, id: item.product_id })}
                        />
                      </>}
                    {item.status_title !== 'Protection' && <div
                      style={{
                        gap: 5,
                        marginTop: 10,
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        display: 'flex',
                        width: 230
                      }}
                    >
                      <Button
                        onClick={() => getOrderTrackingData(order.id, item.id, order)}
                        title={'track'}
                        type={'primary'}
                      />
                      <Button
                        title={'Add a review'}
                        onClick={() => reviewOrderModal(order, item)}
                        type={'primary'}
                        textStyle={{ fontSize: 15 }}
                      />
                    </div>}
                  </div>
                  <div className='shippedStatusStrip' style={{ flexDirection: 'row', gap: 5, marginTop: 10 }}>
                    <span
                      style={{
                        color: COLORS.black,
                        fontFamily: 'inherit',
                        fontWeight: 500,
                        fontSize: 14,
                      }}
                    >
                      Status: {' '}
                    </span>
                    <span
                      style={{
                        color: COLORS.primary,
                        fontFamily: 'inherit',
                        fontWeight: 700,
                        fontSize: 14,
                      }}
                    >
                      {item.status_title}
                    </span>
                  </div>
                  <div  className='shippedProgressBarStrip'
                    style={{
                      flexDirection: 'row',
                      gap: 5,
                      marginTop: 10,
                      alignItems: 'center',
                      display: 'flex'
                    }}
                  >
                    <span
                      style={{
                        color: COLORS.black,
                        fontFamily: 'inherit',
                        fontWeight: 500,
                        fontSize: 14,
                      }}
                    >
                      Progress:
                    </span>
                    {[1, 2, 3, 4, 5, 6, 7].map(fill => {
                      return (
                        <div
                          key={fill}
                          style={{
                            height: 6,
                            backgroundColor:
                              fill <= item.progress
                                ? COLORS.primary
                                : '#dee2e6',
                            width: 10,
                          }}
                        />
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
          );
        })
      ) : (
        <NoData title={'No orders available'} />
      )}
      {isTrackingModalOpen && <PopUp isOpen={isTrackingModalOpen} onClose={() => setIsTrackingModalOpen(false)}>
        <TrackingOrder trackingData={trackingData} orders={selectedOrder} closeModal={() => setIsTrackingModalOpen(false)} />
      </PopUp >}

      {isCancelModalOpen && <PopUp isOpen={isCancelModalOpen} onClose={() => setIsCancelModalOpen(false)}>
        <CancelOrder
          selectedOrder={selectedOrder}
          setIsCancelModalOpen={setIsCancelModalOpen}
          selectedCancelReason={selectedCancelReason}
          handleChange={handleChange}
          cancelOptions={cancelOptions}
          emptyFields={emptyFields}
          cancelOrder={cancelOrder}
        />
      </PopUp >}

      {isReviewModalOpen && <PopUp isOpen={isReviewModalOpen} onClose={() => setIsReviewModalOpen(false)}>
        <ReviewOrder
          setIsReviewModalOpen={setIsReviewModalOpen}
          Rating={Rating} handleRating={handleRating}
          handleChange={handleChange}
          emptyFields={emptyFields}
          reviewOrder={reviewOrder}
        />
      </PopUp >}
    </div >
  );
};

export default Orders;
