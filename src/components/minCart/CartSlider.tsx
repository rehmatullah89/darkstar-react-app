'use client';
import { useCartContext } from '@/context/CartContext';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
// import {
//   AAD_RELATED_PRODUCTS,
//   ADD_ITEM_IN_CART,
//   REMOVE_RELATED_PRODUCTS,
//   SHOW_LOADER,
// } from '@context/actions';
import { useEffect } from 'react';
import AddToCart from '@/ui/resuable-componets/addtocart';
import Image from 'next/image';

const settings = {
  dots: false,
  infinite: false,
  speed: 500,
  centerPadding: '30px',
  focusOnSelect: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
  dontAnimate: true,
  arrows: false,
  centerMode: true,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        // centerPadding: '35px',
  centerMode: false,
  arrows: true,


      },
    },
  ],
};

export default function MinCartSlider({ queryIds, relatedProducts }: any) {
  return (
    <>
      <Slider {...settings} className="">
        {relatedProducts.length > 0
          ? relatedProducts?.map((item: any, index: any) => {
              return (
                <div
                  className="border1 border-color-slate-900 mx-auto pb-3 h-100 card-w position-relative"
                  style={{ width: '266px !important' }}
                  key={item.price + index}
                >
                  <div
                    className="text-center w-100 bg-white cursor-grab"
                    style={{ height: '200px' }}
                  >
                    {item.product_feature_image_url !== 'false' ? (
                      <Image
                        src={item?.product_feature_image_url}
                        alt=""
                        className=" h-100 mx-auto img-fluid p-3"
                        width={200}
                        height={200}
                      />
                    ) : (
                      <></>
                    )}
                  </div>
                  <div className="px-3 text-center pt-2  fimaly-multiple-opn text-slate-500">
                    <div className=" fs-16 fw-300 fimaly-multiple-opn">
                      {item.title_show ? (
                        <b
                          dangerouslySetInnerHTML={{ __html: item.title_show }}
                        />
                      ) : (
                        <></>
                      )}
                    </div>
                    <div className="mt-3">
                      <span className="pe-1 fs-18 montserrat fw-500">only</span>
                      <span className="fs-22 montserrat fw-500">
                        {' '}
                        ${item?.product?.price}
                      </span>
                    </div>
                    <div className="fs-13 text-slate-700">
                      {item.offer_text}
                    </div>
                    <div className="pt-2 position-absolute w-100 start-0 px-3 bottom-0 pb-3">
                      <AddToCart product={item} />
                    </div>
                  </div>
                </div>
              );
            })
          : null}
      </Slider>
    </>
  );
}
