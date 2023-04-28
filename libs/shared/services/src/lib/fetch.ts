import { contentBlocksLinkedData, globalsMapper } from '@deardigital/shared/mapper';
import { MetaType } from '@deardigital/shared/schema';
import { getStoryblokApi } from '@storyblok/react';
import { getMetaBlog } from './meta-blog';
import { getMetaPodcast } from './meta-podcast';
import { getMetaServices } from './meta-services';
import { getMetaWork } from './meta-work';
import { getMetaShopifyData } from './shopify';

interface FetchServiceInteface {
  queries: FetchServiceQueryInterface[];
  globals?: boolean;
  resolveRelations?: string[];
}

interface FetchServiceQueryInterface {
  path: string,
  starts_with?: string;
  is_startpage?: 0 | 1 | undefined;
}

export abstract class FetchDataService<T> {
  private queries: FetchServiceQueryInterface[];
  private globals: boolean;
  private resolveRelations: string[];

  constructor(parameters: FetchServiceInteface) {
    this.queries = parameters.queries || [];
    this.globals = parameters.globals || false;
    this.resolveRelations = parameters.resolveRelations || [];

    this.fetchGlobals()
  }

  protected abstract mapper(data: any, meta: MetaType): T;

  public async fetch(preview: boolean): Promise<T> {
    const requests = this.queries.map(({ path, starts_with, is_startpage }) =>
      getStoryblokApi().get(path, {
        ...(starts_with && { starts_with: starts_with }),
        ...(is_startpage !== undefined && { is_startpage: is_startpage }),
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

    const meta: MetaType = {
      globals: globalsMapper(globals?.data.story),
      rels: page.data.rels,
      products: {},
    };

    const getLinkedData = contentBlocksLinkedData(page.data?.story);
    await getMetaBlog(preview, getLinkedData, meta);
    await getMetaPodcast(preview, getLinkedData, meta);
    await getMetaShopifyData(getLinkedData, meta);
    await getMetaServices(preview, getLinkedData, meta);
    await getMetaWork(preview, getLinkedData, meta);

    return this.mapper(page.data, meta)
  }

  private fetchGlobals(): void {
    if (!this.globals) {
      return;
    }

    this.queries.push({ path: "cdn/stories/global" });
  }
}
