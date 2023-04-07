import { ContentFeaturedWorkInterface } from '@deardigital/shared/interfaces';
import { renderRichText, storyblokEditable } from '@storyblok/react';
import Section from '../section/section';
import WorkCard from '../work/work-card';

/* eslint-disable-next-line */
export interface ContentFeaturedWorkProps extends ContentFeaturedWorkInterface { }

export function ContentFeaturedWork(props: ContentFeaturedWorkProps) {
  return (
    <Section {...props.section}>
      <div className="container" {...storyblokEditable(props as any)}>
        <div className="row justify-content-center">
          <div className="col-12 col-md-10 col-lg-8" dangerouslySetInnerHTML={{ __html: renderRichText(props.text) }} />
        </div>
        <div className="row">
          {props.work.map((work, key) => (
            <div key={key} className="col-12 col-md-6 col-lg-4">
              <WorkCard {...work} />
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}

export default ContentFeaturedWork;
