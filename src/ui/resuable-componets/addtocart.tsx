'use client';
import { useCartContext } from '@/context/CartContext';
import { useEffect, useState } from 'react';

export default function AddToCart({ product }: { product: any }) {
  const { handleAddToCart, state } = useCartContext();
  const [isDisabled, setDisabled] = useState(false);

  useEffect(() => {
    const queue = state.loadingStates;
    if (queue) {
      const isLoading = queue[product.id] === true;

      if (isLoading) {
        setDisabled(true);
      } else {
        setDisabled(false);
      }
    }
  }, [state.loadingStates]);

  return (
    <button
      className={`btn btn btn-primary-purple product_type_composite add_to_cart_button ajax_add_to_cart position-relative py-2 ${isDisabled ? 'disabled' : ''} `}
      onClick={() => handleAddToCart(product)}
      style={{
        backgroundColor: '#3c98cc',
        borderColor: '#3382af',
        color: '#fff',
        padding: '20px 50px',
        border: '1px solid #3c98cc',
        minWidth: 'auto',
      }}
    >
      ADD TO CART
    </button>
  );
}
