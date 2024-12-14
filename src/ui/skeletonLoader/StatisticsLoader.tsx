import { COLORS } from "@/utils";
import React from "react";
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import { useMediaQuery } from "react-responsive";

const StatisticsLoader = () => {
  const isDesktop = useMediaQuery({ minWidth: 992 });

  const data = [1, 2, 3, 4]
  return (
    <div className="pageStainConcealer">
      <div style={{ display: 'flex', flexDirection: 'column', marginBottom: 40 }}>
        <Skeleton width={200} baseColor="#3c98cc" height={30} style={{ marginBottom: 10 }} />
        <Skeleton width={300} />
      </div>
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
            <div  >
              <Skeleton width={isDesktop ? 300 : 100} baseColor={COLORS.grayLight} />
            </div>
            <div  >
              <Skeleton width={isDesktop ? 100 : 40} />
            </div>
          </div>
        </div>
      ))}
      {data.map((item, idx) => (
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
            <div  >
              <Skeleton width={isDesktop ? 300 : 100} baseColor={COLORS.grayLight} />
            </div>
            <div  >
              <Skeleton width={isDesktop ? 100 : 40} />
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
            display: 'flex',
            gap: 10
          }}
        >
          <Skeleton width={100} baseColor={COLORS.grayLight} />
          <Skeleton width={isDesktop ? 500 : 200} />
        </div>
      </div>

    </div>
  )
}

export default StatisticsLoader
