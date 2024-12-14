import { useApi } from '@/hooks/useRequest';
const { post,get } = useApi();
import {
  BASE_URL,
  WP_BASE_URL,
  IMAGES_BASE_URL,
  SHIPPING_PROTECTION_ID,
} from '@/utils/constants';
import { notFound } from 'next/navigation';
import { useCookies } from '@/lib/TagManager/useCookies';
export const useProducts = () => {
  const { disable_shipping_protection } = useCookies();
  const fetchProducts = async (
    requestData: {
      productIds: string[];
      selectedFields: (string | undefined)[];
    },
    revalidate: number = 0,
  ) => {
    try {
      // throw new Error('Failed to load products');
      const apiUrl = `${BASE_URL}/api/products/batch`;
      
      const response = await post(apiUrl, requestData, revalidate);
      const data = await response.data;
      
      const products = data.map((product: any) => ({
        ...product,
        ...(product.image_url && { image_url: product.image_url }),

      }));
      // console.log('products', products)
      return products;
    } catch (error) {
      // notFound()
      // throw new Error('Failed to load products');
      console.log('Failed to load prodicts', error.message);
    }
  };
  const refreshCart = async (productIds: string[], responseData: any) => {
    const apiUrl = `${BASE_URL}/api/products/batch`;
    const requestData = {
      productIds,
      selectedFields: [
        'id',
        'name',
        'image_url',
        'price',
        'sale_price',
        'regular_price',
        'on_sale',
      ],
    };
    const response = await post(apiUrl, requestData);
    const data = await response.data;
    
    for (const [key, item] of Object.entries(responseData.cart_items)) {
      const product = data.find((product: any) => product.id === (item as any).product_id);
      if (product) {
        (item as any).name = product.name;
        (item as any).price = product.price;
        (item as any).regular_price = product.regular_price;
        (item as any).sale_price = product.sale_price;
        (item as any).on_sale = product.on_sale;
      }
    }


//     for (let i = 0; i < data.length; i++) {
//   const item = data[i];
//   const cartItemKeys = Object.keys(responseData.cart_items);
//   if (cartItemKeys.length > 0) {
//     const key = cartItemKeys[0];
//     const cartItem = responseData.cart_items[key];
//     responseData.cart_items[key].name = item.name;
//     responseData.cart_items[key].price = item.price;
//     responseData.cart_items[key].sale_price = item.sale_price;
//     responseData.cart_items[key].regular_price = item.regular_price;
//     responseData.cart_items[key].on_sale = item.on_sale;
//     // cartItem.image = `/assets/products/${item.id}.webp`;
//     // cartItem.image_url = `${IMAGES_BASE_URL}${item.image_url}`
//     // cartItem.image_url = item.image_url
//   }
// }
    // for (const item of data) {
    //   const key = Object.keys(responseData.cart_items).find(
    //     (cartKey) => responseData.cart_items[cartKey].product_id === item.id,
    //   );

    //   if (key) {
    //     responseData.cart_items[key].name = item.name;
    //     responseData.cart_items[key].price = item.price;
    //     responseData.cart_items[key].sale_price = item.sale_price;
    //     responseData.cart_items[key].regular_price = item.regular_price;
    //     responseData.cart_items[key].on_sale = item.on_sale;
    //     // responseData.cart_items[key].image = `/assets/products/${item.id}.webp`;
    //     // responseData.cart_items[key].image_url = `${IMAGES_BASE_URL}${item.image_url}`
    //     // responseData.cart_items[key].image_url = item.image_url
    //   }
    // }
    // const itemExists = Object.values(responseData?.cart_items).some((item:any) => item.product_id == SHIPPING_PROTECTION_ID)
    // if(!itemExists){

    //     disable_shipping_protection()
    // }
    return responseData;
  };
  const fillUpsell = async (productIds: string[]) => {
    const apiUrl = `${BASE_URL}/api/upsell-products/match`;
    if (productIds.length > 0) {
      try {
        const response = await post(apiUrl, productIds);
        // console.log('response',response)
        return response; // Assuming response is an array of any type
      } catch (error) {
        console.error('Error found in upsell match', error);
        throw error; // You may want to handle or rethrow the error based on your requirements
      }
    } else {
    }
  };


  const fetchNightGuardWhitteningIds = async (

    revalidate: number = 0,
  ) => {
    try {
      // throw new Error('Failed to load products');
      const apiUrl = `${BASE_URL}/api/options/ng_wht_ids`;
      // console.log('API=>>>',apiUrl);
      const response = await get(apiUrl);
      const data = await response.data;
      return data
    } catch (error) {
      // notFound()
      // throw new Error('Failed to load products');
      console.log('Failed to load prodicts', error.message);
    }
  };
  return { fetchProducts, refreshCart, fillUpsell,fetchNightGuardWhitteningIds };
};
