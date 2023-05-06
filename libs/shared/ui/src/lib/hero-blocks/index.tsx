import { HeroBlockInterface, MappingFunction, PodcastHeroInterface } from '@deardigital/shared/interfaces';
import isEmpty from 'lodash.isempty';
import PodcastHero from './podcast';

/* eslint-disable-next-line */
export interface HeroBlocksProps {
  hero: HeroBlockInterface;
}

const componentMapping = new Map<
  string,
  MappingFunction<HeroBlockInterface, JSX.Element>
>([
  ['podcast', (props) => <PodcastHero key={props._uid} {...(props as PodcastHeroInterface)} />],
]);

export function HeroBlocks(hero: HeroBlockInterface) {
  if(!hero || isEmpty(hero)) {
    return null;
  }

  if (!hero.component) {
    throw new Error('Hero block cannot be rendered because component is undefined.');
  }

  const componentControl = componentMapping.get(hero.component);
  if (!componentControl) {
    throw new Error(`Hero block of type ${hero.component} is missing a template`);
  }

  return componentControl(hero);
}

export default HeroBlocks;
