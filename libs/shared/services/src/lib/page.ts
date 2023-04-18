import { PageInterface } from '@deardigital/shared/interfaces';
import { pageMapper } from '@deardigital/shared/mapper';
import { MetaType, PageStoryblok } from '@deardigital/shared/schema';
import { StoryblokStory } from 'storyblok-generate-ts';
import { FetchDataService } from './fetch';
import { resolveRelations } from './resolve-relations';
import { PAGE_TYPES } from '@deardigital/shared/constants';

export class FetchPageBySlug extends FetchDataService<StoryblokStory<PageStoryblok>, PageInterface> {
  constructor(slug: string) {
    super({
      queries: [{ path: `cdn/stories/${PAGE_TYPES.page}${slug}` }],
      globals: true,
      resolveRelations: resolveRelations,
    })
  }

  mapper(page: StoryblokStory<PageStoryblok>, meta: MetaType) {
    return pageMapper(page, meta)
  }
}
