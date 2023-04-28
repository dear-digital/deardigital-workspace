import { ShopifyCollectionsProductsInterface } from '@deardigital/shared/interfaces';
import { MetaType } from '@deardigital/shared/schema';
import { fetchServices } from './services';

export async function getMetaServices(preview: boolean, linkedData: ShopifyCollectionsProductsInterface, meta: MetaType): Promise<MetaType> {
  if(!linkedData.services) {
    return meta;
  }

  const services = await fetchServices(preview);
  if(!services) {
    return meta;
  }

  meta.services = services;
  return meta;
}
