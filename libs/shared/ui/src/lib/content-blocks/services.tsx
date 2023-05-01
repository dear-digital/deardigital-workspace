import { ContentServicesInterface } from '@deardigital/shared/interfaces';
import { renderRichText, storyblokEditable } from '@storyblok/react';
import Section from '../section/section';
import ServiceCard from '../service/service-card';

/* eslint-disable-next-line */
export interface ContentServicesProps extends ContentServicesInterface { }

export function ContentServices(props: ContentServicesProps) {
  if (!props.text) {
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
          {props.services && props.services.length > 0 && props.services.map((service, key) => (
            <div key={key} className="col-12 col-md-6 col-lg-4">
              <ServiceCard {...service} />
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}

export default ContentServices;
