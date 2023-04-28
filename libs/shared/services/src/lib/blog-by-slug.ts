import { PAGE_TYPES } from '@deardigital/shared/constants';
import { BlogInterface } from '@deardigital/shared/interfaces';
import { blogMapper } from '@deardigital/shared/mapper';
import { MetaType } from '@deardigital/shared/schema';
import { FetchDataService } from './fetch';
import { resolveRelations } from './resolve-relations';

export class FetchBlogBySlug extends FetchDataService<BlogInterface> {
  constructor(slug: string = '') {
    super({
      queries: [{ path: `cdn/stories/${PAGE_TYPES.blog}${slug}` }],
      globals: true,
      resolveRelations: resolveRelations,
    })
  }

  mapper(data: any, meta: MetaType) {
    return blogMapper(data.story, meta)
  }
}
