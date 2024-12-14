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
  productIds: ['130260', '130261', '130267'],
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
    <div className='toothbrush_heads'>
      <Container>
        <Row id="products">
          {products?.map((product: any, index: any) => (
            <Col md={4} key={product?.name}>
              <div className="product-selection-box">
              <div className="product-selection-title">
                  <b dangerouslySetInnerHTML={{ __html: product?.meta_data?.styled_title ?? product?.name }}>
                    
                    {/* {index == 0
                      ? 'BEST VALUE'
                      : index == 1
                        ? 'TRAVEL SET'
                        : '30 Day Supply'} */}
                  </b>
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
                </div>

                <div className="product-selection-description">
                  <b dangerouslySetInnerHTML={{ __html: product?.meta_data?.info_1 ?? '' }}>
                    
                 
                  </b>
                </div>
               
                <div className="backOrderList alert alert-danger font-mont">
                  {product?.description}
                </div>
                <div className="product-selection-price-wrap">
                  <div>
                    <div className="product-selection-dentist-price-note">
                      {/* <bdi>
                        original Price:
                        <span className="woocommerce-Price-currencySymbol">
                          {` $`}
                        </span> */}
                        {/* {product?.regular_price} */}
                        {/* {index == 0 ? '98.95' : index == 1 ? '59.95' : '29.95'}
                      </bdi> */}
                    </div>
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
                    <div className="product-selection-description">
                  <b dangerouslySetInnerHTML={{ __html: product?.meta_data?.info_2 ?? '' }}>
                  </b>
                </div>
                  </div>
                  <div className="value-text text-center">
                    {product?.innerTitle}
                  </div>
                  <Suspense fallback={<div>Loading Buttons</div>}>
                    <AddToCart product={product} />
                  </Suspense>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}
