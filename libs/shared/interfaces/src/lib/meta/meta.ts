import { ProductShopify } from '@deardigital/shared/schema'
import { GlobalInterface } from '../global/global'
import { ServiceCardInterface } from '../service/service-card'
import { BlogCardInterface } from '../blog/blog-card'
import { PodcastCardInterface } from '../podcast/podcast-card'
import { WorkCardInterface } from '../work/work-card'

export type MetaType = {
  globals: GlobalInterface | null,
  services?: ServiceCardInterface[] | null,
  blog?: BlogCardInterface[] | null,
  rels?: {
    uuid: string
  }[] | null,
  products: { [id: string]: ProductShopify }
  podcast?: PodcastCardInterface[] | null,
  work?: WorkCardInterface[] | null,
}
