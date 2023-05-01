import { BlogCardInterface, GlobalInterface, PodcastCardInterface, ServiceCardInterface, WorkCardInterface } from '@deardigital/shared/interfaces'
import { ProductShopify } from '@deardigital/shared/schema'

export type MetaType = {
    globals: GlobalInterface | null,
    services?: ServiceCardInterface[] | null,
    blog?: BlogCardInterface[] | null,
    rels?: {
      uuid: string
    }[] | null,
    products: { [id: string]: ProductShopify}
    podcast?: PodcastCardInterface[] | null,
    work?: WorkCardInterface[] | null,
}
