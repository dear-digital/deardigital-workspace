import { ContentImageInterface } from '@deardigital/shared/interfaces';
import { ImageStoryblok } from '@deardigital/shared/schema';
import { imageStoryblokMapper } from '../image/image';
import { sectionMapper } from '../section';

export function mapContentBlockImage(content: ImageStoryblok): ContentImageInterface {
  return {
    // @ts-ignore
    _editable: content._editable ?? null,
    _uid: content._uid,
    component: content.component,
    fullWidth: content.fullWidth ?? false,
    image: imageStoryblokMapper(content.image, content.ratio),
    section: sectionMapper(content.section?.[0]),
  };
}
