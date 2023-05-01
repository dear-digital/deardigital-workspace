import { MetaType } from '@deardigital/shared/interfaces';
import { getStoryblokApi } from '@storyblok/react';
import { getMeta } from './meta';
import { resolveRelations } from './resolve-relations';
import { contentBlocksLinkedData } from '@deardigital/shared/mapper';

interface FetchServiceInteface {
  query: FetchServiceQueryInterface;
}

interface FetchServiceQueryInterface {
  path: string,
  starts_with?: string;
  is_startpage?: 0 | 1 | undefined;
}

export abstract class FetchStoryService<T> {
  private query: FetchServiceQueryInterface;

  constructor(parameters: FetchServiceInteface) {
    this.query = parameters.query;
  }

  protected abstract mapper(data: any, meta: MetaType): T;

  public async fetch(preview: boolean): Promise<T> {
    const page = await getStoryblokApi().get(this.query.path, {
      ...(this.query.starts_with && { starts_with: this.query.starts_with }),
      ...(this.query.is_startpage !== undefined && { is_startpage: this.query.is_startpage }),
      token: process.env['NEXT_PUBLIC_STORYBLOK_API_TOKEN'],
      version: preview ? 'draft' : 'published',
      resolve_relations: resolveRelations,
    })

    if (!page) {
      throw new Error(`Stories with path ${this.query.path} could not be fetched`)
    }

    const linkedData = contentBlocksLinkedData(page.data.story.content.contentBlocks)
    const meta = await getMeta(preview, linkedData)

    return this.mapper(page.data, meta)
  }
}
