import { PAGE_TYPES, SECTION_THEMES, SPACINGS } from '@deardigital/shared/constants';
import { FetchPageBySlug } from '@deardigital/shared/services';
import { Header, Section } from '@deardigital/shared/ui';
import { QueryClient, dehydrate, useQuery } from '@tanstack/react-query';
import { GetStaticProps } from 'next';
import { signIn, signOut, useSession } from 'next-auth/react';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { i18n } from '../../next-i18next.config';

/* eslint-disable-next-line */
export interface LoginProps { }

export function Login({ preview }) {
  const { data } = useQuery([PAGE_TYPES.home], () => new FetchPageBySlug(PAGE_TYPES.home, '').fetch(preview));
  const { data: session } = useSession();

  return (
    <main>
      <Header globals={data.globals} />
      <Section theme={SECTION_THEMES.light} spacing={SPACINGS.md}>
        <div className="container">
          <div className="row">
            <div className="col-12">
              {session && (
                <div>
                  <h1>Welcome <br /> {session.user.email}</h1>

                  <button className='btn btn-primary' onClick={() => signOut()}>Sign out</button>
                </div>
              )}
              {!session && (
                <div>
                  <h1>Login</h1>
                  <button className='btn btn-primary' onClick={() => signIn()}>Sign in</button>
                </div>
              )}
            </div>
          </div>
        </div>
      </Section>
    </main>
  );
}

export const getStaticProps: GetStaticProps = async ({ locale, params, preview = false }) => {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery([PAGE_TYPES.home], () => new FetchPageBySlug(PAGE_TYPES.home, '').fetch(preview));

  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'], { i18n })),
      dehydratedState: dehydrate(queryClient),
      preview,
    },
    revalidate: 3600,
  };
};

export default Login;
