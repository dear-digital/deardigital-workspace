import { ContentTextImageInterface } from '@deardigital/shared/interfaces';
import { TextImageStoryblok } from '@deardigital/shared/schema';
import { verticalAlignmentMapper } from '../alignment/vertical-alignment';
import { imageMapper } from '../image';
import { textImageLayoutMapper } from '../layout/layout';
import { sectionMapper } from '../section';

export function mapContentBlockTextImage(content: TextImageStoryblok): ContentTextImageInterface {
  return {
    // @ts-ignore
    _editable: content._editable,
    _uid: content._uid,    
    component: content.component,
    text: content.text ?? null,
    cta: null,
    image: imageMapper(content.image, content.ratio),
    layout: textImageLayoutMapper(content.layout),
    verticalAlign: verticalAlignmentMapper(content.alignment),
    section: sectionMapper(content.section?.[0]),
  };
}
