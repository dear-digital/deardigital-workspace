import { MetaType, WorkInterface } from '@deardigital/shared/interfaces';
import { ClientStoryblok, ServiceStoryblok, WorkStoryblok } from '@deardigital/shared/schema';
import { StoryblokStory } from 'storyblok-generate-ts';
import { clientMapper } from '../client/client';
import { contentBlocksMapper } from '../content-blocks';
import { imageMapper } from '../image';
import { serviceCardsMapper } from '../service/service-card';

export function worksMapper(works: StoryblokStory<WorkStoryblok>[], meta: MetaType): WorkInterface[] {
  return works?.map(item => workMapper(item, meta)) ?? [];
}

export function workMapper(page: StoryblokStory<WorkStoryblok>, meta: MetaType): WorkInterface {
  const client = getWorkClient(page.content.client, meta);
  const services = getWorkServices(page.content.services, meta);

  return {
    globals: meta.globals,
    contentBlocks: contentBlocksMapper(page.content.contentBlocks, meta),
    title: page.name,
    slug: page.full_slug,
    services: serviceCardsMapper(services),
    client: clientMapper(client as StoryblokStory<ClientStoryblok>),
    thumbnail: imageMapper(page.content.thumbnail)
  }
}

export function getWorkClient(client: StoryblokStory<ClientStoryblok> | string, meta?: MetaType): StoryblokStory<ClientStoryblok> | undefined {
  if (typeof client === 'string') {
    const item = meta?.rels?.find((item: { uuid: string; }) => item.uuid === client) as StoryblokStory<ClientStoryblok> | undefined
    if (item) {
      return item;
    }
  }

  return client as StoryblokStory<ClientStoryblok>;
}

export function getWorkServices(services: (StoryblokStory<ServiceStoryblok> | string)[], meta?: MetaType): StoryblokStory<ServiceStoryblok>[] {
  const isStringArray = Array.isArray(services) && services.every((item) => typeof item === 'string');
  if (isStringArray) {
    return services?.reduce((arr, val) => {
      if (!meta) {
        return arr;
      }
      const service = meta.rels?.find((item: { uuid: string; }) => item.uuid === val) as StoryblokStory<ServiceStoryblok>;
      if (!service) {
        return arr;
      }
      arr.push(service);
      return arr;
    }, [] as StoryblokStory<ServiceStoryblok>[]);
  }

  return services as StoryblokStory<ServiceStoryblok>[];
}
