import { PAGE_TYPES } from '@deardigital/shared/constants';
import { BlogInterface } from '@deardigital/shared/interfaces';
import { blogMapper } from '@deardigital/shared/mapper';
import { MetaType } from '@deardigital/shared/interfaces';
import { FetchStoryService } from './fetch-story';

export class FetchBlogBySlug extends FetchStoryService<BlogInterface> {
  constructor(slug = '') {
    super({
      query: { path: `cdn/stories/${PAGE_TYPES.blog}${slug}` },
    })
  }

  mapper(data: any, meta: MetaType) {
    return blogMapper(data.story, meta)
  }
}
