import { ContentTextImageInterface } from '@deardigital/shared/interfaces';
import { TextImageStoryblok } from '@deardigital/shared/schema';
import { verticalAlignmentMapper } from '../alignment/vertical-alignment';
import { imageStoryblokMapper } from '../image/image';
import { textImageLayoutMapper } from '../layout/layout';
import { sectionMapper } from '../section';

export function mapTextImageContent(content: TextImageStoryblok): ContentTextImageInterface {
  return {
    _editable: content['_editable'] ?? null,
    _uid: content._uid,
    component: content.component,
    text: content.text ?? null,
    cta: null,
    image: imageStoryblokMapper(content.image, content.ratio),
    layout: textImageLayoutMapper(content.layout),
    verticalAlign: verticalAlignmentMapper(content.alignment),
    section: sectionMapper(content.section?.[0]),
  };
}
