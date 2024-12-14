import { COLORS } from "@/utils";
import React from "react";
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import { useMediaQuery } from "react-responsive";

const AllTicketsLoader = () => {
  const isDesktop = useMediaQuery({ minWidth: 992 });
  const allTickets = [1, 2, 3, 4, 5, 6, 7]

  return (
    <div className="pageStainConcealer">
      <div style={{ display: 'flex', flexDirection: 'column', marginBottom: 20 }}>
        <Skeleton width={200} baseColor="#3c98cc" height={30} style={{ marginBottom: 10 }} />
        <Skeleton width={300} />
      </div>
      <div>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <div style={{ marginRight: 10 }}>
            <div style={{ fontWeight: 'bold' }}>
              <Skeleton width={150} baseColor={COLORS.grayLight} /></div>
            <div> <Skeleton width={isDesktop ? 300 : 200} /></div>
          </div>
          <div> <Skeleton width={isDesktop ? 150 : 120} height={40} baseColor={COLORS.primary} /></div>
        </div>

        {allTickets?.map((ticket, index) => {

          return (
            <div key={index} style={{ marginTop: 10, border: '1px solid #dee2e6' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', backgroundColor: '#f8f8f8', borderBottom: '1px solid #dee2e6' }}>
                <div style={{ color: COLORS.primary, padding: 10 }}>
                  <Skeleton width={isDesktop ? 150 : 100} baseColor={COLORS.primary} /></div>
                <div style={{ fontSize: 12, padding: 10 }}>
                  <Skeleton width={isDesktop ? 300 : 100} /></div>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', backgroundColor: '#f8f8f8' }}>
                <div style={{ padding: 10, width: '65%' }}>
                  <Skeleton width={isDesktop ? 300 : 150} />
                  <Skeleton width={isDesktop ? 250 : 100} />
                </div>
                <div style={{ display: 'flex', justifyContent: 'flex-end', fontSize: 12, padding: 10, width: '35%', gap: 10 }}>
                  <Skeleton width={isDesktop ? 100 : 80} />
                  <Skeleton width={40} baseColor={COLORS.primary} />
                </div>
              </div>
              <div style={{ fontSize: 14, padding: 10, }}>
                <Skeleton width={'100%'} />
                <Skeleton width={'90%'} />
                <Skeleton width={'95%'} />
                <Skeleton width={'50%'} />
                <Skeleton width={isDesktop ? 100 : 80} baseColor={COLORS.primary} />
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default AllTicketsLoader
