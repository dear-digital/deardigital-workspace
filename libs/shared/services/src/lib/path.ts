import { PAGE_TYPES } from '@deardigital/shared/constants';
import { PagePathMapper } from '@deardigital/shared/mapper';
import { getStoryblokApi } from '@storyblok/react';

export const fetchPagePaths = async (pageType: string, locale: string, preview: boolean) => {
  const path = "cdn/stories";

  const excluding_slugs = Object.values(PAGE_TYPES).map((item) => `${PAGE_TYPES.page}${item.replace(/\/$/, "")}`).join(',');

  const pages = await getStoryblokApi().get(path, {
    token: process.env['NEXT_PUBLIC_STORYBLOK_API_TOKEN'],
    version: preview ? 'draft' : 'published',
    starts_with: pageType,
    excluding_slugs,
  })

  if (!pages) {
    throw new Error(`Page paths could not be fetched`)
  }

  return PagePathMapper(pages.data.stories, locale);
}
