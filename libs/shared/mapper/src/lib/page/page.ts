import { MetaType, PageInterface } from '@deardigital/shared/interfaces';
import { PageStoryblok } from '@deardigital/shared/schema';
import { StoryblokStory } from 'storyblok-generate-ts';
import { contentBlocksMapper } from '../content-blocks/content-blocks';
import { heroBlocksMapper } from '../hero-blocks/hero-blocks';

export function pageMapper(page: StoryblokStory<PageStoryblok>, meta: MetaType): PageInterface {
  return {
    globals: meta.globals,
    hero: heroBlocksMapper(page.content.hero, meta),
    contentBlocks: contentBlocksMapper(page.content.contentBlocks, meta),
    // breadcrumbs: breadcrumbMapper(res.renderNavigation, page?.slug),
    // disclaimerNavigation: navigationMapper(disclaimerNav),
    // heroBlock: heroBlocksMapper(page?.hero, meta),
    // locations: mapLocation(res.locations, meta.domain),
    // navigation: navigationMapper(nav),
    // seo: seoMapper(meta.domain, page?.seo, globals?.seo),
    // socials: navigationMapper(socialsNav),
  };
}
