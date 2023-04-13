import { DepartmentConstant, DepartmentType } from '@deardigital/shared/constants';
import { TechRadarInterface } from '@deardigital/shared/interfaces';
import { fetchTechRadar } from '@deardigital/shared/services';
import { TechRadar } from '@deardigital/shared/ui';
import { useStoryblokState } from '@storyblok/react';
import { GetStaticPaths, GetStaticProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useRouter } from 'next/router';
import { i18n } from '../next-i18next.config';

export interface HomeProps {
  data: TechRadarInterface;
}

type FilterValue = DepartmentType | null;

export function Index({ data }: HomeProps) {
  const router = useRouter()
  useStoryblokState(data as any);

  return (
    <TechRadar {...data} />
  );
}

export const getStaticPaths: GetStaticPaths = async ({ locales }) => {
  return {
    fallback: false,
    paths: Object.keys(DepartmentConstant).map(department => ({
      locale: locales[0],
      params: { department },
    })),
  };
};

export const getStaticProps: GetStaticProps = async ({ locale, params, preview }) => {
  const department = params.department as DepartmentType;

  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'], { i18n })),
      data: await fetchTechRadar(department, true),
    },
    revalidate: 3600,
  };
};

export default Index;
