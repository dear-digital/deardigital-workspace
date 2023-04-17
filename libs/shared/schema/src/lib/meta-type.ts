import { GlobalInterface } from '@deardigital/shared/interfaces'
import { ProductShopify } from './shopify/shopify-types'

export type MetaType = {
    globals: GlobalInterface | null,
    rels: {
        uuid: string
    }[],
    products: { [id: string]: ProductShopify}
}
