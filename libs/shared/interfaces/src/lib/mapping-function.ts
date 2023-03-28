export type MappingFunction<PayloadType, ReturnType> = (payload: PayloadType) => ReturnType;
export type MappingContentBlocksFunction<PayloadType, MetaType, ReturnType> = (payload: PayloadType, meta: MetaType) => ReturnType;
