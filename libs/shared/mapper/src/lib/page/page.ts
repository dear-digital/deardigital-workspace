import { PageInterface } from '@deardigital/shared/interfaces';
import { MetaType, PageStoryblok } from '@deardigital/shared/schema';
import { StoryblokStory } from 'storyblok-generate-ts';
import { contentBlocksMapper } from '../content-blocks';

export function pageMapper(page: StoryblokStory<PageStoryblok>, meta: MetaType): PageInterface {
  return {
    id: page.id,
    globals: meta.globals,
    // breadcrumbs: breadcrumbMapper(res.renderNavigation, page?.slug),
    contentBlocks: contentBlocksMapper(page.content.contentBlocks, meta),
    // disclaimerNavigation: navigationMapper(disclaimerNav),
    // heroBlock: heroBlocksMapper(page?.hero, meta),
    // locations: mapLocation(res.locations, meta.domain),
    // navigation: navigationMapper(nav),
    // seo: seoMapper(meta.domain, page?.seo, globals?.seo),
    // socials: navigationMapper(socialsNav),
  };
}
