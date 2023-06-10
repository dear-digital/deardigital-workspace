import { ContentServicesInterface, MetaType } from '@deardigital/shared/interfaces';
import { ServicesStoryblok } from '@deardigital/shared/schema';
import { sectionMapper } from '../section';

export function mapServicesContent(content: ServicesStoryblok, meta: MetaType): ContentServicesInterface {
  return {
    _editable: content['_editable'] ?? null,
    _uid: content._uid,
    component: content.component,
    text: content.text,
    services: meta.services ?? [],
    section: sectionMapper(content.section?.[0]),
  };
}
