import { PodcastCardInterface } from '@deardigital/shared/interfaces';
import { PodcastStoryblok } from '@deardigital/shared/schema';
import { StoryblokStory } from 'storyblok-generate-ts';
import { imageStoryblokMapper } from '../image/image';


export function podcastCardsMapper(podcasts: StoryblokStory<PodcastStoryblok>[]): PodcastCardInterface[] {
  return podcasts?.map(item => podcastCardMapper(item)) ?? [];
}

export function podcastCardMapper(page: StoryblokStory<PodcastStoryblok>): PodcastCardInterface {
  return {
    title: page?.name ?? '',
    slug: page?.full_slug,
    thumbnail: imageStoryblokMapper(page.content.thumbnail)
  }
}
