import { MetaType, ProductCardInterface } from '@deardigital/shared/interfaces';
import { ProductShopify } from '@deardigital/shared/schema';
import { removeForbiddenIdChars } from '@deardigital/shared/utilities';
import { imageShopifyMapper } from '../image/image';

export function productsByMetaMapper(items: string[], meta: MetaType): ProductCardInterface[] {
  const products = [] as ProductCardInterface[];
  items.forEach(item => {
    const product = meta.products?.[removeForbiddenIdChars(item)]
    if (product) {
      products.push(productMapper(product));
    }
  });

  return products
}

export function productMapper(item: ProductShopify): ProductCardInterface {
  return {
    title: item.title ?? null,
    description: item.description,
    sku: null,
    thumbnail: imageShopifyMapper(item.featuredImage?.url),
  }
}
