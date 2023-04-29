import { ContentClientLogosInterface } from '@deardigital/shared/interfaces';
import { renderRichText, storyblokEditable } from '@storyblok/react';
import BlogCard from '../blog/blog-card';
import Section from '../section/section';
import ImageRenderer from '../image-renderer/image-renderer';

/* eslint-disable-next-line */
export interface ContentClientLogosProps extends ContentClientLogosInterface { }

export function ContentClientLogos(props: ContentClientLogosProps) {
  if (!props.clients) {
    return null
  }

  return (
    <Section {...props.section}>
      <div className="container" {...storyblokEditable(props as any)}>
        {props.text && (
          <div className="row justify-content-center">
            <div className="col-12 col-md-10 col-lg-8" dangerouslySetInnerHTML={{ __html: renderRichText(props.text) }} />
          </div>
        )}
        <div className="row">
          {props.clients && props.clients.length > 0 && props.clients.map((client, key) => (
            <div key={key} className="col-4 col-sm-3 col-md-2">
              {client.logo && <ImageRenderer image={client.logo} />}
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}

export default ContentClientLogos;
