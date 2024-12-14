import { COLORS } from "@/utils";
import React from "react";
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import { useMediaQuery } from "react-responsive";

const ReferralsLoader = () => {
  const isDesktop = useMediaQuery({ minWidth: 992 });
  const referrals = [1, 2, 3, 4, 5, 6, 7]

  return (
    <div className="pageStainConcealer">
      <div style={{ display: 'flex', flexDirection: 'column', marginBottom: 20 }}>
        <Skeleton width={200} baseColor="#3c98cc" height={30} style={{ marginBottom: 10 }} />
        <Skeleton width={300} />
      </div>
      {referrals.map((item, idx) => (
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
            <div>
              <Skeleton width={isDesktop ? 300 : 120} baseColor={idx % 2 !== 0 ? COLORS.gray : COLORS.grayLight} />
            </div>
            <div >
              <Skeleton width={isDesktop ? 300 : 120} baseColor={idx % 2 !== 0 ? COLORS.grayLight : ''} />
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
            <div >
              <Skeleton width={isDesktop ? 280 : 100} baseColor={idx % 2 !== 0 ? COLORS.gray : COLORS.grayLight} />
            </div>
            <div>
              <Skeleton width={isDesktop ? 280 : 100} baseColor={idx % 2 !== 0 ? COLORS.grayLight : ''} />
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
            <div  >
              <Skeleton width={isDesktop ? 280 : 120} baseColor={idx % 2 !== 0 ? COLORS.gray : COLORS.grayLight} />
            </div>
            <div
              style={{
                width: '60%',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-end',
                justifyContent: 'flex-end'
              }}
            >
              <Skeleton width={isDesktop ? 280 : 200} baseColor={idx % 2 !== 0 ? COLORS.grayLight : ''} />
              <Skeleton width={isDesktop ? 250 : 180} baseColor={idx % 2 !== 0 ? COLORS.grayLight : ''} />
              <Skeleton width={isDesktop ? 220 : 150} baseColor={idx % 2 !== 0 ? COLORS.grayLight : ''} />
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
            <div >
              <Skeleton width={isDesktop ? 280 : 100} baseColor={idx % 2 !== 0 ? COLORS.gray : COLORS.grayLight} />
            </div>
            <div >
              <Skeleton width={isDesktop ? 280 : 100} baseColor={idx % 2 !== 0 ? COLORS.grayLight : ''} />
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
            <div   >
              <Skeleton width={isDesktop ? 150 : 100} baseColor={idx % 2 !== 0 ? COLORS.gray : COLORS.grayLight} />
            </div>
            <div   >
              <Skeleton width={isDesktop ? 150 : 100} baseColor={idx % 2 !== 0 ? COLORS.grayLight : ''} />
            </div>
            <div >
              <Skeleton width={isDesktop ? 150 : 100} baseColor={idx % 2 !== 0 ? COLORS.grayLight : ''} />
            </div>
          </div>
        </div>
      ))
      }
    </div>
  )
}

export default ReferralsLoader
