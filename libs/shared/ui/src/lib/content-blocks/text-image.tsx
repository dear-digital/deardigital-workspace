import { ContentTextImageInterface } from '@deardigital/shared/interfaces';
import { renderRichText, storyblokEditable } from '@storyblok/react';
import Section from '../section/section';
import ImageRenderer from '../image-renderer/image-renderer';
import { TEXT_IMAGE_LAYOUTS } from '@deardigital/shared/constants';

/* eslint-disable-next-line */
export interface ContentTextImageProps extends ContentTextImageInterface { }

export function ContentTextImage(props: ContentTextImageProps) {
  const imageCss = props.layout === TEXT_IMAGE_LAYOUTS.mediaText ? 'order-0' : 'order-1';
  const textCss = props.layout === TEXT_IMAGE_LAYOUTS.mediaText ? 'order-1' : 'order-0';

  return (
    <Section {...props.section}>
      <div className="container" {...storyblokEditable(props as any)}>
        <div className={`row gy-6 gy-md-7 gy-lg-8 ${props.verticalAlign}`}>
          <div className={`col-12 col-lg-6 ${imageCss}`}>
            {props.image && <ImageRenderer image={props.image} className="img-fluid rounded-3" />}
          </div>
          <div className={`col-12 col-lg-6 ${textCss}`}>
            {props.text && <div dangerouslySetInnerHTML={{ __html: renderRichText(props.text) }} />}
          </div>
        </div>
      </div>
    </Section>
  );
}

export default ContentTextImage;
