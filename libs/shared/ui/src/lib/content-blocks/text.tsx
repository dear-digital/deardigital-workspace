import { ContentTextInterface } from '@deardigital/shared/interfaces';
import { renderRichText, storyblokEditable } from '@storyblok/react';
import Section from '../section/section';

/* eslint-disable-next-line */
export interface ContentTextProps extends ContentTextInterface { }

export function ContentText(props: ContentTextProps) {
  if (!props.text) {
    return null
  }

  return (    
    <Section {...props.section}>
      <div className="container" {...storyblokEditable(props as any)}>
        <div className="row justify-content-center">
          <div className="col-12 col-md-10 col-lg-8" dangerouslySetInnerHTML={{ __html: renderRichText(props.text) }} />
        </div>
      </div>
    </Section>
  );
}

export default ContentText;
