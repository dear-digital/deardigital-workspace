export interface ShopifyProductsStoryblok {
  items: ShopifyProductStoryblok[];
}

export interface ShopifyProductStoryblok {
  id: string;
  sku: boolean | null;
  name: string;
  type: string;
  image: string;
  variants: ShopifyProductVariantsStoryblok;
  description: string;
}

export type ShopifyProductVariantsStoryblok = string[] | boolean;
