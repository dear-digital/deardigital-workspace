import { PAGE_TYPES } from '@deardigital/shared/constants';
import { FetchPageBySlug } from "@deardigital/shared/services";
import { PageView } from '@deardigital/shared/ui';
import { QueryClient, dehydrate, useQuery } from '@tanstack/react-query';
import { GetStaticProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { i18n } from '../../next-i18next.config';
import { usePagePreview } from '@deardigital/shared/hooks';

export function Index({ preview }) {
  const { data } = useQuery([PAGE_TYPES.work], () => new FetchPageBySlug(PAGE_TYPES.work, '').fetch(preview));
  usePagePreview({ pageType: PAGE_TYPES.work, slug: '', preview })

  return <PageView {...data} />;
}

export const getStaticProps: GetStaticProps = async ({ locale, preview = false }) => {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery([PAGE_TYPES.work], () => new FetchPageBySlug(PAGE_TYPES.work, '').fetch(preview));

  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'], { i18n })),
      dehydratedState: dehydrate(queryClient),
    },
    revalidate: 3600,
  };
};

export default Index;
