import { BlogInterface, MetaType } from '@deardigital/shared/interfaces';
import { BlogStoryblok } from '@deardigital/shared/schema';
import { StoryblokStory } from 'storyblok-generate-ts';
import { contentBlocksMapper } from '../content-blocks/content-blocks';
import { imageStoryblokMapper } from '../image/image';
import { heroBlocksMapper } from '../hero-blocks/hero-blocks';

export function blogsMapper(blogs: StoryblokStory<BlogStoryblok>[], meta: MetaType): BlogInterface[] {
  return blogs?.map(item => blogMapper(item, meta)) ?? [];
}

export function blogMapper(page: StoryblokStory<BlogStoryblok>, meta: MetaType): BlogInterface {
  return {
    title: page?.name ?? '',
    slug: page?.full_slug,
    globals: meta.globals,
    hero: heroBlocksMapper(page.content.hero, meta),
    contentBlocks: contentBlocksMapper(page.content.contentBlocks, meta),
    thumbnail: imageStoryblokMapper(page.content.thumbnail)
  }
}
