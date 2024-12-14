
import React from 'react';
import '@/css/sale.css';
import dynamic from 'next/dynamic';
import { JSDOM } from "jsdom";
import DOMPurify from "dompurify";



import type { Metadata, ResolvingMetadata } from 'next';
import { BASE_URL, WP_BASE_URL } from '@/utils/constants';
export async function generateMetadata(
    { params, searchParams }: any,
    parent: ResolvingMetadata,
  ): Promise<Metadata> {
    // fetch data
    try {
      const product = await fetch(
        `${WP_BASE_URL}/wp-json/wp/v2/pages/881187?page_id_darkstar=881186`,
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

const getContent = async () => {
  const response = await fetch(
    `${WP_BASE_URL}/wp-json/wp/v2/pages/881187?page_id_darkstar=881186`,
    {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
      // next: { revalidate: 300 }
    },
  );
  const data = await response.json();
  return data.content.rendered;
};
const Sale = async () => {
const window = new JSDOM("").window;
const DOMPurifyServer = DOMPurify(window);
    const Sub = dynamic(() => import("./sub"), {
        ssr: false,
      });

  

  const content = await getContent();
  return (
    <>
      {content ? (
        <>
        {/* <Style/> */}
        <div id='wrapper' className='thb-page-transition-off'>
        <div className='gehaTemplate active-recomendation-tab' id='newsalePage'>
        <section className="shopLanderPageHader">
        <div className="pageHeader ">
             <section id="solid-color-with-text-section" >
                    <div className="container">
                        <div className="text-center align-item-center justify-content-center">

                            <div className="v-col-sm-12 sectionTopBanner">

                                <div className="messageWithNoSale font-mont">
                                <span className="weight900">Our Sale is closed now.</span>
                                    <span className="upcommingDealsText">Find out about our upcoming deals by subscribing to our
                                        newsletter.</span>
                                </div>
                            </div>
                        </div> 
                    </div>
                </section>
                <div className="pageheaderBotm ">
                    <div className="row no-flex">
                        <div className="flex-row">
                            <div className="filterproductsOption">
                                <select id="filter_products">
                                    <option value="all">All products</option>
                                    <option value="Bundle &amp; Save">Bundle &amp; Save</option>
                                    <option value="Featured!">Featured!</option>
                                    <option value="Low Stock">Low Stock</option>
                                </select>

                            </div>



                            <div className="all-product-dropdown">

                                <select id="price-sort">

                                    <option value="default">Recommended</option>

                                    <option value="price-low-to-high">Low price to high</option>

                                    <option value="price-high-to-low">high price to low</option>

                                    <option value="newest">Newest</option>

                                </select>

                            </div>


                            <div className="resetFilter">
                                <a href="" id="resetButton">Reset </a>
                            </div>


                        </div>

                    </div>

                </div>
        </div>
        </section>
        <div
         id='product-list'  className="row teethWhieteingSystemWrapper productLandingPageContainer" 
          dangerouslySetInnerHTML={{ __html: DOMPurifyServer.sanitize(content) }}
          />
          </div>
          </div>
        </>
      ) : (
        <>Loading</>
      )}
      <Sub />


    </>
  );
};

export default Sale;


