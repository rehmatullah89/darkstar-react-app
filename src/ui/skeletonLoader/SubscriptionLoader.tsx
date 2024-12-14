import { COLORS } from "@/utils";
import React from "react";
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import { useMediaQuery } from "react-responsive";

const SubscriptionLoader = () => {
  const isDesktop = useMediaQuery({ minWidth: 992 });
  const subscription = [1]
  const item = [1]
  const date = [1, 2, 3, 4]
  // for (let i = 0; i < 4; i++) {
  //   let backgroundColor = i % 2 === 0 ? 'white' : 'transparent'; // Alternate between white and red
  //   if (i === 0 || i === 2) {
  //     backgroundColor = 'white'; // Set white background for indexes 0 and 2
  //   }
  // }
  return (
    <div className="pageStainConcealer">
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <Skeleton width={200} baseColor={COLORS.primary} height={30} style={{ marginBottom: 10 }} />
        <Skeleton width={300} style={{ marginBottom: 20 }} />

      </div>
      {subscription.map((order: any, index) => {
        return (<div key={index} style={{
          marginBottom: 20, backgroundColor: '#f8f8f8', borderBottom: '1px solid #dee2e6',
          border: '1px solid #dee2e6',
        }}>
          {item.map((data: any, item: number) => {

            return (
              <>
                <div
                  key={index}
                  style={{
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                    padding: '12px 15px',
                    justifyContent: 'space-between',

                  }}
                >
                  <div style={{ justifyContent: 'center', alignItems: 'center', width: '100%', display: 'flex', flexDirection: 'column' }}>
                    <p
                      style={{
                        color: COLORS.text,
                        fontFamily: 'inherit',
                        fontWeight: 500,
                        fontSize: 16,
                      }}
                    >
                      <Skeleton width={300} baseColor={COLORS.grayLight} height={16} />
                    </p>
                    <Skeleton width={80}
                      height={80} />
                    <div style={{ paddingRight: 10, paddingLeft: 10 }}>
                      <span
                        style={{
                          color: COLORS.black,
                          fontFamily: 'inherit',
                          fontWeight: 300,
                          fontSize: 14,
                        }}
                      >
                        <Skeleton width={350} />
                      </span>
                    </div>
                    <div
                      style={{
                        border: '1px solid #3c98cc',
                      }}
                    >
                      <Skeleton width={150} height={30} baseColor={COLORS.white} />
                    </div>
                    <div style={{ display: 'flex', paddingRight: 10, paddingLeft: 10, gap: 10 }}>

                      <Skeleton width={100} baseColor="#3c98cc" />

                      <Skeleton width={80} />
                    </div>
                  </div>
                </div>
                <Skeleton width={'100%'} height={350} />
                <>
                  <div style={{ justifyContent: 'center', alignItems: 'center', width: '100%', display: 'flex', flexDirection: 'column', marginTop: 20 }}>
                    <p>
                      <Skeleton width={350} />
                    </p>
                  </div>
                  <table style={{ width: '90%', margin: 15, }}>
                    <thead>
                      <tr>
                        <th style={{
                          backgroundColor: '#f8f8f8',
                          alignItems: 'center',
                          padding: '12px 15px',
                          justifyContent: 'space-between',
                          border: '1px solid #dee2e6',
                        }}> <Skeleton width={100} /></th>
                      </tr>
                    </thead>
                    <tbody>
                      {date.map((item, index) => {
                        let backgroundColor = index % 2 === 0 ? 'white' : 'transparent'; // Alternate between white and transparent
                        return (

                          <tr key={item} style={{ backgroundColor }}>
                            <td style={{
                              alignItems: 'center',
                              padding: '12px 15px',
                              justifyContent: 'space-between',
                              border: '1px solid #dee2e6',
                            }}> <Skeleton width={(50 + index + index) * 5} /></td>
                          </tr>
                        )
                      })}
                    </tbody>
                  </table>
                </>
              </>
            )
          })}
        </div>)
      })}
    </div>
  )
}

export default SubscriptionLoader
