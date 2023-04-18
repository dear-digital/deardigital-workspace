import '@deardigital/shared/ui-styles';
import { DehydratedState, Hydrate, QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { appWithTranslation } from 'next-i18next';
import { AppProps } from 'next/app';
import Head from 'next/head';
import React, { FC, useState } from 'react';
import { SSRProvider } from 'react-bootstrap';
import i18n from '../next-i18next.config';


function CustomApp({ Component, pageProps }: AppProps<{ dehydratedState: DehydratedState }>) {
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            retry: false,
            staleTime: 15 * 60 * 1000, // 15min
          },
        },
      })
  );

  return (
    <>
      <Head>
        <title>Tech Radar</title>
      </Head>

      <QueryClientProvider client={queryClient}>
        <Hydrate state={pageProps.dehydratedState}>

          <SSRProvider>
            <Component {...pageProps} />
          </SSRProvider>
        </Hydrate>
      </QueryClientProvider>
    </>
  );
}

export default appWithTranslation(CustomApp as FC, i18n);
