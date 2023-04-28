import { PAGE_TYPES } from '@deardigital/shared/constants';
import { PodcastInterface } from '@deardigital/shared/interfaces';
import { blogMapper } from '@deardigital/shared/mapper';
import { MetaType } from '@deardigital/shared/schema';
import { FetchDataService } from './fetch';
import { resolveRelations } from './resolve-relations';

export class FetchPodcastBySlug extends FetchDataService<PodcastInterface> {
  constructor(slug: string = '') {
    super({
      queries: [{ path: `cdn/stories/${PAGE_TYPES.podcast}${slug}` }],
      globals: true,
      resolveRelations: resolveRelations,
    })
  }

  mapper(data: any, meta: MetaType) {
    return blogMapper(data.story, meta)
  }
}
