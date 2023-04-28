import { ContentBlockInterface, MappingContentBlocksFunction } from '@deardigital/shared/interfaces';
import { BlogsStoryblok, FeaturedProductsStoryblok, FeaturedWorkStoryblok, ImageStoryblok, MetaType, PageStoryblok, PodcastsStoryblok, ServicesStoryblok, TextImageStoryblok, TextStoryblok, WorksStoryblok } from '@deardigital/shared/schema';
import isEmpty from 'lodash.isempty';
import { mapContentBlockBlog } from './blog';
import { mapContentBlockFeaturedProducts } from './featured-products';
import { mapContentBlockFeaturedWork } from './featured-work';
import { mapContentBlockImage } from './image';
import { mapContentBlockPodcast } from './podcast';
import { mapContentBlockServices } from './services';
import { mapContentBlockText } from './text';
import { mapContentBlockTextImage } from './text-image';
import { mapContentBlockWork } from './work';

const componentMapping = new Map<string, MappingContentBlocksFunction<unknown, MetaType, ContentBlockInterface>
>([
  ['blogs', (block, meta) => mapContentBlockBlog(block as BlogsStoryblok, meta)],
  ['featuredProducts', (block, meta) => mapContentBlockFeaturedProducts(block as FeaturedProductsStoryblok, meta)],
  ['featuredWork', (block, meta) => mapContentBlockFeaturedWork(block as FeaturedWorkStoryblok, meta)],
  ['image', (block) => mapContentBlockImage(block as ImageStoryblok)],
  ['podcasts', (block, meta) => mapContentBlockPodcast(block as PodcastsStoryblok, meta)],
  ['services', (block, meta) => mapContentBlockServices(block as ServicesStoryblok, meta)],
  ['textImage', (block) => mapContentBlockTextImage(block as TextImageStoryblok)],
  ['text', (block) => mapContentBlockText(block as TextStoryblok)],
  ['works', (block, meta) => mapContentBlockWork(block as WorksStoryblok, meta)],
]);

export function contentBlocksMapper(
  blocks: PageStoryblok["contentBlocks"] | undefined,
  meta: MetaType,
): ContentBlockInterface[] {
  if (!blocks || isEmpty(blocks)) {
    return [];
  }

  return blocks.map((block) => {
    if (!block?.component) {
      throw new Error('Content block cannot be mapped because __typename is undefined.');
    }

    const component = componentMapping.get(block.component);
    if (!component) {
      throw new Error(`Content block of type ${block.component} is missing a contentBlocksMapper.`);
    }

    return component(block, meta);
  })
}
