import { contentBlocksLinkedData, metaMapper, pageMapper, shopifyLinkedDataQueryBuilder } from '@deardigital/shared/mapper';
import { getStoryblokApi } from '@storyblok/react';
import { resolveRelations } from './resolve-relations';
import { shopifyClient } from './shopify';
import { PageTypeType } from '@deardigital/shared/constants';

export const fetchPageBySlug = async (pageType: PageTypeType, slug: string, preview: boolean) => {
  const paths = [`cdn/stories/${pageType}${slug}`, "cdn/stories/global"];

  const requests = paths.map((path) =>
    getStoryblokApi().get(path, {
      token: process.env['NEXT_PUBLIC_STORYBLOK_API_TOKEN'],
      version: preview ? 'draft' : 'published',
      resolve_relations: resolveRelations,
    })
  );

  const [page, globals] = await Promise.all(requests);

  if (!page) {
    throw new Error(`Page with slug: ${slug} could not be fetched`)
  }

  if (!globals) {
    throw new Error(`Globals could not be fetched`)
  }

  const getLinkedData = contentBlocksLinkedData(page.data.story);

  if (!getLinkedData) {
    return pageMapper(page.data.story, metaMapper(page.data, globals.data.story));
  }

  const query = shopifyLinkedDataQueryBuilder(getLinkedData);
  const shopifyRes = await shopifyClient.request(query);


  return pageMapper(page.data.story, metaMapper(page.data, globals.data.story, shopifyRes))
}
