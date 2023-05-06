import { SECTION_THEMES, SPACINGS } from '@deardigital/shared/constants';
import { PodcastStoryblok } from '@deardigital/shared/schema';
import { PodcastHeroInterface } from 'libs/shared/interfaces/src/lib/hero-blocks/podcast';
import { StoryblokStory } from 'storyblok-generate-ts';
import { podcastCardMapper } from '../podcast/podcast-card';

export function mapPodcastHero(page: StoryblokStory<PodcastStoryblok>): PodcastHeroInterface {
  return {
    _uid: 'podcast',
    component: 'podcast',
    podcast: podcastCardMapper(page),
    section: {
      theme: SECTION_THEMES.light,
      spacing: SPACINGS.md,
    },
  };
}
