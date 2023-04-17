import { ServiceInterface } from '@deardigital/shared/interfaces';
import { MetaType, ServiceStoryblok } from '@deardigital/shared/schema';
import { StoryblokStory } from 'storyblok-generate-ts';


export function servicesMapper(pages: StoryblokStory<ServiceStoryblok>[], meta: MetaType): ServiceInterface[] {
  return pages?.map(item => serviceMapper(item, meta)) ?? [];
}

export function serviceMapper(page: StoryblokStory<ServiceStoryblok>, meta: MetaType): ServiceInterface {
  return {
    title: page?.name,
  }
}
