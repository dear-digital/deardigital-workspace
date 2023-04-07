import { PagePathMapper } from '@deardigital/shared/mapper';
import { getStoryblokApi } from '@storyblok/react';
import { resolveRelations } from './resolve-relations';

export const fetchPagePaths = async (pageType: string, locale: string, preview: boolean) => {
  const path = "cdn/stories";

  const pages = await getStoryblokApi().get(path, {
      token: process.env['STORYBLOK_API_TOKEN'],
      version: preview ? 'draft' : 'published',
      starts_with: pageType,
      resolve_relations: resolveRelations,
    })

  if (!pages) {
    throw new Error(`Page paths could not be fetched`)
  }

  return PagePathMapper(pages.data.stories, locale);
}
