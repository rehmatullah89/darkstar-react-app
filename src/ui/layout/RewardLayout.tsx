import useApi from '@/hooks/useApi';
import { usePathname, useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react'
import Loading from '../common/Loading';
import Heading from '../common/Heading';
import Input from '../common/Input';
import Button from '../common/Button';
import { useUser } from '@/context/UserContext';
import { COLORS } from '@/utils';
import AffLoader from '../skeletonLoader/AffLoader';
import StatisticsLoader from '../skeletonLoader/StatisticsLoader';
import ReferralsLoader from '../skeletonLoader/ReferralsLoader';
import PayoutsLoader from '../skeletonLoader/PayoutsLoader';
import VisitsLoader from '../skeletonLoader/VisitsLoader';
import SettingsLoader from '../skeletonLoader/SettingsLoader';

const RewardLayout = ({ child }) => {
  const { makeApiCall, loading } = useApi();
  const router = useRouter();
  const pathname = usePathname();
  const { userData, setUserRef } = useUser();
  const [referrals, setReferrals] = useState<boolean>(true);
  const [activeReferral, setActiveReferral] = useState<boolean>(true);
  const [isLoading, setIsLoading] = useState<Boolean>(true);
  const [emptyFields, setEmptyFields] = useState<string[]>([]);
  const [referralsData, setReferralData] = useState<any>({
    yourName: userData?.first_name + " " + userData?.last_name,
    userName: '',
    accountEmail: userData?.email,
    paymentEmail: userData?.billing[0]?.email,
    webURL: '',
    how: ''
  });

  const getOrderData = async () => {
    try {
      setIsLoading(true);
      const response = await makeApiCall('auth/affiliate-user', 'GET');
      if (response.statusCode === 200 && response.success) {
        if (response.data.message === 'User is In-active, please contact admin.') {
          setReferrals(true)
          setIsLoading(false);
          setActiveReferral(false)
        }
        else {
          setActiveReferral(true)
          setReferrals(true)
          setIsLoading(false);
          setUserRef(response.data)
        }
      } else {
        setReferrals(false)
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

  const handleSubmit = async () => {
    const { yourName, userName, accountEmail, paymentEmail, webURL, how } = referralsData;
    const newEmptyFields: string[] = [];

    if (!yourName.trim()) newEmptyFields.push('Your Name');
    if (!userName.trim()) newEmptyFields.push('Username');
    if (!accountEmail.trim()) newEmptyFields.push('Account email');
    if (!paymentEmail.trim()) newEmptyFields.push('Payment Email');
    if (!webURL.trim()) newEmptyFields.push('Website URL');
    if (!how.trim()) newEmptyFields.push('How will you promote us?');
    if (newEmptyFields.length > 0) {
      alert(`Please complete the following fields: ${newEmptyFields.join(', ')}`);
      setEmptyFields(newEmptyFields);
      return;
    }

    try {
      const data = {
        affwp_user_id: userData.id,
        affwp_user_name: userName,
        affwp_user_login: yourName,
        affwp_user_email: accountEmail,
        affwp_user_pass: accountEmail,
        affwp_payment_email: paymentEmail,
        affwp_user_url: webURL,
        affwp_promotion_method: how
      };
      const response = await makeApiCall(`auth/register-reward-user`, 'POST', data);
      if (response.statusCode === 200 && response.success) {
        setReferralData({
          yourName: '',
          userName: '',
          accountEmail: '',
          paymentEmail: '',
          webURL: '',
          how: ''
        });
      } else {
        throw new Error('Failed to update customer data');
      }
    } catch (error) {
      console.error('Error during update:', error);
      alert(`Something went wrong while updating user: ${error.toString()}`);
    }
  };


  const handleChange = (field: string | undefined, value: any) => {
    if (typeof field === 'string') {
      setReferralData(prevSocial => ({
        ...prevSocial,
        [field]: value,
      }));
    } else {
      console.error('Field must be a string');
    }
  };


  useEffect(() => {
    getOrderData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const renderLoader = () => {
    switch (pathname) {
      case '/my-account-new/reward/affiliate-url':
        return <AffLoader />;
      case '/my-account-new/reward/statistics':
        return <StatisticsLoader />;
      case '/my-account-new/reward/referrals':
        return <ReferralsLoader />;
      case '/my-account-new/reward/payouts':
        return <PayoutsLoader />;
      case '/my-account-new/reward/visits':
        return <VisitsLoader />;
      case '/my-account-new/reward/settings':
        return <SettingsLoader />;
      default:
        return <Loading />;
    }
  };

  if (isLoading) {
    return renderLoader()
  }
  return (
    <>
      {referrals ? activeReferral ? <div>{child} </div> :

        <div style={{ display: 'flex', height: 600, color: COLORS.black, justifyContent: 'center', alignItems: 'center' }}>Your affiliate account is pending approval</div>
        :
        <div>
          <Heading
            heading="register"
            subHeading="Join our lucrative rewards program."
          />
          <Input
            value={referralsData.yourName}
            title={'Your Name'}
            onInputChange={handleChange}
            name="yourName"
            error={emptyFields}
            customStyles={{
              marginBottom: 20,
            }}
          />
          <Input
            value={referralsData.userName}
            title={'Username'}
            onInputChange={handleChange}
            name="userName"
            error={emptyFields}
            customStyles={{
              marginBottom: 20,
            }}
          />
          <Input
            value={referralsData.accountEmail}
            title={'Account email'}
            onInputChange={handleChange}
            name="accountEmail"
            error={emptyFields}
            customStyles={{
              marginBottom: 20,
            }}
          />
          <Input
            value={referralsData.paymentEmail}
            title={'Payment Email'}
            onInputChange={handleChange}
            name="paymentEmail"
            error={emptyFields}
            customStyles={{
              marginBottom: 20,
            }}
          />
          <Input
            value={referralsData.webURL}
            title={'Website URL'}
            onInputChange={handleChange}
            name="webURL"
            error={emptyFields}
            customStyles={{
              marginBottom: 20,
            }}
          />
          <Input
            value={referralsData.how}
            title={'How will you promote us?'}
            onInputChange={handleChange}
            name="how"
            error={emptyFields}
            customStyles={{
              marginBottom: 20,
            }}
          />
          <Button
            title={'submit'}
            textStyle={{ width: '100%', }}
            onClick={() => handleSubmit()}
          />
        </div>
      }
    </>
  )
}

export default RewardLayout
