import { SectionInterface } from '../section';
import { StoryblockStoryBaseInterface } from '../storyblok-story';

export interface ContentYoutubeInterface extends StoryblockStoryBaseInterface {
  title: string;
  youtube: string | null;
  container: boolean;
  section: SectionInterface;
}
