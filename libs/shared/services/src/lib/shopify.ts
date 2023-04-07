import { getSdk } from '@deardigital/shared/schema';
import { GraphQLClient } from 'graphql-request';

const endpoint = process.env['NEXT_PUBLIC_SHOPIFY_STOREFRONT_API_ENDPOINT'] as string;
const accessToken = process.env['NEXT_PUBLIC_SHOPIFY_STOREFRONT_ACCESS_TOKEN'] as string;

export const shopifyClient = new GraphQLClient(endpoint, {
  headers: { 'X-Shopify-Storefront-Access-Token': accessToken },
});

export const ShopifyService = getSdk(shopifyClient);
