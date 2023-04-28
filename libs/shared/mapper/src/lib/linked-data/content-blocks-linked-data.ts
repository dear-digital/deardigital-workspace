import { MappingConnectedDataFunctionInterface, ShopifyCollectionsProductsInterface } from '@deardigital/shared/interfaces';
import { FeaturedProductsStoryblok, PageStoryblok } from '@deardigital/shared/schema';
import isEmpty from 'lodash.isempty';
import { StoryblokStory } from 'storyblok-generate-ts';

const componentMapping = new Map<
  string,
  MappingConnectedDataFunctionInterface<unknown, void>
>([
  ['blogs', (...args) => mapBlog(args[1])],
  // ['ContentCollection', (...args) => mapCollection(args[0] as ContentBlock, args[1], args[2])],
  ['featuredProducts', (...args) => mapProduct(args[0] as FeaturedProductsStoryblok, args[1])],
  ['podcasts', (...args) => mapPodcast(args[1])],
  ['services', (...args) => mapService(args[1])],
]);

export function contentBlocksLinkedData(page: StoryblokStory<PageStoryblok>): ShopifyCollectionsProductsInterface {
  const blocks = page?.content?.contentBlocks;

  const items: ShopifyCollectionsProductsInterface = {
    blog: false,
    collections: new Set(),
    podcast: false,
    products: new Set(),
    services: false,
  };

  if (!blocks || isEmpty(blocks)) {
    return items;
  }

  for (const block of blocks) {
    if (!block.component) {
      throw new Error('Content block cannot be mapped because component is undefined.');
    }

    const component = componentMapping.get(block.component);
    if (!component) {
      continue;
    }

    component(block, items);
  }

  return items;
}

function mapBlog(data: ShopifyCollectionsProductsInterface) {
  data.blog = true;
}

// function mapCollection(block: ContentBlock, collections: Set<string>, products: Set<string>) {
//   return block?.collections?.reduce((acc, val) => (val ? acc.add(val) : acc), collections);
// }

function mapPodcast(data: ShopifyCollectionsProductsInterface) {
  data.podcast = true;
}

function mapProduct(block: FeaturedProductsStoryblok, data: ShopifyCollectionsProductsInterface) {
  const productsList = block.products?.split(',');
  if (productsList) {
    productsList.reduce((acc, val) => val ? acc.add(val) : acc, data.products);
  }
}

function mapService(data: ShopifyCollectionsProductsInterface) {
  data.services = true;
}
