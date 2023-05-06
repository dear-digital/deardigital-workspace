import { PodcastHeroInterface } from '@deardigital/shared/interfaces';
import Script from 'next/script';
import Section from '../section/section';


/* eslint-disable-next-line */
export interface PodcastHeroProps extends PodcastHeroInterface { }

export function PodcastHero({ podcast, section }: PodcastHeroProps) {
  return (
    <Section {...section}>
      <div className="container">
        <div className="row justify-content-center">
        </div>
      </div>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-md-10">
            <p className="lead">{podcast.description}</p>
            {podcast.audio && (
              <>
                <div id="podcast-player"></div>
                <Script src={podcast.audio} type="text/javascript" />
              </>
            )}
          </div>
        </div>
      </div>
    </Section>
  );
}

export default PodcastHero;
