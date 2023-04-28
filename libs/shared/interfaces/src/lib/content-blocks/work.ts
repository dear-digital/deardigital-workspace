import { ISbRichtext } from '@storyblok/react';
import { SectionInterface } from '../section';
import { StoryblockStoryBaseInterface } from '../storyblok-story';
import { WorkCardInterface } from '../work/work-card';

export interface ContentWorkInterface extends StoryblockStoryBaseInterface {
  work: WorkCardInterface[];
  text: ISbRichtext;
  section: SectionInterface;
}
