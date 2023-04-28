import { WorkCardInterface } from '@deardigital/shared/interfaces';
import { MetaType, WorkStoryblok } from '@deardigital/shared/schema';
import { StoryblokStory } from 'storyblok-generate-ts';
import { clientMapper } from '../client/client';
import { imageMapper } from '../image';
import { serviceCardsMapper } from '../service/service-card';
import { getWorkClient, getWorkServices } from './work';

export function workCardsMapper(pages: StoryblokStory<WorkStoryblok>[], meta?: MetaType): WorkCardInterface[] {
  return pages.map((item) => workCardMapper(item, meta))
}

export function workCardMapper(page: StoryblokStory<WorkStoryblok>, meta?: MetaType): WorkCardInterface {
  const client = getWorkClient(page.content.client, meta);
  const services = getWorkServices(page.content.services, meta);

  return {
    title: page.name,
    slug: page.full_slug,
    services: serviceCardsMapper(services),
    client: clientMapper(client),
    thumbnail: imageMapper(page.content.thumbnail)
  }
}

