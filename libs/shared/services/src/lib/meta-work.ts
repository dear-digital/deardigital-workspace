import { ShopifyCollectionsProductsInterface, WorkCardInterface } from '@deardigital/shared/interfaces';
import { fetchWork } from './work';

export async function getMetaWork(preview: boolean, linkedData: ShopifyCollectionsProductsInterface): Promise<WorkCardInterface[] | null> {
  if (!linkedData.work) {
    return null;
  }

  const work = await fetchWork(preview);
  if (!work) {
    return null;
  }

  return work;
}
