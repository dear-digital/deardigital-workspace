import { PAGE_TYPES } from '@deardigital/shared/constants';
import { ServiceInterface } from '@deardigital/shared/interfaces';
import { serviceMapper } from '@deardigital/shared/mapper';
import { MetaType } from '@deardigital/shared/interfaces';
import { FetchStoryService } from './fetch-story';

export class FetchServiceBySlug extends FetchStoryService<ServiceInterface> {
  constructor(slug: string = '') {
    super({
      query: { path: `cdn/stories/${PAGE_TYPES.services}${slug}` },
    })
  }

  mapper(data: any, meta: MetaType) {
    return serviceMapper(data.story, meta)
  }
}
