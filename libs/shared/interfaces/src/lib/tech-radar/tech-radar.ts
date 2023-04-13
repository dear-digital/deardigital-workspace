import { DepartmentType } from '@deardigital/shared/constants';
import { ISbRichtext } from '@storyblok/react';

export interface TechRadarInterface {
  title: string;
  version: string;
  items: TechRadarItemInterface[];
}

export interface TechRadarItemInterface {
  id: string;
  quadrant: number;
  ring: number;
  label: string;
  description?: ISbRichtext;
  active: boolean;
  moved: number;
  department: DepartmentType[];
}
