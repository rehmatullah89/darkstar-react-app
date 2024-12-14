import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'next/image';
import AddToCart from '../../../ui/resuable-componets/addtocart';
import { useProducts } from '@/hooks/useProducts';
import { Suspense } from 'react';

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
  productIds: ['813839', '813838', '813836'],
  selectedFields: [
    'id',
    'name',
    'price',
    'sale_price',
    'regular_price',
    'description',
    'on_sale',
    'image_url',
  ],
};

export default async function Product() {
  const { fetchProducts } = useProducts();
  const products = await fetchProducts(requestData, 300);

  return (
    <div>
      <Container>
        <Row id="products">
          {products?.map((product: any, index: any) => (
            <Col md={4} key={product?.name}>
              <div className="product-selection-box">
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
                  <b>
                    {/* {product?.name} */}
                    {index == 0
                      ? 'BEST VALUE'
                      : index == 1
                        ? 'TRAVEL SET'
                        : '30 Day Supply'}
                  </b>
                </div>
                <div className="backOrderList alert alert-danger font-mont">
                  {product?.description}
                </div>
                <div className="product-selection-price-wrap">
                  <div>
                    <div className="product-selection-dentist-price-note">
                      <bdi>
                       Original Price:
                        <span className="woocommerce-Price-currencySymbol">
                          {` $`}
                        </span>
                        {/* {product?.regular_price} */}
                        {index == 0 ? '98.95' : index == 1 ? '59.95' : '29.95'}
                      </bdi>
                    </div>
                    {product?.on_sale ? (
                      <span className="product-selection-price-text">
                        <del aria-hidden="true" className="del_tag">
                          <span className="woocommerce-Price-amount amount">
                            <bdi>
                              <span className="woocommerce-Price-currencySymbol">
                                $
                              </span>
                              {product?.regular_price}
                            </bdi>
                          </span>
                        </del>
                        <ins>
                          <span className="woocommerce-Price-amount amount">
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
                    <div className="value-text text-center">
                      {index == 0
                        ? 'Best Value'
                        : index == 1
                          ? 'Couple Package'
                          : '1 Month Supply'}
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
