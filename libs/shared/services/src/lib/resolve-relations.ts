export const resolveRelations = [
  'clientLogos.clients',
  'featuredPodcast.podcast',
  'featuredWork.work',
  'featuredWork.work.client',
  'featuredWork.work.services',
  'work.client',
  'work.services',
  'works.client',
];

export const resolveRelationsQueryParams = resolveRelations.join(',');
