import { PageTypeConstant } from '@deardigital/shared/constants';
import { ServiceInterface } from '@deardigital/shared/interfaces';
import { serviceMapper, servicesMapper } from '@deardigital/shared/mapper';
import { MetaType, ServiceStoryblok } from '@deardigital/shared/schema';
import { StoryblokStory } from 'storyblok-generate-ts';
import { FetchDataService } from './fetch';
import { resolveRelations } from './resolve-relations';

export class FetchServices extends FetchDataService<StoryblokStory<ServiceStoryblok>[], ServiceInterface[]> {
  constructor() {
    super({
      queries: [{ path: 'cdn/stories', starts_with: PageTypeConstant.services }],
      globals: true,
      resolveRelations: resolveRelations,
    })
  }

  mapper(page: StoryblokStory<ServiceStoryblok>[], meta: MetaType) {
    return servicesMapper(page, meta)
  }
}

export class FetchServiceBySlug extends FetchDataService<StoryblokStory<ServiceStoryblok>, ServiceInterface> {
  constructor(slug: string) {
    super({
      queries: [{ path: `cdn/stories/${PageTypeConstant.services}/${slug}` }],
      globals: false,
      resolveRelations: resolveRelations,
    })
  }

  mapper(page: StoryblokStory<ServiceStoryblok>, meta: MetaType) {
    return serviceMapper(page, meta)
  }
}
