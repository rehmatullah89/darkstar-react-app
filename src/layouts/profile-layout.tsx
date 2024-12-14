'use client';
import React, { ReactNode, useEffect, useState } from 'react';
import GehaBadge from '@/components/gehaBadge/gehaBadge';
import Header from '@/ui/header';
import { usePathname } from 'next/navigation';
import Footer from '@/ui/footer';
import MobileFooter from '@/components/mobile-footer/MobileFooter';
import MobileMenu from '@/components/mobile-menu/index';
import { useMediaQuery } from 'react-responsive';
import { useRouter } from 'next/navigation';
import { useUser } from '@/context/UserContext';
import useApi from '@/hooks/useApi';
import { accScreensData } from '@/utils/myAccountRouting';
import awardActive from '../../public/my-account/reward-icon-p.svg';
import url from '../../public/my-account/url-icon.svg';
import Image from 'next/image';
import { Accordion } from 'react-bootstrap';
import { COLORS } from '@/utils';
import Heading from '@/ui/common/Heading';
import Link from 'next/link';
import './accordion.css';
import './myDashboard.css';
import Loading from '@/ui/common/Loading';

interface LayoutProps {
  title?: string;
  description?: string;
  bgColor?: string;
  child?: ReactNode;
}

const ProfileLayout = ({ bgColor = '', child }: LayoutProps) => {
  const isDesktop = useMediaQuery({ minWidth: 992 });
  const pathname = usePathname();
  const router = useRouter();
  const { setUser, userData, setToken } = useUser();
  const { makeApiCall, loading } = useApi();

  const [isMyAcc, setIsMyAcc] = useState(false);
  const [currentPathname, setCurrentPathname] = useState<string | null>(pathname);
  const [isLoading, setIsLoading] = useState(true);
  const logoutUser = () => {
    setIsLoading(true);
    setUser(null);
    setToken(null);
    router.push('/auth/login');
    setIsLoading(false);
  };

  const getUserData = async () => {
    try {
      setIsLoading(true);
      const response = await makeApiCall('auth/profile/', 'GET');
      if (response.statusCode === 200 && response.success) {
        setUser(response.data);
        setIsLoading(false);
      } else {
        router.push('/auth/login');
        setIsLoading(false);
      }
    } catch (error) {
      console.error('Error while fetching user data:', error);
      setIsLoading(false);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    const isPathMatch = pathname.startsWith('/my-account-new');
    setIsMyAcc(isPathMatch);
    getActiveLinkStyle(pathname);
    if (isPathMatch)
      getUserData();
  }, [pathname]);

  useEffect(() => {
    setIsLoading(false);
  }, [isDesktop]);


  const getActiveLinkStyle = (link: string) => {
    if (link.startsWith('/my-account-new/orders/view-order/')) {
      setCurrentPathname('/my-account-new/orders');
    } else if (link.startsWith('/my-account-new/shipping/edit-shipping/')) {
      setCurrentPathname('/my-account-new/shipping/view-shipping');
    } else if (link.startsWith('/my-account-new/support/all-tickets/')) {
      setCurrentPathname('/my-account-new/support/all-tickets');
    } else {
      setCurrentPathname(link);
    }
  };

  const aff = userData?.is_affiliate_user;
  const hasSubscription = userData?.is_subscribed_user;

  const modifiedAccScreensData = accScreensData.map((section) => {
    if (section.heading === 'Reward' && !aff) {
      return {
        heading: 'Join Reward',
        subHeading: 'Earn commissions & perks.',
        activeIcon: awardActive,
        options: [
          {
            icon: url,
            title: 'Register yourself',
            link: '/my-account-new/reward/affiliate-url',
          },
        ],
      };
    }
    return section;
  }).filter(section => (aff || section.heading !== 'Reward') && (hasSubscription || section.heading !== 'Subscription'));

  const contentStyle = (isDesktop, isMyAcc) => ({
    marginTop: !isDesktop && isMyAcc ? 100 : 0,
    marginRight: !isDesktop && isMyAcc ? 30 : 0,
    marginLeft: !isDesktop && isMyAcc ? 30 : 0,
    marginBottom: isMyAcc ? 70 : 0,
    minHeight: 600,
  });
  if (isLoading && isMyAcc) {
    return <Loading />;
  }

  return (
    <div className={isDesktop && isMyAcc ? 'desktop-page-container' : ''} style={{
      display: isDesktop && isMyAcc ? 'flex' : '',
      width: isDesktop && isMyAcc ? '100%' : '', height: isDesktop && isMyAcc ? '100%' : ''
    }}>
      {isDesktop && isMyAcc && (
        <div className='desktop-left-sidebar-navigation techwave_fn_leftpanel'>
          <div className="logo-wrap-smilebrilliant">
            <span className="sbr-logo-round">
              <Image
                src="https://www.smilebrilliant.com/wp-content/themes/revolution-child/assets/images/sbr-logo.webp"
                alt="logo"
                width={46}
                height={46}
              />
            </span>
            <span className="sbr-logo-text">
              <Image
                src="https://www.smilebrilliant.com/wp-content/themes/revolution-child/assets/images/sbr-logo-text.webp"
                alt="logo"
                width={144}
                height={12.38}
              />
            </span>
          </div>
          <div className='leftpanel_content'>
            <Accordion className='accordian-list' style={{ marginBottom: '5px', borderBottom: '1px solid #dee2e6' }}>
              {modifiedAccScreensData.map((section, index) => (
                <Accordion.Item key={index} eventKey={index.toString()}>
                  <Accordion.Header
                    style={{ color: COLORS.primary }}
                    onClick={() => {
                      const viewAllOption = section.options.find(option => option.title === 'View All');
                      if (viewAllOption) {
                        router.push(viewAllOption.link);
                      }
                    }}
                  >
                    <Heading
                      heading={section.heading}
                      subHeading={section.subHeading}
                      icon={
                        <div className='accordian-icon-large' style={{
                          maxWidth: '75px',
                          maxHeight: '75px',
                          marginBottom: 0,
                          borderRadius: '75px',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          padding: '7px 18px',
                          paddingLeft: '7px'
                        }}>
                          <Image className='iconNavButton'
                            src={section.activeIcon}
                            alt="logo"
                            width={20}
                            height={20}
                          />
                        </div>
                      }
                    />
                  </Accordion.Header>
                  <Accordion.Body>
                    {section.options.map((option, optionIndex) => {
                      if (option.title === 'View All') return null;
                      return (
                        <Link
                          key={optionIndex}
                          href={option.link}
                          rel="nofollow"
                          title={option.title}
                          style={{
                            backgroundColor: currentPathname === option.link ? COLORS.primary : COLORS.white,
                          }}
                        >
                          <div style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: 10
                          }}>
                            <Image
                              src={option.icon}
                              alt="logo"
                              width={20}
                              height={20}
                              style={{
                                WebkitFilter: currentPathname === option.link ? 'invert(100%)' : '',
                                filter: currentPathname === option.link ? 'invert(100%)' : '',
                              }}
                            />
                            <p style={{
                              margin: 0,
                              color: currentPathname === option.link ? COLORS.white : COLORS.black,
                            }}>
                              {option.title}
                            </p>
                          </div>
                        </Link>
                      );
                    })}
                  </Accordion.Body>
                </Accordion.Item>
              ))}
            </Accordion>
          </div>
          <div style={{
            color: COLORS.black,
            fontFamily: 'inherit',
            fontSize: 16,
            fontWeight: 400,
            textTransform: 'capitalize',
            textAlign: 'center',
            display: 'flex',
            justifyContent: 'center',
            marginTop: 20,
          }}>
            Not
            <div style={{ fontWeight: 700, marginLeft: 10 }}>
              {userData?.first_name + ' ' + userData?.last_name}?
            </div>
            <div
              style={{ color: COLORS.primary, marginLeft: 10, cursor: 'pointer' }}
              onClick={logoutUser}
            >
              Log Out
            </div>
          </div>
        </div>
      )}
      <div className={isDesktop && isMyAcc ? 'desktop-content-wrapper-sbr techwave_fn_content' : ''}>
        <Header bgColor={bgColor} />
        <GehaBadge />
        <MobileMenu />
        <div style={contentStyle(isDesktop, isMyAcc)}>
          {child}
        </div>
        <Footer />
        <MobileFooter />
      </div>
    </div >
  );
}

export default ProfileLayout;
