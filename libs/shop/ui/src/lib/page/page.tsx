import { PageInterface } from '@deardigital/shared/interfaces';
import Header from '../header/header';
import { ContentBlocks, HeroBlocks } from '@deardigital/shared/ui';

/* eslint-disable-next-line */
export interface PageViewProps extends PageInterface { }

export function PageView({ globals, hero, contentBlocks }: PageViewProps) {
  return (
    <main>
      <Header globals={globals} />
      {hero && <HeroBlocks {...hero} />}
      <ContentBlocks contentBlocks={contentBlocks} />
    </main>
  );
}

export default PageView;
