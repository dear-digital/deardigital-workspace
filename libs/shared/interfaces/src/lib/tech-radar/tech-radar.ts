import { DepartmentType } from '@deardigital/shared/constants';

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
  active: boolean;
  moved: number;
  department: DepartmentType[];
}