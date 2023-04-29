import { ISbRichtext } from '@storyblok/react';
import { ClientInterface } from '../client/client';
import { SectionInterface } from '../section';
import { StoryblockStoryBaseInterface } from '../storyblok-story';

export interface ContentClientLogosInterface extends StoryblockStoryBaseInterface {
  clients: ClientInterface[];
  text: ISbRichtext;
  section: SectionInterface;
}
