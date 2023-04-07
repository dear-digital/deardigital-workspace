import { GetShopifyLinkedDataQuery, GlobalStoryblok, MetaType } from '@deardigital/shared/schema';
import { globalsMapper } from '../global/global';
import { StoryblokStory } from 'storyblok-generate-ts';

export function metaMapper(storyblok: any, globals: StoryblokStory<GlobalStoryblok>, shopfiy?: GetShopifyLinkedDataQuery): MetaType {
  return {
    globals: globalsMapper(globals),
    rels: storyblok.rels,
    products: shopfiy ?? {}
  }
}
