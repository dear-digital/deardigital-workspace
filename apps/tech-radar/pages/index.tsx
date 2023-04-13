import { TechRadarInterface } from '@deardigital/shared/interfaces';
import { fetchTechRadar } from '@deardigital/shared/services';
import { TechRadar } from '@deardigital/shared/ui';
import { useStoryblokState } from '@storyblok/react';
import { GetStaticProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { i18n } from '../next-i18next.config';

export interface HomeProps {
  data: TechRadarInterface;
}

export function Index({ data }: HomeProps) {
  useStoryblokState(data as any);

  return (
    <TechRadar {...data} />
  );
}

export const getStaticProps: GetStaticProps = async ({ locale, preview }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'], { i18n })),
      data: await fetchTechRadar(undefined, true),
    },
    revalidate: 3600,
  };
};

export default Index;
