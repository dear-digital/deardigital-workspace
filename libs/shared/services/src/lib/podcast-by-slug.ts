import { PAGE_TYPES } from '@deardigital/shared/constants';
import { PodcastInterface } from '@deardigital/shared/interfaces';
import { blogMapper } from '@deardigital/shared/mapper';
import { MetaType } from '@deardigital/shared/interfaces';
import { FetchStoryService } from './fetch-story';

export class FetchPodcastBySlug extends FetchStoryService<PodcastInterface> {
  constructor(slug: string = '') {
    super({
      query: { path: `cdn/stories/${PAGE_TYPES.podcast}${slug}` },
    })
  }

  mapper(data: any, meta: MetaType) {
    return blogMapper(data.story, meta)
  }
}
