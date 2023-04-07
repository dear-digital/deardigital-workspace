import { ContentBlockInterface, MappingContentBlocksFunction } from '@deardigital/shared/interfaces';
import { FeaturedProductsStoryblok, FeaturedWorkStoryblok, ImageStoryblok, MetaType, PageStoryblok, TextImageStoryblok, TextStoryblok } from '@deardigital/shared/schema';
import isEmpty from 'lodash.isempty';
import { mapContentBlockFeaturedProducts } from './featured-products';
import { mapContentBlockFeaturedWork } from './featured-work';
import { mapContentBlockImage } from './image';
import { mapContentBlockText } from './text';
import { mapContentBlockTextImage } from './text-image';

const componentMapping = new Map<string, MappingContentBlocksFunction<unknown, MetaType, ContentBlockInterface>
>([
  ['featuredProducts', (block, meta) => mapContentBlockFeaturedProducts(block as FeaturedProductsStoryblok, meta)],
  ['featuredWork', (block, meta) => mapContentBlockFeaturedWork(block as FeaturedWorkStoryblok, meta)],
  ['image', (block) => mapContentBlockImage(block as ImageStoryblok)],
  ['textImage', (block) => mapContentBlockTextImage(block as TextImageStoryblok)],
  ['text', (block) => mapContentBlockText(block as TextStoryblok)],
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
