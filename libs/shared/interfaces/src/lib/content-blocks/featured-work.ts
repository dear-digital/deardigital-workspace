import { ISbRichtext } from '@storyblok/react';
import { SectionInterface } from '../section';
import { StoryblockStoryBaseInterface } from '../storyblok-story';
import { WorkCardInterface } from '../work/work-card';

export interface ContentFeaturedWorkInterface extends StoryblockStoryBaseInterface {
  text: ISbRichtext;
  work: WorkCardInterface[];
  section: SectionInterface;
}
