import { COLORS } from "@/utils";
import React from "react";
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import { useMediaQuery } from "react-responsive";

const ViewBillingLoader = () => {
  const isDesktop = useMediaQuery({ minWidth: 992 });
  const item = [1, 2, 3, 4, 5, 6, 7];
  const patterns = [
    'linear-gradient(135deg, #FFA07A, #FF6347)',
    'linear-gradient(90deg, #87CEEB, #00BFFF)',
    'linear-gradient(135deg, #FFD700, #FFA500)',
    'linear-gradient(90deg, #32CD32, #228B22)',
    'linear-gradient(135deg, #B0E0E6, #00CED1)',
    'linear-gradient(90deg, #FFC0CB, #FF69B4)',
    'linear-gradient(90deg, #FFB6C1, #DB7093)',
    'linear-gradient(135deg, #F0E68C, #DAA520)',
    'linear-gradient(90deg, #7B68EE, #6A5ACD)',
    'linear-gradient(135deg, #E6E6FA, #9370DB)',
    'linear-gradient(90deg, #FFA07A, #CD5C5C)',
    'linear-gradient(135deg, #FFA07A, #FF6347)',
    'linear-gradient(90deg, #87CEEB, #00BFFF)',
    'linear-gradient(135deg, #FFD700, #FFA500)',
    'linear-gradient(90deg, #32CD32, #228B22)',
    'linear-gradient(135deg, #B0E0E6, #00CED1)',
    'linear-gradient(90deg, #FFC0CB, #FF69B4)',
    'linear-gradient(90deg, #FFB6C1, #DB7093)',
    'linear-gradient(135deg, #F0E68C, #DAA520)',
    'linear-gradient(90deg, #7B68EE, #6A5ACD)',
    'linear-gradient(135deg, #E6E6FA, #9370DB)',
    'linear-gradient(90deg, #FFA07A, #CD5C5C)',
  ];
  return (
    <div className="pageStainConcealer">

      <div style={{ display: 'flex', flexDirection: 'column', marginBottom: 40 }}>
        <Skeleton width={200} baseColor="#3c98cc" height={30} style={{ marginBottom: 10 }} />
        <Skeleton width={300} />
      </div>
      <div style={{
        marginTop: 50,
        borderTopWidth: 1,
        padding: '10px 0px',
        display: isDesktop ? 'flex' : 'block',
        flexWrap: isDesktop ? 'wrap' : 'nowrap'
      }}>
        {item.map((data, index) => (
          <div
            key={index}
            style={{
              zIndex: 9,
              marginTop: -30,
              padding: 15,
              borderRadius: 20,
              paddingBottom: index === item?.length - 1 ? 10 : 40,
              borderBottomWidth: 0,
              backgroundImage: patterns[index % item?.length],
              width: isDesktop ? 350 : undefined,
              marginRight: 10,

            }}
          >
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'flex-start',
              }}
            >
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 10
                }}
              >

                <Skeleton width={30} baseColor={COLORS.black} height={20} />
                <div style={{ color: COLORS.white, }}>
                  <Skeleton width={30} baseColor={COLORS.grayLight} height={20} />
                </div>
              </div>
              <div style={{ display: 'flex' }}>

                <div style={{ display: 'flex', flexDirection: 'column' }}>
                  <div
                    style={{
                      color: COLORS.white,
                      backgroundColor: COLORS.black,
                      borderRadius: 20,
                      paddingLeft: 15,
                      paddingRight: 15,
                      justifyContent: 'flex-end',
                      display: 'flex',
                      alignItems: 'center'
                    }}
                  >
                    <span style={{ marginRight: 5 }}>....</span>
                    <Skeleton width={50} baseColor={COLORS.grayLight} height={10} />
                  </div>
                  <div
                    style={{
                      color: COLORS.white,
                      fontSize: 12,
                      marginTop: 5,
                      display: 'flex',
                      gap: 10
                    }}
                  >
                    <Skeleton width={30} baseColor={COLORS.grayLight} height={10} />
                    <Skeleton width={60} baseColor={COLORS.grayLight} height={10} />

                  </div>
                </div>
              </div>
            </div>
            <div style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'flex-end', marginTop: index === item?.length - 1 ? 100 : 50, gap: 10 }}>
              {/* <Button title={'Edit'}
           type={'secondary'}
           textStyle={{
             color: COLORS.white,
             marginRight: 10,
             backgroundColor: 'transparent',
             paddingRight: 5,
             paddingLeft: 5,
             fontSize: 14,
             padding: 0, borderWidth: 0

           }} /> */}

              <Skeleton width={60} baseColor={COLORS.grayLight} height={20} />
              <Skeleton width={60} baseColor={COLORS.grayLight} height={20} />

            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
export default ViewBillingLoader
