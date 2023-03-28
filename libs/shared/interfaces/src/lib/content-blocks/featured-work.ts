import { Text } from '@deardigital/shared/schema';
import { SbBlokData } from '@storyblok/react';
import { SectionInterface } from '../section';
import { WorkPostInterface } from '../work/work-post';

export interface ContentFeaturedWorkInterface extends SbBlokData {
  text: Text | undefined;
  work: WorkPostInterface[];
  section: SectionInterface;
}