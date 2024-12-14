import { cookies } from 'next/headers';
import { redirect } from 'next/navigation'
import { headers } from "next/headers";
import React, { ReactNode} from 'react';
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
import awardActive from '../../../public/my-account/reward-icon-p.svg';
import url from '../../../public/my-account/url-icon.svg';
import Image from 'next/image';
// import { Accordion } from 'react-bootstrap';
import { COLORS } from '@/utils';
import Heading from '@/ui/common/Heading';
import Link from 'next/link';
import '@/layouts/accordion.css';
import '@/layouts/myDashboard.css';
import { Accordion,AccordionItem,AccordionBody, AccordionHeader } from 'react-bootstrap';
import Loading from '@/ui/common/Loading';
import MyAccountDesktopLoader from "@/ui/skeletonLoader/MyAccountDesktopLoader";
import MyAccountMobileLoader from "@/ui/skeletonLoader/MyAccountMobileLoader";
import Logout from '@/ui/resuable-componets/Logout';
import { WP_BASE_URL } from '@/utils/constants';
interface LayoutProps {
  title?: string;
  description?: string;
  bgColor?: string;
  children?: ReactNode;
}

const baseURL = `${WP_BASE_URL}/api`;
  const baseURL2 = WP_BASE_URL;

// const accessToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTc0NTk3LCJ1c2VybmFtZSI6InRlc3Rpbmcub3JkZXJzIiwiZW1haWwiOiJ6ZWVzaGFuQG1pbmRibGF6ZXRlY2guY29tIiwiaWF0IjoxNzE5ODY0MDE3LCJleHAiOjE3NTE0MDAwMTd9._NCHi-0ufM2_ZtK8cP6haggDf7csNnP9687wxVZH9D8";
// console.log('accessToken', accessToken?.value)

// console.log('isMyAcc', isMyAcc)
// const router = useRouter();


 

  const getUserData = async (access_token:any) => {

      const makeApiCall = async (
        endpoint: any,
        method = 'GET',
        body?: any,
        json = true,
        multipleType = false,
        WP_url = false,
      ) => {

        try {
          const headers = {
            'Content-Type': multipleType
              ? 'multipart/form-data'
              : 'application/json',
            Authorization: `Bearer ${access_token}`,
          };
    
          const options = {
            method,
            headers,
            body: body ? (json ? JSON.stringify(body) : body) : null,
            
          };
          const url = `${WP_url ? baseURL2 : baseURL}/${endpoint}`;
    
          const response = await fetch(url, options);
          const data = await response.json();
    
          // console.log('API data:', data);
          return data;
        } catch (error) {
          console.error('Error  in makeApiCall:', error);
          // setError(error.message || 'Something went wrong,');
        } finally {
          // setLoading(false);
        }
      };



      // setIsLoading(true);
      const response = await makeApiCall('auth/profile/', 'GET');
      if (response.statusCode === 200 && response.success) {
        // userData = response.data
        return response.data
        // setUser(response.data);
        // setIsLoading(false);
      } else {
        // router.push('/auth/login');
        // setIsLoading(false);
      }
   
  };
  // const heads = headers()
  // const pathname = heads.get('next-url')
  // const isMyAcc = pathname?.startsWith('/my-account-new');
  // const otherPage = pathname !== '/my-account-new';
  const getParams = async()=>{
    const heads = headers()

    const pathname = heads.get('next-url')
    const isMyAcc = pathname?.startsWith('/my-account-new');
    const otherPage = pathname !== '/my-account-new';
    // console.log('pathname', pathname)
    // console.log('isMyAcc', isMyAcc)
    // console.log('otherPage', otherPage)
    return {
      pathname,
      isMyAcc,
      otherPage
    }
  }
const ProfileLayout = async ({ bgColor = '', children }: LayoutProps) => {
  const cookieStore = cookies();
  const accessToken = cookieStore.get('access_token')?.value;
  if(!accessToken || accessToken == null){
    redirect('/auth/login')
  }else{
  
  }
  
  const userData = await getUserData(accessToken)
  if(!userData){
    redirect('/auth/login')
  }
  // console.log('userData', userData)
  const aff = userData?.is_affiliate_user;
  // const {pathname,isMyAcc,otherPage} = await getParams()

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
  }).filter(section => (aff || section.heading !== 'Reward'));



  return (
    
    <div className='flex-row-mbt page-container-layout'>
      {/* show on just Desktop */}
        <div className={` navigationSidebarDesktop for-only-desktop-show desktop-left-sidebar-navigation techwave_fn_leftpanel`}>
          
          <div className="logo-wrap-smilebrilliant">
            <span className="sbr-logo-round">
              <Image
                src="https://stable.smilebrilliant.com/wp-content/themes/revolution-child/assets/images/sbr-logo.webp"
                alt="logo"
                width={46}
                height={46}
              />
            </span>
            <span className="sbr-logo-text">
              <Image
                src="https://stable.smilebrilliant.com/wp-content/themes/revolution-child/assets/images/sbr-logo-text.webp"
                alt="logo"
                width={144}
                height={12.38}
              />
            </span>
          </div>
          <div className='leftpanel_content forDesktopVersion'>
            <Accordion className='accordian-list' style={{ marginBottom: '5px', borderBottom: '1px solid #dee2e6' }}>
              
              {modifiedAccScreensData.map((section, index) => {
                const viewAllOption = section.options.find(option => option.title === 'View All');
                return (
               <>
               {viewAllOption ? 
                <AccordionItem key={index} eventKey={index.toString()}>
              <AccordionHeader style={{ color: COLORS.primary }}>
              <Link href={viewAllOption.link}>
                 <Heading heading={section.heading}
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
                  </Link>
               </AccordionHeader>
               <AccordionBody>
                 {section.options.map((option, optionIndex) => {
                   if (option.title === 'View All') return null;
                   return (
                     <Link className='testlink'
                       key={optionIndex}
                       href={option.link}
                       rel="nofollow"
                       title={option.title}
                       style={{
                         // backgroundColor: currentPathname === option.link ? COLORS.primary : COLORS.white,
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
                             // WebkitFilter: currentPathname === option.link ? 'invert(100%)' : '',
                             // filter: currentPathname === option.link ? 'invert(100%)' : '',
                           }}
                         />
                         <p style={{
                           margin: 0,
                           // color: currentPathname === option.link ? COLORS.white : COLORS.black,
                         }}>
                           {option.title}
                         </p>
                       </div>
                     </Link>
                   );
                 })}
               </AccordionBody>
              
                </AccordionItem>
                
             :
             
              <AccordionItem key={index} eventKey={index.toString()}>
                  <AccordionHeader
                    style={{ color: COLORS.primary }}
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
                  </AccordionHeader>
                  <AccordionBody>
                    {section.options.map((option, optionIndex) => {
                      if (option.title === 'View All') return null;
                      return (
                        <div className='rippleEffect'>
                        <Link
                          key={optionIndex}
                          href={option.link}
                          rel="nofollow"
                          title={option.title}
                          style={{
                            // backgroundColor: currentPathname === option.link ? COLORS.primary : COLORS.white,
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
                                // WebkitFilter: currentPathname === option.link ? 'invert(100%)' : '',
                                // filter: currentPathname === option.link ? 'invert(100%)' : '',
                              }}
                            />
                            <p style={{
                              margin: 0,
                              // color: currentPathname === option.link ? COLORS.white : COLORS.black,
                            }}>
                              {option.title}
                            </p>
                          </div>
                        </Link>
                        </div>
                      );
                    })}
                  </AccordionBody>
                </AccordionItem>
             }
             </>
              )
              })}
            </Accordion>
          </div>
          <div style={{
            color: COLORS.black,
            fontFamily: 'Montserrat',
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
            <Logout/>
            {/* <div
              style={{ color: COLORS.primary, marginLeft: 10, cursor: 'pointer' }}
              // onClick={logoutUser}
            >
              Log Out
            </div> */}
          </div>
        </div>
      
      <div className='desktop-content-wrapper-sbr techwave_fn_content'>
        
        <div>
          {children}
        </div>

      </div>
    </div >
  );
}

export default ProfileLayout;
