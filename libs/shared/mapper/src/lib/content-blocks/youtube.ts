import { ContentYoutubeInterface } from '@deardigital/shared/interfaces';
import { YoutubeStoryblok } from '@deardigital/shared/schema';
import { imageStoryblokMapper } from '../image/image';
import { sectionMapper } from '../section';

export function mapYoutubeContent(content: YoutubeStoryblok): ContentYoutubeInterface {
  return {
    _editable: content['_editable'] ?? null,
    _uid: content._uid,
    component: content.component,
    container: content.container,
    thumbnail: imageStoryblokMapper(content.thumbnail) || null,
    youtube: content.youtube.url,
    section: sectionMapper(content.section?.[0]),
  };
}
