import { ISbRichtext } from '@storyblok/react';
import { SectionInterface } from '../section';
import { ServiceCardInterface } from '../service/service-card';
import { StoryblockStoryBaseInterface } from '../storyblok-story';

export interface ContentServicesInterface extends StoryblockStoryBaseInterface {
  services: ServiceCardInterface[];
  text: ISbRichtext;
  section: SectionInterface;
}
