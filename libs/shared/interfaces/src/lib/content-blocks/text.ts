import { SectionInterface } from '../section';
import { StoryblockStoryBaseInterface } from '../storyblok-story';

export interface ContentTextInterface extends StoryblockStoryBaseInterface {
  text: string | undefined;
  section: SectionInterface;
}