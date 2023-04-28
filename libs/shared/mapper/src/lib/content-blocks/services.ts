import { ContentServicesInterface } from '@deardigital/shared/interfaces';
import { MetaType, ServicesStoryblok } from '@deardigital/shared/schema';
import { sectionMapper } from '../section';

export function mapContentBlockServices(content: ServicesStoryblok, meta: MetaType): ContentServicesInterface {
  return {
    // @ts-ignore
    _editable: content._editable ?? null,
    _uid: content._uid,
    component: content.component,
    text: content.text,
    services: meta.services ?? [],
    section: sectionMapper(content.section?.[0]),
  };
}
