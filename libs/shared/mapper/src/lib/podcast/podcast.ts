import { MetaType, PodcastInterface } from '@deardigital/shared/interfaces';
import { PodcastStoryblok } from '@deardigital/shared/schema';
import { StoryblokStory } from 'storyblok-generate-ts';
import { contentBlocksMapper } from '../content-blocks';
import { imageMapper } from '../image';


export function podcastsMapper(podcasts: StoryblokStory<PodcastStoryblok>[], meta: MetaType): PodcastInterface[] {
  return podcasts?.map(item => podcastMapper(item, meta)) ?? [];
}

export function podcastMapper(page: StoryblokStory<PodcastStoryblok>, meta: MetaType): PodcastInterface {
  return {
    title: page?.name ?? '',
    slug: page?.full_slug,
    globals: meta.globals,
    contentBlocks: contentBlocksMapper(page.content.contentBlocks, meta),
    thumbnail: imageMapper(page.content.thumbnail)
  }
}
