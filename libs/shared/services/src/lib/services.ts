import { PAGE_TYPES } from '@deardigital/shared/constants';
import { serviceCardsMapper } from '@deardigital/shared/mapper';
import { getStoryblokApi } from '@storyblok/react';
import { resolveRelations } from './resolve-relations';

export async function fetchServices(preview: boolean) {
  const path = "cdn/stories";
  const services = await getStoryblokApi().get(path, {
    token: process.env['NEXT_PUBLIC_STORYBLOK_API_TOKEN'],
    version: preview ? 'draft' : 'published',
    starts_with: PAGE_TYPES.services,
    resolve_relations: resolveRelations,
    is_startpage: 0,
  })

  if (!services) {
    throw new Error(`Services could not be fetched`)
  }

  return serviceCardsMapper(services.data.stories);
}
