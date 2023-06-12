import { PAGE_TYPES } from '@deardigital/shared/constants';
import { workCardsMapper } from '@deardigital/shared/mapper';
import { getStoryblokApi } from '@storyblok/react/rsc';
import { resolveRelations } from './resolve-relations';

export async function fetchWork(preview: boolean) {
  const path = "cdn/stories";
  const work = await getStoryblokApi().get(path, {
    token: process.env['NEXT_PUBLIC_STORYBLOK_API_TOKEN'],
    version: preview ? 'draft' : 'published',
    starts_with: PAGE_TYPES.work,
    resolve_relations: resolveRelations,
    is_startpage: 0,
  })

  if (!work) {
    throw new Error(`Services could not be fetched`)
  }

  return workCardsMapper(work.data.stories);
}
