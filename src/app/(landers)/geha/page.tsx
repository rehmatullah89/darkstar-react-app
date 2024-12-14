import React, { useState, useEffect, useRef } from 'react';


import styles from './teeth-whitening-facts.module.css';
import Image from 'next/image';
import { useApi } from '@/hooks/useRequest';

const getContent = async () => {
  const response = await fetch(
    'https://www.smilebrilliant.com/wp-json/wp/v2/pages/403946',
    {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    },
  );
  const data = await response.json();
  return data.content.rendered;
};
const Sale = async () => {
  // const {dispatch,addToCartEvent,removeFromCart} = useCartContext()
  //   const [content, setContent] = useState<boolean | any>(false);
  //   const ref = useRef<HTMLDivElement>(null);

  //   useEffect(() => {
  //     fetch('https://www.smilebrilliant.com/wp-json/wp/v2/pages/867103', {
  //       method: 'GET',
  //       headers: {
  //         'Content-Type': 'application/json'
  //       }
  //     })
  //       .then((resp) => resp.json())
  //       .then((response) => {
  //         setContent(response.content.rendered);
  //       })
  //       .catch((error) => {
  //         // Handle errors
  //         console.error('There was a problem with the fetch operation:', error);
  //       });
  //   }, []);

  //   useEffect(() => {
  //     console.log('registering')
  //     document.querySelectorAll('.add_to_cart_button').forEach(button => {
  //         button.addEventListener('click', (event:any) => {
  //           console.log('Button clicked!', event.target);
  //           const productId = event?.target?.getAttribute('data-product_id');
  //           if(productId){
  //             // addToCartEvent(event,{id:productId})
  //             console.log(productId)
  //           }
  //         });
  //       });

  //   });
  const clickEvent = () => {
    console.log('registering');
    document.querySelectorAll('.add_to_cart_button').forEach((button) => {
      button.addEventListener('click', (event) => {
        console.log('Button clicked!', event.target);
      });
    });
  };
  const content = await getContent();
  return (
    <>
      {content ? (
        <div dangerouslySetInnerHTML={{ __html: content }} />
      ) : (
        <>Loading</>
      )}
      {/* <button onClick={clickEvent}>Register events</button> */}
    </>
  );
};

export default Sale;

// const router = useRouter();

//   useEffect(() => {
//     // Wait for the page to load
//     window.addEventListener('load', () => {
//       // Check for a fragment identifier in the URL
//       const { hash } = window.location;
//       if (hash) {
//         // Find the corresponding element
//         const element = document.querySelector(hash);
//         if (element) {
//           // Scroll to the element
//           element.scrollIntoView({ behavior: 'smooth' });
//         }
//       }
//     });
//   }, []);
