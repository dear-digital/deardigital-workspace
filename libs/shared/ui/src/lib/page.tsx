import { PageInterface } from '@deardigital/shared/interfaces';
import ContentBlocks from './content-blocks';
import Header from './header/header';
import HeroBlocks from './hero-blocks';

export function PageView({ globals, hero, contentBlocks }: PageInterface) {
  console.log("hero", hero);
  return (
    <main>
      <Header globals={globals}  />
      <HeroBlocks {...hero} />
      <ContentBlocks contentBlocks={contentBlocks} />
    </main>
  );
}
