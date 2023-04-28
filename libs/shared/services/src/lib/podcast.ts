import { PAGE_TYPES } from '@deardigital/shared/constants';
import { podcastCardsMapper } from '@deardigital/shared/mapper';
import { getStoryblokApi } from '@storyblok/react';
import { resolveRelations } from './resolve-relations';

export async function fetchPodcast(preview: boolean) {
  const path = "cdn/stories";
  const podcasts = await getStoryblokApi().get(path, {
    token: process.env['NEXT_PUBLIC_STORYBLOK_API_TOKEN'],
    version: preview ? 'draft' : 'published',
    starts_with: PAGE_TYPES.podcast,
    resolve_relations: resolveRelations,
    is_startpage: 0,
  })

  if (!podcasts) {
    throw new Error(`Podcasts could not be fetched`)
  }

  return podcastCardsMapper(podcasts.data.stories);
}
