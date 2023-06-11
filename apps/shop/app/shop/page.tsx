import { PAGE_TYPES } from '@deardigital/shared/constants';
import { FetchPageBySlug } from '@deardigital/shared/services';
import { PageView } from '@deardigital/shared/ui';

/* eslint-disable-next-line */
export interface ShopProps { }

export default async function Shop(props: ShopProps) {
  const data = await new FetchPageBySlug(PAGE_TYPES.shop, '').fetch(true);

  return (
    <PageView {...data} />
  );
}
