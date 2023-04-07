import { HeaderInterface } from '../header/header';
import { StoryblockStoryBaseInterface } from '../storyblok-story';

export interface GlobalInterface extends StoryblockStoryBaseInterface {
    header: HeaderInterface;
}