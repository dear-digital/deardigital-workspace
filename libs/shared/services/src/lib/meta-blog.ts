import { ShopifyCollectionsProductsInterface } from '@deardigital/shared/interfaces';
import { MetaType } from '@deardigital/shared/schema';
import { fetchBlog } from './blog';

export async function getMetaBlog(preview: boolean, linkedData: ShopifyCollectionsProductsInterface, meta: MetaType): Promise<MetaType> {
  if(!linkedData.blog) {
    return meta;
  }

  const blog = await fetchBlog(preview);
  if(!blog) {
    return meta;
  }

  meta.blog = blog;
  return meta;
}
