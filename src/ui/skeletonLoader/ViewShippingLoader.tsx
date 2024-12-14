import { COLORS } from "@/utils";
import React from "react";
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import { useMediaQuery } from "react-responsive";

const ViewShippingLoader = () => {
  const isDesktop = useMediaQuery({ minWidth: 992 });

  return (
    <div className="pageStainConcealer">

      <div style={{ display: 'flex', flexDirection: 'column', marginBottom: 20 }}>
        <Skeleton width={200} baseColor="#3c98cc" height={30} style={{ marginBottom: 10 }} />
        <Skeleton width={300} />
      </div>
      <div style={{
        display: isDesktop ? 'flex' : 'block',
        flexWrap: isDesktop ? 'wrap' : 'nowrap'
      }}>
        <div
          style={{
            border: '2px dashed #dee2e6',
            marginBottom: 10,
            width: isDesktop ? 300 : '100%',
            marginRight: 10,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            position: 'relative'
          }}
        >
          <Skeleton width={80} height={20} />
          <Skeleton width={20} height={80} style={{ position: 'absolute', top: '18%', left: '48%' }} />
          <div
            style={{
              marginTop: 15
            }}
          >
            <Skeleton width={200} height={24} />
          </div>
        </div>
        <div
          style={{
            border: '1px solid #dee2e6',
            marginBottom: 10,
            width: isDesktop ? 300 : '100%',
            marginRight: 10,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between'
          }}>
          <div style={{ alignItems: 'center', display: 'flex', flexDirection: 'row', padding: '12px 15px', }}>
            <Skeleton width={50} baseColor={COLORS.grayLight} height={22} />
            <div
              style={{
                marginLeft: 10
              }}
            >
              <Skeleton baseColor="#3c98cc" height={22} width={80} />
            </div>
          </div>
          <div
            style={{
              alignItems: 'center',
              padding: '12px 15px',
            }}
          >
            <div>
              <div
                style={{
                  color: COLORS.text,
                  fontFamily: 'inherit',
                  fontWeight: 700,
                  fontSize: 14,
                }}
              >
                <Skeleton width={200} height={20} baseColor={COLORS.grayLight} />
              </div>
              <div
                style={{
                  color: COLORS.text,
                  fontFamily: 'inherit',
                  fontWeight: 400,
                  fontSize: 14,
                }}
              >
                <Skeleton width={180} />
              </div>
            </div>
            <div>
              <p
                style={{
                  color: COLORS.text,
                  fontFamily: 'inherit',
                  fontWeight: 400,
                  fontSize: 14,
                  marginTop: 20
                }}
              >
                <Skeleton width={200} />
                <Skeleton width={150} />
              </p>
            </div>
          </div>
          <div style={{
            display: 'flex', flexDirection: 'row', padding: '0px 15px', height: 35, borderTop: '1px solid #dee2e6',
          }}>
            <Skeleton width={60} height={25} />
          </div>
        </div>
        {[1, 2, 3, 4, 5, 6, 7, 8].map((item, idx) => (
          <div key={idx}
            style={{
              border: '1px solid #dee2e6',
              marginBottom: 10,
              width: isDesktop ? 300 : '100%',
              marginRight: 10,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between'
            }}>
            <div
              style={{
                alignItems: 'center',
                padding: '12px 15px',
              }}
            >
              <div>
                <div
                  style={{
                    color: COLORS.text,
                    fontFamily: 'inherit',
                    fontWeight: 700,
                    fontSize: 14,
                  }}
                >
                  <Skeleton width={200} height={20} baseColor={COLORS.grayLight} />
                </div>
                <div
                  style={{
                    color: COLORS.text,
                    fontFamily: 'inherit',
                    fontWeight: 400,
                    fontSize: 14,
                  }}
                >
                  <Skeleton width={180} />
                </div>
              </div>
              <div>
                <p
                  style={{
                    color: COLORS.text,
                    fontFamily: 'inherit',
                    fontWeight: 400,
                    fontSize: 14,
                    marginTop: 20
                  }}
                >
                  <Skeleton width={200} />
                  <Skeleton width={150} />
                </p>
              </div>
            </div>
            <div style={{
              display: 'flex', flexDirection: 'row', padding: '0px 15px', height: 35, borderTop: '1px solid #dee2e6', gap: 10
            }}>
              <Skeleton width={60} height={25} />
              <Skeleton width={60} height={25} />
              <Skeleton width={60} height={25} />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ViewShippingLoader
