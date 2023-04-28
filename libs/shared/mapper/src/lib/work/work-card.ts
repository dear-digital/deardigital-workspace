import { WorkCardInterface } from '@deardigital/shared/interfaces';
import { ClientStoryblok, MetaType, ServiceStoryblok, WorkStoryblok } from '@deardigital/shared/schema';
import { StoryblokStory } from 'storyblok-generate-ts';
import { clientMapper } from '../client/client';
import { imageMapper } from '../image';
import { serviceCardsMapper } from '../service/service-card';

export function workCardsMapper(pages: StoryblokStory<WorkStoryblok>[], meta?: MetaType): WorkCardInterface[] {
  return pages.map((item) => workCardMapper(item, meta))
}

export function workCardMapper(page: StoryblokStory<WorkStoryblok>, meta?: MetaType): WorkCardInterface {
  const client = meta?.rels.find(item => item.uuid === page.content.client);
  const services = page.content.services.map((service: any) => meta?.rels.find(item => item.uuid === service)) as StoryblokStory<ServiceStoryblok>[];

  return {
    title: page.name,
    slug: page.full_slug,
    services: serviceCardsMapper(services),
    client: clientMapper(client as StoryblokStory<ClientStoryblok>),
    thumbnail: imageMapper(page.content.thumbnail)
  }
}
