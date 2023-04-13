import { DepartmentType } from '@deardigital/shared/constants';
import { TechRadarInterface, TechRadarItemInterface } from '@deardigital/shared/interfaces';
import { TechRadarStoryblok, TechnologyStoryblok } from '@deardigital/shared/schema';
import { convertISODateToMMYYYY } from '@deardigital/shared/utilities';
import { StoryblokStory } from 'storyblok-generate-ts';

export function techRadarMapper(page: StoryblokStory<TechRadarStoryblok>, department?: DepartmentType | undefined): TechRadarInterface {
  const items = page.content.technologies?.map((item) => mapTechnology(item)) ?? [];
  const filteredItems = department ? items.filter((item) => item.department.includes(department)) : items;


  return {
    title: page.name,
    version: `Version: ${convertISODateToMMYYYY(page.published_at)}`,
    items: filteredItems,
  };
}

function mapTechnology(technology: TechnologyStoryblok): TechRadarItemInterface {
  return {
    id: technology._uid,
    label: technology.name,
    quadrant: +technology.quadrant,
    ring: +technology.ring,
    active: true,
    moved: +technology.moved,
    // @ts-ignore
    department: technology.department ?? [],
  }
};
