import { ContentImageInterface } from '@deardigital/shared/interfaces';
import { ContentBlock } from '@deardigital/shared/schema';
import { imageMapper } from '../image';
import { sectionMapper } from '../section';

export function mapContentBlockImage(content: ContentBlock): ContentImageInterface {
  return {
    // @ts-ignore
    _editable: content._editable,
    _uid: content._uid,
    component: content.component,
    fullWidth: content.fullWidth ?? false,
    image: imageMapper(content.image, content.ratio),
    section: sectionMapper(content.section?.[0]),
  };
}
