"use client"
import React, { useEffect, useState } from 'react';
import Heading from '@/ui/common/Heading';
import { COLORS } from '@/utils';
import Button from '@/ui/common/Button';
import Input from '@/ui/common/Input';
import RewardLayout from '@/ui/layout/RewardLayout';
import { useUser } from '@/context/UserContext';

const AffiliateURL = () => {
  const { userRefData } = useUser();
  const [affiliateURL, setAffiliateURL] = useState<any>(null);

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text).then(() => {
    }).catch((err) => {
      console.error('Could not copy text: ', err);
    });
  };

  const setData = () => {
    setAffiliateURL(userRefData);
  }

  useEffect(() => {
    setData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <RewardLayout child={
      <div className="pageStainConcealer">
        <Heading
          heading="Rewards"
          subHeading="Earn commissions &amp; perks"
        />
        <div>
          <div>
            <div
              style={{
                color: COLORS.black,
                marginRight: 5,
                fontSize: 24,
              }}
            >
              Affiliate ID:
            </div>
            <div
              style={{
                color: COLORS.primary,
                marginRight: 5,
                fontSize: 16,
              }}
            >
              {affiliateURL?.affiliate_id}
            </div>
          </div>

          <div style={{ marginTop: 20 }}>
            <div
              style={{
                color: COLORS.black,
                marginRight: 5,
                fontSize: 24,
              }}
            >
              Referral URL:
            </div>
            <div
              style={{
                color: COLORS.primary,
                marginRight: 5,
                fontSize: 16,
              }}
            >
              https://www.smilebrilliant.com{affiliateURL?.affiliate_url}
            </div>
            <Button title={'copy url'} type={'primary'}
              onClick={() => copyToClipboard(`https://www.smilebrilliant.com${affiliateURL?.affiliate_url}`)} />
          </div>

          <div style={{
            marginTop: 36,
            padding: '15px 10px',
            border: '1px solid #dee2e6',
            backgroundColor: '#f8f8f8'
          }}>
            <div
              style={{
                color: COLORS.black,
                marginRight: 5,
                fontSize: 20
              }}
            >
              Referral URL Generator
            </div>
            <div
              style={{
                marginRight: 5,
                fontSize: 14,
                marginBottom: 20
              }}
            >
              Enter any URL from this website in the form below to generate a eferral link!
            </div>
            <Input
              title={'Page URL'}
              name={'url'}
              placeholder="https://www.smilebrilliant.com"
            // value={loginData.username}
            // onInputChange={(field: string | undefined, value: any) =>
            //   onChangeLogin(field, value)
            // }
            // error={emptyFields}
            />
            <div
              style={{
                marginTop: 20
              }}
            >

              <Input
                title={'Campaign Name (optional)'}
                name={'url'}
                placeholder=''
              // value={loginData.username}
              // onInputChange={(field: string | undefined, value: any) =>
              //   onChangeLogin(field, value)
              // }
              // error={emptyFields}
              />
              <Button title={'generate url'}
                textStyle={{ marginTop: 20 }} />
            </div>
          </div>

        </div>
      </div>
    } />
  );
};

export default AffiliateURL;
