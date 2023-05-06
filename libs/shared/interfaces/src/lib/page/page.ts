import { ContentBlockInterface } from '../content-blocks/content-blocks';
import { GlobalInterface } from '../global/global';
import { HeroBlockInterface } from '../hero-blocks/hero-blocks';

export interface PageInterface {
  globals: GlobalInterface | null,
  hero: HeroBlockInterface,
  contentBlocks: ContentBlockInterface[];
}
