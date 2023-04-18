import { PAGE_TYPES } from '@deardigital/shared/constants';
import { WorkPostInterface } from '@deardigital/shared/interfaces';
import { workMapper, worksMapper } from '@deardigital/shared/mapper';
import { MetaType, WorkStoryblok } from '@deardigital/shared/schema';
import { StoryblokStory } from 'storyblok-generate-ts';
import { FetchDataService } from './fetch';
import { resolveRelations } from './resolve-relations';

export class FetchWork extends FetchDataService<StoryblokStory<WorkStoryblok>[], WorkPostInterface[]> {
  constructor() {
    super({
      queries: [{ path: `cdn/stories/`, starts_with: PAGE_TYPES.services }],
      globals: true,
      resolveRelations: resolveRelations,
    })
  }

  mapper(page: StoryblokStory<WorkStoryblok>[], meta: MetaType) {
    return worksMapper(page, meta);
  }
}

export class FetchWorkBySlug extends FetchDataService<StoryblokStory<WorkStoryblok>, WorkPostInterface> {
  constructor(slug: string) {
    super({
      queries: [{ path: `cdn/stories/${PAGE_TYPES.work}${slug}` }],
      globals: true,
      resolveRelations: resolveRelations,
    })
  }

  mapper(page: StoryblokStory<WorkStoryblok>, meta: MetaType) {
    return workMapper(page, meta)
  }
}
