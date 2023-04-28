import { PAGE_TYPES } from '@deardigital/shared/constants';
import { WorkInterface } from '@deardigital/shared/interfaces';
import { workMapper } from '@deardigital/shared/mapper';
import { MetaType } from '@deardigital/shared/schema';
import { FetchDataService } from './fetch';
import { resolveRelations } from './resolve-relations';

export class FetchWorkBySlug extends FetchDataService<WorkInterface> {
  constructor(slug: string) {
    super({
      queries: [{ path: `cdn/stories/${PAGE_TYPES.work}${slug}` }],
      globals: true,
      resolveRelations: resolveRelations,
    })
  }

  mapper(data: any, meta: MetaType) {
    return workMapper(data.story, meta)
  }
}
