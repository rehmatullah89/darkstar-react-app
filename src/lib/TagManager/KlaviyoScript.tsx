'use client'

import Script from 'next/script';
import React, { useEffect, useState } from "react";
import { usePathname } from 'next/navigation';
import { GOOGLE_MAPS_API_KEY, KLAVIYO_COMPANY_ID, ZENDESK_KEY } from '@/utils/constants';

const KlaviyoScript = () => {
  const pathname = usePathname();

  return (
    <>
      <Script
        strategy="lazyOnload"
        type="text/javascript"
        src={`//static.klaviyo.com/onsite/js/klaviyo.js?company_id=${KLAVIYO_COMPANY_ID}`}
      />
     {pathname !== '/shine-search' && (
        <Script
          strategy="lazyOnload"
          id="ze-snippet"
          src={`https://static.zdassets.com/ekr/snippet.js?key=${ZENDESK_KEY}`}
        />
      )}
      {/* <Script
        strategy="lazyOnload"
        id="ze-snippet"
        src="/assets/js/relic.js"
      /> */}
    
    </>
  );
};

export default KlaviyoScript;
