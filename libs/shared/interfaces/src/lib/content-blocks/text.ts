import { ISbRichtext } from '@storyblok/react';
import { SectionInterface } from '../section';
import { StoryblockStoryBaseInterface } from '../storyblok-story';

export interface ContentTextInterface extends StoryblockStoryBaseInterface {
  text: ISbRichtext;
  section: SectionInterface;
}