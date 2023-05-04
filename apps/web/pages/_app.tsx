import '@deardigital/shared/ui-styles';
import { apiPlugin, storyblokInit } from '@storyblok/react';
import { DehydratedState, Hydrate, QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { appWithTranslation } from 'next-i18next';
import { AppProps } from 'next/app';
import { FC, useState } from 'react';
import { SSRProvider } from 'react-bootstrap';
import i18n from '../next-i18next.config';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { SessionProvider } from "next-auth/react"
import { Session } from 'next-auth';

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

function CustomApp({ Component, pageProps: { session, dehydratedState, ...pageProps } }: AppProps<{ dehydratedState: DehydratedState, session: Session }>) {
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
    <QueryClientProvider client={queryClient}>
      <Hydrate state={dehydratedState}>
        <SSRProvider>
          <SessionProvider session={session}>
            <Component {...pageProps} />
            </SessionProvider>
        </SSRProvider>
        <ReactQueryDevtools initialIsOpen={false} />
      </Hydrate>
    </QueryClientProvider>
  );
}

export default appWithTranslation(CustomApp as FC, i18n);
