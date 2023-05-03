import { ContentYoutubeInterface } from '@deardigital/shared/interfaces';
import Section from '../section/section';

/* eslint-disable-next-line */
export interface ContentyoutubeProps extends ContentYoutubeInterface { }

export function ContentYoutube({
  container,
  youtube,
  title,
  section,
}: ContentyoutubeProps) {
  if (!youtube) return null;

  return (
    <Section {...section}>
      <div className={container ? '' : 'container'}>
        <div className="ratio ratio-16x9 w-100">
          <iframe src={`https://www.youtube.com/embed/${youtube}?autoplay=0&fs=0&iv_load_policy=3&showinfo=0&rel=0&cc_load_policy=0&start=0&end=0`} title={title} allowFullScreen></iframe>
        </div>
      </div>
    </Section>
  );
}

export default ContentYoutube;
