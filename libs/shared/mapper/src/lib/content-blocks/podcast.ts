import { ContentPodcastInterface, MetaType } from '@deardigital/shared/interfaces';
import { PodcastsStoryblok } from '@deardigital/shared/schema';
import { sectionMapper } from '../section';

export function mapPodcastContent(content: PodcastsStoryblok, meta: MetaType): ContentPodcastInterface {
  return {
    _editable: content['_editable'] ?? null,
    _uid: content._uid,
    component: content.component,
    text: content.text,
    podcast: meta.podcast ?? [],
    section: sectionMapper(content.section?.[0]),
  };
}
