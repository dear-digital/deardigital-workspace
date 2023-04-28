import { ShopifyCollectionsProductsInterface } from '@deardigital/shared/interfaces';
import { MetaType } from '@deardigital/shared/schema';
import { fetchWork } from './work';

export async function getMetaWork(preview: boolean, linkedData: ShopifyCollectionsProductsInterface, meta: MetaType): Promise<MetaType> {
  if(!linkedData.work) {
    return meta;
  }

  const work = await fetchWork(preview);
  if(!work) {
    return meta;
  }

  meta.work = work;
  return meta;
}
