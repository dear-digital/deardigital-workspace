import { PageInterface } from '@deardigital/shared/interfaces';
import { fetchPageBySlug } from "@deardigital/shared/services";
import { PageView } from '@deardigital/shared/ui';
import { useStoryblokState } from '@storyblok/react';
import { GetStaticProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { i18n } from '../next-i18next.config';

export interface HomeProps {
  data: PageInterface
}

export function Index({ data }: HomeProps) {
  useStoryblokState(data as any);

  // const sbBridge = new window.StoryblokBridge();

  // sbBridge.on(["input", "published", "change"], (event) => {
  //   console.log(event)
  // });

  return (
    <div>
      <PageView {...data} />
    </div>
  );
}

export const getStaticProps: GetStaticProps = async ({ locale, preview }) => {
  const slug = `home`;

  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'], { i18n })),
      data: await fetchPageBySlug(slug, true),
    },
    revalidate: 3600,
  };
};

export default Index;
