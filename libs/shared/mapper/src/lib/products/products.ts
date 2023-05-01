import { MetaType, ProductPostInterface } from '@deardigital/shared/interfaces';
import { ProductShopify } from '@deardigital/shared/schema';
import { removeForbiddenIdChars } from '@deardigital/shared/utilities';


export function productsByMetaMapper(items: string[], meta: MetaType): ProductPostInterface[] {
  const products = [] as ProductPostInterface[];
  items.forEach(item => {
    const product = meta.products?.[removeForbiddenIdChars(item)]
    if (product) {
      products.push(productMapper(product));
    }
  });

  return products
}

export function productMapper(item: ProductShopify): ProductPostInterface {
  return {
    title: item.title ?? null,
    description: item.description,
  }
}
