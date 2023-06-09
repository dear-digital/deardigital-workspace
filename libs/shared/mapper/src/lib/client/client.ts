import { ClientInterface, MetaType } from '@deardigital/shared/interfaces';
import { ClientStoryblok } from '@deardigital/shared/schema';
import { StoryblokStory } from 'storyblok-generate-ts';
import { imageStoryblokMapper } from '../image/image';

export function clientsMapper(clients: (StoryblokStory<ClientStoryblok> | string)[] | undefined, meta: MetaType): ClientInterface[] {
  return getMetaClients(clients, meta).map(item => clientMapper(item)) ?? [];
}

export function clientMapper(client: StoryblokStory<ClientStoryblok> | undefined): ClientInterface {
  return {
    name: client?.name ?? null,
    logo: imageStoryblokMapper(client?.content?.logo)
  }
}

export function getMetaClients(clients: (StoryblokStory<ClientStoryblok> | string)[] | undefined, meta: MetaType): StoryblokStory<ClientStoryblok>[] {
  if (!clients) {
    return [];
  }

  const isStringArray = Array.isArray(clients) && clients.every((item) => typeof item === 'string');
  if (isStringArray) {
    return clients.reduce((arr, val) => {
      const client = meta?.rels?.find((item: { uuid: string }) => item.uuid === val) as StoryblokStory<ClientStoryblok> | undefined;
      if (!client) {
        return arr;
      }
      arr.push(client);
      return arr;
    }, [] as StoryblokStory<ClientStoryblok>[]);
  }

  return clients as StoryblokStory<ClientStoryblok>[];
}
