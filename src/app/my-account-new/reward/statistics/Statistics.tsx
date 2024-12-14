"use client"
import React from 'react';
import Heading from '@/ui/common/Heading';
import { COLORS } from '@/utils';
import RewardLayout from '@/ui/layout/RewardLayout';
import { useUser } from '@/context/UserContext';

const Statistics = () => {
  const { userRefData } = useUser();
  if (!userRefData) {
    return (
      <RewardLayout child={
        <div className="pageStainConcealer">
          <Heading
            heading="Rewards"
            subHeading="Earn commissions &amp; perks"
          />
          <div>Loading...</div>
        </div>
      } />
    );
  }
  const data = [
    {
      title: 'Unpaid Referrals:',
      value: userRefData.unpaid_referrals
    },
    {
      title: 'Paid Referrals:',
      value: userRefData.paid_referrals
    },
    {
      title: 'Visits:',
      value: userRefData.affiliate_visits
    },
    {
      title: 'Conversion Rate:',
      value: userRefData.affiliate_rate !== "" && userRefData.affiliate_rate

    },
  ]

  const data1 = [
    {
      title: 'Unpaid Earnings:',
      value: '$' + userRefData.unpaid_earnings
    },
    {
      title: 'Paid Earnings:',
      value: '$' + userRefData.paid_earnings

    },
    {
      title: 'Commission Rate:',
      value: 5 + '%'
    },
  ]

  return (
    <RewardLayout child={
      <div className="pageStainConcealer" >
        <Heading
          heading="Rewards"
          subHeading="Earn commissions &amp; perks"
        />
        {data.map((item, idx) => (
          <div key={idx}>
            <div style={{
              // marginTop: 36,
              padding: '10px 10px',
              border: '1px solid #dee2e6',
              backgroundColor: idx === 0 ? '#f8f8f8' : COLORS.white,
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              flexDirection: 'row',
              fontWeight: 'bold',
            }}>
              <div
                style={{
                  color: COLORS.black,
                  marginRight: 5,
                  fontSize: 14
                }}
              >
                {item.title}
              </div>
              <div
                style={{
                  color: COLORS.black,
                  marginRight: 5,
                  fontSize: 14,
                  fontWeight: '400',
                }}
              >
                {item.value}
              </div>
            </div>
          </div>
        ))}

        {data1.map((item, idx) => (
          <div key={idx} style={{
            marginTop: idx === 0 ? 36 : 0,
          }}>
            <div style={{
              padding: '10px 10px',
              border: '1px solid #dee2e6',
              backgroundColor: idx === 0 ? '#f8f8f8' : COLORS.white,
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              flexDirection: 'row',
              fontWeight: 'bold',
            }}>
              <div
                style={{
                  color: COLORS.black,
                  marginRight: 5,
                  fontSize: 14
                }}
              >
                {item.title}
              </div>
              <div
                style={{
                  color: COLORS.black,
                  marginRight: 5,
                  fontSize: 14,
                  fontWeight: '400',
                }}
              >
                {item.value}
              </div>
            </div>
          </div>
        ))}

        <div style={{
          marginTop: 36,
          padding: '10px 10px',
          border: '1px solid #dee2e6',
          backgroundColor: '#f8f8f8',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexDirection: 'row',
          fontWeight: 'bold',
        }}>
          <div
            style={{
              color: COLORS.black,
              marginRight: 5,
              fontSize: 14
            }}
          >
            Campaigns:{' '}
            <span style={{
              color: COLORS.black,
              marginRight: 5,
              fontSize: 14,
              fontWeight: 300,
            }}
            >
              You have no referrals or visits that included a campaign name.
            </span>
          </div>
        </div>
      </div>

    } />

  );
};

export default Statistics;
