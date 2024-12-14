// pages/_document.tsx
import { GOOGLE_MAPS_API_KEY } from '@/utils/constants';
import { Html, Head, Main, NextScript } from 'next/document';
import { DocumentContext, DocumentInitialProps } from 'next/document';
import Script from 'next/script';

// Extend the Document component with type annotations
export default function Document() {
  return (
    <Html>
      <Head>
      {/* <Script
        strategy="lazyOnload"
        id="maps-snippet"
        src={`https://maps.googleapis.com/maps/api/js?key=${GOOGLE_MAPS_API_KEY}&libraries=places`}
      /> */}
      
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

// Optionally, you can also add the custom document getInitialProps
// if needed, though for many use cases it is not required.
Document.getInitialProps = async (ctx: DocumentContext): Promise<DocumentInitialProps> => {
  const initialProps = await Document.getInitialProps(ctx);
  return initialProps;
};
