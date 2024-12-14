"use client"
import React, { useEffect, useState } from 'react';
import useApi from '@/hooks/useApi';
import Heading from '@/ui/common/Heading';
import Button from '@/ui/common/Button';
import { COLORS, FUNC } from '@/utils';
import Image from 'next/image';
import PopUp from '@/ui/common/PopUp';
import Loading from '@/ui/common/Loading';
import { useCartContext } from '@/context/CartContext';
import NoImage from '../../../../../../public/noImage.png'
import CancelOrder from '@/ui/order/cancel';
import { useUser } from '@/context/UserContext';
import { useRouter } from 'next/navigation';
import NoData from '@/ui/common/NoData';
import { useMediaQuery } from 'react-responsive';

const ViewOrders = ({ params }: { params: { slug: string } }) => {
  const { slug } = params
  const router = useRouter();
  const { handleAddToCart, state } = useCartContext();
  const { makeApiCall, loading } = useApi();
  const { userData } = useUser();
  const isDesktop = useMediaQuery({ minWidth: 992 });

  const [viewOrders, setViewOrders] = useState<any>({});
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
      const response = await makeApiCall(`order/${slug}`, 'GET');
      if (response.statusCode === 200 && response.success) {

        setViewOrders(response.data);
        setIsLoading(false);
      }
    } catch (error) {
      // Toast.show({
      //   type: 'error',
      //   text1: 'Something went wrong, while getting User data',
      // });
    } finally {
      setIsLoading(false);
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
        const updatedViewOrders: any = viewOrders.map((order: any) => {
          if (order.id === selectedOrder.id) {
            const updatedLineItems = order.line_items.filter(item => item.id !== selectedOrder.id);
            return {
              ...order,
              line_items: updatedLineItems,
            };
          }
          return order;
        });
        setViewOrders(updatedViewOrders);
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

  const toggleReorderTray = (orderId, item) => {
    setExpandedItemId(prevId => prevId === orderId ? null : orderId);
  };

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  useEffect(() => {
    getOrderData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div className="pageStainConcealer">
      <Heading
        heading="Order Details"
        subHeading="Track, return or buy items again."
        border={true}
        lineHeight={false}
      />
      {isLoading ? (
        <Loading />
      ) : viewOrders?.length > 0 ? viewOrders.map((order, index) => {
        return (
          <div key={index}>
            <div>
              <div style={{ fontSize: 26 }}>
                {order?.meta_data?.order_number}
              </div>
              <div style={{ fontSize: 16 }}>
                placed on <span style={{ color: COLORS.primary }}>{FUNC.formatDate(order.date_created.date)}</span> and is currently <span style={{ color: COLORS.primary }}>{FUNC.capitalizeFirstChar(order.status)}.</span>
              </div>
            </div>
            <div style={{ backgroundColor: '#dfe3e7', marginTop: 10, fontSize: 18, padding: 5, paddingLeft: 10 }}>PRODUCT</div>
            {order.line_items.map((item: any, indexKey: number) => (
              <div style={{ borderBottom: '1px solid #d7d7d7' }} key={indexKey}>

                <div style={{ display: 'flex', marginTop: 10, marginBottom: 10 }}>
                  <Image
                    src={item.image_url || NoImage}
                    alt={item.name}
                    width={80}
                    height={80}
                    style={{ border: '1px solid #dfe3e7' }}

                  />
                  <div style={{ paddingRight: 10, paddingLeft: 10, display: isDesktop ? 'flex' : 'block', justifyContent: isDesktop ? 'space-between' : 'center', flexDirection: 'row', width: '100%' }}>
                    <div>
                      <div style={{ display: 'flex', alignItems: 'center' }}>
                        <div style={{
                          marginBottom: 5, marginRight: 2, color: COLORS.black,
                          fontFamily: 'inherit',
                          fontWeight: 500,
                          fontSize: 14,
                        }}>
                          {item.name}
                          <span style={{ marginLeft: 2, marginBottom: 5, fontSize: 12 }}> x  <span style={{ color: COLORS.primary, fontSize: 16 }}>1</span></span>
                        </div>
                      </div>
                      <div style={{ fontWeight: 'bold', marginBottom: 5 }}>   ${item.total}</div>

                      <div style={{ width: '80%', gap: 5, marginTop: 10, display: 'flex', flexDirection: 'column', }}>
                        {item.status_title === 'shipped' &&
                          <>
                            {(item.tray_price2mm !== null && item.tray_price3mm !== null) &&
                              <>

                                <Button title={'re-order trays'} onClick={() => toggleReorderTray(item.id, item)} bgColor={expandedItemId === item.id ? 'gray' : '#f8a18a'} />
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
                                      <Button
                                        title={'buy again'}
                                        textStyle={{ width: '100%' }} />
                                    </div>
                                  </div>
                                </div>}

                              </>}
                            <Button
                              title={'re-order system'}
                              type={'primary'}
                              onClick={() => handleAddToCart({ ...item, id: item.product_id })}
                              textStyle={{ borderColor: COLORS.black, color: COLORS.black, borderWidth: 1 }}
                            />
                          </>}
                      </div>
                    </div>
                    <div>
                      {isDesktop && <div>     <div style={{ flexDirection: 'row' }}>
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
                        <div
                          style={{
                            flexDirection: 'row',
                            gap: 5,
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
                        </div></div>}
                    </div>
                  </div>
                </div>
              </div>
            ))}

            <div style={{ borderBottom: '1px solid #d7d7d7', paddingTop: 10, paddingBottom: 5, display: 'flex', justifyContent: 'space-between' }}>
              <div style={{ fontWeight: 'bold', marginBottom: 5 }}>SUBTOTAL:</div>
              <div style={{ fontWeight: 'bold', marginBottom: 5 }}> ${order.total}</div>
            </div>
            <div style={{ borderBottom: '1px solid #d7d7d7', paddingTop: 10, paddingBottom: 5, display: 'flex', justifyContent: 'space-between', width: '100%', alignItems: 'center' }}>
              <div style={{ fontWeight: 'bold', marginBottom: 5, width: '30%', }}>SHIPPING:</div>
              <div style={{ marginBottom: 5, width: '60%', justifyContent: 'flex-end', display: 'flex', textAlign: 'center' }}>{order.shipping_method}</div>
            </div>
            <div style={{ borderBottom: '1px solid #d7d7d7', paddingTop: 10, paddingBottom: 5, display: 'flex', justifyContent: 'space-between' }}>
              <div style={{ fontWeight: 'bold', marginBottom: 5 }}>PAYMENT METHOD:</div>
              <div style={{ marginBottom: 5 }}>{order.payment_method_title}</div>
            </div>
            <div style={{ borderBottom: '1px solid #d7d7d7', paddingTop: 10, paddingBottom: 5, display: 'flex', justifyContent: 'space-between' }}>
              <div style={{ fontWeight: 'bold', marginBottom: 5 }}>TOTAL:</div>
              <div style={{ fontWeight: 'bold', marginBottom: 5, color: COLORS.primary }}>${order.total}</div>
            </div>
            <div style={{ borderBottom: '1px solid #d7d7d7', paddingTop: 10, paddingBottom: 5, display: 'flex', justifyContent: 'space-between' }}>
              <div style={{ marginBottom: 5 }}>Current Status: <span style={{ color: COLORS.primary }}>{FUNC.capitalizeFirstChar(order.status)}</span></div>
            </div>

            <div style={{ borderBottom: '1px solid #d7d7d7', paddingTop: 10, paddingBottom: 5, display: 'flex', }}>
              <Button
                title={'Replace/Return'}
                type={'primary'}
                onClick={() => cancelOrderModal(order)}
                textStyle={{ borderWidth: 1, marginRight: 10, marginBottom: 10, width: '48%', fontSize: 12 }} />
              <Button
                title={'support'}
                type={'primary'}
                onClick={() => router.push('/my-account-new/support/all-tickets')
                }
                textStyle={{ marginBottom: 10, width: '30%', fontSize: 12 }} />
            </div>
            <div style={{ paddingTop: 10, paddingBottom: 5, }}>
              <div style={{ fontWeight: '400', marginBottom: 5, fontSize: 22 }}>BILLING ADDRESS</div>
              <div style={{}}>{order.billing.first_name + " " + order.billing.last_name}</div>
              <div style={{}}>{order.billing.address_1}</div>
              <div style={{}}>{order.billing.city + ', ' + order.billing.state + ' ' + order.billing.postcode}</div>
              <div style={{}}>{order.billing.phone}</div>
              <div style={{ color: COLORS.primary }}>{order.billing.email}</div>
            </div>
            <div style={{ paddingTop: 10, paddingBottom: 5, }}>
              <div style={{ fontWeight: '400', marginBottom: 5, fontSize: 22 }}>SHIPPING ADDRESS</div>
              <div style={{}}>{order.shipping.first_name + " " + order.shipping.last_name}</div>
              <div style={{}}>{order.shipping.address_1}</div>
              <div style={{}}>{order.shipping.city + ', ' + order.shipping.state + ' ' + order.shipping.postcode}</div>
            </div>

          </div>
        )
      }) :
        <NoData title={'No order available'} />

      }

      {isCancelModalOpen && <PopUp isOpen={isCancelModalOpen} onClose={() => setIsCancelModalOpen(false)}>
        <CancelOrder
          selectedOrder={selectedOrder}
          setIsCancelModalOpen={setIsCancelModalOpen}
          selectedCancelReason={selectedCancelReason}
          handleChange={handleChange}
          cancelOptions={cancelOptions}
          emptyFields={emptyFields}
          cancelOrder={cancelOrder}
          selectTitle={'Reason for return'}
          commentTitle={'Comment'}
          replace={true}
        />
      </PopUp >}

    </div>
  );
};

export default ViewOrders;
