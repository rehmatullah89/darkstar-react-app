import { Metadata, Viewport } from 'next';

import TagManager from '@/lib/TagManager/TagManager';
import MainLayout from '@/layouts/main-layout';
import dynamic from 'next/dynamic';
import { Suspense } from 'react';

export const metadata: Metadata = {
  metadataBase: new URL('https://www.smilebrilliant.com'),
  generator: 'Next.js',
  manifest: '/manifest.json',
};

export const viewPort = {
  themeColor: '#fff',
  initialScale: 1,
  minimumScale: 1,
  width: 'device-width',
  viewportFit: 'cover',
  shrinkToFit: 'no',
  userScalable: 'no',
};

const KlaviyoScriptDynamic = dynamic(
  () => import('@/lib/TagManager/KlaviyoScript'),{ssr:false}
);
export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  // userScalable: false,
  // Also supported by less commonly used
  // interactiveWidget: 'resizes-visual',
}
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="[color-scheme:dark]">
      <head>
        {/* <meta
          name="viewport"
          content="width=device-width, initial-scale=1, minimum-scale=1, viewport-fit=cover, shrink-to-fit=no"
        /> */}
        
      </head>

      <body className="bg-gray-1100 overflow-y-scroll bg-[url('/grid.svg')] pb-36">
        <Suspense fallback={null}>
        <TagManager />
        </Suspense>
        <MainLayout>{children}</MainLayout>
        <Suspense fallback={null}>
        <KlaviyoScriptDynamic />
        </Suspense>

     
      </body>
    </html>
  );
}
