import { ContentBlockText } from '@deardigital/shared/schema';
import { SbBlokData } from '@storyblok/react';
import { SectionInterface } from '../section';

export interface ContentTextInterface extends SbBlokData {
  text: ContentBlockText | undefined;
  section: SectionInterface;
}