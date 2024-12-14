import { COLORS } from "@/utils";
import React from "react";
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

const MyAccountDesktopLoader = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: '50vh' }}>

      <div
        style={{
          color: COLORS.black,
          fontFamily: 'inherit',
          fontWeight: 600,
          fontSize: 24,
          textTransform: 'capitalize',
          textAlign: 'center'
        }}
      >
        <Skeleton width={300} height={30} baseColor={COLORS.grayLight} />
      </div>
      <div
        style={{
          marginTop: 10,
          display: 'flex',
          flexDirection: 'column',
          gap: 5,
          alignItems: 'center'
        }}
      >
        <Skeleton width={400} height={16} />
        <Skeleton width={350} height={16} />
        <Skeleton width={300} height={16} />
      </div>
      <div
        style={{
          marginTop: 10,
          display: 'flex',
          flexDirection: 'column',
          gap: 5,
          alignItems: 'center'
        }}
      >
        <Skeleton width={400} height={16} />
        <Skeleton width={350} height={16} />
        <Skeleton width={300} height={16} />
      </div>
    </div>
  )
}

export default MyAccountDesktopLoader
