import { pageMapper } from '@deardigital/shared/mapper';
import { getStoryblokApi } from '@storyblok/react';
import { resolveRelations } from './resolve-relations';

export const fetchPageBySlug = async (slug: string, preview: boolean) => {
  const { data } = await getStoryblokApi().get(`cdn/stories/${slug}`, { 
    version: preview ? 'draft' : 'published',
    resolve_relations: resolveRelations,
  });

  if (!data) {
    throw new Error(`Stories with slug: ${slug} could not be fetched`)
  }
  
  return pageMapper(data)
}
