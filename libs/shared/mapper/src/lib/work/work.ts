import { WorkInterface } from '@deardigital/shared/interfaces';
import { ClientStoryblok, MetaType, ServiceStoryblok, WorkStoryblok } from '@deardigital/shared/schema';
import { StoryblokStory } from 'storyblok-generate-ts';
import { clientMapper } from '../client/client';
import { contentBlocksMapper } from '../content-blocks';
import { imageMapper } from '../image';
import { servicesMapper } from '../service/service';

export function workMapper(page: StoryblokStory<WorkStoryblok>, meta: MetaType): WorkInterface {
  const client = meta?.rels.find(item => item.uuid === page.content.client);
  const services = page.content.services.map((service: any) => meta?.rels.find(item => item.uuid === service)) as StoryblokStory<ServiceStoryblok>[];

  return {
    globals: meta.globals,
    contentBlocks: contentBlocksMapper(page.content.contentBlocks, meta),
    title: page.name,
    slug: page.slug,
    services: servicesMapper(services, meta),
    client: clientMapper(client as StoryblokStory<ClientStoryblok>),
    thumbnail: imageMapper(page.content.thumbnail)
  }
}
