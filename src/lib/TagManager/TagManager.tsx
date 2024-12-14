'use client';
import { usePathname, useSearchParams } from 'next/navigation';
import { useEffect } from 'react';
import dynamic from 'next/dynamic';
import { useTagManager } from './useTagManager';
import { useCookies } from './useCookies';
import { TAG_MANAGER_ID } from '@/utils/constants';
import klaviyo from '@/hooks/pixels/klaviyo';

const GoogleTagManagerDynamic = dynamic(
  () =>
    import('@next/third-parties/google').then(
      (module) => module.GoogleTagManager,
    ),
  {
    ssr: false,
  },
);

/** Klaviyo and GTM is implemented here */

const TagManager = () => {
  const { view } = useTagManager();
  const { init_shipping_protection, init_impact_cookie, getUser, cookiesList,setAffliateCookie } =
    useCookies();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    const url = pathname + (searchParams ? searchParams.toString() : '');
    const referal = (searchParams? (searchParams.get('ref')? searchParams.get('ref') : null):null);
    if (referal) {
      setAffliateCookie(referal);
    }
    init_shipping_protection();
    const irclickid = searchParams?.get(cookiesList.irclickid);
    if (irclickid) {
      init_impact_cookie(searchParams);
    }
    if (pathname) {
      view({ event: 'page_view', url });
    }
  }, [pathname, searchParams]);

  useEffect(() => {
    const user = getUser();
    if (user) {
      const identityProperties = {
        $email: user.user_email || '',
        $first_name: user?.first_name || '',
        $last_name: user?.last_name || '',
      };
      klaviyo.identify(identityProperties);
    }
    //   klaviyo.PUSH(['openForm','Xtxb9U'])
  }, []);
  return (
    <>{!TAG_MANAGER_ID || <GoogleTagManagerDynamic gtmId={TAG_MANAGER_ID} />}</>
  );
};

export default TagManager;
