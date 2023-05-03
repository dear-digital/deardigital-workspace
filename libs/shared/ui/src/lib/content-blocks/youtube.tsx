import { ContentYoutubeInterface } from '@deardigital/shared/interfaces';
import { useState } from 'react';
import ImageRenderer from '../image-renderer/image-renderer';
import Section from '../section/section';
import dynamic from 'next/dynamic';
const ReactPlayer = dynamic(() => import('react-player/lazy'), { ssr: false });

/* eslint-disable-next-line */
export interface ContentyoutubeProps extends ContentYoutubeInterface { }

export function ContentYoutube({
  container,
  youtube,
  thumbnail,
  section,
}: ContentyoutubeProps) {
  const [playing, setPlaying] = useState(false);
  const thumbnailCss = playing ? 'd-none' : 'd-block';

  function togglePlaying() {
    setPlaying(!playing);
  }

  return (
    <Section {...section}>
      <div className={container ? '' : 'container'}>
        <div className="ratio ratio-16x9 w-100">
          <div className={`overflow-hidden z-1 ${thumbnailCss}`}>
            <div className="position-absolute top-50 start-50 translate-middle z-1">
              <button onClick={() => togglePlaying()}>Play</button>
            </div>
            <ImageRenderer image={thumbnail} />
          </div>
          <ReactPlayer
            url={youtube}
            width={'100%'}
            height={'100%'}
            playing={playing}
          />
        </div>
      </div>
    </Section>
  );
}

export default ContentYoutube;
