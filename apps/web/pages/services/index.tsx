import { PageInterface, ServiceInterface } from '@deardigital/shared/interfaces';
import { FetchPageBySlug, FetchServices } from "@deardigital/shared/services";
import { PageView } from '@deardigital/shared/ui';
import { useStoryblokState } from '@storyblok/react';
import { GetStaticProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { i18n } from '../../next-i18next.config';
import { PageTypeConstant } from '@deardigital/shared/constants';

export interface HomeProps {
  data: PageInterface
  services: ServiceInterface[]
}

export function Index({ data }: HomeProps) {
  useStoryblokState(data as any);

  return <PageView {...data} />;
}

export const getStaticProps: GetStaticProps = async ({ locale, params, preview }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'], { i18n })),
      services: await new FetchServices().fetch(true),
      data: await new FetchPageBySlug(PageTypeConstant.services).fetch(true),
    },
    revalidate: 3600,
  };
};

export default Index;
