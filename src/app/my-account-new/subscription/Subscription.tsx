"use client"
import React, { useEffect, useState } from 'react';
import useApi from '@/hooks/useApi';
import Heading from '@/ui/common/Heading';
import Button from '@/ui/common/Button';
import { COLORS, FUNC } from '@/utils';
import Image from 'next/image';
import { addDays, format } from 'date-fns';
import Loading from '@/ui/common/Loading';
import NoData from '@/ui/common/NoData';
import NoImage from '../../../../public/noImage.png'
import TrackingOrder from '@/ui/order/tracking';
import ReviewOrder from '@/ui/order/review';
import { useToast } from '@/context/ToastProvider';
import PopUp from '@/ui/common/PopUp';
import { Rating } from 'react-simple-star-rating'
import { useUser } from '@/context/UserContext';
import SubscriptionLoader from '@/ui/skeletonLoader/SubscriptionLoader';
import { WP_BASE_URL } from '@/utils/constants';

const Subscription = () => {
  const { makeApiCall, loading } = useApi();
  const { showSuccess, showError } = useToast();
  const { userData } = useUser();

  const [subscription, setSubscription] = useState([]);
  const [isLoading, setIsLoading] = useState<Boolean>(true);
  const [isTrackingModalOpen, setIsTrackingModalOpen] = useState(false);
  const [isReviewModalOpen, setIsReviewModalOpen] = useState(false);
  const [selectedOrder, setSelectedOrder] = useState<any>({});
  const [trackingData, setTrackingData] = useState({});
  const [rating, setRating] = useState(0);
  const [selectedProduct, setSelectedProduct] = useState<any>({});
  const [selectedCancelReason, setSelectedCancelReason] = useState<any>({ selectedCancelOption: 'The Product is damaged or defective', selectedCancelReason: '', selectedReview: '' });
  const [emptyFields, setEmptyFields] = useState<string[]>([]);

  const getSubscriptionData = async () => {
    try {
      setIsLoading(true);
      const response = await makeApiCall('order/customer-subscriptions/', 'GET');
      if (response.statusCode === 200 && response.success) {
        const updatedSubscription = response.data.map(order => {
          const imageUrls =
            order.image_url && order.image_url.length > 0
              ? order.image_url
              : [''];

          const updatedLineItems = order.line_items.map((item, index) => ({
            ...item,
            _order_number_formatted: order.meta_data._order_number_formatted,
            image_url: imageUrls[index]
              ? `${WP_BASE_URL}${imageUrls[index]}`
              : '',
          }));
          return {
            ...order,
            line_items: updatedLineItems,

          };
        });
        setSubscription(updatedSubscription);
      }
    } catch (error) {
      // Handle error if needed
      console.error('Error while fetching order data:', error);
      // Toast.show({
      //   type: 'error',
      //   text1: 'Something went wrong, while getting User data',
      // });
    } finally {
      setIsLoading(false);
    }
  };

  const cancelSubscription = async (item) => {
    try {
      const data = {
        subscription_id: item.subscription_details[0].id,
        item_id: item.id
      };
      const response = await makeApiCall(`order/cancel-order-item-subscription/`, 'POST', data);
      if (response.statusCode === 200 && response.success) {
        const updatedSubscription: any = subscription.map((order: any) => {
          const updatedLineItems = order.line_items.map(lineItem => {
            if (lineItem.id === item.id) {
              return {
                ...lineItem,
                status_title: 'Cancelled'
              };
            }
            return lineItem;
          });
          return {
            ...order,
            line_items: updatedLineItems
          };
        });
        setSubscription(updatedSubscription);

      } else {
        console.error('Failed to cancel subscription:', response.message);
      }
    } catch (error) {
      console.error('Error while cancelling subscription:', error);
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

  const handleRating = (rate) => {
    setRating(rate);
    // other logic can go here
  };

  const handleChange = (field: string | undefined, value: any) => {
    if (typeof field === 'string')
      setSelectedCancelReason(prevSocial => ({
        ...prevSocial,
        [field]: value,
      }));
  };

  const reviewOrderModal = async (order, item) => {
    setSelectedOrder(order)
    setSelectedProduct(item)
    setSelectedCancelReason({ ...selectedCancelReason, selectedCancelReason: '', selectedReview: '' })
    setIsReviewModalOpen(true)
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
      }
    } catch (error) {
      console.error('Error canceling order:', error);
    }
  };

  useEffect(() => {
    getSubscriptionData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (isLoading) {
    return (
      <SubscriptionLoader />
    );
  }
  return (
    <div className="pageStainConcealer">
      <Heading
        heading="subscription"
        subHeading="Track, return or buy items again."
        border={true}
        lineHeight={false}
      />
      {subscription.length > 0 ? subscription.map((order: any, index) => {
        return (<div key={index} style={{
          marginBottom: 20, backgroundColor: '#f8f8f8', borderBottom: '1px solid #dee2e6',
          border: '1px solid #dee2e6',
        }}>
          {order.line_items.map((data: any, item: number) => {
            const NextDatesTable = getNextDatesTable(data.subscription_details[0].next_order_date, data.subscription_details[0].interval_days)
            return (
              <>
                <div
                  key={index}
                  style={{
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                    padding: '12px 15px',
                    justifyContent: 'space-between',

                  }}
                >
                  <div style={{ justifyContent: 'center', alignItems: 'center', width: '100%', display: 'flex', flexDirection: 'column' }}>
                    <p
                      style={{
                        color: COLORS.text,
                        fontFamily: 'inherit',
                        fontWeight: 500,
                        fontSize: 16,
                      }}
                    >
                      {data.subscription_details[0]?.interval_days + " " + 'Days Package'}
                    </p>
                    <Image
                      src={data.image_url || NoImage}
                      alt={data.name}
                      width={80}
                      height={80}
                    />
                    <div style={{ paddingRight: 10, paddingLeft: 10 }}>
                      <span
                        style={{
                          color: COLORS.black,
                          fontFamily: 'inherit',
                          fontWeight: 300,
                          fontSize: 14,
                        }}
                      >
                        {data.name} x  {data.quantity}
                      </span>
                    </div>
                    {data.status_title !== 'Cancelled' && <Button title={'cancel subscription'} type={'primary'} onClick={() => cancelSubscription(data)} />
                    }
                    <div style={{ paddingRight: 10, paddingLeft: 10 }}>
                      <span
                        style={{
                          color: COLORS.primary,
                          fontFamily: 'inherit',
                          fontWeight: 300,
                          fontSize: 14,
                        }}
                      >
                        Subscription Status:
                      </span>
                      <span
                        style={{
                          color: COLORS.text,
                          fontFamily: 'inherit',
                          fontWeight: 300,
                          fontSize: 14,
                        }}
                      >
                        {' '} {data.status_title}
                      </span>
                    </div>
                  </div>
                </div>
                <OrderTable data={data} getOrderTrackingData={getOrderTrackingData} getInvoiceData={getInvoiceData} reviewOrderModal={reviewOrderModal} />
                {data.status_title !== 'Cancelled' && <div style={{ width: '90%' }}>{NextDatesTable}</div>}
              </>

            )
          })}
        </div>)
      }) :
        <NoData title={'No subscription available'} />
      }
      {isTrackingModalOpen && <PopUp isOpen={isTrackingModalOpen} onClose={() => setIsTrackingModalOpen(false)}>
        <TrackingOrder trackingData={trackingData} orders={selectedOrder} closeModal={() => setIsTrackingModalOpen(false)} />
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
    </div>
  );
};

const OrderTable = ({ data, getOrderTrackingData, getInvoiceData, reviewOrderModal }) => {
  return (
    <div className="table-container">
      <table className="order-table">
        <thead>
          <tr>
            <th>Order No.</th>
            <th>Payment#</th>
            <th>Attempt#</th>
            <th>Date</th>
            <th>Response</th>
            <th>Status</th>
            <th>Total</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {data.status_title !== 'Cancelled' && data.subscription_details
            .map((order, index) => (
              <tr key={index}>
                <td>{order.order_number}</td>
                <td>{index + 1}</td>
                <td>{order.transaction_id === '0' ? 0 : 1}</td>
                <td>{FUNC.formatDate(order.created_at)}</td>
                <td>{order.transaction_id === '0' ? 'This transaction is not approved' : 'This transaction has been approved.'}</td>
                <td>     <div style={{ paddingRight: 10, paddingLeft: 10 }}>
                  <span
                    style={{
                      color: COLORS.text,
                      fontFamily: 'inherit',
                      fontWeight: 300,
                      fontSize: 14,
                    }}
                  >
                    Status:
                  </span>
                  <span
                    style={{
                      color: COLORS.primary,
                      fontFamily: 'inherit',
                      fontWeight: 300,
                      fontSize: 14,
                    }}
                  >
                    {' '} {data.status_title}
                  </span>
                </div></td>
                <td>${order.total_price}</td>
                <td style={{ display: 'flex', flexDirection: 'column' }}>
                  <Button
                    onClick={() => getInvoiceData(order.order_id)}
                    title={'Invoice'} type={'primary'} textStyle={{
                      fontSize: 12
                    }}
                  />
                  <Button onClick={() => getOrderTrackingData(order.order_id, order.item_id,)}
                    title={'track'} type={'primary'} textStyle={{
                      fontSize: 12, marginTop: 10
                    }}
                  />
                  <Button
                    onClick={() => reviewOrderModal(data, order)}
                    title={'add a review'} type={'primary'} textStyle={{
                      fontSize: 12, marginTop: 10
                    }}
                  /></td >
              </tr>
            ))}
        </tbody>
      </table>

      <style jsx>{`
        .table-container {
          overflow-x: auto;
          background: white
        }

        .order-table {
          width: 100%;
          border-collapse: collapse;
        }

        .order-table th,
        .order-table td {
          padding: 8px;
          text-align: left;
          border-bottom: 1px solid #ddd;
        }

        @media (max-width: 768px) {
          .order-table th,
          .order-table td {
            font-size: 14px;
          }
        }
      `}</style>
    </div>
  );
};

const getNextDatesTable = (nextOrderDate, intervalDays) => {
  const dates: any = [];
  let currentDate = new Date(nextOrderDate);

  for (let i = 0; i < 4; i++) {
    let backgroundColor = i % 2 === 0 ? 'white' : 'transparent'; // Alternate between white and red
    if (i === 0 || i === 2) {
      backgroundColor = 'white'; // Set white background for indexes 0 and 2
    }

    dates.push(
      <tr key={i} style={{ backgroundColor }}>
        <td style={{
          alignItems: 'center',
          padding: '12px 15px',
          justifyContent: 'space-between',
          border: '1px solid #dee2e6',
        }}>{format(currentDate, 'dd MMMM, yyyy')}</td>
      </tr>
    );
    currentDate = addDays(currentDate, parseInt(intervalDays));
  }

  return (
    <>
      <div style={{ justifyContent: 'center', alignItems: 'center', width: '100%', display: 'flex', flexDirection: 'column' }}>
        <p
          style={{
            color: COLORS.text,
            fontFamily: 'inherit',
            fontWeight: 500,
            fontSize: 16,
            marginTop: 20
          }}
        >
          Subscription Delivery Schedule
        </p>
      </div>
      <table style={{ width: '100%', margin: 15, }}>
        <thead>
          <tr>
            <th style={{
              backgroundColor: '#f8f8f8',
              alignItems: 'center',
              padding: '12px 15px',
              justifyContent: 'space-between',
              border: '1px solid #dee2e6',
            }}>Dates</th>
          </tr>
        </thead>
        <tbody>
          {dates}
        </tbody>
      </table>
    </>
  );
}

export default Subscription;
