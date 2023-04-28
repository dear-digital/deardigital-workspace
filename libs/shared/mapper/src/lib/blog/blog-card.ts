import { BlogCardInterface } from '@deardigital/shared/interfaces';
import { ServiceStoryblok } from '@deardigital/shared/schema';
import { StoryblokStory } from 'storyblok-generate-ts';
import { imageMapper } from '../image';


export function blogCardsMapper(blogs: StoryblokStory<ServiceStoryblok>[]): BlogCardInterface[] {
  return blogs?.map(item => blogCardMapper(item)) ?? [];
}

export function blogCardMapper(page: StoryblokStory<ServiceStoryblok>): BlogCardInterface {
  return {
    title: page?.name ?? '',
    slug: page?.full_slug,
    thumbnail: imageMapper(page.content.thumbnail)
  }
}
