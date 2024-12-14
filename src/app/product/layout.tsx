import { ReactNode } from 'react';

import '@/css/product.css';
import Animate from '@/ui/resuable-componets/Animate';
export default function Layout({ children }: any) {
  return (
    <>
      <Animate />
      {children}
    </>
  );
}
