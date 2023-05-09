import { PageInterface } from '@deardigital/shared/interfaces';
import ContentBlocks from './content-blocks';
import Header from './header/header';
import HeroBlocks from './hero-blocks';

export function PageView({ globals, hero, contentBlocks }: PageInterface) {
  return (
    <main>
      <Header globals={globals} />
      {hero && <HeroBlocks {...hero} />}
      <ContentBlocks contentBlocks={contentBlocks} />
    </main>
  );
}
