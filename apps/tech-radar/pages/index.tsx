import { fetchTechRadar } from '@deardigital/shared/services';
import { TechRadar } from '@deardigital/shared/ui';
import { QueryClient, dehydrate } from '@tanstack/react-query';
import { GetStaticProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { i18n } from '../next-i18next.config';

export function Index() {
  return (
    <TechRadar />
  );
}

export const getStaticProps: GetStaticProps = async ({ locale, preview }) => {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery(['tech-radar', locale], () =>
    fetchTechRadar(undefined)
  );

  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'], { i18n })),
      dehydratedState: dehydrate(queryClient),
    },
    revalidate: 3600,
  };
};

export default Index;
