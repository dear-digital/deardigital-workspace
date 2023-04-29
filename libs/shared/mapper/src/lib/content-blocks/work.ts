import { ContentWorkInterface } from '@deardigital/shared/interfaces';
import { MetaType, WorksStoryblok } from '@deardigital/shared/schema';
import { sectionMapper } from '../section';

export function mapContentBlockWork(content: WorksStoryblok, meta: MetaType): ContentWorkInterface {
  return {
    // @ts-ignore
    _editable: content._editable ?? null,
    _uid: content._uid,
    component: content.component,
    text: content.text,
    work: meta.work ?? [],
    section: sectionMapper(content.section?.[0]),
  };
}