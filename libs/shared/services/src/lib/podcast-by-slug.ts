import { PAGE_TYPES } from '@deardigital/shared/constants';
import { MetaType, PodcastInterface } from '@deardigital/shared/interfaces';
import { podcastMapper } from '@deardigital/shared/mapper';
import { FetchStoryService } from './fetch-story';

export class FetchPodcastBySlug extends FetchStoryService<PodcastInterface> {
  constructor(slug = '') {
    super({
      query: { path: `cdn/stories/${PAGE_TYPES.podcast}${slug}` },
    })
  }

  mapper(data: any, meta: MetaType) {
    return podcastMapper(data.story, meta)
  }
}
