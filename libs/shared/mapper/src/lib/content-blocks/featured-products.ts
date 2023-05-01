import { ContentFeaturedProductsInterface, MetaType } from '@deardigital/shared/interfaces';
import { FeaturedProductsStoryblok } from '@deardigital/shared/schema';
import { productsByMetaMapper } from '../products/products';
import { sectionMapper } from '../section';

export function mapContentBlockFeaturedProducts(content: FeaturedProductsStoryblok, meta: MetaType): ContentFeaturedProductsInterface {
  const products = content?.products?.split(",") ?? [];
  return {
    // @ts-ignore
    _editable: content._editable ?? null,
    _uid: content._uid,
    component: content.component,
    text: content.text ?? null,
    products: productsByMetaMapper(products, meta),
    section: sectionMapper(content.section?.[0]),
  };
}
