'use server'
import { cookies } from 'next/headers';
import type { Metadata, ResolvingMetadata } from 'next';
import { BASE_URL, WP_BASE_URL } from '@/utils/constants';
import dynamic from 'next/dynamic';
import { Suspense } from 'react';
import Image from "next/image";
import { accScreensData } from "@/utils/myAccountRoutingMob";
import awardActive from '../../../public/my-account/reward-icon-p.svg';
import url from '../../../public/my-account/url-icon.svg';
import { Accordion,AccordionItem,AccordionBody, AccordionHeader } from 'react-bootstrap';
import Link from 'next/link';
import { COLORS } from '@/utils';
import Heading from '@/ui/common/Heading';
import { redirect } from 'next/navigation';
import Logout from '@/ui/resuable-componets/Logout';
const Subpage = dynamic(()=>import('./subpage'),{ssr:false})


const baseURL = `${WP_BASE_URL}/api`;
  const baseURL2 = WP_BASE_URL;
// const cookieStore = cookies();
// const accessToken = cookieStore.get('access_token')?.value;
// const accessToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTc0NTk3LCJ1c2VybmFtZSI6InRlc3Rpbmcub3JkZXJzIiwiZW1haWwiOiJ6ZWVzaGFuQG1pbmRibGF6ZXRlY2guY29tIiwiaWF0IjoxNzE5ODY0MDE3LCJleHAiOjE3NTE0MDAwMTd9._NCHi-0ufM2_ZtK8cP6haggDf7csNnP9687wxVZH9D8";
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




export async function generateMetadata(
  { params, searchParams }: any,
  parent: ResolvingMetadata,
): Promise<Metadata> {
  // fetch data
  try {
    const product = await fetch(
      `${WP_BASE_URL}/wp-json/wp/v2/pages/826057`,
    ).then((res) => res.json());
    const metadata = product.yoast_head_json;
    const {
      title,
      description,
      robots,
      canonical,
      og_locale,
      og_type,
      og_title,
      og_description,
      og_url,
      og_site_name,
      article_modified_time,
      og_image,
      twitter_card,
      twitter_misc,
      schema,
    } = metadata;

    return {
      metadataBase: new URL(`${BASE_URL}`),
      title: title,
      description: description,
      openGraph: {
        locale: og_locale,
        type: og_type,
        title: title,
        description: og_description,
        url: og_url,
        siteName: og_site_name,
        modifiedTime: article_modified_time,

        images: [...og_image], //   images: ['/some-specific-page-image.jpg', ...previousImages],
      },
      twitter: {
        card: twitter_card,
      }
    };
  } catch (e) {
    return {};
  }
}
async function MyApp() {

  const cookieStore = cookies();
  const accessToken = cookieStore.get('access_token')?.value;
  if(!accessToken){
    redirect('/auth/login')
  }
  // console.log('accessToken', accessToken)
  const userData = await getUserData(accessToken)
  if(!userData){
    redirect('/auth/login')
  }
  // console.log('userData', userData)
  const aff = userData?.is_affiliate_user;
  const hasSubscription = userData?.is_subscribed_user;
  const modifiedAccScreensData = accScreensData
    .map((section) => {
      if (section.heading === "Reward" && !aff) {
        return {
          heading: "Join Reward",
          subHeading: "Earn commissions & perks.",
          activeIcon: awardActive,
          options: [
            {
              icon: url,
              title: "Register you self",
              link: "/my-account-new/reward/affiliate-url",
            },
          ],
        };
      }
      return section;
    })
    .filter(
      (section) =>
        (aff || section.heading !== "Reward") &&
        (hasSubscription || section.heading !== "Subscription")
    );

  return  <Suspense fallback={<>loader</>}>
    <div className={`for-only-mobile-display desktop-left-sidebar-navigation techwave_fn_leftpanel}`}>
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
          <div className='leftpanel_content page-tsxx'>
            
             <Accordion className='accordian-list' style={{ marginBottom: '5px', borderBottom: '1px solid #dee2e6' }}>
              
              {modifiedAccScreensData.map((section, index) => {
                const viewAllOption = section.options.find(option => option.title === 'View All');
                return (
               <>
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
             </>
              )
              })}
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
           <Logout/>
          </div>
        </div>
    <Subpage />
  </Suspense>
}

export default MyApp;
