import { ContentFeaturedWorkInterface, MetaType } from '@deardigital/shared/interfaces';
import { FeaturedWorkStoryblok, WorkStoryblok } from '@deardigital/shared/schema';
import { StoryblokStory } from 'storyblok-generate-ts';
import { sectionMapper } from '../section';
import { workCardsMapper } from '../work/work-card';

export function mapFeaturedWorkContent(content: FeaturedWorkStoryblok, meta: MetaType): ContentFeaturedWorkInterface {
  return {
    _editable: content['_editable'] ?? null,
    _uid: content._uid,
    component: content.component,
    text: content.text,
    work: workCardsMapper(content.work as StoryblokStory<WorkStoryblok>[], meta),
    section: sectionMapper(content.section?.[0]),
  };
}

