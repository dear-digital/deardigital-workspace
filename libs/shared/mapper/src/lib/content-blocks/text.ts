import { ContentTextInterface } from '@deardigital/shared/interfaces';
import { TextStoryblok } from '@deardigital/shared/schema';
import { sectionMapper } from '../section';

export function mapTextContent(content: TextStoryblok): ContentTextInterface {
  return {
    _editable: content['_editable'] ?? null,
    _uid: content._uid,
    component: content.component,
    text: content.text,
    section: sectionMapper(content.section?.[0]),
  };
}
