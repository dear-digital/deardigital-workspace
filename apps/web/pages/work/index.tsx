import { PAGE_TYPES } from '@deardigital/shared/constants';
import { FetchPageBySlug } from "@deardigital/shared/services";
import { PageView } from '@deardigital/shared/ui';
import { useStoryblokState } from '@storyblok/react';
import { GetStaticProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { i18n } from '../../next-i18next.config';
import { PageProps } from '../[slug]';

export function Index({ data }: PageProps) {
  useStoryblokState(data as any);
  return <PageView {...data} />;
}

export const getStaticProps: GetStaticProps = async ({ locale, params, preview }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'], { i18n })),
      data: await new FetchPageBySlug(PAGE_TYPES.work, '').fetch(true),
    },
    revalidate: 3600,
  };
};

export default Index;
