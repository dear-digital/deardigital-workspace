import { PageInterface } from '@deardigital/shared/interfaces';
import ContentBlocks from './content-blocks';
import Header from './header/header';

export function PageView({ globals, contentBlocks }: PageInterface) {
  return (
    <main>
      <Header {...globals}  />
      <ContentBlocks contentBlocks={contentBlocks} />
    </main>
  );
}
