import { ShopUi } from "@deardigital/shop/ui";

/* eslint-disable-next-line */
export interface ShopProps {}

export function Shop(props: ShopProps) {
  return (
    <div>
      <h1>Welcome to Shop!</h1>
      <ShopUi />
    </div>
  );
}

export default Shop;
