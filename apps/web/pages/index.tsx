import { PageInterface } from '@deardigital/shared/interfaces';
import { fetchPageBySlug } from "@deardigital/shared/services";
import { PageView } from '@deardigital/shared/ui';
import { useStoryblokState } from '@storyblok/react';
import { GetStaticProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { i18n } from '../next-i18next.config';
import { PageTypeConstant } from '@deardigital/shared/constants';

export interface HomeProps {
  data: PageInterface
}

export function Index({ data }: HomeProps) {
  useStoryblokState(data as any);

  // useEffect(() => {
  //   if (window !== undefined) {
  //     const sbBridge = new window.StoryblokBridge();
  //     console.log("sbBridge");
  //     sbBridge.on(["input"], function (event) {
  //       console.log(event);
  //       location.reload();
  //       // router.reload()
  //     });
  //   }
  // })

  return <PageView {...data} />;
}

export const getStaticProps: GetStaticProps = async ({ locale, preview }) => {
  const slug = `home`;

  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'], { i18n })),
      data: await fetchPageBySlug(PageTypeConstant.home, slug, true),
    },
    revalidate: 3600,
  };
};

export default Index;
