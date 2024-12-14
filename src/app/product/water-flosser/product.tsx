import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'next/image';
import AddToCart from '../../../ui/resuable-componets/addtocart';
import { useProducts } from '@/hooks/useProducts';
import { Suspense } from 'react';
import DOMPurify from "dompurify";

// const AddToCart = dynamic(()=>import('@/ui/resuable-componets/addtocart'),{ssr:false})

type ProductType = {
  id: string;
  image: string;
  name: string;
  description: string;
  orignalPrice: string;
  oldPrice?: string;
  newPrice: string;
  innerTitle: string;
};

const requestData = {
  productIds: ['428548','845842','845846','845848','845850','845851'],
  selectedFields: [
    'id',
    'name',
    'price',
    'sale_price',
    'title',
    'regular_price',
    'description',
    'on_sale',
    'image_url',
    'images',
    'meta_data.styled_title',
    'meta_data.info_2',
    'meta_data.info_1',
    'meta_data.info_3',
    'meta_data.custom_image_url'
  ],
};

export default async function Product() {
  const { fetchProducts } = useProducts();
  const products = await fetchProducts(requestData, 300);

  if (!products || products.length < 6) {
    return <div>No products available</div>;
  }
  
  return (
    <div className='ultrasonic_product_section_wrapper plaque-highlighter-products water-flosser-product-wrapper' id="desensitizing-gel-wrapper">
      <Container className='water_flosser_container'>
        <Row id="products" style={{ justifyContent: 'center' }}>
          {/* First Product - 12 Columns */}
          <Col md={12} key={products[0]?.id} className="product-col">
            <div className="product-selection-box">
              <div className='product-selection-box-inner'>
                <div className='product-selection-title'>
                  <span dangerouslySetInnerHTML={{ __html: products[0]?.meta_data?.styled_title ?? products[0]?.name }} className='info-ist-text'></span>
                </div>
               
               <div className='water-flosser-12-col-warppper'>
               <div className="product-selection-image-wrap">
                  <Image
                    src={products[0]?.custom_image_url ?? products[0].image_url}
                    quality={100}
                    alt="image1"
                    width={580}
                    height={227}
                    style={{ maxWidth: '100%' }}
                  />
                </div>
               <div className="product-water-flosser-right-section">
               <div className='product-selection-wrap-inner'>
                  <div className="hardcord_title">
                    <small>cariPRO™</small>
                    <h2>CORDLESS WATER FLOSSER</h2>
                    <p>+ FULL 2 YR LIMITED WARRANTY</p>
                    <div className="sepratorLineWaterflosser" style={{backgroundColor: '#3c98cc'}}></div>
                  </div>

                  <div className="product-selection-description">
                    <span dangerouslySetInnerHTML={{ __html: products[0]?.meta_data?.info_1 ?? products[0]?.name }} className='info-ist-text'></span>
                  </div>
                </div>
      
      <div className="top_product_price_and-Button">
      {products[0]?.on_sale ? (
                      <span className="product-selection-price-text">
                        <del aria-hidden="true" className="del_tag">
                          <span className="woocommerce-Price-amount amount del">
                            <bdi>
                              <span className="woocommerce-Price-currencySymbol">
                                $
                              </span>
                              {products[0]?.regular_price}
                            </bdi>
                          </span>
                        </del>
                        <ins>
                          <span className="woocommerce-Price-amount amount ins">
                            <bdi>
                              <span className="woocommerce-Price-currencySymbol">
                                $
                              </span>
                              {products[0]?.price}
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
                              {products[0]?.regular_price}
                            </bdi>
                          </span>
                        </ins>
                      </span>
                    )}
                    <br />
                    <span className='free_shipping-orange_text'>+free shipping
                    </span>
                 <div className="">
                   <Suspense fallback={<div>Loading Buttons</div>}>
                    <AddToCart product={products[0]} />
                  </Suspense>
                 </div>
      </div>
               </div>
               </div>
                
              </div>
            </div>
          </Col>

            <div className="water-flosser-new-product-section">
                    <h2>REPLACEMENT WATER FLOSSER TIPS</h2>
                    <p>Dentists recommend replacing flosser tips every <span>6 months.</span></p>
            </div>
          {/* Second and Third Products - 6 Columns Each */}
          <Col md={6} key={products[1]?.id} className="product-col">
          <div className='product-selection-box'>
          <div className="product-selection-image-wrap">
                  <Image
                    src={products[1]?.custom_image_url ?? products[1].image_url}
                    quality={100}
                    alt="image1"
                    width={306}
                    height={227}
                    style={{ maxWidth: '100%' }}
                  />

                </div>
                <div className='product-selection-wrap-parent'>
                <div className="product-selection-description-parent-inner">
                    <div className='product-selection-description'>
                   <div className="water-flosser-product-title"><span dangerouslySetInnerHTML={{ __html: products[1].products?.name ?? products[1]?.name }} className='info-ist-text'></span></div> 
                  
                  {products[1]?.on_sale ? (
                      <span className="product-selection-price-text">
                        <del aria-hidden="true" className="del_tag">
                          <span className="woocommerce-Price-amount amount del">
                            <bdi>
                              <span className="woocommerce-Price-currencySymbol">
                                $
                              </span>
                              {products[1]?.regular_price}
                            </bdi>
                          </span>
                        </del>
                        <ins>
                          <span className="woocommerce-Price-amount amount ins">
                            <bdi>
                              <span className="woocommerce-Price-currencySymbol">
                                $
                              </span>
                              {products[1]?.price}
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
                              {products[1]?.regular_price}
                            </bdi>
                          </span>
                        </ins>
                      </span>
                    )}
                    </div>
                    <div className="product-selection-button">
                  <Suspense fallback={<div>Loading Buttons</div>}>
                    <AddToCart product={products[1]} />
                  </Suspense>
                  </div>
                  </div>
                  </div>
                  </div>
          </Col>
          <Col md={6} key={products[2]?.id} className="product-col">
          <div className='product-selection-box'>
          <div className="product-selection-image-wrap">
                  <Image
                     src={products[2]?.images[0]?.src ?? products[2].image_url}
                    quality={100}
                    alt="image1"
                    width={306}
                    height={227}
                    style={{ maxWidth: '100%' }}
                  />
                </div>
                <div className='product-selection-wrap-parent'>
                <div className="product-selection-description-parent-inner">
                    <div className='product-selection-description'>
                  <div className="water-flosser-product-title"> <span dangerouslySetInnerHTML={{ __html: products[2].products?.name ?? products[2]?.name }} className='info-ist-text'></span></div> 
                  
                  {products[2]?.on_sale ? (
                      <span className="product-selection-price-text">
                        <del aria-hidden="true" className="del_tag">
                          <span className="woocommerce-Price-amount amount del">
                            <bdi>
                              <span className="woocommerce-Price-currencySymbol">
                                $
                              </span>
                              {products[2]?.regular_price}
                            </bdi>
                          </span>
                        </del>
                        <ins>
                          <span className="woocommerce-Price-amount amount ins">
                            <bdi>
                              <span className="woocommerce-Price-currencySymbol">
                                $
                              </span>
                              {products[2]?.price}
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
                              {products[2]?.regular_price}
                            </bdi>
                          </span>
                        </ins>
                      </span>
                    )}
                    </div>
                    <div className="product-selection-button">
                  <Suspense fallback={<div>Loading Buttons</div>}>
                    <AddToCart product={products[2]} />
                  </Suspense>
                  </div>
                  </div>
                  </div>
                  </div>
                
               
          </Col>

          {/* Fourth Product - 3 Columns */}
          <Col md={6} key={products[3]?.id} className="product-col">
          <div className='product-selection-box'>
          <div className="product-selection-image-wrap">
                  <Image
                   src={products[3]?.images[0]?.src ?? products[3].image_url}
                    quality={100}
                    alt="image1"
                    width={306}
                    height={227}
                    style={{ maxWidth: '100%' }}
                  />

                </div>
                <div className='product-selection-wrap-parent'>
                <div className="product-selection-description-parent-inner">
                    <div className='product-selection-description'>
                  <div className="water-flosser-product-title" ><span dangerouslySetInnerHTML={{ __html: products[3].products?.name ?? products[3]?.name }} className='info-ist-text'></span></div>  
                  
                  {products[3]?.on_sale ? (
                      <span className="product-selection-price-text">
                        <del aria-hidden="true" className="del_tag">
                          <span className="woocommerce-Price-amount amount del">
                            <bdi>
                              <span className="woocommerce-Price-currencySymbol">
                                $
                              </span>
                              {products[3]?.regular_price}
                            </bdi>
                          </span>
                        </del>
                        <ins>
                          <span className="woocommerce-Price-amount amount ins">
                            <bdi>
                              <span className="woocommerce-Price-currencySymbol">
                                $
                              </span>
                              {products[3]?.price}
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
                              {products[3]?.regular_price}
                            </bdi>
                          </span>
                        </ins>
                      </span>
                    )}
                    </div>
                    <div className="product-selection-button">
                  <Suspense fallback={<div>Loading Buttons</div>}>
                    <AddToCart product={products[3]} />
                  </Suspense>
                  </div>
                  </div>
                  </div>
                  </div>
               
          </Col>

          {/* Fifth and Sixth Products - 3 Columns Each */}
          <Col md={3} key={products[4]?.id} className="product-col">
          <div className='product-selection-box'>
          <div className="product-selection-image-wrap">
                  <Image
                    src={products[4]?.images[0]?.src ?? products[4].image_url}
                    quality={100}
                    alt="image1"
                    width={306}
                    height={227}
                    style={{ maxWidth: '100%' }}
                  />

                </div>
                <div className='product-selection-wrap-parent'>
                <div className="product-selection-description-parent-inner">
                    <div className='product-selection-description'>
                  <div className="water-flosser-product-title"><span dangerouslySetInnerHTML={{ __html: products[4].products?.name ?? products[4]?.name }} className='info-ist-text'></span></div>  
                  
                  {products[4]?.on_sale ? (
                      <span className="product-selection-price-text">
                        <del aria-hidden="true" className="del_tag">
                          <span className="woocommerce-Price-amount amount del">
                            <bdi>
                              <span className="woocommerce-Price-currencySymbol">
                                $
                              </span>
                              {products[4]?.regular_price}
                            </bdi>
                          </span>
                        </del>
                        <ins>
                          <span className="woocommerce-Price-amount amount ins">
                            <bdi>
                              <span className="woocommerce-Price-currencySymbol">
                                $
                              </span>
                              {products[4]?.price}
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
                              {products[4]?.regular_price}
                            </bdi>
                          </span>
                        </ins>
                      </span>
                    )}
                    </div>
                    <div className="product-selection-button">
                  <Suspense fallback={<div>Loading Buttons</div>}>
                    <AddToCart product={products[4]} />
                  </Suspense>
                  </div>
                  </div>
                  </div>
                  </div>
               
          </Col>
          <Col md={3} key={products[5]?.id} className="product-col">
          <div className='product-selection-box'>
          <div className="product-selection-image-wrap">
                  <Image
                   src={products[5]?.images[0]?.src ?? products[5].image_url}
                    quality={100}
                    alt="image1"
                    width={306}
                    height={227}
                    style={{ maxWidth: '100%' }}
                  />

                </div>
                <div className='product-selection-wrap-parent'>
                <div className="product-selection-description-parent-inner">
                    <div className='product-selection-description'>
                   <div className="water-flosser-product-title"> <span dangerouslySetInnerHTML={{ __html: products[5].products?.name ?? products[5]?.name }} className='info-ist-text'></span></div>
                  
                  {products[5]?.on_sale ? (
                      <span className="product-selection-price-text">
                        <del aria-hidden="true" className="del_tag">
                          <span className="woocommerce-Price-amount amount del">
                            <bdi>
                              <span className="woocommerce-Price-currencySymbol">
                                $
                              </span>
                              {products[5]?.regular_price}
                            </bdi>
                          </span>
                        </del>
                        <ins>
                          <span className="woocommerce-Price-amount amount ins">
                            <bdi>
                              <span className="woocommerce-Price-currencySymbol">
                                $
                              </span>
                              {products[5]?.price}
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
                              {products[5]?.regular_price}
                            </bdi>
                          </span>
                        </ins>
                      </span>
                    )}
                    </div>
                    <div className="product-selection-button">
                  <Suspense fallback={<div>Loading Buttons</div>}>
                    <AddToCart product={products[5]} />
                  </Suspense>
                  </div>
                  </div>
                  </div>
                  </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
