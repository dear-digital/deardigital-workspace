import { PageInterface } from '@deardigital/shared/interfaces';
import { StoryblokTypes } from '@deardigital/shared/schema';
import { contentBlocksMapper } from '../content-blocks';

export function pageMapper(res: StoryblokTypes): PageInterface {
  return {
    id: res.story.id,
    // breadcrumbs: breadcrumbMapper(res.renderNavigation, page?.slug),
    contentBlocks: contentBlocksMapper(res.story.content.contentBlocks, { rels: res.rels }),
    // disclaimerNavigation: navigationMapper(disclaimerNav),
    // globals: globalsMapper(globals),
    // heroBlock: heroBlocksMapper(page?.hero, meta),
    // locations: mapLocation(res.locations, meta.domain),
    // navigation: navigationMapper(nav),
    // seo: seoMapper(meta.domain, page?.seo, globals?.seo),
    // socials: navigationMapper(socialsNav),
  };
}
