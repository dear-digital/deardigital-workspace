import { contentBlocksLinkedData, metaMapper, shopifyLinkedDataQueryBuilder } from '@deardigital/shared/mapper';
import { MetaType } from '@deardigital/shared/schema';
import { getStoryblokApi } from '@storyblok/react';
import { shopifyClient } from './shopify';

interface FetchServiceInteface {
  queries: FetchServiceQueryInterface[];
  globals?: boolean;
  resolveRelations?: string[];
}

interface FetchServiceQueryInterface {
  path: string,
  starts_with?: string;
}

export abstract class FetchDataService<UResponse, TData> {
  private queries: FetchServiceQueryInterface[];
  private globals: boolean;
  private resolveRelations: string[];

  constructor(parameters: FetchServiceInteface) {
    this.queries = parameters.queries || [];
    this.globals = parameters.globals || false;
    this.resolveRelations = parameters.resolveRelations || [];

    this.fetchGlobals()
  }

  protected abstract mapper(page: UResponse, meta: MetaType): TData;

  public async fetch(preview: boolean): Promise<TData> {
    const requests = this.queries.map(({ path, starts_with }) =>
      getStoryblokApi().get(path, {
        ...(starts_with && { starts_with: starts_with }),
        token: process.env['NEXT_PUBLIC_STORYBLOK_API_TOKEN'],
        version: preview ? 'draft' : 'published',
        resolve_relations: this.resolveRelations,
      })
    );

    const [page, globals] = await Promise.all(requests);

    if (!page) {
      throw new Error(`Stories with path ${this.queries?.[0].path} could not be fetched`)
    }

    if (this.globals && !globals) {
      throw new Error(`Globals could not be fetched`)
    }

    const getLinkedData = contentBlocksLinkedData(page.data.story);
    const hasLinkedData = getLinkedData?.collections?.length || getLinkedData?.products?.length;

    if (!hasLinkedData) {
      return this.mapper(page.data.story, metaMapper(page.data, globals?.data.story));
    }

    const query = shopifyLinkedDataQueryBuilder(getLinkedData);
    const shopifyRes = await shopifyClient.request(query);

    return this.mapper(page.data.story, metaMapper(page.data, globals?.data.story, shopifyRes))
  }

  private fetchGlobals(): void {
    if (!this.globals) {
      return;
    }

    this.queries.push({ path: "cdn/stories/global" });
  }
}
