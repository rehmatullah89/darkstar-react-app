import { COLORS } from "@/utils";
import React from "react";
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import { useMediaQuery } from "react-responsive";

const SettingsLoader = () => {
  const isDesktop = useMediaQuery({ minWidth: 992 });
  return (
    <div className="pageStainConcealer">
      <div style={{ display: 'flex', flexDirection: 'column', marginBottom: 20 }}>
        <Skeleton width={200} baseColor="#3c98cc" height={30} style={{ marginBottom: 10 }} />
        <Skeleton width={300} />
      </div>

      <div style={{
        marginTop: 36,
        padding: 20,
        border: '1px solid #dee2e6',
        backgroundColor: '#f8f8f8'
      }}>
        <div >
          <Skeleton width={'100%'} />
          <Skeleton width={'80%'} />
        </div>
        <div style={{ marginBottom: 20, display: 'flex', gap: 10 }}>
          <div style={{ display: 'flex', alignItems: 'center', marginTop: 20, gap: 5 }}>
            <Skeleton width={15} />
            <div>
              <Skeleton width={50} />
            </div>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', marginTop: 20, gap: 5 }}>
            <Skeleton width={15} />
            <div>
              <Skeleton width={50} />
            </div>
          </div>
        </div>
        <>
          <Skeleton width={isDesktop ? 280 : 180} />
          <div>
            <Skeleton width={'100%'} height={40} />
          </div>
          <div style={{ display: 'flex', alignItems: 'center', marginTop: 20, gap: 5 }}>
            <Skeleton width={15} />
            <div>
              <Skeleton width={isDesktop ? 300 : 200} />
            </div>
          </div>
          <Skeleton width={'100%'} baseColor={COLORS.primary} height={40} style={{ marginTop: 20 }} />
        </>

      </div>
    </div >
  )
}

export default SettingsLoader
