import { WorkPostInterface } from '@deardigital/shared/interfaces';
import { ClientStoryblok, MetaType, ServiceStoryblok, WorkStoryblok } from '@deardigital/shared/schema';
import { StoryblokStory } from 'storyblok-generate-ts';
import { clientMapper } from '../client/client';
import { imageMapper } from '../image';
import { servicesMapper } from '../service/service';

export function worksMapper(pages: StoryblokStory<WorkStoryblok>[], meta: MetaType): WorkPostInterface[] {
  return pages.map((item) => workMapper(item, meta))
}

export function workMapper(page: StoryblokStory<WorkStoryblok>, meta: MetaType): WorkPostInterface {
  const client = meta.rels.find(item => item.uuid === page.content.client);
  const services = page.content.services.map((service: any) => meta.rels.find(item => item.uuid === service)) as StoryblokStory<ServiceStoryblok>[];

  return {
    title: page.name,
    slug: page.slug,
    services: servicesMapper(services, meta),
    client: clientMapper(client as StoryblokStory<ClientStoryblok>),
    thumbnail: imageMapper(page.content.thumbnail)
  }
}
