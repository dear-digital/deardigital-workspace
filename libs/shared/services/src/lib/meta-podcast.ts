import { ShopifyCollectionsProductsInterface } from '@deardigital/shared/interfaces';
import { MetaType } from '@deardigital/shared/schema';
import { fetchPodcast } from './podcast';

export async function getMetaPodcast(preview: boolean, linkedData: ShopifyCollectionsProductsInterface, meta: MetaType): Promise<MetaType> {
  if (!linkedData.podcast) {
    return meta;
  }

  const podcast = await fetchPodcast(preview);
  if (!podcast) {
    return meta;
  }

  meta.podcast = podcast;
  return meta;
}
