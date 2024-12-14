
import React, { Suspense } from 'react';
import '@/css/sale.css';



import type { Metadata, ResolvingMetadata } from 'next';
import { BASE_URL, WP_BASE_URL } from '@/utils/constants';
import Sale from './sale';
export async function generateMetadata(
    { params, searchParams }: any,
    parent: ResolvingMetadata,
  ): Promise<Metadata> {
    // fetch data
    try {
      const product = await fetch(
        `${WP_BASE_URL}/wp-json/wp/v2/product/897884?page_id_darkstar=897884`,
      ).then((res) => res.json());
      const metadata = product.yoast_head_json;
      // optionally access and extend (rather than replace) parent metadata
      // const previousImages = (await parent).openGraph?.images || []
      // return metadata;
  
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
        },
        // alternates:{
        //   canonical:
        // }
      };
    } catch (e) {
      return {};
    }
  }
  const Loader = () => (

    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', width: '100vw', backgroundColor: '#fff', position: 'fixed', top: 0, left: 0, zIndex: 9999, }}> <div style={{ display: 'inline-block', width: '80px', height: '80px', border: '8px solid #ccc', borderRadius: '50%', borderTopColor: '#333', animation: 'spin 1s linear infinite', }} /> </div> );
const SaleParent = async () => {


  return (
    
      <>
      
      <Suspense fallback={<Loader/>}>
      <Sale/>
      </Suspense>
      
      </>
  );
};

export default SaleParent;

