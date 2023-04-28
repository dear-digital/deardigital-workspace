import { PAGE_TYPES } from '@deardigital/shared/constants';
import { ServiceInterface } from '@deardigital/shared/interfaces';
import { serviceMapper } from '@deardigital/shared/mapper';
import { MetaType } from '@deardigital/shared/schema';
import { FetchDataService } from './fetch';
import { resolveRelations } from './resolve-relations';

export class FetchServiceBySlug extends FetchDataService<ServiceInterface> {
  constructor(slug: string = '') {
    super({
      queries: [{ path: `cdn/stories/${PAGE_TYPES.services}${slug}` }],
      globals: true,
      resolveRelations: resolveRelations,
    })
  }

  mapper(data: any, meta: MetaType) {
    return serviceMapper(data.story, meta)
  }
}
