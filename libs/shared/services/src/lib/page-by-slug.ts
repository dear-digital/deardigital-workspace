import { PageTypeType } from '@deardigital/shared/constants';
import { PageInterface } from '@deardigital/shared/interfaces';
import { pageMapper } from '@deardigital/shared/mapper';
import { MetaType } from '@deardigital/shared/schema';
import { FetchDataService } from './fetch';
import { resolveRelations } from './resolve-relations';

export class FetchPageBySlug extends FetchDataService<PageInterface> {
  constructor(pageType: PageTypeType, slug: string) {
    super({
      queries: [{ path: `cdn/stories/${pageType}${slug}` }],
      globals: true,
      resolveRelations: resolveRelations,
    })
  }

  mapper(data: any, meta: MetaType) {
    return pageMapper(data.story, meta)
  }
}
