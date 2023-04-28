import { ContentPodcastInterface } from '@deardigital/shared/interfaces';
import { renderRichText, storyblokEditable } from '@storyblok/react';
import PodcastCard from '../podcast/podcast-card';
import Section from '../section/section';

/* eslint-disable-next-line */
export interface ContentPodcastsProps extends ContentPodcastInterface { }

export function ContentPodcast(props: ContentPodcastsProps) {
  if (!props.text) {
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
          {props.podcast && props.podcast.length > 0 && props.podcast.map((podcast, key) => (
            <div key={key} className="col-12 col-md-6 col-lg-4">
              <PodcastCard {...podcast} />
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}

export default ContentPodcast;
