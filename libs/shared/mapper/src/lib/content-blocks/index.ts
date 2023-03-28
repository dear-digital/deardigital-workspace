import { ContentBlockInterface, MappingContentBlocksFunction } from '@deardigital/shared/interfaces';
import { ContentBlock, MetaType } from '@deardigital/shared/schema';
import isEmpty from 'lodash.isempty';
import { mapContentBlockFeaturedWork } from './featured-work';
import { mapContentBlockImage } from './image';
import { mapContentBlockText } from './text';

const componentMapping = new Map<
  ContentBlock['component'],
  MappingContentBlocksFunction<ContentBlock, MetaType, ContentBlockInterface>
>([
  ['featuredWork', (block, meta) => mapContentBlockFeaturedWork(block, meta)],
  ['image', (block) => mapContentBlockImage(block)],
  ['text', (block) => mapContentBlockText(block)],
]);

export function contentBlocksMapper(
  blocks: ContentBlock[] | undefined,
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
