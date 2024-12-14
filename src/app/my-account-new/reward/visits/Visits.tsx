"use client"
import React, { useEffect, useState } from 'react';
import Heading from '@/ui/common/Heading';
import RewardLayout from '@/ui/layout/RewardLayout';
import { COLORS, FUNC } from '@/utils';
import { useUser } from '@/context/UserContext';
import NoData from '@/ui/common/NoData';

const Visits = () => {
  const { userRefData } = useUser();

  const [visits, setVisits] = useState<any[]>([]);

  const setData = () => {
    const updatedReferrals = userRefData.visits_report.map(ref => {
      return {
        url: 'URL:',
        urlValue: FUNC.replaceBaseUrl(ref.url),
        ref: 'Referring URL:',
        refValue: ref.referrer === '' ? 'Direct traffic' : ref.referrer,
        convert: 'Converted:',
        convertValue: ref.referral_id === '0' ? false : true,
        date: FUNC.formatDate(ref.date),
        time: FUNC.formatTime(ref.date),
      };
    });
    setVisits(updatedReferrals);
  }

  useEffect(() => {
    setData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <RewardLayout child={
      <div className="pageStainConcealer" >
        <Heading
          heading="Visits"
          subHeading="Track, return or buy items again."
        />
        {visits.length > 0 ? visits.map((item, idx) => (
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
                  fontSize: 14,

                }}
              >
                {item.url}
              </div>
              <div
                style={{
                  color: COLORS.primary,
                  marginRight: 5,
                  fontSize: 14,
                  fontWeight: '400',
                }}
              >
                {item.urlValue}
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
                {item.ref}
              </div>
              <div
                style={{
                  color: COLORS.black,
                  marginRight: 5,
                  fontSize: 14,
                  fontWeight: '400',
                }}
              >
                {item.refValue}
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
                {item.convert}
              </div>
              <div
                style={{
                  color: COLORS.black,
                  marginRight: 5,
                  fontSize: 14,
                  fontWeight: '400',
                }}
              >
                <div style={{
                  border: '1px solid #dee2e6',
                  height: 10,
                  width: 10,
                  borderColor: item.convertValue ? COLORS.primary : 'red'

                }} />
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
                {item.date}{' '}{item.time}
              </div>
            </div>
          </div>
        )) : <NoData title={'No Visits Available'} />}
      </div>

    } />
  );
};

export default Visits;
