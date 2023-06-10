import { ContentFeaturedProductsInterface, MetaType } from '@deardigital/shared/interfaces';
import { FeaturedProductsStoryblok, ShopifyProductsStoryblok } from '@deardigital/shared/schema';
import { productsByStoryblokMapper } from '../products/products-storyblok';
import { sectionMapper } from '../section';

export function mapFeaturedProductsContent(content: FeaturedProductsStoryblok, meta: MetaType): ContentFeaturedProductsInterface {
  const products = content?.['products'] as ShopifyProductsStoryblok;
  // const products = content?.products?.split(",") ?? [];

  return {
    _editable: content['_editable'] ?? null,
    _uid: content._uid,
    component: content.component,
    text: content.text ?? null,
    products: productsByStoryblokMapper(products),
    // products: productsByMetaMapper(products, meta),
    section: sectionMapper(content.section?.[0]),
  };
}
