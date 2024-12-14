import { COLORS } from "@/utils";
import { accScreensData } from "@/utils/myAccountRouting";
import React from "react";
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

const MyAccountMobileLoader = () => {
  return (
    <div className="pageStainConcealer" style={{ marginTop: 100, marginRight: 30, marginLeft: 30, marginBottom: 70, minHeight: 600 }} >
      {accScreensData.map((section, index) => (
        <div key={index}>
          <div style={{ display: 'flex', flexDirection: 'column', marginBottom: 10, marginTop: 20 }}>
            <Skeleton width={200} baseColor="#3c98cc" height={30} style={{ marginBottom: 10 }} />
            <Skeleton width={300} />
          </div>
          {section.options.map((option, optionIndex) => (
            <div key={optionIndex} title={option.title} style={{
              color: '#565759',
              fontSize: 14,
              lineHeight: 1,
              textTransform: 'uppercase',
              fontWeight: 500,
              letterSpacing: '0.05em',
              textDecoration: "none",
              display: 'flex',
              alignItems: 'center',
              padding: '13px 20px 13px 20px',
              justifyContent: 'space-between',
            }}>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: 10
              }}>
                <Skeleton width={20} height={20} />
                <Skeleton width={200}
                />
              </div>
              <Skeleton width={15} baseColor={COLORS.grayLight} />

            </div>
          ))}
        </div>
      ))}

      <div
        style={{
          color: COLORS.black,
          fontFamily: 'inherit',
          fontSize: 16,
          fontWeight: 400,
          textTransform: 'capitalize',
          textAlign: 'center',
          display: 'flex',
          justifyContent: 'center',
          marginTop: 20,
        }}
      >
        <Skeleton width={60} />
        <div
          style={{
            fontWeight: 700,
            marginLeft: 5
          }}
        >
          <Skeleton width={150} baseColor={COLORS.grayLight} />
        </div>
        <div
          style={{
            color: COLORS.primary,
            marginLeft: 5
          }}
        >
          <Skeleton width={80} baseColor={COLORS.primary} />
        </div>
      </div>
    </div>
  )
}

export default MyAccountMobileLoader
