import { ServiceCardInterface, ShopifyCollectionsProductsInterface } from '@deardigital/shared/interfaces';
import { fetchServices } from './services';

export async function getMetaServices(preview: boolean, linkedData: ShopifyCollectionsProductsInterface): Promise<ServiceCardInterface[] | null> {
  if(!linkedData.services) {
    return null;
  }

  const services = await fetchServices(preview);
  if(!services) {
    return null;
  }

  return services;
}
