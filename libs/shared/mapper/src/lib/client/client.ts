import { ClientInterface } from '@deardigital/shared/interfaces';
import { ClientStoryblok, MetaType } from '@deardigital/shared/schema';
import { StoryblokStory } from 'storyblok-generate-ts';
import { imageMapper } from '../image';

export function clientsMapper(clients: (StoryblokStory<ClientStoryblok> | string)[] | undefined, meta: MetaType): ClientInterface[] {
  return getMetaClients(clients, meta).map(item => clientMapper(item)) ?? [];
}

export function clientMapper(client: StoryblokStory<ClientStoryblok> | undefined): ClientInterface {
  return {
    name: client?.name ?? null,
    logo: imageMapper(client?.content.logo)
  }
}

export function getMetaClients(clients: (StoryblokStory<ClientStoryblok> | string)[] | undefined, meta: MetaType): StoryblokStory<ClientStoryblok>[] {
  if (!clients) {
    return [];
  }

  const isStringArray = Array.isArray(clients) && clients.every((item) => typeof item === 'string');
  if (isStringArray) {
    return clients.reduce((arr, val) => {
      const client = meta.rels.find(item => item.uuid === val) as StoryblokStory<ClientStoryblok> | undefined;
      if (!client) {
        return arr;
      }
      arr.push(client);
      return arr;
    }, [] as StoryblokStory<ClientStoryblok>[]);
  }

  return clients as StoryblokStory<ClientStoryblok>[];
}
