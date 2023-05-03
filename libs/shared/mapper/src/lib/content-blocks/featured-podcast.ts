import { ContentFeaturedPodcastInterface } from '@deardigital/shared/interfaces';
import { FeaturedPodcastStoryblok, PodcastStoryblok } from '@deardigital/shared/schema';
import { StoryblokStory } from 'storyblok-generate-ts';
import { podcastCardMapper } from '../podcast/podcast-card';
import { sectionMapper } from '../section';

export function mapContentBlockFeaturedPodcast(content: FeaturedPodcastStoryblok): ContentFeaturedPodcastInterface {
  return {
    // @ts-ignore
    _editable: content._editable ?? null,
    _uid: content._uid,
    component: content.component,
    text: content.text,
    podcast: podcastCardMapper(content.podcast as StoryblokStory<PodcastStoryblok>),
    section: sectionMapper(content.section?.[0]),
  };
}

