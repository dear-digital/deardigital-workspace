import { ContentBlogInterface } from '@deardigital/shared/interfaces';
import { renderRichText, storyblokEditable } from '@storyblok/react';
import BlogCard from '../blog/blog-card';
import Section from '../section/section';

/* eslint-disable-next-line */
export interface ContentBlogsProps extends ContentBlogInterface { }

export function ContentBlog(props: ContentBlogsProps) {
  if (!props.blog) {
    return null
  }

  return (
    <Section {...props.section}>
      <div className="container" {...(props._editable ? {...storyblokEditable(props as any)} : {})}>
        {props.text && (
          <div className="row justify-content-center">
            <div className="col-12 col-md-10 col-lg-8" dangerouslySetInnerHTML={{ __html: renderRichText(props.text) }} />
          </div>
        )}
        <div className="row">
          {props.blog && props.blog.length > 0 && props.blog.map((blog, key) => (
            <div key={key} className="col-12 col-md-6 col-lg-4">
              <BlogCard {...blog} />
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}

export default ContentBlog;
