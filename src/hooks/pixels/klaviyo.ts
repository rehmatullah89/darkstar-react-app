import { TrackingEvent, identityPropertiesObj } from '@/utils/types';
// var klaviyo: any =(window as any).klaviyo
const identify = (properties: identityPropertiesObj): void => {
  if (window && (window as any).klaviyo) {
    (window as any).klaviyo.identify(properties);
  }
};
const ADDEDTOCART = (product: any): void => {
  const props: TrackingEvent = [
    'track',
    'Added to Cart',
    {
      $value: 29.98,
      AddedItemProductName: 'A Tale of Two Cities',
      AddedItemProductID: '1112',
      AddedItemSKU: 'TALEOFTWO',
      AddedItemCategories: ['Fiction', 'Classics', 'Children'],
      AddedItemImageURL: 'http://www.example.com/path/to/product/image2.png',
      AddedItemURL: 'http://www.example.com/path/to/product2',
      AddedItemPrice: 19.99,
      AddedItemQuantity: 1,
      ItemNames: ['Winnie the Pooh', 'A Tale of Two Cities'],
      CheckoutURL: 'http://www.example.com/path/to/checkout',
      Items: [
        {
          ProductID: '1111',
          SKU: 'WINNIEPOOH',
          ProductName: 'Winnie the Pooh',
          Quantity: 1,
          ItemPrice: 9.99,
          RowTotal: 9.99,
          ProductURL: 'http://www.example.com/path/to/product',
          ImageURL: 'http://www.example.com/path/to/product/image.png',
          ProductCategories: ['Fiction', 'Children'],
        },
        {
          ProductID: '1112',
          SKU: 'TALEOFTWO',
          ProductName: 'A Tale of Two Cities',
          Quantity: 1,
          ItemPrice: 19.99,
          RowTotal: 19.99,
          ProductURL: 'http://www.example.com/path/to/product2',
          ImageURL: 'http://www.example.com/path/to/product/image2.png',
          ProductCategories: ['Fiction', 'Classics'],
        },
      ],
    },
  ];
  PUSH(props);
};
const VIEWEDPRODUCT = (product: any): void => {
  // console.log(VIEWEDPRODUCT.name,product)
};
const PUSH = (props: any) => {
  if (window && (window as any).klaviyo) {
    (window as any).klaviyo.push(props);
  }
};

export default { identify, ADDEDTOCART, VIEWEDPRODUCT, PUSH };
