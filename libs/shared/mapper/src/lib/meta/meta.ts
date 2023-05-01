import { MetaType } from '@deardigital/shared/interfaces';
import { GetShopifyLinkedDataQuery, GlobalStoryblok } from '@deardigital/shared/schema';
import { StoryblokStory } from 'storyblok-generate-ts';
import { globalsMapper } from '../global/global';

export function metaMapper(storyblok: any, globals: StoryblokStory<GlobalStoryblok>, shopfiy?: GetShopifyLinkedDataQuery): MetaType {
  return {
    globals: globalsMapper(globals),
    rels: storyblok.rels,
    products: shopfiy ?? {}
  }
}
