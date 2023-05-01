import { PAGE_TYPES } from '@deardigital/shared/constants';
import { WorkInterface } from '@deardigital/shared/interfaces';
import { workMapper } from '@deardigital/shared/mapper';
import { MetaType } from '@deardigital/shared/interfaces';
import { FetchStoryService } from './fetch-story';

export class FetchWorkBySlug extends FetchStoryService<WorkInterface> {
  constructor(slug: string) {
    super({
      query: { path: `cdn/stories/${PAGE_TYPES.work}${slug}` },
    })
  }

  mapper(data: any, meta: MetaType) {
    return workMapper(data.story, meta)
  }
}
