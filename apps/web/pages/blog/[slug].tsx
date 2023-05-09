import { PAGE_TYPES } from '@deardigital/shared/constants';
import { usePagePreview } from '@deardigital/shared/hooks';
import { FetchBlogBySlug, fetchPagePaths } from '@deardigital/shared/services';
import { PageView } from '@deardigital/shared/ui';
import { QueryClient, dehydrate, useQuery } from '@tanstack/react-query';
import { GetStaticPaths, GetStaticProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { i18n } from '../../next-i18next.config';

export function Slug({ preview, slug }) {
  const { data } = useQuery([PAGE_TYPES.blog, slug], () => new FetchBlogBySlug(slug).fetch(preview));
  usePagePreview({ pageType: PAGE_TYPES.blog, slug, preview })

  return <PageView {...data} />;
}

export const getStaticPaths: GetStaticPaths = async ({ locales }) => {
  const paths = [];

  for (const locale of locales) {
    const res = await fetchPagePaths(PAGE_TYPES.blog, locale, true);
    paths.push(...res);
  }

  return {
    fallback: false,
    paths,
  };
};

export const getStaticProps: GetStaticProps = async ({ locale, params, preview = false }) => {
  const slug = params.slug as string;
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery([PAGE_TYPES.blog, slug], () => new FetchBlogBySlug(slug).fetch(preview));

  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'], { i18n })),
      dehydratedState: dehydrate(queryClient),
      preview,
      slug
    },
    revalidate: 3600,
  };
};

export default Slug;
