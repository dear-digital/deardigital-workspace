import { ISbRichtext } from '@storyblok/react';
import { ProductCardInterface } from '../product/product-card';
import { SectionInterface } from '../section';
import { StoryblockStoryBaseInterface } from '../storyblok-story';

export interface ContentFeaturedProductsInterface extends StoryblockStoryBaseInterface {
  text: ISbRichtext;
  products: ProductCardInterface[] | null;
  section: SectionInterface;
}
