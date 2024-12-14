"use client"
import React, { useEffect, useState } from 'react';
import Heading from '@/ui/common/Heading';
import { COLORS, FUNC } from '@/utils';
import RewardLayout from '@/ui/layout/RewardLayout';
import { useUser } from '@/context/UserContext';
import NoData from '@/ui/common/NoData';

const Referrals = () => {
  const { userRefData } = useUser();

  const [referrals, setReferrals] = useState<any>([]);

  const setData = () => {
    const updatedReferrals = userRefData.reference_report.map(ref => {
      return {
        reference: 'Reference:',
        referenceValue: `SBR-${ref.referral_id}`,
        amount: 'Amount:',
        amountValue: ref.amount,
        description: 'Description',
        descriptionValue: ref.description,
        status: 'Status',
        statusValue: ref.status,
        date: FUNC.formatDate(ref.date),
        time: FUNC.formatTime(ref.date)
      };
    });
    setReferrals(updatedReferrals);

  }

  useEffect(() => {
    setData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <RewardLayout child={
      <div className="pageStainConcealer" >
        <Heading
          heading="rewards"
          subHeading="Track, return or buy items again."
        />
        {referrals.length > 0 ? referrals.map((item, idx) => (
          <div key={idx}>
            <div style={{
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
                {item.reference}
              </div>
              <div
                style={{
                  color: COLORS.black,
                  marginRight: 5,
                  fontSize: 14,
                  fontWeight: '400',
                }}
              >
                {item.referenceValue}
              </div>
            </div>

            <div style={{
              padding: '10px 10px',
              border: '1px solid #dee2e6',
              backgroundColor: idx % 2 !== 0 ? '#F1F1F1' : COLORS.white,
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
                {item.amount}
              </div>
              <div
                style={{
                  color: COLORS.black,
                  marginRight: 5,
                  fontSize: 14,
                  fontWeight: '400',
                }}
              >
                ${item.amountValue}
              </div>
            </div>

            <div style={{
              padding: '10px 10px',
              border: '1px solid #dee2e6',
              backgroundColor: idx % 2 !== 0 ? '#F1F1F1' : COLORS.white,
              display: 'flex',
              justifyContent: 'space-between',
              flexDirection: 'row',
              fontWeight: 'bold',
            }}>
              <div
                style={{
                  color: COLORS.black,
                  marginRight: 5,
                  fontSize: 14,
                }}
              >
                {item.description}
              </div>
              <div
                style={{
                  width: '60%',
                  color: COLORS.black,
                  marginRight: 5,
                  fontSize: 14,
                  fontWeight: '400',
                }}
              >
                {item.descriptionValue}
              </div>
            </div>

            <div style={{
              padding: '10px 10px',
              border: '1px solid #dee2e6',
              backgroundColor: idx % 2 !== 0 ? '#F1F1F1' : COLORS.white,
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
                {item.status}
              </div>
              <div
                style={{
                  color: COLORS.black,
                  marginRight: 5,
                  fontSize: 14,
                  fontWeight: '400',
                }}
              >
                {item.statusValue}
              </div>
            </div>

            <div style={{
              padding: '10px 10px',
              border: '1px solid #dee2e6',
              backgroundColor: idx % 2 !== 0 ? '#F1F1F1' : COLORS.white,
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
                Date:
              </div>
              <div
                style={{
                  color: COLORS.black,
                  marginRight: 5,
                  fontSize: 14,
                  fontWeight: '400',
                }}
              >
                {item.date}
              </div>
              <div
                style={{
                  color: COLORS.black,
                  marginRight: 5,
                  fontSize: 14,
                  fontWeight: '400',
                }}
              >
                {item.time}
              </div>
            </div>
          </div>
        )) : <NoData title={'No Referrals Available'} />
        }
      </div>
    } />
  );
};

export default Referrals;
