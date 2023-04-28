import { BlogCardInterface, GlobalInterface, PodcastCardInterface, ServiceCardInterface, WorkCardInterface } from '@deardigital/shared/interfaces'
import { ProductShopify } from './shopify/shopify-types'

export type MetaType = {
    globals: GlobalInterface | null,
    services?: ServiceCardInterface[],
    blog?: BlogCardInterface[],
    rels: {
      uuid: string
    }[],
    products: { [id: string]: ProductShopify}
    podcast?: PodcastCardInterface[],
    work?: WorkCardInterface[],
}
