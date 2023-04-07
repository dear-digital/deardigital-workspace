import { TextImageLayoutType, VerticalAlignmentType } from '@deardigital/shared/constants';
import { LinkInterface } from '../link/link';
import { MediaInterface } from '../media';
import { SectionInterface } from '../section';
import { StoryblockStoryBaseInterface } from '../storyblok-story';

export interface ContentTextImageInterface extends StoryblockStoryBaseInterface {
    text: string | null;
    cta: LinkInterface | null;
    image: MediaInterface | null;
    layout: TextImageLayoutType;
    section: SectionInterface;
    verticalAlign: VerticalAlignmentType;
}