import { PageInterface } from '@deardigital/shared/interfaces';
import ContentBlocks from './content-blocks';

export function PageView({ contentBlocks }: PageInterface) {
  return (
    <main>
      <ContentBlocks contentBlocks={contentBlocks} />
    </main>
  );
}
