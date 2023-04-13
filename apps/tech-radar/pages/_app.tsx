import '@deardigital/shared/ui-styles';
import { apiPlugin, storyblokInit } from '@storyblok/react';
import { AppProps } from 'next/app';
import Head from 'next/head';
import { SSRProvider } from 'react-bootstrap';

storyblokInit({
  accessToken: process.env.NEXT_PUBLIC_STORYBLOK_API_TOKEN,
  use: [apiPlugin],
  apiOptions: {
    cache: {
      clear: "auto",
      type: "memory",
    },
  },
});

function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Tech Radar</title>
      </Head>
      <main className="app">
        <SSRProvider>
          <Component {...pageProps} />
        </SSRProvider>
      </main>
    </>
  );
}

export default CustomApp;
