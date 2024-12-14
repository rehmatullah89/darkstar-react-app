import { COLORS } from "@/utils";
import React from "react";
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import { useMediaQuery } from "react-responsive";

const OrdersLoader = () => {
  const isDesktop = useMediaQuery({ minWidth: 992 });

  return (
    <div className="pageStainConcealer">
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <Skeleton width={200} baseColor="#3c98cc" height={30} style={{ marginBottom: 10 }} />
        <Skeleton width={300} style={{ marginBottom: 20 }} />
        {[1, 2, 3,].map((item, idx) => (
          <div
            key={idx}
            style={{
              border: '1px solid #dee2e6',
              marginBottom: 10,
            }}
          >
            <div
              style={{
                flexDirection: 'row',
                backgroundColor: '#f8f8f8',
                alignItems: 'center',
                padding: '12px 15px',
                justifyContent: 'space-between',
                borderBottom: '1px solid #dee2e6',
                display: 'flex'
              }}
            >
              <div>
                <Skeleton width={80} baseColor="#3c98cc" height={20} />
              </div>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 5,
                  justifyContent: 'center',

                }}
              >
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    gap: 5,

                  }}
                >
                  <Skeleton width={50} height={25} baseColor={COLORS.grayLight} />
                  <Skeleton width={90} height={25} baseColor="#3c98cc" />
                </div>
                <div
                  style={{
                    border: '1px solid #3c98cc',
                  }}
                >
                  <Skeleton width={90} height={25} baseColor={COLORS.white} />
                </div>
              </div>
            </div>

            {[1, 2].map((item: any, indexKey: number) => (
              <div
                key={indexKey}
                style={{
                  padding: '16px',
                  margin: '0 16px',
                  backgroundColor: COLORS.white,
                  borderBottom: '1px solid #dee2e6',
                }}
              >
                <div style={{ flexDirection: 'row', display: 'flex' }}>
                  <Skeleton width={80}
                    height={80}
                    style={{ border: '1px solid #dfe3e7' }} />

                  <div style={{ paddingRight: 10, paddingLeft: 10 }}>
                    <Skeleton width={isDesktop ? 400 : 200} baseColor={COLORS.grayLight} />
                    <div style={{ flexDirection: 'row', gap: 5, display: 'flex' }}>
                      <Skeleton width={isDesktop ? 250 : 100} baseColor={COLORS.grayLight} />
                      <Skeleton width={10} baseColor={COLORS.grayLight} />
                      <Skeleton width={40} baseColor={COLORS.primary} />
                    </div>
                    <div style={{ flexDirection: 'row', gap: 5, display: 'flex' }}>
                      <Skeleton width={30} baseColor={COLORS.grayLight} />
                      <Skeleton width={50} baseColor={COLORS.primary} />
                    </div>
                  </div>
                </div>

                <div style={{ width: '80%', gap: 5, marginTop: 10, display: 'flex', flexDirection: 'column', }}>
                  <div
                    style={{
                      gap: 5,
                      marginTop: 10,
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                      display: 'flex',
                      width: 200
                    }}
                  >
                    <Skeleton width={150} baseColor={COLORS.primary} height={40} />
                    <Skeleton width={150} baseColor={COLORS.primary} height={40} />
                  </div>
                  <div
                    style={{
                      gap: 5,
                      marginTop: 10,
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                      display: 'flex',
                      width: 200
                    }}
                  >
                    <div
                      style={{
                        border: '1px solid #3c98cc',
                      }}
                    >
                      <Skeleton width={100} height={40} baseColor={COLORS.white} />
                    </div>
                    <div
                      style={{
                        border: '1px solid #3c98cc',
                        padding: 0
                      }}
                    >
                      <Skeleton width={150} height={40} baseColor={COLORS.white} />
                    </div>
                  </div>
                </div>
                <div
                  style={{
                    flexDirection: 'row',
                    gap: 5,
                    marginTop: 10,
                    alignItems: 'center',
                    display: 'flex'
                  }}
                >
                  <Skeleton width={40} baseColor={COLORS.grayLight} />

                  <Skeleton width={150} baseColor={COLORS.primary} />
                </div>
                <div
                  style={{
                    flexDirection: 'row',
                    gap: 5,
                    marginTop: 10,
                    alignItems: 'center',
                    display: 'flex',
                  }}
                >
                  <Skeleton width={40} baseColor={COLORS.grayLight} />

                  {[1, 2, 3, 4, 5, 6, 7].map((fill, idx) => {
                    return (
                      <Skeleton key={idx} width={10} height={6} baseColor={COLORS.primary} style={{
                        height: 6,
                        backgroundColor:
                          fill <= item.progress
                            ? COLORS.primary
                            : '#dee2e6',
                        width: 10,
                      }} />

                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>


    </div>
  )
}

export default OrdersLoader
