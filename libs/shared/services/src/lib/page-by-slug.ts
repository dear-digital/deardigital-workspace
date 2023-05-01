import { PageTypeType } from '@deardigital/shared/constants';
import { PageInterface } from '@deardigital/shared/interfaces';
import { pageMapper } from '@deardigital/shared/mapper';
import { MetaType } from '@deardigital/shared/interfaces';
import { FetchStoryService } from './fetch-story';
import { resolveRelations } from './resolve-relations';

export class FetchPageBySlug extends FetchStoryService<PageInterface> {
  constructor(pageType: PageTypeType, slug: string) {
    super({
      query: { path: `cdn/stories/${pageType}${slug}` },
    })
  }

  mapper(data: any, meta: MetaType) {
    return pageMapper(data.story, meta)
  }
}
