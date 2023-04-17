import { MappingConnectedDataFunctionInterface, ShopifyCollectionsProductsInterface } from '@deardigital/shared/interfaces';
import { FeaturedProductsStoryblok, PageStoryblok } from '@deardigital/shared/schema';
import isEmpty from 'lodash.isempty';
import { StoryblokStory } from 'storyblok-generate-ts';

const componentMapping = new Map<
  string,
  MappingConnectedDataFunctionInterface<unknown, void>
>([
  // ['ContentCollection', (...args) => mapCollection(args[0] as ContentBlock, args[1], args[2])],
  ['featuredProducts', (...args) => mapProduct(args[0] as FeaturedProductsStoryblok, args[1], args[2])],
]);

export function contentBlocksLinkedData(page: StoryblokStory<PageStoryblok>): ShopifyCollectionsProductsInterface | null {
  const blocks = page?.content?.contentBlocks;

  if (!blocks || isEmpty(blocks)) {
    return null;
  }

  const collections = new Set<string>();
  const products = new Set<string>();

  for (const block of blocks) {
    if (!block.component) {
      throw new Error('Content block cannot be mapped because component is undefined.');
    }

    const component = componentMapping.get(block.component);
    if (!component) {
      continue;
    }

    component(block, collections, products);
  }

  return {
    collections: Array.from(collections),
    products: Array.from(products),
  };
}

// function mapCollection(block: ContentBlock, collections: Set<string>, products: Set<string>) {
//   return block?.collections?.reduce((acc, val) => (val ? acc.add(val) : acc), collections);
// }

function mapProduct(block: FeaturedProductsStoryblok, collections: Set<string>, products: Set<string>) {
  const productsList = block.products?.split(',');
  if (productsList) {
    productsList.reduce((acc, val) => val ? acc.add(val) : acc, products);
  }
}
