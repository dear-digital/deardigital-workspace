import { ContentTextImageInterface } from '@deardigital/shared/interfaces';
import { renderRichText, storyblokEditable } from '@storyblok/react';
import Section from '../section/section';

/* eslint-disable-next-line */
export interface ContentTextImageProps extends ContentTextImageInterface { }

export function ContentTextImage(props: ContentTextImageProps) {
  // const imageCss = direction === TextMediaDirectionEnum.mediaText ? 'order-0' : 'order-1';
  // const textCss = direction === TextMediaDirectionEnum.mediaText ? 'order-1' : 'order-0';

  // return (
  //   <Section {...section}>
  //     <div className="container">
  //       <div className={`row gy-6 gy-md-7 gy-lg-8 ${verticalAlign}`}>
  //         <div className={`col-12 col-lg-6 ${imageCss}`}>
  //           {image && <ImageRenderer image={image} className="img-fluid rounded-3" />}
  //         </div>
  //         <div className={`col-12 col-lg-6 ${textCss}`}>
  //           {text && <div className={`mt-lg-4 ${section.color} text-image`} dangerouslySetInnerHTML={{ __html: text }}></div>}
  //           {cta && (
  //             <LinkRenderer
  //               hubspotFormId={''}
  //               hubspotPortalId={''}
  //               {...cta}
  //               props={{ className: 'mt-6 stretched-link' }}
  //             />
  //           )}
  //         </div>
  //       </div>
  //     </div>
  //   </Section>
  // );
  return (
    <Section {...props.section}>
      <div className="container" {...storyblokEditable(props as any)}>
        {props.text && (
          <div className="row justify-content-center">
            <div className="col-12 col-md-10 col-lg-8" dangerouslySetInnerHTML={{ __html: renderRichText(props.text) }} />
          </div>
        )}
      </div>
    </Section>
  )
}

export default ContentTextImage;
