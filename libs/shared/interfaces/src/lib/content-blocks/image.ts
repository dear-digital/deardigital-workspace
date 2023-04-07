import { MediaInterface } from '../media';
import { SectionInterface } from '../section';
import { StoryblockStoryBaseInterface } from '../storyblok-story';

export interface ContentImageInterface extends StoryblockStoryBaseInterface {
  image: MediaInterface | null;
  fullWidth: boolean;
  section: SectionInterface;
}