import { PageTypeType } from '@deardigital/shared/constants';
import { MetaType, PageInterface } from '@deardigital/shared/interfaces';
import { pageMapper } from '@deardigital/shared/mapper';
import { FetchStoryService } from './fetch-story';

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
