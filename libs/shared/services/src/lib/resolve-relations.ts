export const resolveRelations = [
  'clientLogos.clients',
  'featuredPodcast.podcast',
  'featuredPodcast.podcast.host',
  'featuredWork.work',
  'featuredWork.work.client',
  'featuredWork.work.services',
  'work.client',
  'work.services',
  'works.client',
  'podcast.host',
];

export const resolveRelationsQueryParams = resolveRelations.join(',');
