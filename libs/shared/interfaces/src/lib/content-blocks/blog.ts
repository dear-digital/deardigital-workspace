import { ISbRichtext } from '@storyblok/react';
import { BlogCardInterface } from '../blog/blog-card';
import { SectionInterface } from '../section';
import { StoryblockStoryBaseInterface } from '../storyblok-story';

export interface ContentBlogInterface extends StoryblockStoryBaseInterface {
  blog: BlogCardInterface[];
  text: ISbRichtext;
  section: SectionInterface;
}
