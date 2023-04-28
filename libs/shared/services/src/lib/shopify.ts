import { ShopifyCollectionsProductsInterface } from '@deardigital/shared/interfaces';
import { shopifyLinkedDataQueryBuilder } from '@deardigital/shared/mapper';
import { MetaType, getSdk } from '@deardigital/shared/schema';
import { GraphQLClient } from 'graphql-request';

const endpoint = process.env['NEXT_PUBLIC_SHOPIFY_STOREFRONT_API_ENDPOINT'] as string;
const accessToken = process.env['NEXT_PUBLIC_SHOPIFY_STOREFRONT_ACCESS_TOKEN'] as string;

export const shopifyClient = new GraphQLClient(endpoint, {
  headers: { 'X-Shopify-Storefront-Access-Token': accessToken },
});

export const ShopifyService = getSdk(shopifyClient);

export async function getMetaShopifyData(linkedData: ShopifyCollectionsProductsInterface, meta: MetaType): Promise<MetaType> {
  const hasLinkedShopifyData = linkedData.collections.size > 0 || linkedData.products.size > 0;
  if (!hasLinkedShopifyData) {
    return meta
  }

  const query = shopifyLinkedDataQueryBuilder(linkedData);
  const response = await shopifyClient.request(query);

  if (!response) {
    return meta
  }

  meta.products = response.products;
  return meta;
}
