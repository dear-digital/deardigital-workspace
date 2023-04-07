import { ProductShopify } from './shopify/shopify-types'

export type MetaType = {
    globals: any,
    rels: {
        uuid: string
    }[],
    products: { [id: string]: ProductShopify}
}