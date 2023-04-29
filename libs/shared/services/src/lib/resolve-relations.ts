export const resolveRelations = [
  'clientLogos.clients',
  'featuredWork.work',
  'featuredWork.work.client',
  'featuredWork.work.services',
  'work.client',
  'work.services',
];

export const resolveRelationsQueryParams = resolveRelations.join(',');
