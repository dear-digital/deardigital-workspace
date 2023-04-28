import { BlogInterface } from '@deardigital/shared/interfaces';
import { BlogStoryblok, MetaType } from '@deardigital/shared/schema';
import { StoryblokStory } from 'storyblok-generate-ts';
import { contentBlocksMapper } from '../content-blocks';
import { imageMapper } from '../image';

export function blogsMapper(blogs: StoryblokStory<BlogStoryblok>[], meta: MetaType): BlogInterface[] {
  return blogs?.map(item => blogMapper(item, meta)) ?? [];
}

export function blogMapper(page: StoryblokStory<BlogStoryblok>, meta: MetaType): BlogInterface {
  return {
    title: page?.name ?? '',
    slug: page?.full_slug,
    globals: meta.globals,
    contentBlocks: contentBlocksMapper(page.content.contentBlocks, meta),
    thumbnail: imageMapper(page.content.thumbnail)
  }
}
