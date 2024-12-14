'use client';
import React, { useEffect, useState } from 'react';
import useApi from '@/hooks/useApi';
import Heading from '@/ui/common/Heading';
import Button from '@/ui/common/Button';
import { COLORS } from '@/utils';
import { FaCcVisa } from "react-icons/fa6";
import { FaCcMastercard } from "react-icons/fa6";
import { useMediaQuery } from 'react-responsive';
import NoData from '@/ui/common/NoData';
import { useToast } from '@/context/ToastProvider';
import Loading from '@/ui/common/Loading';

const ViewBilling = () => {
  const { makeApiCall, loading } = useApi();
  const isDesktop = useMediaQuery({ minWidth: 992 });
  const { showSuccess, showError } = useToast();

  const [viewBilling, setViewBilling] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isLoad, setIsLoad] = useState(true);

  const patterns = [
    'linear-gradient(135deg, #FFA07A, #FF6347)',
    'linear-gradient(90deg, #87CEEB, #00BFFF)',
    'linear-gradient(135deg, #FFD700, #FFA500)',
    'linear-gradient(90deg, #32CD32, #228B22)',
    'linear-gradient(135deg, #B0E0E6, #00CED1)',
    'linear-gradient(90deg, #FFC0CB, #FF69B4)',
    'linear-gradient(90deg, #FFB6C1, #DB7093)',
    'linear-gradient(135deg, #F0E68C, #DAA520)',
    'linear-gradient(90deg, #7B68EE, #6A5ACD)',
    'linear-gradient(135deg, #E6E6FA, #9370DB)',
    'linear-gradient(90deg, #FFA07A, #CD5C5C)',
    'linear-gradient(135deg, #F5F5DC, #F0E68C)',
    'linear-gradient(90deg, #F8F8FF, #0000FF)',
    'linear-gradient(135deg, #F0F8FF, #4169E1)',
    'linear-gradient(90deg, #FFF0F5, #FF69B4)',
    'linear-gradient(135deg, #FFDEAD, #FFDAB9)',
    'linear-gradient(135deg, #FAEBD7, #8B4513)',
    'linear-gradient(90deg, #E0FFFF, #00FFFF)',
    'linear-gradient(135deg, #FFE4E1, #FF1493)',
  ]; // Define patterns for cards

  const getOrderData = async () => {
    try {
      setIsLoading(true);
      const response = await makeApiCall('auth/user-billing-methods', 'GET');
      if (response.statusCode === 200 && response.success) {
        setViewBilling(response.data.cc);
        setIsLoading(false);
      }
    } catch (error) {
      showError('Something went wrong, while getting User data', error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getOrderData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  useEffect(() => {
    setIsLoad(false);
  }, [isDesktop]);
  if (isLoad) {
    return (
      <Loading />
    );
  }
  const moveDefaultCardToTop = (array) => {
    const defaultCardIndex = array.findIndex((card) => card.is_default);
    if (defaultCardIndex !== -1) {
      const defaultCard = array[defaultCardIndex];
      array.splice(defaultCardIndex, 1);
      array.unshift(defaultCard);
    }
    return array;
  };

  const handleDelete = async (index, url) => {
    try {
      const id = url.split('/')[2];
      const data = {
        card_id: id
      }
      setIsLoading(true);
      const response = await makeApiCall(`auth/delete-billing-method`, 'POST', data);
      if (response.statusCode === 200 && response.success) {
        const updatedBilling = [...viewBilling];
        updatedBilling.splice(index, 1);
        setViewBilling(updatedBilling);
        setIsLoading(false);
        showSuccess('successfully deleted');
      } else {
        showError(response.message);

      }
    } catch (error) {
      showError('Something went wrong, while deleting', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleMakeDefault = async (index, url) => {
    try {
      const id = url.split('/')[2];
      const data = {
        card_id: id
      }
      setIsLoading(true);
      const response = await makeApiCall(`auth/default-billing-method
      `, 'POST', data);
      if (response.statusCode === 200 && response.success) {
        const updatedBilling: any = viewBilling.map((item: any, i) => ({
          ...item,
          is_default: i === index,
        }));
        setViewBilling(updatedBilling);
        setIsLoading(false);
        showSuccess('Successfully set default');
      }
    } catch (error) {
      showError('Something went wrong, while setting default', error);

    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="pageStainConcealer">
      <Heading
        heading="View Billing"
        subHeading="Manage your viewBilling addresses."
        border={true}
        lineHeight={false}
      />
      <div style={{
        marginTop: 50, borderTopWidth: 1,
        padding: '10px 0px',
        display: isDesktop ? 'flex' : 'block',
        flexWrap: isDesktop ? 'wrap' : 'nowrap'
      }}>
        {viewBilling?.length > 0 ? (
          moveDefaultCardToTop(viewBilling).map((card, index) => (
            <div
              key={index}
              style={{
                zIndex: 9,
                marginTop: -30,
                padding: 15,
                borderRadius: 20,
                paddingBottom: index === viewBilling?.length - 1 ? 10 : 40,
                borderBottomWidth: 0,
                backgroundImage: patterns[index % patterns?.length],
                width: isDesktop ? 350 : undefined,
                marginRight: 10,

              }}
            >
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'flex-start',
                }}
              >
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                  }}
                >
                  {card.method.brand === 'Visa' ? <FaCcVisa size={30} style={{ marginRight: 10 }} /> :
                    <FaCcMastercard size={30} style={{ marginRight: 10 }} />}

                  <div style={{ color: COLORS.white, }}>{card.method.brand}</div>
                </div>
                <div style={{ display: 'flex' }}>
                  {card.is_default && <div
                    style={{
                      color: COLORS.black,
                      backgroundColor: COLORS.success,
                      borderRadius: 20,
                      paddingLeft: 10,
                      paddingRight: 10,
                      content: "",
                      height: 23,
                      marginRight: 5
                    }}
                  >
                    default
                  </div>}
                  <div style={{ display: 'flex', flexDirection: 'column' }}>                <div
                    style={{
                      color: COLORS.white,
                      backgroundColor: COLORS.black,
                      borderRadius: 20,
                      paddingLeft: 15,
                      paddingRight: 15,
                    }}
                  >
                    <span style={{ marginRight: 5 }}>....</span>
                    {card.method.last4}
                  </div>
                    <div
                      style={{
                        color: COLORS.white,
                        fontSize: 12,
                        marginTop: 5
                      }}
                    >
                      <span style={{ marginRight: 2 }}>Expiring on:</span>
                      {card.expires}
                    </div>
                  </div>
                </div>
              </div>
              <div style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'flex-end', marginTop: index === viewBilling?.length - 1 ? 100 : 50 }}>
                {/* <Button title={'Edit'}
              type={'secondary'}
              textStyle={{
                color: COLORS.white,
                marginRight: 10,
                backgroundColor: 'transparent',
                paddingRight: 5,
                paddingLeft: 5,
                fontSize: 14,
                padding: 0, borderWidth: 0

              }} /> */}

                <Button title={'Delete'}
                  type={'secondary'}
                  onClick={() => handleDelete(index, card.actions.delete.url)}
                  textStyle={{
                    color: COLORS.white,
                    marginRight: 10,
                    backgroundColor: 'transparent',
                    paddingRight: 5,
                    paddingLeft: 5,
                    fontSize: 14,
                    padding: 0, borderWidth: 0

                  }} />
                {!card.is_default &&
                  <Button title={'make default'}
                    onClick={() => handleMakeDefault(index, card.actions.default.url)}
                    type={'secondary'}
                    textStyle={{
                      color: COLORS.white,
                      marginRight: 10,
                      backgroundColor: 'transparent',
                      fontSize: 14,
                      padding: 0, borderWidth: 0

                    }} />
                }
              </div>
            </div>
          ))
        ) : (
          <NoData title={'No card available'} />
        )}
      </div>
    </div>
  );
};

export default ViewBilling;
