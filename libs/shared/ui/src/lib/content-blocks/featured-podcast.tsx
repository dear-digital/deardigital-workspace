import { ContentFeaturedPodcastInterface } from '@deardigital/shared/interfaces';
import { renderRichText, storyblokEditable } from '@storyblok/react';
import PodcastCard from '../podcast/podcast-card';
import Section from '../section/section';

/* eslint-disable-next-line */
export interface ContentFeaturedPodcastProps extends ContentFeaturedPodcastInterface { }

export function ContentFeaturedPodcast(props: ContentFeaturedPodcastInterface) {
  return (
    <Section {...props.section}>
      <div className="container" {...(props._editable ? { ...(props._editable ? { ...storyblokEditable(props as any) } : {}) } : {})}>
        {props.text && (
          <div className="row justify-content-center">
            <div className="col-12 col-md-10 col-lg-8" dangerouslySetInnerHTML={{ __html: renderRichText(props.text) }} />
          </div>
        )}
        <div className="row">
          <div className="col-12 col-md-6 col-lg-4">
            <PodcastCard {...props.podcast} />
          </div>
        </div>
      </div>
    </Section >
  );
}

export default ContentFeaturedPodcast;
