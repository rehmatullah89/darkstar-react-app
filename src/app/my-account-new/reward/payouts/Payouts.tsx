"use client"
import React, { useEffect, useState } from 'react';
import Heading from '@/ui/common/Heading';
import RewardLayout from '@/ui/layout/RewardLayout';
import { COLORS, FUNC } from '@/utils';
import { useUser } from '@/context/UserContext';
import NoData from '@/ui/common/NoData';

const Payouts = () => {
  const { userRefData } = useUser();

  const [payouts, setPayouts] = useState<any[]>([]);

  const setData = () => {
    const updatedReferrals = userRefData.payouts_report.map(ref => {
      return {
        date: FUNC.formatDate(ref.date),
        time: FUNC.formatTime(ref.date),
        amount: 'Amount:',
        amountValue: ref.amount,
        payout: 'Payout Method:',
        payoutValue: ref.payout_method,
        status: 'Status',
        statusValue: ref.status,
      };
    });
    setPayouts(updatedReferrals);
  }

  useEffect(() => {
    setData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <RewardLayout child={
      <div className="pageStainConcealer">
        <Heading
          heading="Payouts"
          subHeading="Track, return or buy items again."
        />
        {payouts.length > 0 ? payouts.map((item, idx) => (
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
                {item.date}{' '}{item.time}
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
                {item.payout}
              </div>
              <div
                style={{
                  color: COLORS.black,
                  marginRight: 5,
                  fontSize: 14,
                  fontWeight: '400',
                }}
              >
                {item.payoutValue}
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
          </div>
        )) : <NoData title={'No Payouts Available'} />}
      </div>} />
  );
};

export default Payouts;
