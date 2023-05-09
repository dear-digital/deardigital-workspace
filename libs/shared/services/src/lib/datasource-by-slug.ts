import { getStoryblokApi } from '@storyblok/react';

export const fetchDatasourceBySlug = async (slug: string, locale: string, preview: boolean) => {
  const datasource = await getStoryblokApi().get(`cdn/datasource_entries?datasource=${slug}&${process.env['NEXT_PUBLIC_STORYBLOK_API_TOKEN']}`, {
    version: preview ? 'draft' : 'published',
  })

  if (!datasource) {
    throw new Error(`Datasource with slug ${slug} could not be fetched`)
  }

  console.log('datasource.data.stories', datasource.data)

  return datasource.data.datasource_entries;
  // return PagePathMapper(datasource.data.stories, locale);
}
