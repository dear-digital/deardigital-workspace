import { ServiceCardInterface } from '@deardigital/shared/interfaces';
import { ServiceStoryblok } from '@deardigital/shared/schema';
import { StoryblokStory } from 'storyblok-generate-ts';
import { imageStoryblokMapper } from '../image/image';


export function serviceCardsMapper(services?: StoryblokStory<ServiceStoryblok>[]): ServiceCardInterface[] {
  return services?.map(item => serviceCardMapper(item)) ?? [];
}

export function serviceCardMapper(page: StoryblokStory<ServiceStoryblok>): ServiceCardInterface {
  return {
    title: page?.name ?? '',
    slug: page?.full_slug,
    thumbnail: imageStoryblokMapper(page?.content.thumbnail)
  }
}
