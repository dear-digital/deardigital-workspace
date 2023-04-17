import { PageTypeConstant } from '@deardigital/shared/constants';
import { PageInterface } from '@deardigital/shared/interfaces';
import { FetchPageBySlug, FetchServiceBySlug, FetchServices, fetchPagePaths } from '@deardigital/shared/services';
import { PageView } from '@deardigital/shared/ui';
import { useStoryblokState } from '@storyblok/react';
import { GetStaticPaths, GetStaticProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { i18n } from '../../next-i18next.config';
import { useEffect } from 'react';

/* eslint-disable-next-line */
export interface SlugProps {
  data: PageInterface
}

export function Slug({ data }: SlugProps) {
  useStoryblokState(data as any);

  return <PageView {...data} />;
}

export const getStaticPaths: GetStaticPaths = async ({ locales }) => {
  const paths = [];

  for (const locale of locales) {
    const res = await fetchPagePaths(PageTypeConstant.services, locale, true);
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
      data: await new FetchServiceBySlug(slug).fetch(true)
    },
    revalidate: 3600,
  };
};

export default Slug;
