import { PageTypeType } from '@deardigital/shared/constants';
import { PagePathMapper } from '@deardigital/shared/mapper';
import { getStoryblokApi } from '@storyblok/react/rsc';

export const fetchPagePaths = async (pageType: PageTypeType, locale: string, preview: boolean) => {
  const path = "cdn/stories";
  const pages = await getStoryblokApi().get(path, {
    token: process.env['NEXT_PUBLIC_STORYBLOK_API_TOKEN'],
    version: preview ? 'draft' : 'published',
    starts_with: pageType,
    is_startpage: 0,
  })

  if (!pages) {
    throw new Error(`Page paths could not be fetched`)
  }

  return PagePathMapper(pages.data.stories, locale);
}
