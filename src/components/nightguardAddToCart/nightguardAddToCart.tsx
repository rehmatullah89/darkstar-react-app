'use client'
import React, {useEffect, useState } from "react";
import dynamic from "next/dynamic";
const AddToCart = dynamic(()=>import('@/ui/resuable-componets/addtocart'),{ssr:false})


const NightguardAddToCart = ({ DuoProduct, number }: { DuoProduct: any, number: any }) => {
  
  const [selectedProduct, setSelectedProduct] = useState<any>(null);
  useEffect(()=>{
    setSelectedProduct(DuoProduct[0])
  },[])
  const handleRadioChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedProduct(DuoProduct[event.target.value]);
  };
  
  return (
    <>
    <b className="mb-3 text-uppercase fw-600 fs-14 open-sans text-slate-500" style={{ paddingTop: '7px' }}>
                    {/* 4 ULTRA-DURABLE NIGHT GUARDS */}
                    {selectedProduct?.name}
                  </b>
                  <div className="line-divider"></div>

                  <div className="description-info3">
                    <b dangerouslySetInnerHTML={{ __html: selectedProduct?.meta_data?.info_3 ||  '' }} />

                  </div>
      <div className="product-selection-price-wrap pos-rel bg-transparent">
        <div className="text-slate">
          <span className="product-selection-price-text price_ultra4Night2mm fs-32 montserrat">
          {selectedProduct?.on_sale ? (
                      <span className="product-selection-price-text">
                        <del aria-hidden="true" className="del_tag">
                          <span className="woocommerce-Price-amount amount">
                          <span className="woocommerce-Price-currencySymbol">
                                $
                              </span>
                            <bdi>
                             
                              {selectedProduct?.regular_price}
                            </bdi>
                          </span>
                        </del>
                        <ins>
                          <span className="woocommerce-Price-amount amount">
                          <span className="woocommerce-Price-currencySymbol">
                                $
                              </span>
                            <bdi>
                             
                              {selectedProduct?.price}
                            </bdi>
                          </span>
                        </ins>
                      </span>
                    ) : (
                      <span className="product-selection-price-text default_price">
                        <ins className="no-underline">
                          <span className="woocommerce-Price-amount amount">
                            <bdi>
                              <span className="woocommerce-Price-currencySymbol font-size-25">
                                $
                              </span>
                              {selectedProduct?.price}
                            </bdi>
                          </span>
                        </ins>
                      </span>
                    )}
          </span>
        </div>
        <div className="product-selection-dentist-price-note getinfo-four fimaly-multiple-opn">
          <p>Compared to ${selectedProduct?.compare_price}</p>
        </div>
      </div>
      <div className="w-100 mt-2">
        <div className="fimaly-multiple-opn text-slate-500 mb-2 d-flex gap-3">
          {DuoProduct.map((singleProduct: any, index1: any) => (
            <div key={index1} className="night-guard-variation-button">
              {index1 === 0 ? (
                 <div className={`position-relative`}>
                 <input
                   type="radio"
                   value={index1}
                   checked={selectedProduct?.id == singleProduct?.id}
                   name={`variation_${number}`}
                   onChange={handleRadioChange}
                   className="d-none"
                   id={`radion_btn__${number}`} // Ensure number is correctly accessed here
                 />
                 <label
                   className="m-0 d-block h-100 w-100 position-absolute top-0 zIndex-2 radion-btn-active night-guard-radio-label"
                   htmlFor={`radion_btn__${number}`}
                 ></label>
                 <div className={`border min-h-50 max-h-50 pb-3 w-100 position-relative d-flex align-items-center justify-content-center flex-column`}>
                   2mm
                   <br />
                   <span className="fs-12 lh0 d-block ps-2 pt-1">
                     (most popular)
                   </span>
                   <span className="circle-20 d-flex align-items-center justify-content-center check-colored border rounded-pill position-absolute start-0 transform-y-50percent top-50percent ms-3"></span>
                 </div>
               </div>
              
              ) : (
                <div className={`position-relative`}>
                <input
                  type="radio"
                  value={index1}
                  checked={selectedProduct?.id == singleProduct?.id}
                  name={`variation_${number}`}
                  onChange={handleRadioChange}
                  className="d-none"
                  id={`radion2_btn_${number}`} // Ensure number is correctly accessed here
                />
                <label
                  className="m-0 d-block h-100 w-100 position-absolute top-0 zIndex-2 radion-btn-active night-guard-radio-label"
                  htmlFor={`radion2_btn_${number}`}
                ></label>
                <div className={`border min-h-50 max-h-50 w-100 position-relative d-flex align-items-center justify-content-center flex-column`}>
                  3mm
                  <span className="circle-20 d-flex align-items-center justify-content-center check-colored border rounded-pill position-absolute start-0 transform-y-50percent top-50percent ms-3"></span>
                </div>
              </div>
              )}
            </div>
          ))}
        </div>
      </div>
      {selectedProduct ? <AddToCart product={selectedProduct} /> : <></> }
      
    </>
  );
};

export default NightguardAddToCart;