import { ISbRichtext } from '@storyblok/react';
import { PodcastCardInterface } from '../podcast/podcast-card';
import { SectionInterface } from '../section';
import { StoryblockStoryBaseInterface } from '../storyblok-story';

export interface ContentFeaturedPodcastInterface extends StoryblockStoryBaseInterface {
  text: ISbRichtext;
  podcast: PodcastCardInterface;
  section: SectionInterface;
}
