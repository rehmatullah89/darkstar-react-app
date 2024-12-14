'use client'
import React, { useEffect, useState } from 'react';
import '@/css/sale.css';
import dynamic from 'next/dynamic';
import { JSDOM } from "jsdom";
import DOMPurify from "dompurify";
import { BASE_URL, WP_BASE_URL } from '@/utils/constants';
import { styled } from 'styled-components';

const Sale =  () => {

    const Sub = dynamic(() => import("./sub"), {
        ssr: false,
      });
      const [htmlContent,setHtlmContent]=useState('')
useEffect(()=>{
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
    setHtlmContent(data.content.rendered);
  };
  getContent()
},[])

  return (
    <>
      {!htmlContent ? (
         <>
         {/* <Style/> */}
         <StyledWrapper>
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
        
           </div>
           </div>
           </StyledWrapper>
         </>
        
      ) : (
        <>
        {/* <Style/> */}
        <StyledWrapper>
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
          dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(htmlContent) }}
          />
          </div>
          </div>
          </StyledWrapper>
        </>
      )}
      <Sub />


    </>
  );
};

export default Sale;


// const router = useRouter();

//   useEffect(() => {
//     // Wait for the page to load
//     window.addEventListener('load', () => {
//       // Check for a fragment identifier in the URL
//       const { hash } = window.location;
//       if (hash) {
//         // Find the corresponding element
//         const element = document.querySelector(hash);
//         if (element) {
//           // Scroll to the element
//           element.scrollIntoView({ behavior: 'smooth' });
//         }
//       }
//     });
//   }, []);
// const {dispatch,addToCartEvent,removeFromCart} = useCartContext()
  //   const [content, setContent] = useState<boolean | any>(false);
  //   const ref = useRef<HTMLDivElement>(null);

  //   useEffect(() => {
  //     fetch('https://www.smilebrilliant.com/wp-json/wp/v2/pages/867103', {
  //       method: 'GET',
  //       headers: {
  //         'Content-Type': 'application/json'
  //       }
  //     })
  //       .then((resp) => resp.json())
  //       .then((response) => {
  //         setContent(response.content.rendered);
  //       })
  //       .catch((error) => {
  //         // Handle errors
  //         console.error('There was a problem with the fetch operation:', error);
  //       });
  //   }, []);

  //   useEffect(() => {
  //     console.log('registering')
  //     document.querySelectorAll('.add_to_cart_button').forEach(button => {
  //         button.addEventListener('click', (event:any) => {
  //           console.log('Button clicked!', event.target);
  //           const productId = event?.target?.getAttribute('data-product_id');
  //           if(productId){
  //             // addToCartEvent(event,{id:productId})
  //             console.log(productId)
  //           }
  //         });
  //       });

  //   });
//   const clickEvent = () => {
//     console.log('registering');
//     document.querySelectorAll('.add_to_cart_button').forEach((button) => {
//       button.addEventListener('click', (event) => {
//         console.log('Button clicked!', event.target);
//       });
//     });
//   };

const StyledWrapper = styled.div`
*, *::before, *::after {
    -webkit-box-sizing: inherit;
    box-sizing: inherit;
}
div, dl, dt, dd, ul, ol, li, h1, h2, h3, h4, h5, h6, pre, form, p, blockquote, th, td {
    margin: 0;
    padding: 0;
}    
section#solid-color-with-text-section{ min-height:435px}
section.shopLanderPageHader .pageheaderBotm {
    box-shadow: rgba(0, 0, 0, 0.08) 0px 4px 12px;
    padding-top: 5px;
    padding-bottom: 5px;
    min-width: 176px;
    overflow: hidden;
    position: relative;
    z-index: 12;
    margin-bottom: 3rem;
}
.row {
    max-width: 90rem;
    margin-right: auto;
    margin-left: auto;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    -ms-flex-flow: row wrap;
    flex-flow: row wrap;
}
section.shopLanderPageHader .no-flex {
    display: block;
}
.column, .columns {
    -webkit-box-flex: 1;
    -ms-flex: 1 1 0px;
    flex: 1 1 0px;
    padding-right: .9375rem;
    padding-left: .9375rem;
    min-width: 0;
}
.small-12 {
    -webkit-box-flex: 0;
    -ms-flex: 0 0 100%;
    flex: 0 0 100%;
    max-width: 100%;
}
.columns .vc_column-inner {
    width: 100%;
}
.columns:not(.full-height) .vc_column-inner:not(.thb-fixed) {
    min-height: 100%;
}
.vc_column-inner::after, .vc_column-inner::before {
    content: " ";
    display: table;
}
.row .columns .wpb_wrapper {
    width: 100%;
}

section.shopLanderPageHader .flex-row {
    display: flex;
    align-content: center;
    gap: 30px;
    align-items: center;
}

select{
padding: 0 20px;
height: 48px;
line-height: 48px;font-weight: normal;
}
section.shopLanderPageHader .pageheaderBotm select{
    background-color: transparent;
    text-transform: capitalize;    border: 0;
    font-size: 16px;
}

    @media only screen and (min-width: 40em) {
        .row {
            padding: 0 35px;
        }
        .column, .columns {
            padding-right: .9375rem;
            padding-left: .9375rem;
        }
        .medium-12 {
            -webkit-box-flex: 0;
            -ms-flex: 0 0 100%;
            flex: 0 0 100%;
            max-width: 100%;
        }
        .medium-6 {
            -webkit-box-flex: 0;
            -ms-flex: 0 0 50%;
            flex: 0 0 50%;
            max-width: 50%;
        }
        .medium-3 {
            -webkit-box-flex: 0;
            -ms-flex: 0 0 25%;
            flex: 0 0 25%;
            max-width: 25%;
        }

    }
    @media print, screen and (min-width: 64em) {
        .column, .columns {
            padding-right: 1.25rem;
            padding-left: 1.25rem;
        }
    }
    @media (min-width: 1200px) {
        .row {
            width: 1170px;
        }
    }

    @media (min-width: 1500px) {
        .row {
            width: 1420px;
        }
    }


`