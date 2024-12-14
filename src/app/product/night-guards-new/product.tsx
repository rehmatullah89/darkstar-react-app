import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card'
import Image from 'next/image';
import AddToCart from '../../../ui/resuable-componets/addtocart';
import { useProducts } from '@/hooks/useProducts';
import { Suspense } from 'react';
import DOMPurify from "dompurify";
import dynamic from 'next/dynamic';

const NightguardAddToCart = dynamic(()=>import('@/components/nightguardAddToCart/nightguardAddToCart'),{ssr:false})



const requestData = {
  productIds: ['130269', '794933', '130268', '794935', '130270', '794937'],
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
    'meta_data.info_3',
    'meta_data.info_1'


  ],
};



export default async function Product() {


  // Sanitize the product name to avoid XSS attacks
  // const sanitizedProductName = DOMPurify.sanitize();
  const { fetchProducts } = useProducts();
  const products = await fetchProducts(requestData, 300);
  let mergedProducts:any[] = [];
  if(products?.length >0){
    
    const mergeProducts = (products: any[]): any[][] => {
      const mergedProducts: any = [];
      let comparePrices = [750, 550, 450];
      for (let i = 0; i < products.length; i += 2) {
        let comparePriceIndex = Math.floor(i / 2); 
        
        let subArray = products.slice(i, i + 2).map(product => {
          // Add the custom attribute during the slice operation
          return { ...product, 'compare_price': comparePrices[comparePriceIndex] };
        });
        mergedProducts.push(subArray);
      }
  
      return mergedProducts;
    };
     mergedProducts = mergeProducts(products);
    
  }
  


  return (
    <div className='whiening_gel_products plaque-highlighter-products night-guard-padding' id="desensitizing-gel-wrapper">
      <Container>
        <Row id="products">
          {mergedProducts &&  mergedProducts?.map((DuoProduct: any, index: any) => {
            const product = DuoProduct[0];

            return (
              <Col md={4} key={product?.name}>

                <Card
                  className="rounded-0 position-relative"
                  style={{ padding: '30px' }}
                >
                  <div
                    className="position-absolute card-top1"
                    id="mobileProduct_night_gaurd"
                  >
                    <div
                      className="fs-13 text-seegreen-800 fimaly-multiple-opn"
                      style={{ color: '#331f97', fontWeight: '600' }}
                    >
                      <b dangerouslySetInnerHTML={{ __html: product?.meta_data?.info_1 ?? product?.name }} className='info-ist-text' />

                    </div>
                    <div
                      className="fs-26 text-slate-500 fimaly-multiple-opn"
                      style={{ fontWeight: '300' }}
                    >
                      {' '}
                      <b dangerouslySetInnerHTML={{ __html: product?.meta_data?.info_2 ?? product?.name }} className='info-two-text' />

                    </div>
                  </div>
                  <div className="product-selection-image-wrap pt-4">
                    <Image
                      src={product?.image_url}
                      quality={100}
                      alt="image1"
                      width={306}
                      height={227}
                      style={{ maxWidth: '100%' }}
                    />
                  </div>
                                                
                  <Suspense fallback={<div>Loading Buttons</div>}>
                    <NightguardAddToCart DuoProduct={DuoProduct} number={index}  key={index}/>
                   
                  </Suspense>
                </Card>


              </Col>
            );
          })}

        </Row>
      </Container>
    </div>
  );
}
