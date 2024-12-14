"use client"
import React, { useState } from 'react';
import useApi from '@/hooks/useApi';
import Heading from '@/ui/common/Heading';
import RewardLayout from '@/ui/layout/RewardLayout';
import Input from '@/ui/common/Input';
import Button from '@/ui/common/Button';
import { FUNC } from '@/utils';

const Settings = () => {
  const { makeApiCall, loading } = useApi();

  const [emptyFields, setEmptyFields] = useState<string[]>([]);
  const [settingData, setSettingData] = useState({
    email: '',
    isChecked: false,
    showContent: true
  });
  const handleSubmit = async () => {
    const { email, isChecked, showContent } = settingData
    const newEmptyFields: string[] = [];
    setEmptyFields(newEmptyFields)
    if (!email.trim()) newEmptyFields.push('Your Payment Email');
    if (email.trim() && !FUNC.isValidEmail(email)) newEmptyFields.push('Your Payment Email');

    if (newEmptyFields.length > 0) {
      alert(`Please complete the following fields: ${newEmptyFields.join(', ')}`);
      setEmptyFields(newEmptyFields);
      return;
    }
    try {
      const data = {
        payment_email: settingData.email,
        rdh_recommended_url: isChecked ? 'show' : 'hide'
      }
      const response = await makeApiCall('auth/affiliate-settings', 'POST', data);
      if (response.statusCode === 200 && response.success) {
        setSettingData({
          email: '',
          isChecked: false,
          showContent: true
        })
      }
    } catch (error) {
      // Toast.show({
      //   type: 'error',
      //   text1: 'Something went wrong, while getting User data',
      // });
    }
  };

  const handleChange = (field: string | undefined, value: any) => {
    if (typeof field === 'string')
      setSettingData(prevSocial => ({
        ...prevSocial,
        [field]: value,
      }));
  };


  return (
    <RewardLayout child={
      <div className="pageStainConcealer">
        <Heading
          heading="Rewards"
          subHeading="Earn commissions &amp; perks"
        />
        <div style={{
          marginTop: 36,
          padding: 20,
          border: '1px solid #dee2e6',
          backgroundColor: '#f8f8f8'
        }}>
          <div
            style={{
              marginRight: 5,
              fontSize: 14,
              marginBottom: 20
            }}
          >
            Display your recommended products on your public profile page
          </div>
          <div style={{ marginBottom: 20 }}>
            <label>
              <input
                type="radio"
                value="show"
                checked={settingData.showContent}
                onChange={() => setSettingData({
                  ...settingData,
                  showContent: true
                })}
                style={{ marginRight: 10 }}
              />
              Show
            </label>
            <label style={{ marginLeft: 10 }}>
              <input
                type="radio"
                value="hide"
                checked={!settingData.showContent}
                onChange={() => setSettingData({
                  ...settingData,
                  showContent: false
                })}
                style={{ marginRight: 10 }}

              />
              Hide
            </label>
          </div>

          <>
            <Input
              title={'Your Payment Email'}
              name={'email'}
              placeholder=""
              value={settingData.email}
              onInputChange={handleChange}
              error={emptyFields}
            />
            <div
              style={{
                fontSize: 20,
                marginTop: 20
              }}
            >
              Notification Settings
            </div>
            <div style={{ display: 'flex', alignItems: 'center', marginTop: 20 }}>
              <input
                type="checkbox"
                checked={settingData.isChecked}
                onChange={() => setSettingData({
                  ...settingData,
                  isChecked: !settingData.isChecked
                })}
              />
              <div
                style={{
                  fontSize: 14,
                  marginLeft: 10
                }}
              >
                Enable New Referral Notifications
              </div>
            </div>
            <Button title={'save profile settings'} textStyle={{ marginTop: 20, width: '100%', }} onClick={() => handleSubmit()} loading={loading}
            />
          </>

        </div>
      </div>
    } />
  );
};

export default Settings;
