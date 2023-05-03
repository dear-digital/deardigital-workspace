import { MetaType, ServiceInterface } from '@deardigital/shared/interfaces';
import { ServiceStoryblok } from '@deardigital/shared/schema';
import { StoryblokStory } from 'storyblok-generate-ts';
import { contentBlocksMapper } from '../content-blocks';
import { imageStoryblokMapper } from '../image/image';


export function servicesMapper(services: StoryblokStory<ServiceStoryblok>[], meta: MetaType): ServiceInterface[] {
  return services?.map(item => serviceMapper(item, meta)) ?? [];
}

export function serviceMapper(page: StoryblokStory<ServiceStoryblok>, meta: MetaType): ServiceInterface {
  return {
    title: page?.name ?? '',
    slug: page?.full_slug,
    globals: meta.globals,
    contentBlocks: contentBlocksMapper(page.content.contentBlocks, meta),
    thumbnail: imageStoryblokMapper(page.content.thumbnail)
  }
}
