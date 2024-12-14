import { COLORS } from "@/utils";
import React from "react";
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

const AffLoader = () => {
  return (
    <div className="pageStainConcealer">

      <div style={{ display: 'flex', flexDirection: 'column', marginBottom: 20 }}>
        <Skeleton width={200} baseColor="#3c98cc" height={30} style={{ marginBottom: 10 }} />
        <Skeleton width={300} />
      </div>
      <div>
        <div>
          <div>
            <Skeleton width={150} baseColor={COLORS.grayLight} height={24} />
          </div>
          <div>
            <Skeleton width={80} baseColor="#3c98cc" height={16} />
          </div>
        </div>

        <div style={{ marginTop: 20 }}>
          <div>
            <Skeleton width={150} baseColor={COLORS.grayLight} height={24} />
          </div>
          <div>
            <Skeleton width={250} baseColor="#3c98cc" height={16} />
          </div>
          <div
            style={{
              border: '1px solid #3c98cc',
              width: 100
            }}
          >
            <Skeleton width={90} height={25} baseColor={COLORS.white} />
          </div>
        </div>

        <div style={{
          marginTop: 36,
          padding: '15px 10px',
          border: '1px solid #dee2e6',
          backgroundColor: '#f8f8f8'
        }}>
          <div>
            <Skeleton width={200} baseColor={COLORS.grayLight} height={24} />
          </div>
          <div
            style={{
              marginRight: 5,
              fontSize: 14,
              marginBottom: 20
            }}
          >
            <Skeleton width={'100%'} baseColor={COLORS.grayLight} height={14} />
            <Skeleton width={'80%'} baseColor={COLORS.grayLight} height={14} />
          </div>

          <div
            style={{
              marginTop: 20
            }}
          >

            <Skeleton width={100} baseColor={COLORS.grayLight} height={20} />
            <Skeleton width={'100%'} baseColor={COLORS.grayLight} height={40} />

          </div>

          <div
            style={{
              marginTop: 20,
              marginBottom: 20
            }}
          >

            <Skeleton width={180} baseColor={COLORS.grayLight} height={20} />
            <Skeleton width={'100%'} baseColor={COLORS.grayLight} height={40} />

          </div>
          <Skeleton width={'100%'} baseColor={COLORS.primary} height={40} />

        </div>

      </div>
    </div>
  )
}

export default AffLoader
