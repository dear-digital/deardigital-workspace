import { ContentImageInterface } from '@deardigital/shared/interfaces';
import { storyblokEditable } from '@storyblok/react';
import ImageRenderer from '../image-renderer/image-renderer';
import Section from '../section/section';

/* eslint-disable-next-line */
export interface ContentImageProps extends ContentImageInterface {}

export function ContentImage(props: ContentImageProps) {
  if (!props.image) return null;

  return (
    <Section {...props.section}>
      <div className={props.fullWidth ? '' : 'container'} {...storyblokEditable(props)}>
        <ImageRenderer image={props.image} className="img-fluid w-100" />
      </div>
    </Section>
  );
}

export default ContentImage;
