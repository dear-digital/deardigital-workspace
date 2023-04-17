import { WorkPostInterface } from '@deardigital/shared/interfaces';
import { MetaType, ServiceStoryblok, WorkStoryblok } from '@deardigital/shared/schema';
import { servicesMapper } from '../service/service';
import { imageMapper } from '../image';
import { clientMapper } from '../client/client';
import { StoryblokStory } from 'storyblok-generate-ts';

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
    client: clientMapper(client),
    thumbnail: imageMapper(page.content.thumbnail)
  }
}
