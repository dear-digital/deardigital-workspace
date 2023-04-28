import { ContentBlogInterface } from '@deardigital/shared/interfaces';
import { BlogsStoryblok, MetaType } from '@deardigital/shared/schema';
import { sectionMapper } from '../section';

export function mapContentBlockBlog(content: BlogsStoryblok, meta: MetaType): ContentBlogInterface {
  return {
    // @ts-ignore
    _editable: content._editable ?? null,
    _uid: content._uid,
    component: content.component,
    text: content.text,
    blog: meta.blog ?? [],
    section: sectionMapper(content.section?.[0]),
  };
}
