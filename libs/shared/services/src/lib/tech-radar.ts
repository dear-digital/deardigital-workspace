import { techRadarMapper } from '@deardigital/shared/mapper';
import { getStoryblokApi } from '@storyblok/react';
import { resolveRelations } from './resolve-relations';
import { DepartmentType } from '@deardigital/shared/constants';

export const fetchTechRadar = async (department: DepartmentType | undefined, preview: boolean) => {
  const paths = ["cdn/stories/tech-radar"];

  const requests = paths.map((path) =>
    getStoryblokApi().get(path, {
      token: process.env['NEXT_PUBLIC_STORYBLOK_API_TOKEN'],
      version: preview ? 'draft' : 'published',
      resolve_relations: resolveRelations,
    })
  );

  const [page] = await Promise.all(requests);

  if (!page) {
    throw new Error(`Tech radar could not be fetched`)
  }

  return techRadarMapper(page.data.story, department)
}
