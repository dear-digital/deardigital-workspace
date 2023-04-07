import { TextMediaDirectionEnum } from '@duke-and-grace/shared-enums';
import { ContentTextImageType } from '@duke-and-grace/shared-interfaces';
import ImageRenderer from '../../image-renderer/image-renderer.component';
import LinkRenderer from '../../link/link-renderer.component';
import Section from '../../section/section.component';

/* eslint-disable-next-line */
export interface ContentTextImageProps extends ContentTextImageType {}

export function ContentTextImage({ direction, image, text, cta, section, verticalAlign }: ContentTextImageProps) {
  const imageCss = direction === TextMediaDirectionEnum.mediaText ? 'order-0' : 'order-1';
  const textCss = direction === TextMediaDirectionEnum.mediaText ? 'order-1' : 'order-0';

  return (
    <Section {...section}>
      <div className="container">
        <div className={`row gy-6 gy-md-7 gy-lg-8 ${verticalAlign}`}>
          <div className={`col-12 col-lg-6 ${imageCss}`}>
            {image && <ImageRenderer image={image} className="img-fluid rounded-3" />}
          </div>
          <div className={`col-12 col-lg-6 ${textCss}`}>
            {text && <div className={`mt-lg-4 ${section.color} text-image`} dangerouslySetInnerHTML={{ __html: text }}></div>}
            {cta && (
              <LinkRenderer
                hubspotFormId={''}
                hubspotPortalId={''}
                {...cta}
                props={{ className: 'mt-6 stretched-link' }}
              />
            )}
          </div>
        </div>
      </div>
    </Section>
  );
}

export default ContentTextImage;
