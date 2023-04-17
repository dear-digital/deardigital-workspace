import { DepartmentType } from '@deardigital/shared/constants';
import { TechRadarInterface, TechRadarItemInterface } from '@deardigital/shared/interfaces';
import { QueryDatabaseResponse } from '@notionhq/client/build/src/api-endpoints';

export function techRadarMapper(notion: QueryDatabaseResponse, department?: DepartmentType | undefined): TechRadarInterface {
  const items = notion.results?.map((item) => mapTechnology(item)) ?? [];
  const filteredItems = department ? items.filter((item) => item.department.includes(department)) : items;


  return {
    title: 'page.name',
    // version: `Version: ${convertISODateToMMYYYY(page.published_at)}`,
    version: `Version:`,
    items: filteredItems.filter(item => typeof item !== 'undefined')
  };
}

function mapTechnology(technology: any): TechRadarItemInterface {
  return {
    id: technology.id,
    label: technology.properties['name']['title'][0]?.['plain_text'],
    department: mapDepartment(technology.properties['department'].multi_select),
    quadrant: mapQuadrant(technology.properties['quadrant'].select?.name),
    ring: mapRing(technology.properties['ring'].select?.name),
    active: true,
    moved: mapMoved(technology.properties['moved'].select?.name),
    url: technology.url,
  }
};

function mapDepartment(department: any[]): DepartmentType[] {
  if (!department) {
    return [];
  }

  return department.map((item) => item.name as DepartmentType);
}

function mapQuadrant(quadrant: any): number {
  if (!quadrant) {
    throw new Error('Quadrant is required');
  }

  switch (quadrant) {
    case 'Languages':
      return 0;
    case 'Platforms':
      return 1;
    case 'Tools':
      return 2;
    case 'Frameworks':
      return 3;
    default: throw new Error('Invalid quadrant');
  }
}

function mapRing(ring: any): number {
  if (!ring) {
    throw new Error('Ring is required');
  }

  switch (ring) {
    case 'Adopt':
      return 0;
    case 'Trail':
      return 1;
    case 'Assess':
      return 2;
    case 'Hold':
      return 3;
    default: throw new Error('Invalid ring');
  }
}

function mapMoved(moved: any): number {
  if (!moved) {
    return 0;
  }

  switch (moved) {
    case 'Up':
      return 1;
    case 'Down':
      return -1;
    default:
      return 0;
  }
}
