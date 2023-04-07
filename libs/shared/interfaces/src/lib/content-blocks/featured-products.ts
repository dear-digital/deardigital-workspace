import { ProductPostInterface } from '../product/product';
import { SectionInterface } from '../section';
import { StoryblockStoryBaseInterface } from '../storyblok-story';

export interface ContentFeaturedProductsInterface extends StoryblockStoryBaseInterface {
  text: string | null;
  products: ProductPostInterface[]
  section: SectionInterface;
}