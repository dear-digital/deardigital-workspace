import { ISbRichtext } from '@storyblok/react';
import { ProductPostInterface } from '../product/product';
import { SectionInterface } from '../section';
import { StoryblockStoryBaseInterface } from '../storyblok-story';

export interface ContentFeaturedProductsInterface extends StoryblockStoryBaseInterface {
  text: ISbRichtext;
  products: ProductPostInterface[]
  section: SectionInterface;
}