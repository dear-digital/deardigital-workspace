import { PAGE_TYPES } from '@deardigital/shared/constants';
import { blogCardsMapper } from '@deardigital/shared/mapper';
import { getStoryblokApi } from '@storyblok/react/rsc';
import { resolveRelations } from './resolve-relations';

export async function fetchBlog(preview: boolean) {
  const path = "cdn/stories";
  const blogs = await getStoryblokApi().get(path, {
    token: process.env['NEXT_PUBLIC_STORYBLOK_API_TOKEN'],
    version: preview ? 'draft' : 'published',
    starts_with: PAGE_TYPES.blog,
    resolve_relations: resolveRelations,
    is_startpage: 0,
  })

  if (!blogs) {
    throw new Error(`Blogs could not be fetched`)
  }

  return blogCardsMapper(blogs.data.stories);
}
