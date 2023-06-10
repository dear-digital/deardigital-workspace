import { ContentWorkInterface, MetaType } from '@deardigital/shared/interfaces';
import { WorksStoryblok } from '@deardigital/shared/schema';
import { sectionMapper } from '../section';

export function mapWorkContent(content: WorksStoryblok, meta: MetaType): ContentWorkInterface {
  return {
    _editable: content['_editable'] ?? null,
    _uid: content._uid,
    component: content.component,
    text: content.text,
    work: meta.work ?? [],
    section: sectionMapper(content.section?.[0]),
  };
}
