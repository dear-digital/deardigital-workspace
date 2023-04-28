import { PAGE_TYPES } from '@deardigital/shared/constants';
import { PageInterface } from '@deardigital/shared/interfaces';
import { FetchPageBySlug, fetchPagePaths } from '@deardigital/shared/services';
import { PageView } from '@deardigital/shared/ui';
import { useStoryblokState } from '@storyblok/react';
import { GetStaticPaths, GetStaticProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { i18n } from '../../next-i18next.config';

/* eslint-disable-next-line */
export interface PageProps {
  data: PageInterface
}

export function Slug({ data }: PageProps) {
  useStoryblokState(data as any);

  return <PageView {...data} />;
}

export const getStaticPaths: GetStaticPaths = async ({ locales }) => {
  const paths = [];

  for (const locale of locales) {
    const res = await fetchPagePaths(PAGE_TYPES.page, locale, true);
    paths.push(...res);
  }

  return {
    fallback: false,
    paths,
  };
};

export const getStaticProps: GetStaticProps = async ({ locale, params, preview }) => {
  const slug = params.slug as string;

  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'], { i18n })),
      data: await new FetchPageBySlug(PAGE_TYPES.page, slug).fetch(true),
    },
    revalidate: 3600,
  };
};

export default Slug;
