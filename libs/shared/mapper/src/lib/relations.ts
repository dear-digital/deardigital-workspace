import { StoryblokTypes } from '@deardigital/shared/schema';

export function RelationsMapper(res: StoryblokTypes): StoryblokTypes {
    featuredWork(res);

    return res
}

function featuredWork(res: StoryblokTypes): StoryblokTypes {
    res.story.content.contentBlocks.filter(item => item.component === 'featuredWork').map((item) => {
        // item.work?.map((work) => )
    });

    return res
}