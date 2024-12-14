'use client';
import React, {
  createContext,
  useReducer,
  useContext,
  useEffect,
  PropsWithChildren,
} from 'react';
import {
  UPDATE_UPSELL_PRODUCTS,
  REFRESH_CART,
  ADD_TO_QUEUE,
  SET_LOADING,
  SET_REMOVE_LOADING,
  SET_FUTURE_LOADING,
  REMOVE_FUTURE_LOADING,
  REMOVE_ITEM_FROM_CART,
  OPEN_MIN_CART,
  OPEN_MENU,
  SHOW_LOADER,
  RELATED_PRODUCT_LOADER,
  REMOVE_RELATED_PRODUCTS,
  UPDATE_RELATED_PRODUCTS,
  AAD_RELATED_PRODUCTS,
  ADD_TO_REMOVE_QUEUE,
  STORE_NG_WHT_IDS
} from './actions';
import { useApi } from '@/hooks/useRequest';
import MinCart from '@/components/minCart/MinCart';
import { useProducts } from '@/hooks/useProducts';
import { SHIPPING_PROTECTION_ID, WP_BASE_URL } from '@/utils/constants';
import { CCInitialState, CCProductType } from '@/utils/types';
import { useSearchParams } from 'next/navigation';

type CartContextData = {
  state: CCInitialState;
  dispatch: any;
  handleAddToCart: (product: CCProductType,quantity?:number) => void;
  removeFromCart: (event: React.MouseEvent|null, product: CCProductType) => void;
  getCart: () => void;
  refreshShippingProtection: (action:string) => void;
};

const CartContext = createContext<CartContextData | undefined>(undefined);

const initialState: CCInitialState = {
  min_cart: { cart_totals: null, cart_items: null },
  up_sell_products: [],
  related_products: [],
  show_loader: null,
  related_product_loader: null,
  is_open_cart: false,
  is_open_menu: false,
  is_removed: false,
  cart_product_ids: [],
  modal_state: null,
  cartCount: 0,
  futureLoading: [],
  requestQueue: [],
  responses: [],
  loadingStates: {},
  isRequestInProgress: false,

  removeRequestQueue: [],
  removeLoadingStates: {},
  ng_wht_ids : []

};

const reducer = (state: any, action: any) => {
  switch (action.type) {
    case UPDATE_UPSELL_PRODUCTS:
      if (action?.payload) {
        return {
          ...state,
          up_sell_products: [...action?.payload],
        };
      }
    case REFRESH_CART:
      if (action.payload?.data?.success) {
        const cartCount = Object.values(
          action.payload.data.data.cart_items,
        ).reduce((sum, item: any) => sum + item.quantity, 0);
        return {
          ...state,
          min_cart: { ...action.payload.data.data },
          cartCount,
        };
      } else {
        return { ...state };
      }
    case ADD_TO_QUEUE:
      return {
        ...state,
        requestQueue: [...state.requestQueue, action.product],
      };
    case SET_LOADING:
      const updatedLoadingStates = { ...state.loadingStates };
      updatedLoadingStates[action.productId] = action.isLoading;
      return { ...state, loadingStates: updatedLoadingStates };

    case SET_REMOVE_LOADING:
      const updatedRemoveLoadingStates = { ...state.removeLoadingStates };
      updatedRemoveLoadingStates[action.productId] = action.isLoading;
      return { ...state, removeLoadingStates: updatedRemoveLoadingStates };

    case SET_FUTURE_LOADING:
      return {
        ...state,
        futureLoading: [...state.futureLoading, action.productId],
      };

    case ADD_TO_REMOVE_QUEUE:
      return {
        ...state,
        removeRequestQueue: [...state.removeRequestQueue, action.product],
      };
    case REMOVE_FUTURE_LOADING:
      return {
        ...state,
        futureLoading: state.futureLoading.filter(
          (id: any) => id !== action.productId,
        ),
      };
    case 'ADD_RESPONSE':
      return { ...state, responses: [...state.responses, action.response] };
    case 'SET_REQUEST_IN_PROGRESS':
      return { ...state, isRequestInProgress: action.isInProgress };

    case REMOVE_ITEM_FROM_CART:
      if (state.min_cart.length == 1) {
        return {
          ...state,
          min_cart: [
            ...state.min_cart.filter(
              (item: any) => item.id !== action.payload.id,
            ),
          ],
          related_products: [],
        };
      }
      return {
        ...state,
        min_cart: [
          ...state.min_cart.filter(
            (item: any) => item.id !== action.payload.id,
          ),
        ],
      };

    case OPEN_MIN_CART:
      return {
        ...state,
        is_open_menu: false,
        is_open_cart: action.payload,
      };
      case OPEN_MENU:
        return {
          ...state,
          is_open_cart: false,
          is_open_menu:  action.payload
        };

    case SHOW_LOADER:
      return {
        ...state,
        show_loader: action.payload,
      };

    case AAD_RELATED_PRODUCTS:
      console.log(action.payload, 'action.payload in related');
      if (action.payload.is_from_local) {
        return { ...state, related_products: action.payload };
      } else {
        return { ...state, related_products: action.payload };
      }
    case UPDATE_RELATED_PRODUCTS:
      return {
        ...state,
        related_products: [...state.related_products, action.payload],
      };

    case 'cart_product_ids':
      return {
        ...state,
        cart_product_ids: [...state.cart_product_ids, action.payload],
      };

    case REMOVE_RELATED_PRODUCTS:
      console.log(action.payload, 'action.payload');
      if (action.payload.length == 0) {
        return { ...state, related_products: [] };
      } else {
        return {
          ...state,
          related_products: [
            ...state.related_products.filter(
              (item: any) => item.id !== action.payload,
            ),
          ],
        };
      }

    case RELATED_PRODUCT_LOADER:
      return { ...state, related_product_loader: action.payload };
    case 'SET_MODAL':
      return { ...state, modal_state: action.payload };

    case 'IS_REMOVED':
      return { ...state, is_removed: action.payload };
    case STORE_NG_WHT_IDS : 
    return {...state,ng_wht_ids:action.payload}
    default:
      return state;
  }
};

const CartContextProvider = ({ children }: PropsWithChildren<{}>) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { get, post } = useApi();
  const { refreshCart, fillUpsell,fetchNightGuardWhitteningIds } = useProducts();
  const searchParams = useSearchParams()
  const handleAddToCart = (product: any,quantity:number = 1) => {
    
    // if(state?.min_cart?.cart_items){
    //move it back to cartRequest() when need to change behaviour
    // ***
    
    if(quantity && quantity>=1)
      product = {...product,quantity}

    const productId = product.id;

    if (!state.loadingStates[productId]) {
      dispatch({ type: SET_LOADING, productId, isLoading: true });
    }
    // ***
    if (state?.min_cart?.cart_items &&  Object.keys(state?.min_cart?.cart_items).length > 0) {

      const minCartProductIds = Object.values(state?.min_cart.cart_items).map(
        (item: any) => item.product_id,
      );
      const missingInCart = minCartProductIds.includes(product.id);
      if (!missingInCart) {
        dispatch({ type: SET_FUTURE_LOADING, productId: product.id });
      }
    }

    dispatch({ type: OPEN_MIN_CART, payload: true });
    // dispatch({ type: OPEN_MENU, payload: true });
    

    dispatch({ type: ADD_TO_QUEUE, product });
  };
  const cartRequest = async (product: any) => {
    let custom_attr = {}
    if(product.vip_sale_price&& product.vip_user){
      let vip_user = product.vip_user
      let vip_sale_price = product.vip_sale_price
      custom_attr = {vip_user,vip_sale_price}
    }
    if(searchParams && searchParams.toString()){
      const coupon_code = searchParams.get('coupon_code')
      if (coupon_code) {
        custom_attr = { ...custom_attr, coupon_code }
      }
    }
    
    const data = new URLSearchParams({
      product_id: product.id,
      quantity:product.quantity?product.quantity : 1,
      action: 'custom_add_to_cart',
      ...custom_attr,
      
    });
    const apiUrl = `${WP_BASE_URL}/wp-admin/admin-ajax.php`;
    const response = await post(apiUrl, data);
    const responseData = response.data;
    // !responseData.success || klaviyo.ADDEDTOCART(product)
    return await fillCart(response);
  };

  useEffect(() => {
    const processQueue = async () => {
      if (state.requestQueue.length > 0 && !state.isRequestInProgress) {
        dispatch({ type: 'SET_REQUEST_IN_PROGRESS', isInProgress: true });
        const product = state.requestQueue.shift();
        const productId = product.id;

        if (product) {
          try {
            const filledCart = await cartRequest(product);

            dispatch({ type: REFRESH_CART, payload: filledCart });
          } catch (error) {
            console.error('Error adding to cart:', error);
          } finally {
            dispatch({ type: REMOVE_FUTURE_LOADING, productId: product.id });
            dispatch({ type: SET_LOADING, productId, isLoading: false });
            dispatch({ type: 'SET_REQUEST_IN_PROGRESS', isInProgress: false });
          }
        }
      }
    };

    processQueue();
  }, [state.requestQueue, state.isRequestInProgress]);

  useEffect(() => {
    const processRemoveQueue = async () => {
      if (state.removeRequestQueue.length > 0) {
        const product = state.removeRequestQueue.shift();

        const productId = product.product_id;

        if (product) {
          try {
            const filledCart = await removeCartRequest(product);

            dispatch({ type: REFRESH_CART, payload: filledCart });
          } catch (error) {
            console.error('Error adding to cart:', error);
          } finally {
            dispatch({ type: SET_REMOVE_LOADING, productId, isLoading: false });
          }
        }
      }
    };

    processRemoveQueue();
  }, [state.removeRequestQueue]);
  const removeCartRequest = async (product: any) => {
    const data = new URLSearchParams({
      product_key: product.key,
      action: 'custom_remove_from_cart',
    });

    const apiUrl = `${WP_BASE_URL}/wp-admin/admin-ajax.php`;
    const response = await post(apiUrl, data);

    return await fillCart(response);
  };
  const removeFromCart = async (event: any|null, product: any) => {
    event?.preventDefault();
    const productId = product.product_id;
    if (!state.removeLoadingStates[productId]) {
      dispatch({ type: SET_REMOVE_LOADING, productId, isLoading: true });
    }
    dispatch({ type: ADD_TO_REMOVE_QUEUE, product });
  };

  const getCart = async () => {
    const data = {
      action: 'custom_get_cart_mbt',
    };
    const apiUrl = `${WP_BASE_URL}/wp-admin/admin-ajax.php`;
    const responseData = await get(apiUrl, data);
    const filledCart = await fillCart(responseData);
    const ng_wht_ids = await fetchNightGuardWhitteningIds(300)
    if(ng_wht_ids.value){
      const ng_wht_ids_val = ng_wht_ids.value
      dispatch({type:STORE_NG_WHT_IDS,payload:ng_wht_ids_val})
    }
    
    dispatch({ type: REFRESH_CART, payload: filledCart });
  };
  const refreshShippingProtection = async (action:string='add') => {
    if(action=='add'){

      dispatch({ type: SET_FUTURE_LOADING, productId: SHIPPING_PROTECTION_ID });
    }else{
      dispatch({ type: SET_REMOVE_LOADING, productId:SHIPPING_PROTECTION_ID, isLoading: true });
    }
    const data = {
      action: 'custom_get_cart_mbt',
    };
    const apiUrl = `${WP_BASE_URL}/wp-admin/admin-ajax.php`;
    const responseData = await get(apiUrl, data);
    const filledCart = await fillCart(responseData,false);
    // if shipping protection rate causes some issue on switch uncomment below code
    // const ng_wht_ids = await fetchNightGuardWhitteningIds(300)
    // if(ng_wht_ids.value){
    //   const ng_wht_ids_val = ng_wht_ids.value
    //   dispatch({type:STORE_NG_WHT_IDS,payload:ng_wht_ids_val})
    // }
    
    dispatch({ type: REFRESH_CART, payload: filledCart });
    if(action=='add'){

      dispatch({ type: REMOVE_FUTURE_LOADING, productId: SHIPPING_PROTECTION_ID });
     
    }else{
      dispatch({ type: SET_REMOVE_LOADING, productId:SHIPPING_PROTECTION_ID, isLoading: false });
    }
  };

  const fillCart = async (responseData: any,reloadFetchUpsellProducts:boolean = true) => {
    const cart_items = responseData.data.data.cart_items;
    if (cart_items) {
      const productIds = Object.keys(cart_items).map(
        (key) => cart_items[key].product_id,
      );

      const products = await refreshCart(productIds, responseData.data.data);
      if(reloadFetchUpsellProducts){

        const upsellPoducts = await fillUpsell(productIds.map(String));
  
        const result = upsellPoducts?.data.filter(
          (item: any) => !productIds.includes(item.id),
        );
  
        const modifiedData = result?.map((item: any) => {
          // Assuming each object has a property named 'product' with 'image_url'
          // console.log('item>',item)
          const imageUrl = item.product?.product_feature_image_url;
  
          // Creating a new object with the modified image_url
  
          const newItem = {
            ...item,
            product: { ...item.product, image_url: imageUrl },
          };
  
          return newItem;
        });
        dispatch({ type: UPDATE_UPSELL_PRODUCTS, payload: modifiedData });
      }

      return { data: { success: true, data: { ...products } } };
    }
  };

  return (
    <CartContext.Provider
      value={{ state, dispatch, handleAddToCart, removeFromCart, getCart,refreshShippingProtection }}
    >
      <MinCart />
      {children}
    </CartContext.Provider>
  );
};
const useCartContext = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useThemeContext must be used inside the ThemeProvider');
  }

  return context;
};

export { CartContextProvider, useCartContext };
