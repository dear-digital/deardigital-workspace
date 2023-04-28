import { ShopifyCollectionsProductsInterface } from './shopify/shopify';

export type MappingFunction<PayloadType, ReturnType> = (payload: PayloadType) => ReturnType;
export type MappingContentBlocksFunction<PayloadType, MetaType, ReturnType> = (payload: PayloadType, meta: MetaType) => ReturnType;

export type MappingConnectedDataFunctionInterface<PayloadType, ReturnType> = (payload: PayloadType, items: ShopifyCollectionsProductsInterface) => ReturnType;
