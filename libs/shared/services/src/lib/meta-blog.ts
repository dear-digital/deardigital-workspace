import { BlogCardInterface, ShopifyCollectionsProductsInterface } from '@deardigital/shared/interfaces';
import { fetchBlog } from './blog';

export async function getMetaBlog(preview: boolean, linkedData: ShopifyCollectionsProductsInterface): Promise<BlogCardInterface[] | null> {
  if (!linkedData.blog) {
    return null;
  }

  const blog = await fetchBlog(preview);
  if (!blog) {
    return null;
  }

  return blog;
}
