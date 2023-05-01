import { PodcastCardInterface, ShopifyCollectionsProductsInterface } from '@deardigital/shared/interfaces';
import { fetchPodcast } from './podcast';

export async function getMetaPodcast(preview: boolean, linkedData: ShopifyCollectionsProductsInterface): Promise<PodcastCardInterface[] | null> {
  if (!linkedData.podcast) {
    return null;
  }

  const podcast = await fetchPodcast(preview);
  if (!podcast) {
    return null;
  }

  return podcast;
}
