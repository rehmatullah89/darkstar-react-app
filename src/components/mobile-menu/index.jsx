'use client';
import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { FaChevronLeft } from 'react-icons/fa';
import useApi from '@/hooks/useApi';
import { useUser } from '@/context/UserContext';
import { getLocalStorage } from '@/utils/helpers';
import back from '../../../public/back_icon_v2.svg';
import Countdown from '../countDownBanner/Countdown';
const Index = () => {
  const pathname = usePathname();
  const router = useRouter();
  const tokenValue = getLocalStorage('access_token', null);

  const [showDrawer, setShowDrawer] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleDrawer = () => {
    setShowDrawer(!showDrawer);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', () => {});
    };
  }, [isScrolled]);

  return (
    <>
  
    <header
      style={{
        height: '90px',
        zIndex: 9999,
        backgroundColor: 'white',
        borderBottom: isScrolled && '1px solid #b7b7b7',
      }}
      className={`fixed-top w-100 mobile-menu d-none sale-react ${
        isScrolled ? 'scrolled-header' : null
      }`}
    >
        <Countdown /> 
      <div className="navbar-fixed-top-barr">
      
        <div
          style={{
            width: '25%',
            backgroundColor: '#2d2e2f',
            fontSize: '0px',
            height: '8px',
          }}
        >
          &nbsp;1
        </div>
        <div
          style={{
            width: '25%',
            backgroundColor: '#fa319e',
            fontSize: '0px',
            height: '8px',
          }}
        >
          &nbsp;2
        </div>
        <div
          style={{
            width: '25%',
            backgroundColor: '#4acac9',
            fontSize: '0px',
            height: '8px',
          }}
        >
          &nbsp;3
        </div>
        <div
          style={{
            width: '25%',
            backgroundColor: '#f0c23a',
            fontSize: '0px',
            height: '8px',
          }}
        >
          &nbsp;4
        </div>
      </div>
    
      <div className="">
        <div>
          <div
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              display: 'flex',
            }}
          >
            {pathname !== '/home' && (
              <div className="back_icon_react"
                onClick={() => router.back()}
                style={{
                  color: 'black',
                  position: 'absolute',
                  left: 15,
                  fontSize: 25,
                  top: 15,
                }}
              >
                <Image src={back} alt="back icon" width={36} height={36} />
              </div>
            )}
            <div>
              <Link href="/">
                <Image
                  width={40}
                  height={40}
                  src="https://www.smilebrilliant.com/wp-content/themes/revolution-child/assets/images/sbr-logo.webp"
                  // className="smileBrilliant"
                  alt="Smile Brilliant"
                  style={{ marginRight: 10 }}
                />
              </Link>
              <Link href="/">
                <Image
                  width={130}
                  height={11.4}
                  src="https://www.smilebrilliant.com/wp-content/themes/revolution-child/assets/images/sbr-logo-text.webp"
                  // className="smilebrilliant-logo"
                  alt="Smile Brilliant"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
    </>
  );
};

export default Index;
