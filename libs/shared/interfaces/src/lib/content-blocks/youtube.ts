import { MediaInterface } from '../media';
import { SectionInterface } from '../section';
import { StoryblockStoryBaseInterface } from '../storyblok-story';

export interface ContentYoutubeInterface extends StoryblockStoryBaseInterface {
  container: boolean;
  thumbnail: MediaInterface | null;
  youtube: string;
  section: SectionInterface;
}
