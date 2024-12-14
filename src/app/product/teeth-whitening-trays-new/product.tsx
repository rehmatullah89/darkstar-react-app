import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'next/image';
import AddToCart from '../../../ui/resuable-componets/addtocart';
import { useProducts } from '@/hooks/useProducts';
import { Suspense } from 'react';
import DOMPurify from "dompurify";
import Tabs from './products-tabs';

const requestData = {
  // Original array of product IDs
  productIds: ['427602', '130255', '130256', '427704', '130258', '130259'],
  
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
    'meta_data.info_2'
  ],
};

export default async function Product() {
  const { fetchProducts } = useProducts();
  const products = await fetchProducts(requestData, 300);
  
  const sortedData = products.sort((a, b) => {
    return requestData.productIds.indexOf(a.id.toString()) - requestData.productIds.indexOf(b.id.toString());
  });
  
  // Take the first 3 items
  const nonsensitive = sortedData.slice(0, 3);
  
  // Take the next 3 items
  const sensitive = sortedData.slice(3, 6);


  return (
    <>
      <Tabs nonsensitive={nonsensitive} sensitive={sensitive} />
    </>
  );
}
