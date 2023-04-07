import { SectionInterface } from '../section';
import { StoryblockStoryBaseInterface } from '../storyblok-story';
import { WorkPostInterface } from '../work/work-post';

export interface ContentFeaturedWorkInterface extends StoryblockStoryBaseInterface {
  text: string | undefined;
  work: WorkPostInterface[];
  section: SectionInterface;
}