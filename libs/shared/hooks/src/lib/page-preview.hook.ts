import { PageTypeType } from '@deardigital/shared/constants';
import { contentBlocksLinkedData, pageMapper } from '@deardigital/shared/mapper';
import { PageStoryblok } from '@deardigital/shared/schema';
import { getMeta, resolveRelations } from '@deardigital/shared/services';
import { getPreviewParam } from '@deardigital/shared/utilities';
import { useStoryblok } from '@storyblok/react';
import { useQueryClient } from '@tanstack/react-query';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { StoryblokStory } from 'storyblok-generate-ts';

/* eslint-disable-next-line */
export interface PagePreviewHooksProps {
  pageType: PageTypeType;
  slug: string;
  preview: boolean;
}

export function usePagePreview({ pageType, slug, preview }: PagePreviewHooksProps) {
  const queryClient = useQueryClient();
  const { query } = useRouter();
  const isVisualEditor = query?._storyblok !== undefined;
  const isPreview = isVisualEditor || preview;
  const story = useStoryblok(`/${pageType}${slug}`, { version: getPreviewParam(isPreview) }, { resolveRelations: resolveRelations });

  useEffect(() => {
    async function fetchData() {
      // @ts-ignore
      if (story?.unpublished_changes) {
        const linkedData = contentBlocksLinkedData(story.content.contentBlocks)
        const meta = await getMeta(isPreview, linkedData);
        queryClient.setQueryData([pageType, slug], pageMapper(story as StoryblokStory<PageStoryblok>, meta))
      }
    }
    fetchData();
  }, [story])
}

export default usePagePreview;
