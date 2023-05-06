import { HeroBlockInterface, MappingContentBlocksFunction, MetaType } from '@deardigital/shared/interfaces';

const componentMapping = new Map<string, MappingContentBlocksFunction<unknown, MetaType, HeroBlockInterface>
>([
  // ['podcast', (block, meta) => mapPodcastHero(block as PodcastsStoryblok, )],
]);

export function HeroBlocksMapper(
  block: any | undefined,
  meta: MetaType,
): HeroBlockInterface | null {
  if (!block) {
    return null;
  }


    if (!block?.component) {
      throw new Error('Hero block cannot be mapped because __typename is undefined.');
    }

    const component = componentMapping.get(block.component);
    if (!component) {
      throw new Error(`Hero block of type ${block.component} is missing a heroBlocksMapper.`);
    }

    return component(block, meta);
}
