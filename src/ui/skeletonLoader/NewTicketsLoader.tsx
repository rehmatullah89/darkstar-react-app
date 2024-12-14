import { COLORS } from "@/utils";
import React from "react";
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import { useMediaQuery } from "react-responsive";

const NewTicketsLoader = () => {
  const isDesktop = useMediaQuery({ minWidth: 992 });
  const allTickets = [1, 2, 3, 4, 5, 6, 7]

  return (
    <div className="pageStainConcealer">
      <div style={{ display: 'flex', flexDirection: 'column', marginBottom: 20 }}>
        <Skeleton width={200} baseColor="#3c98cc" height={30} style={{ marginBottom: 10 }} />
        <Skeleton width={300} />
      </div>

      <div style={{ margin: '20px 0px' }}>
        <div style={{ color: COLORS.gray }}>
          <Skeleton width={300} /></div>
        <Skeleton width={'100%'} height={40} />
      </div>

      <div style={{ margin: '20px 0px' }}>
        <div style={{ color: COLORS.gray }}>
          <Skeleton width={300} /></div>
        <Skeleton width={'100%'} height={150} />
      </div>

      <div style={{ margin: '20px 0px' }}>
        <div style={{ color: COLORS.gray }}>
          <Skeleton width={300} /></div>
        <Skeleton width={'100%'} height={40} />

        <div style={{ marginTop: 20, marginBottom: 20 }}>
          <Skeleton width={'100%'} />
          <Skeleton width={'90%'} />
          <Skeleton width={'95%'} />
          <Skeleton width={'50%'} />
        </div>

      </div>
      <Skeleton width={'100%'} baseColor={COLORS.primary} height={40} />
    </div>
  )
}

export default NewTicketsLoader
