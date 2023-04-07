import { ISbRichtext } from '@storyblok/react';
import { SectionInterface } from '../section';
import { StoryblockStoryBaseInterface } from '../storyblok-story';
import { WorkPostInterface } from '../work/work-post';

export interface ContentFeaturedWorkInterface extends StoryblockStoryBaseInterface {
  text: ISbRichtext;
  work: WorkPostInterface[];
  section: SectionInterface;
}