import { MetaType, ShopifyCollectionsProductsInterface } from '@deardigital/shared/interfaces';
import { getGlobals } from './globals';
import { getMetaBlog } from './meta-blog';
import { getMetaPodcast } from './meta-podcast';
import { getMetaServices } from './meta-services';
import { getMetaWork } from './meta-work';

export async function getMeta(preview: boolean, linkedData: ShopifyCollectionsProductsInterface): Promise<MetaType> {
  // @todo Michiel
  // await getMetaShopifyData(linkedData);

  return {
    // rels: page?.data?.rels ?? undefined,
    products: {},
    globals: await getGlobals(preview),
    blog: await getMetaBlog(preview, linkedData),
    podcast: await getMetaPodcast(preview, linkedData),
    services: await getMetaServices(preview, linkedData),
    work: await getMetaWork(preview, linkedData),
  };
}
