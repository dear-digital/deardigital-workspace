import { ProductCardInterface } from '@deardigital/shared/interfaces';
import { ShopifyProductStoryblok, ShopifyProductsStoryblok } from '@deardigital/shared/schema';
import { imageShopifyMapper } from '../image/image';


export function productsByStoryblokMapper(json: ShopifyProductsStoryblok): ProductCardInterface[] {
  return json.items.map(item => productStoryblokMapper(item));
}

export function productStoryblokMapper(item: ShopifyProductStoryblok): ProductCardInterface {
  return {
    title: item.name ?? null,
    description: item.description,
    sku: null,
    thumbnail: imageShopifyMapper(item.image) ?? null,
  }
}
