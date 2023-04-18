import { DepartmentType } from '@deardigital/shared/constants';
import { ISbRichtext } from '@storyblok/react';

export interface TechRadarInterface {
  title: string;
  version: string;
  items: TechRadarItemInterface[];
}

export interface TechRadarItemInterface {
  id: string;
  link: string;
  quadrant: number;
  ring: number;
  label: string;
  active: boolean;
  moved: number;
  department: DepartmentType[];
}
