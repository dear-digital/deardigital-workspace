import { PodcastCardInterface } from '../podcast/podcast-card';
import { SectionInterface } from '../section';
import { StoryblockStoryBaseInterface } from '../storyblok-story';

export interface PodcastHeroInterface extends StoryblockStoryBaseInterface {
  podcast: PodcastCardInterface;
  section: SectionInterface;
}
