import React, { ReactNode, Suspense } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { CartContextProvider } from '@/context/CartContext';
import { UserProvider } from '@/context/UserContext';
import { ToastProvider } from '@/context/ToastProvider';
import ProfileLayout from './profile-layout';

import '@/css/minCart.css';
import dynamic from 'next/dynamic';
const GehaBadge = dynamic(() => import('@/components/gehaBadge/gehaBadge'), { ssr: true });
const Header = dynamic(() => import('@/ui/header'), { ssr: true });
const Footer = dynamic(() => import('@/ui/footer'), { ssr: true });
const MobileFooter = dynamic(() => import('@/components/mobile-footer/MobileFooter'), { ssr: true });
const MobileMenu = dynamic(() => import('@/components/mobile-menu/index'), { ssr: true });
interface LayoutProps {
  title?: string;
  description?: string;
  bgColor?: string;
  children?: ReactNode;
}

export default async function Layout({ bgColor = '', children }: LayoutProps) {
  return (
    <>
      <UserProvider>
        <ToastProvider>
          <Suspense>

          <CartContextProvider>
            {/* <ProfileLayout child={children} /> */}
            <Header bgColor={bgColor} />
            <Suspense>
            <GehaBadge />
            </Suspense>
            <MobileMenu />
            {children}
            <Footer />
            <MobileFooter />
          </CartContextProvider>
          </Suspense>
        </ToastProvider>
      </UserProvider>
    </>
  );
}
