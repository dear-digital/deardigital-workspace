import { ShopifyCollectionsProductsInterface } from '@deardigital/shared/interfaces';
import { removeForbiddenIdChars } from '@deardigital/shared/utilities';
import { collectionFields, productFields } from "@deardigital/shared/queries";

export function shopifyLinkedDataQueryBuilder(data: ShopifyCollectionsProductsInterface): string {
  const collections = Array.from(data.collections)
    .map(
      (collection) =>
        `${removeForbiddenIdChars(collection)}: collection(id: "${collection}") {
          ${collectionFields}
        }`
    )
    .join()
    .replace(/\s{2,}/g, ' ')
    .trim();

  const products = Array.from(data.products)
    .map(
      (products) =>
        `${removeForbiddenIdChars(products)}: product(handle: "${products}") {
          ${productFields}
        }`
    )
    .join()
    .replace(/\s{2,}/g, ' ')
    .trim();

  return `{${collections} ${products}}`;
}
