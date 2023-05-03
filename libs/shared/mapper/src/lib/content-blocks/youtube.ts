import { ContentYoutubeInterface, MetaType } from '@deardigital/shared/interfaces';
import { YoutubeStoryblok } from '@deardigital/shared/schema';
import { getYoutubeIdFromUrl } from '@deardigital/shared/utilities';
import { sectionMapper } from '../section';

export function mapContentBlockYoutube(content: YoutubeStoryblok, meta: MetaType): ContentYoutubeInterface {
  return {
    // @ts-ignore
    _editable: content._editable ?? null,
    _uid: content._uid,
    component: content.component,
    title: content.title,
    container: content.container,
    youtube: getYoutubeIdFromUrl(content.youtube.url) || null,
    section: sectionMapper(content.section?.[0]),
  };
}
