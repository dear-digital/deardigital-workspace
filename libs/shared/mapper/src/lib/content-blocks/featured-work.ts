import { ContentFeaturedWorkInterface } from '@deardigital/shared/interfaces';
import { FeaturedWorkStoryblok, MetaType } from '@deardigital/shared/schema';
import { sectionMapper } from '../section';
import { workPostMapper } from '../work/work-post';

export function mapContentBlockFeaturedWork(content: FeaturedWorkStoryblok, meta: MetaType): ContentFeaturedWorkInterface {
  return {
    // @ts-ignore
    _editable: content._editable,
    _uid: content._uid,
    component: content.component,
    text: content.text,
    work: workPostMapper(content.work, meta),
    section: sectionMapper(content.section?.[0]),
  };
}