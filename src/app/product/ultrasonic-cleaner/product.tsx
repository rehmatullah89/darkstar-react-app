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
  productIds: ['780226'],
  selectedFields: [
    'id',
    'name',
    'price',
    'sale_price',
    'regular_price',
    'description',
    'on_sale',
    'image_url',
    'meta_data.styled_title',
    'meta_data.info_2',
    'meta_data.info_1'
  ],
};



export default async function Product() {

  
  // Sanitize the product name to avoid XSS attacks
  // const sanitizedProductName = DOMPurify.sanitize();
  const { fetchProducts } = useProducts();
  const products = await fetchProducts(requestData, 300);

  

  return (
    <div className='ultrasonic_product_section_wrapper plaque-highlighter-products' id="desensitizing-gel-wrapper">
      <Container>
        <Row id="products" style={{justifyContent:'center'}}>
          {products?.map((product: any, index: any) => (
            <Col md={7} key={product?.name}>
              <div className="product-selection-box">
                <div className='product-selection-box-inner'>
               <div className='product-selection-title'>
               <span dangerouslySetInnerHTML={{ __html: product?.meta_data?.styled_title ?? product?.name }} className='info-ist-text'>
                   
                   </span>
               </div>
                <div className="product-selection-image-wrap">
                  <Image
                    src={product?.image_url}
                    quality={100}
                    alt="image1"
                    width={306}
                    height={227}
                    style={{ maxWidth: '100%' }}
                  />

                  {/* <span>  {index == 0
                      ? 'x9'
                      : index == 1
                        ? 'x6'
                        : 'x3'} </span> */}
                </div>

               <div className='product-selection-wrap-inner'>
               <div className="product-selection-description">
                <span dangerouslySetInnerHTML={{ __html: product?.meta_data?.info_1 ?? product?.name }} className='info-ist-text'>
                   
                  </span>
                </div>
               </div>
                <div className="product-selection-price-wrap">
                  <div>
                   
                    {product?.on_sale ? (
                      <span className="product-selection-price-text">
                        <del aria-hidden="true" className="del_tag">
                          <span className="woocommerce-Price-amount amount del">
                            <bdi>
                              <span className="woocommerce-Price-currencySymbol">
                                $
                              </span>
                              {product?.regular_price}
                            </bdi>
                          </span>
                        </del>
                        <ins>
                          <span className="woocommerce-Price-amount amount ins">
                            <bdi>
                              <span className="woocommerce-Price-currencySymbol">
                                $
                              </span>
                              {product?.price}
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
                              {product?.price}
                            </bdi>
                          </span>
                        </ins>
                      </span>
                    )}
                    
                  </div>
                 
                  <span dangerouslySetInnerHTML={{ __html: product?.meta_data?.info_2 ?? product?.name }} className='info-two-text'>
                    
                  
                  </span>
                  <Suspense fallback={<div>Loading Buttons</div>}>
                    <AddToCart product={product} />
                  </Suspense>
                </div>
              </div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}
