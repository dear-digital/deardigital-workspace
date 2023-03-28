import { SbBlokData } from '@storyblok/react';
import { MediaInterface } from '../media';
import { SectionInterface } from '../section';

export interface ContentImageInterface extends SbBlokData {
  image: MediaInterface | undefined;
  fullWidth: boolean;
  section: SectionInterface;
}