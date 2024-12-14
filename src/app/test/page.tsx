'use client';
import React, { useReducer, useEffect } from 'react';

// type Product = {
//   id: number;
//   name: string;
// };

// type State = {
//   requestQueue: Product[];
//   responses: string[];
//   loadingStates: boolean[];
//   isRequestInProgress: boolean;
// };

// type Action =
//   | { type: 'ADD_TO_QUEUE'; product: Product }
//   | { type: 'SET_LOADING'; index: number; isLoading: boolean }
//   | { type: 'ADD_RESPONSE'; response: string }
//   | { type: 'SET_REQUEST_IN_PROGRESS'; isInProgress: boolean };

// const reducer = (state: State, action: Action): State => {
//   switch (action.type) {
//     case 'ADD_TO_QUEUE':
//       return { ...state, requestQueue: [...state.requestQueue, action.product] };
//     case 'SET_LOADING':
//       const updatedLoadingStates = [...state.loadingStates];
//       updatedLoadingStates[action.index] = action.isLoading;
//       return { ...state, loadingStates: updatedLoadingStates };
//     case 'ADD_RESPONSE':
//       return { ...state, responses: [...state.responses, action.response] };
//     case 'SET_REQUEST_IN_PROGRESS':
//       return { ...state, isRequestInProgress: action.isInProgress };
//     default:
//       return state;
//   }
// };

const Cart: React.FC = () => {
  // const [state, dispatch] = useReducer(reducer, {
  //   requestQueue: [],
  //   responses: [],
  //   loadingStates: [],
  //   isRequestInProgress: false,
  // });

  // const products: Product[] = [
  //   { id: 0, name: 'Product 0' },
  //   { id: 3, name: 'Product 3' },
  //   { id: 4, name: 'Product 4' },
  //   { id: 5, name: 'Product 5' },
  // ];

  // const mockAsyncRequest = (product: Product) => {
  //   return new Promise<string>((resolve) => {
  //     setTimeout(() => {
  //       resolve(`Added ${product.name} to cart`);
  //     }, 3000);
  //   });
  // };

  // const handleAddToCart = (product: Product, index: number) => {
  //   dispatch({ type: 'ADD_TO_QUEUE', product });
  //   if (!state.loadingStates[index]) {
  //     dispatch({ type: 'SET_LOADING', index, isLoading: true });
  //   }
  // };

  // useEffect(() => {

  //   const processQueue = async () => {
  //     if (state.requestQueue.length > 0 && !state.isRequestInProgress) {
  //       dispatch({ type: 'SET_REQUEST_IN_PROGRESS', isInProgress: true });
  //       const product = state.requestQueue.shift();
  //       if (product) {
  //         try {
  //           const response = await mockAsyncRequest(product);
  //           dispatch({ type: 'ADD_RESPONSE', response });
  //         } catch (error) {
  //           console.error('Error adding to cart:', error);
  //         } finally {
  //           const index = products.findIndex(p => p.id === product.id);
  //           dispatch({ type: 'SET_LOADING', index, isLoading: false });
  //           dispatch({ type: 'SET_REQUEST_IN_PROGRESS', isInProgress: false });
  //         }
  //       }
  //     }
  //   };

  //   processQueue();
  // }, [state.requestQueue, state.isRequestInProgress]);

  // return (
  //   <div>
  //     <h1>Shopping Cart</h1>
  //     {products.map((product, index) => (
  //       <div key={product.id}>
  //         <p>{product.name}</p>
  //         <button onClick={() => handleAddToCart(product, index)}>
  //           Add to Cart
  //         </button>
  //         {state.loadingStates[index] && <p>Loading...</p>}
  //       </div>
  //     ))}
  //     <h2>Responses:</h2>
  //     <ul>
  //       {state.responses.map((response, index) => (
  //         <li key={index}>{response}</li>
  //       ))}
  //     </ul>
  //   </div>
  // );
  return <></>;
};

export default Cart;
