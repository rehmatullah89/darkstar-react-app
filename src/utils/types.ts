/***
 * Accepts  object with key:value
 *  ****/
export type identityPropertiesObj = {
  [key: string]: string | number;
};

type ProductTrackingData = {
  [key: string]: string | number | any[];
};

export type TrackingEvent = [string, string, ProductTrackingData];

export type KlaviyoType = {
  identify: (properties: identityPropertiesObj) => void;
  ADDEDTOCART: (product: any) => void;
  VIEWEDPRODUCT: (product: any) => void;
  PUSH: (product: any) => void;
};
export type CCProductType = any;
// export type CCProductType = {
//   product: any;
//   [key: string]: any;
// };
export type CCInitialState = {
  // min_cart: any[];
  min_cart: { cart_totals: any; cart_items: any };
  up_sell_products: any[];
  related_products: any[];
  related_product_loader: any;
  is_open_cart: boolean;
  is_open_menu: boolean;
  is_removed: boolean;
  cart_product_ids: any[];
  modal_state: any;
  cartCount: number;
  futureLoading: any[];
  requestQueue: CCProductType[];
  responses: any[];
  loadingStates: Record<string, any>;
  isRequestInProgress: boolean;
  show_loader: any;

  removeRequestQueue: CCProductType[];
  removeLoadingStates: Record<string, any>;
  ng_wht_ids:any[]
};
export type User = {
  ID?: string;
  user_email: string;
  first_name?: string;
  last_name?: string;
  dentist_user?:string
  dentist_user_username?:string
};
export type SearchType = {
  keyword: string|number;
  category: string;
  distance: string;
  latitude: string;
  longitude: string;
}