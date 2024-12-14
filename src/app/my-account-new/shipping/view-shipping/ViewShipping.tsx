"use client"
import React, { useEffect, useState } from 'react';
import useApi from '@/hooks/useApi';
import Heading from '@/ui/common/Heading';
import Button from '@/ui/common/Button';
import { COLORS } from '@/utils';
import logo from '../../../../../public/smilebrilliant-logo-small.png'
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { FaPlus } from "react-icons/fa";
import NoData from '@/ui/common/NoData';
import { useMediaQuery } from 'react-responsive';
import ViewShippingLoader from '@/ui/skeletonLoader/ViewShippingLoader';

const ViewShipping = () => {
  const { makeApiCall, loading } = useApi();
  const router = useRouter();
  const isDesktop = useMediaQuery({ minWidth: 992 });

  const [viewShipping, setViewShipping] = useState<any>([]);
  const [isLoading, setIsLoading] = useState<Boolean>(true);

  const viewShippingData = async () => {
    try {
      setIsLoading(true);
      const response = await makeApiCall('auth/user-shipping-addresses', 'GET');
      if (response.statusCode === 200 && response.success) {
        setViewShipping(response.data);
        setIsLoading(false);
      }
    } catch (error) {
      console.log('error', error)
    } finally {
      setIsLoading(false);
    }
  };

  const deleteAddress = async (addressID) => {
    try {
      const data = {
        address_id: Number(addressID)
      };
      const response = await makeApiCall(`auth/remove-shipping-address`, 'POST', data);
      if (response.statusCode === 200 && response.success) {
        setViewShipping(prevState => prevState.filter(address => address.id !== addressID));
      }
    } catch (error) {
      // Handle error
    }
  };

  const setDefaultAddress = async ({ user_id, address_id }) => {
    try {
      const data = {
        user_id: Number(user_id),
        address_id: Number(address_id)
      };
      const response = await makeApiCall(`auth/default-shipping-address`, 'POST', data);
      if (response.statusCode === 200 && response.success) {
        // Update the viewShipping state to reflect the changes
        setViewShipping(prevState =>
          prevState.map(address =>
            address.id === address_id ? { ...address, is_default: '1' } : { ...address, is_default: '0' }
          )
        );
      } else {
        // Handle other status codes or unsuccessful responses
      }
    } catch (error) {
      // Handle error
    }
  };
  const defaultAddresses = viewShipping.filter(address => address.is_default === '1');
  const nonDefaultAddresses = viewShipping.filter(address => address.is_default !== '1');

  useEffect(() => {
    viewShippingData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div
      className="pageStainConcealer">
      <Heading
        heading="View Shipping"
        subHeading="Manage your shipping addresses."
        lineHeight={false}
        border={true}

      />
      {isLoading ? <ViewShippingLoader /> : defaultAddresses.length > 0 ? (
        <div style={{
          display: isDesktop ? 'flex' : 'block',
          flexWrap: isDesktop ? 'wrap' : 'nowrap'

        }}>
          <div
            style={{
              border: '2px dashed #dee2e6',
              marginBottom: 10,
              width: isDesktop ? 300 : '100%',
              marginRight: 10,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center'
            }}
            onClick={() => router.push('/my-account-new/shipping/add-shipping')}
          >
            <FaPlus size={48} color={'#b5b5b5'} />
            <div
              style={{
                color: '#65646a',
                fontFamily: "Montserrat",
                fontWeight: 600,
                fontSize: 24,
              }}
            >
              Add Address
            </div>
          </div>

          {defaultAddresses.map((address, index) => (
            <div key={index}
              style={{
                border: '1px solid #dee2e6',
                marginBottom: 10,
                width: isDesktop ? 300 : '100%',
                marginRight: 10,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between'
              }}>
              <div style={{ alignItems: 'center', display: 'flex', flexDirection: 'row', padding: '12px 15px', }}>
                <div
                  style={{
                    color: COLORS.text,
                    fontFamily: 'inherit',
                    fontWeight: 700,
                    fontSize: 14,
                  }}
                >
                  Default:
                </div>
                <div
                  style={{
                    marginLeft: 10
                  }}
                >
                  <Image src={logo} height={22} width={80} alt='smilebrilliant-logo-small' />
                </div>
              </div>
              <div
                style={{
                  alignItems: 'center',
                  padding: '12px 15px',
                }}
              >
                <div>
                  <div
                    style={{
                      color: COLORS.text,
                      fontFamily: 'inherit',
                      fontWeight: 700,
                      fontSize: 14,
                    }}
                  >
                    {address?.shipping_first_name + ' ' + address?.shipping_last_name}
                  </div>
                  <div
                    style={{
                      color: COLORS.text,
                      fontFamily: 'inherit',
                      fontWeight: 400,
                      fontSize: 14,
                    }}
                  >
                    {address?.shipping_address_1}
                  </div>
                </div>
                <div>
                  <p
                    style={{
                      color: COLORS.text,
                      fontFamily: 'inherit',
                      fontWeight: 400,
                      fontSize: 14,
                      marginTop: 20
                    }}
                  >
                    {address?.shipping_country + ' ' + address?.shipping_state + ' ' + address?.shipping_postcode}
                  </p>
                </div>
              </div>
              <div style={{
                display: 'flex', flexDirection: 'row', padding: '0px 15px', height: 35, borderTop: '1px solid #dee2e6',
              }}>
                <Link
                  href={{
                    pathname: `/my-account-new/shipping/edit-shipping/${address.id}`,
                    query: address // the data
                  }}>
                  <Button title={'Edit'} type={'secondary'} textStyle={{ fontSize: 14, paddingLeft: 0, color: COLORS.primary }} />
                </Link>
              </div>
            </div>
          ))}

          {nonDefaultAddresses.map((address, index) => (
            <div key={index}
              style={{
                border: '1px solid #dee2e6',
                marginBottom: 10,
                width: isDesktop ? 300 : '100%',
                marginRight: 10,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between'
              }}>
              <div
                style={{
                  alignItems: 'center',
                  padding: '12px 15px',
                }}
              >
                <div>
                  <div
                    style={{
                      color: COLORS.text,
                      fontFamily: 'inherit',
                      fontWeight: 700,
                      fontSize: 14,
                    }}
                  >
                    {address?.shipping_first_name + ' ' + address?.shipping_last_name}
                  </div>
                  <div
                    style={{
                      color: COLORS.text,
                      fontFamily: 'inherit',
                      fontWeight: 400,
                      fontSize: 14,
                    }}
                  >
                    {address?.shipping_address_1}
                  </div>
                </div>
                <div>
                  <p
                    style={{
                      color: COLORS.text,
                      fontFamily: 'inherit',
                      fontWeight: 400,
                      fontSize: 14,
                      marginTop: 20
                    }}
                  >
                    {address?.shipping_country + ' ' + address?.shipping_state + ' ' + address?.shipping_postcode}
                  </p>
                </div>
              </div>
              <div style={{
                display: 'flex', flexDirection: 'row', padding: '0px 15px', height: 35, borderTop: '1px solid #dee2e6',
              }}>
                <Link
                  href={{
                    pathname: `/my-account-new/shipping/edit-shipping/${address.id}`,
                    query: address // the data
                  }}>
                  <Button title={'Edit'} type={'secondary'} textStyle={{ fontSize: 14, paddingLeft: 0, color: COLORS.primary }} />

                </Link>
                {address?.is_default === '0' &&
                  <>
                    <Button title={'Remove'} type={'secondary'} onClick={() => deleteAddress(address.id)} textStyle={{ fontSize: 14, paddingRight: 5, color: COLORS.primary }} />
                    <Button title={'Set as Default'} type={'secondary'} onClick={() => setDefaultAddress({ user_id: address.user_id, address_id: address.id })}
                      textStyle={{ fontSize: 14, paddingRight: 5, color: COLORS.primary }} />

                  </>
                }
              </div>
            </div>
          ))}
        </div>
      ) : (
        <NoData title={'No shipping available'} />
      )
      }
    </div>
  );
};


export default ViewShipping;
