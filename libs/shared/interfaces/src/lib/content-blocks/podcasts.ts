import { ISbRichtext } from '@storyblok/react';
import { PodcastCardInterface } from '../podcast/podcast-card';
import { SectionInterface } from '../section';
import { StoryblockStoryBaseInterface } from '../storyblok-story';

export interface ContentPodcastInterface extends StoryblockStoryBaseInterface {
  podcast: PodcastCardInterface[];
  text: ISbRichtext;
  section: SectionInterface;
}
