import { HeroBlockInterface, MappingContentBlocksFunction, MetaType } from '@deardigital/shared/interfaces';
import isEmpty from 'lodash.isempty';

const componentMapping = new Map<string, MappingContentBlocksFunction<unknown, MetaType, HeroBlockInterface>
>([
  // ['podcast', (block, meta) => mapPodcastHero(block as PodcastsStoryblok, )],
]);

export function heroBlocksMapper(
  block: any | undefined,
  meta: MetaType,
): HeroBlockInterface | null {
  if (!block || isEmpty(block)) {
    return null;
  }

  if (!block?.component) {
    throw new Error('Hero block cannot be mapped because component is undefined.');
  }

  const component = componentMapping.get(block.component);
  if (!component) {
    throw new Error(`Hero block of type ${block.component} is missing a heroBlocksMapper.`);
  }

  return component(block, meta);
}
