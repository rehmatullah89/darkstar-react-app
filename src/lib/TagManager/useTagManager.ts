'use client';
import { sendGTMEvent } from '@next/third-parties/google';

export const useTagManager = () => {
  const view = (params: Object): void => {
    sendGTMEvent(params);
  };

  return { view };
};

type WindowWithDataLayer = Window & {
  dataLayer: Record<string, any>[];
};

declare const window: WindowWithDataLayer;

const pageview = (url: string) => {
  if (typeof window.dataLayer !== 'undefined') {
    window.dataLayer.push({
      event: 'page_view',
      page: url,
    });
  } else {
    console.log({
      event: 'pageview',
      page: url,
    });
  }
};
