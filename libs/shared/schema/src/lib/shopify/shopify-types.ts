import { GraphQLClient } from 'graphql-request';
import * as Dom from 'graphql-request/dist/types.dom';
import gql from 'graphql-tag';
export type Maybe<T> = T | null | undefined;
export type InputMaybe<T> = T | null | undefined;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  Color: any;
  DateTime: string;
  Decimal: string;
  HTML: string;
  JSON: any;
  URL: string;
  UnsignedInt64: any;
};

/**
 * A version of the API, as defined by [Shopify API versioning](https://shopify.dev/api/usage/versioning).
 * Versions are commonly referred to by their handle (for example, `2021-10`).
 *
 */
export type ApiVersionShopify = {
  __typename?: 'ApiVersion';
  /** The human-readable name of the version. */
  displayName: Scalars['String'];
  /** The unique identifier of an ApiVersion. All supported API versions have a date-based (YYYY-MM) or `unstable` handle. */
  handle: Scalars['String'];
  /** Whether the version is actively supported by Shopify. Supported API versions are guaranteed to be stable. Unsupported API versions include unstable, release candidate, and end-of-life versions that are marked as unsupported. For more information, refer to [Versioning](https://shopify.dev/api/usage/versioning). */
  supported: Scalars['Boolean'];
};

/** Details about the gift card used on the checkout. */
export type AppliedGiftCardShopify = NodeShopify & {
  __typename?: 'AppliedGiftCard';
  /** The amount that was taken from the gift card by applying it. */
  amountUsed: MoneyV2Shopify;
  /**
   * The amount that was taken from the gift card by applying it.
   * @deprecated Use `amountUsed` instead.
   */
  amountUsedV2: MoneyV2Shopify;
  /** The amount left on the gift card. */
  balance: MoneyV2Shopify;
  /**
   * The amount left on the gift card.
   * @deprecated Use `balance` instead.
   */
  balanceV2: MoneyV2Shopify;
  /** A globally-unique identifier. */
  id: Scalars['ID'];
  /** The last characters of the gift card. */
  lastCharacters: Scalars['String'];
  /** The amount that was applied to the checkout in its currency. */
  presentmentAmountUsed: MoneyV2Shopify;
};

/** An article in an online store blog. */
export type ArticleShopify = HasMetafieldsShopify & NodeShopify & OnlineStorePublishableShopify & {
  __typename?: 'Article';
  /**
   * The article's author.
   * @deprecated Use `authorV2` instead.
   */
  author: ArticleAuthorShopify;
  /** The article's author. */
  authorV2?: Maybe<ArticleAuthorShopify>;
  /** The blog that the article belongs to. */
  blog: BlogShopify;
  /** List of comments posted on the article. */
  comments: CommentConnectionShopify;
  /** Stripped content of the article, single line with HTML tags removed. */
  content: Scalars['String'];
  /** The content of the article, complete with HTML formatting. */
  contentHtml: Scalars['HTML'];
  /** Stripped excerpt of the article, single line with HTML tags removed. */
  excerpt?: Maybe<Scalars['String']>;
  /** The excerpt of the article, complete with HTML formatting. */
  excerptHtml?: Maybe<Scalars['HTML']>;
  /**
   * A human-friendly unique string for the Article automatically generated from its title.
   *
   */
  handle: Scalars['String'];
  /** A globally-unique identifier. */
  id: Scalars['ID'];
  /** The image associated with the article. */
  image?: Maybe<ImageShopify>;
  /** Returns a metafield found by namespace and key. */
  metafield?: Maybe<MetafieldShopify>;
  /**
   * The metafields associated with the resource matching the supplied list of namespaces and keys.
   *
   */
  metafields: Array<Maybe<MetafieldShopify>>;
  /** The URL used for viewing the resource on the shop's Online Store. Returns `null` if the resource is currently not published to the Online Store sales channel. */
  onlineStoreUrl?: Maybe<Scalars['URL']>;
  /** The date and time when the article was published. */
  publishedAt: Scalars['DateTime'];
  /** The article’s SEO information. */
  seo?: Maybe<SeoShopify>;
  /** A categorization that a article can be tagged with. */
  tags: Array<Scalars['String']>;
  /** The article’s name. */
  title: Scalars['String'];
};


/** An article in an online store blog. */
export type ArticleCommentsArgsShopify = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  reverse?: InputMaybe<Scalars['Boolean']>;
};


/** An article in an online store blog. */
export type ArticleContentArgsShopify = {
  truncateAt?: InputMaybe<Scalars['Int']>;
};


/** An article in an online store blog. */
export type ArticleExcerptArgsShopify = {
  truncateAt?: InputMaybe<Scalars['Int']>;
};


/** An article in an online store blog. */
export type ArticleMetafieldArgsShopify = {
  key: Scalars['String'];
  namespace: Scalars['String'];
};


/** An article in an online store blog. */
export type ArticleMetafieldsArgsShopify = {
  identifiers: Array<HasMetafieldsIdentifierShopify>;
};

/** The author of an article. */
export type ArticleAuthorShopify = {
  __typename?: 'ArticleAuthor';
  /** The author's bio. */
  bio?: Maybe<Scalars['String']>;
  /** The author’s email. */
  email: Scalars['String'];
  /** The author's first name. */
  firstName: Scalars['String'];
  /** The author's last name. */
  lastName: Scalars['String'];
  /** The author's full name. */
  name: Scalars['String'];
};

/**
 * An auto-generated type for paginating through multiple Articles.
 *
 */
export type ArticleConnectionShopify = {
  __typename?: 'ArticleConnection';
  /** A list of edges. */
  edges: Array<ArticleEdgeShopify>;
  /** A list of the nodes contained in ArticleEdge. */
  nodes: Array<ArticleShopify>;
  /** Information to aid in pagination. */
  pageInfo: PageInfoShopify;
};

/**
 * An auto-generated type which holds one Article and a cursor during pagination.
 *
 */
export type ArticleEdgeShopify = {
  __typename?: 'ArticleEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of ArticleEdge. */
  node: ArticleShopify;
};

/** The set of valid sort keys for the Article query. */
export enum ArticleSortKeysShopify {
  /** Sort by the `author` value. */
  AuthorShopify = 'AUTHOR',
  /** Sort by the `blog_title` value. */
  BlogTitleShopify = 'BLOG_TITLE',
  /** Sort by the `id` value. */
  IdShopify = 'ID',
  /** Sort by the `published_at` value. */
  PublishedAtShopify = 'PUBLISHED_AT',
  /**
   * Sort by relevance to the search terms when the `query` parameter is specified on the connection.
   * Don't use this sort key when no search query is specified.
   *
   */
  RelevanceShopify = 'RELEVANCE',
  /** Sort by the `title` value. */
  TitleShopify = 'TITLE',
  /** Sort by the `updated_at` value. */
  UpdatedAtShopify = 'UPDATED_AT'
}

/** Represents a generic custom attribute. */
export type AttributeShopify = {
  __typename?: 'Attribute';
  /** Key or name of the attribute. */
  key: Scalars['String'];
  /** Value of the attribute. */
  value?: Maybe<Scalars['String']>;
};

/** Specifies the input fields required for an attribute. */
export type AttributeInputShopify = {
  /** Key or name of the attribute. */
  key: Scalars['String'];
  /** Value of the attribute. */
  value: Scalars['String'];
};

/**
 * Automatic discount applications capture the intentions of a discount that was automatically applied.
 *
 */
export type AutomaticDiscountApplicationShopify = DiscountApplicationShopify & {
  __typename?: 'AutomaticDiscountApplication';
  /** The method by which the discount's value is allocated to its entitled items. */
  allocationMethod: DiscountApplicationAllocationMethodShopify;
  /** Which lines of targetType that the discount is allocated over. */
  targetSelection: DiscountApplicationTargetSelectionShopify;
  /** The type of line that the discount is applicable towards. */
  targetType: DiscountApplicationTargetTypeShopify;
  /** The title of the application. */
  title: Scalars['String'];
  /** The value of the discount application. */
  value: PricingValueShopify;
};

/** A collection of available shipping rates for a checkout. */
export type AvailableShippingRatesShopify = {
  __typename?: 'AvailableShippingRates';
  /**
   * Whether or not the shipping rates are ready.
   * The `shippingRates` field is `null` when this value is `false`.
   * This field should be polled until its value becomes `true`.
   *
   */
  ready: Scalars['Boolean'];
  /** The fetched shipping rates. `null` until the `ready` field is `true`. */
  shippingRates?: Maybe<Array<ShippingRateShopify>>;
};

/** An online store blog. */
export type BlogShopify = HasMetafieldsShopify & NodeShopify & OnlineStorePublishableShopify & {
  __typename?: 'Blog';
  /** Find an article by its handle. */
  articleByHandle?: Maybe<ArticleShopify>;
  /** List of the blog's articles. */
  articles: ArticleConnectionShopify;
  /** The authors who have contributed to the blog. */
  authors: Array<ArticleAuthorShopify>;
  /**
   * A human-friendly unique string for the Blog automatically generated from its title.
   *
   */
  handle: Scalars['String'];
  /** A globally-unique identifier. */
  id: Scalars['ID'];
  /** Returns a metafield found by namespace and key. */
  metafield?: Maybe<MetafieldShopify>;
  /**
   * The metafields associated with the resource matching the supplied list of namespaces and keys.
   *
   */
  metafields: Array<Maybe<MetafieldShopify>>;
  /** The URL used for viewing the resource on the shop's Online Store. Returns `null` if the resource is currently not published to the Online Store sales channel. */
  onlineStoreUrl?: Maybe<Scalars['URL']>;
  /** The blog's SEO information. */
  seo?: Maybe<SeoShopify>;
  /** The blogs’s title. */
  title: Scalars['String'];
};


/** An online store blog. */
export type BlogArticleByHandleArgsShopify = {
  handle: Scalars['String'];
};


/** An online store blog. */
export type BlogArticlesArgsShopify = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  query?: InputMaybe<Scalars['String']>;
  reverse?: InputMaybe<Scalars['Boolean']>;
  sortKey?: InputMaybe<ArticleSortKeysShopify>;
};


/** An online store blog. */
export type BlogMetafieldArgsShopify = {
  key: Scalars['String'];
  namespace: Scalars['String'];
};


/** An online store blog. */
export type BlogMetafieldsArgsShopify = {
  identifiers: Array<HasMetafieldsIdentifierShopify>;
};

/**
 * An auto-generated type for paginating through multiple Blogs.
 *
 */
export type BlogConnectionShopify = {
  __typename?: 'BlogConnection';
  /** A list of edges. */
  edges: Array<BlogEdgeShopify>;
  /** A list of the nodes contained in BlogEdge. */
  nodes: Array<BlogShopify>;
  /** Information to aid in pagination. */
  pageInfo: PageInfoShopify;
};

/**
 * An auto-generated type which holds one Blog and a cursor during pagination.
 *
 */
export type BlogEdgeShopify = {
  __typename?: 'BlogEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of BlogEdge. */
  node: BlogShopify;
};

/** The set of valid sort keys for the Blog query. */
export enum BlogSortKeysShopify {
  /** Sort by the `handle` value. */
  HandleShopify = 'HANDLE',
  /** Sort by the `id` value. */
  IdShopify = 'ID',
  /**
   * Sort by relevance to the search terms when the `query` parameter is specified on the connection.
   * Don't use this sort key when no search query is specified.
   *
   */
  RelevanceShopify = 'RELEVANCE',
  /** Sort by the `title` value. */
  TitleShopify = 'TITLE'
}

/**
 * The store's [branding configuration](https://help.shopify.com/en/manual/promoting-marketing/managing-brand-assets).
 *
 */
export type BrandShopify = {
  __typename?: 'Brand';
  /** The colors of the store's brand. */
  colors: BrandColorsShopify;
  /** The store's cover image. */
  coverImage?: Maybe<MediaImageShopify>;
  /** The store's default logo. */
  logo?: Maybe<MediaImageShopify>;
  /** The store's short description. */
  shortDescription?: Maybe<Scalars['String']>;
  /** The store's slogan. */
  slogan?: Maybe<Scalars['String']>;
  /** The store's preferred logo for square UI elements. */
  squareLogo?: Maybe<MediaImageShopify>;
};

/**
 * A group of related colors for the shop's brand.
 *
 */
export type BrandColorGroupShopify = {
  __typename?: 'BrandColorGroup';
  /** The background color. */
  background?: Maybe<Scalars['Color']>;
  /** The foreground color. */
  foreground?: Maybe<Scalars['Color']>;
};

/**
 * The colors of the shop's brand.
 *
 */
export type BrandColorsShopify = {
  __typename?: 'BrandColors';
  /** The shop's primary brand colors. */
  primary: Array<BrandColorGroupShopify>;
  /** The shop's secondary brand colors. */
  secondary: Array<BrandColorGroupShopify>;
};

/** Card brand, such as Visa or Mastercard, which can be used for payments. */
export enum CardBrandShopify {
  /** American Express. */
  AmericanExpressShopify = 'AMERICAN_EXPRESS',
  /** Diners Club. */
  DinersClubShopify = 'DINERS_CLUB',
  /** Discover. */
  DiscoverShopify = 'DISCOVER',
  /** JCB. */
  JcbShopify = 'JCB',
  /** Mastercard. */
  MastercardShopify = 'MASTERCARD',
  /** Visa. */
  VisaShopify = 'VISA'
}

/**
 * A cart represents the merchandise that a buyer intends to purchase,
 * and the estimated cost associated with the cart. Learn how to
 * [interact with a cart](https://shopify.dev/custom-storefronts/internationalization/international-pricing)
 * during a customer's session.
 *
 */
export type CartShopify = NodeShopify & {
  __typename?: 'Cart';
  /** An attribute associated with the cart. */
  attribute?: Maybe<AttributeShopify>;
  /** The attributes associated with the cart. Attributes are represented as key-value pairs. */
  attributes: Array<AttributeShopify>;
  /** Information about the buyer that is interacting with the cart. */
  buyerIdentity: CartBuyerIdentityShopify;
  /** The URL of the checkout for the cart. */
  checkoutUrl: Scalars['URL'];
  /** The estimated costs that the buyer will pay at checkout. The costs are subject to change and changes will be reflected at checkout. The `cost` field uses the `buyerIdentity` field to determine [international pricing](https://shopify.dev/custom-storefronts/internationalization/international-pricing). */
  cost: CartCostShopify;
  /** The date and time when the cart was created. */
  createdAt: Scalars['DateTime'];
  /**
   * The delivery groups available for the cart, based on the buyer identity default
   * delivery address preference or the default address of the logged-in customer.
   *
   */
  deliveryGroups: CartDeliveryGroupConnectionShopify;
  /** The discounts that have been applied to the entire cart. */
  discountAllocations: Array<CartDiscountAllocationShopify>;
  /**
   * The case-insensitive discount codes that the customer added at checkout.
   *
   */
  discountCodes: Array<CartDiscountCodeShopify>;
  /**
   * The estimated costs that the buyer will pay at checkout.
   * The estimated costs are subject to change and changes will be reflected at checkout.
   * The `estimatedCost` field uses the `buyerIdentity` field to determine
   * [international pricing](https://shopify.dev/custom-storefronts/internationalization/international-pricing).
   *
   * @deprecated Use `cost` instead.
   */
  estimatedCost: CartEstimatedCostShopify;
  /** A globally-unique identifier. */
  id: Scalars['ID'];
  /** A list of lines containing information about the items the customer intends to purchase. */
  lines: CartLineConnectionShopify;
  /** A note that is associated with the cart. For example, the note can be a personalized message to the buyer. */
  note?: Maybe<Scalars['String']>;
  /** The total number of items in the cart. */
  totalQuantity: Scalars['Int'];
  /** The date and time when the cart was updated. */
  updatedAt: Scalars['DateTime'];
};


/**
 * A cart represents the merchandise that a buyer intends to purchase,
 * and the estimated cost associated with the cart. Learn how to
 * [interact with a cart](https://shopify.dev/custom-storefronts/internationalization/international-pricing)
 * during a customer's session.
 *
 */
export type CartAttributeArgsShopify = {
  key: Scalars['String'];
};


/**
 * A cart represents the merchandise that a buyer intends to purchase,
 * and the estimated cost associated with the cart. Learn how to
 * [interact with a cart](https://shopify.dev/custom-storefronts/internationalization/international-pricing)
 * during a customer's session.
 *
 */
export type CartDeliveryGroupsArgsShopify = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  reverse?: InputMaybe<Scalars['Boolean']>;
};


/**
 * A cart represents the merchandise that a buyer intends to purchase,
 * and the estimated cost associated with the cart. Learn how to
 * [interact with a cart](https://shopify.dev/custom-storefronts/internationalization/international-pricing)
 * during a customer's session.
 *
 */
export type CartLinesArgsShopify = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  reverse?: InputMaybe<Scalars['Boolean']>;
};

/** Return type for `cartAttributesUpdate` mutation. */
export type CartAttributesUpdatePayloadShopify = {
  __typename?: 'CartAttributesUpdatePayload';
  /** The updated cart. */
  cart?: Maybe<CartShopify>;
  /** The list of errors that occurred from executing the mutation. */
  userErrors: Array<CartUserErrorShopify>;
};

/** The discounts automatically applied to the cart line based on prerequisites that have been met. */
export type CartAutomaticDiscountAllocationShopify = CartDiscountAllocationShopify & {
  __typename?: 'CartAutomaticDiscountAllocation';
  /** The discounted amount that has been applied to the cart line. */
  discountedAmount: MoneyV2Shopify;
  /** The title of the allocated discount. */
  title: Scalars['String'];
};

/** Represents information about the buyer that is interacting with the cart. */
export type CartBuyerIdentityShopify = {
  __typename?: 'CartBuyerIdentity';
  /** The country where the buyer is located. */
  countryCode?: Maybe<CountryCodeShopify>;
  /** The customer account associated with the cart. */
  customer?: Maybe<CustomerShopify>;
  /**
   * An ordered set of delivery addresses tied to the buyer that is interacting with the cart.
   * The rank of the preferences is determined by the order of the addresses in the array. Preferences
   * can be used to populate relevant fields in the checkout flow.
   *
   */
  deliveryAddressPreferences: Array<DeliveryAddressShopify>;
  /** The email address of the buyer that is interacting with the cart. */
  email?: Maybe<Scalars['String']>;
  /** The phone number of the buyer that is interacting with the cart. */
  phone?: Maybe<Scalars['String']>;
};

/**
 * Specifies the input fields to update the buyer information associated with a cart.
 * Buyer identity is used to determine
 * [international pricing](https://shopify.dev/custom-storefronts/internationalization/international-pricing)
 * and should match the customer's shipping address.
 *
 */
export type CartBuyerIdentityInputShopify = {
  /** The country where the buyer is located. */
  countryCode?: InputMaybe<CountryCodeShopify>;
  /** The access token used to identify the customer associated with the cart. */
  customerAccessToken?: InputMaybe<Scalars['String']>;
  /**
   * An ordered set of delivery addresses tied to the buyer that is interacting with the cart.
   * The rank of the preferences is determined by the order of the addresses in the array. Preferences
   * can be used to populate relevant fields in the checkout flow.
   *
   */
  deliveryAddressPreferences?: InputMaybe<Array<DeliveryAddressInputShopify>>;
  /** The email address of the buyer that is interacting with the cart. */
  email?: InputMaybe<Scalars['String']>;
  /** The phone number of the buyer that is interacting with the cart. */
  phone?: InputMaybe<Scalars['String']>;
};

/** Return type for `cartBuyerIdentityUpdate` mutation. */
export type CartBuyerIdentityUpdatePayloadShopify = {
  __typename?: 'CartBuyerIdentityUpdatePayload';
  /** The updated cart. */
  cart?: Maybe<CartShopify>;
  /** The list of errors that occurred from executing the mutation. */
  userErrors: Array<CartUserErrorShopify>;
};

/** The discount that has been applied to the cart line using a discount code. */
export type CartCodeDiscountAllocationShopify = CartDiscountAllocationShopify & {
  __typename?: 'CartCodeDiscountAllocation';
  /** The code used to apply the discount. */
  code: Scalars['String'];
  /** The discounted amount that has been applied to the cart line. */
  discountedAmount: MoneyV2Shopify;
};

/**
 * The costs that the buyer will pay at checkout.
 * The cart cost uses [`CartBuyerIdentity`](https://shopify.dev/api/storefront/reference/cart/cartbuyeridentity) to determine
 * [international pricing](https://shopify.dev/custom-storefronts/internationalization/international-pricing).
 *
 */
export type CartCostShopify = {
  __typename?: 'CartCost';
  /** The estimated amount, before taxes and discounts, for the customer to pay at checkout. The checkout charge amount doesn't include any deferred payments that'll be paid at a later date. If the cart has no deferred payments, then the checkout charge amount is equivalent to `subtotalAmount`. */
  checkoutChargeAmount: MoneyV2Shopify;
  /** The amount, before taxes and cart-level discounts, for the customer to pay. */
  subtotalAmount: MoneyV2Shopify;
  /** Whether the subtotal amount is estimated. */
  subtotalAmountEstimated: Scalars['Boolean'];
  /** The total amount for the customer to pay. */
  totalAmount: MoneyV2Shopify;
  /** Whether the total amount is estimated. */
  totalAmountEstimated: Scalars['Boolean'];
  /** The duty amount for the customer to pay at checkout. */
  totalDutyAmount?: Maybe<MoneyV2Shopify>;
  /** Whether the total duty amount is estimated. */
  totalDutyAmountEstimated: Scalars['Boolean'];
  /** The tax amount for the customer to pay at checkout. */
  totalTaxAmount?: Maybe<MoneyV2Shopify>;
  /** Whether the total tax amount is estimated. */
  totalTaxAmountEstimated: Scalars['Boolean'];
};

/** Return type for `cartCreate` mutation. */
export type CartCreatePayloadShopify = {
  __typename?: 'CartCreatePayload';
  /** The new cart. */
  cart?: Maybe<CartShopify>;
  /** The list of errors that occurred from executing the mutation. */
  userErrors: Array<CartUserErrorShopify>;
};

/** The discounts automatically applied to the cart line based on prerequisites that have been met. */
export type CartCustomDiscountAllocationShopify = CartDiscountAllocationShopify & {
  __typename?: 'CartCustomDiscountAllocation';
  /** The discounted amount that has been applied to the cart line. */
  discountedAmount: MoneyV2Shopify;
  /** The title of the allocated discount. */
  title: Scalars['String'];
};

/** Information about the options available for one or more line items to be delivered to a specific address. */
export type CartDeliveryGroupShopify = {
  __typename?: 'CartDeliveryGroup';
  /** A list of cart lines for the delivery group. */
  cartLines: CartLineConnectionShopify;
  /** The destination address for the delivery group. */
  deliveryAddress: MailingAddressShopify;
  /** The delivery options available for the delivery group. */
  deliveryOptions: Array<CartDeliveryOptionShopify>;
  /** The ID for the delivery group. */
  id: Scalars['ID'];
  /** The selected delivery option for the delivery group. */
  selectedDeliveryOption?: Maybe<CartDeliveryOptionShopify>;
};


/** Information about the options available for one or more line items to be delivered to a specific address. */
export type CartDeliveryGroupCartLinesArgsShopify = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  reverse?: InputMaybe<Scalars['Boolean']>;
};

/**
 * An auto-generated type for paginating through multiple CartDeliveryGroups.
 *
 */
export type CartDeliveryGroupConnectionShopify = {
  __typename?: 'CartDeliveryGroupConnection';
  /** A list of edges. */
  edges: Array<CartDeliveryGroupEdgeShopify>;
  /** A list of the nodes contained in CartDeliveryGroupEdge. */
  nodes: Array<CartDeliveryGroupShopify>;
  /** Information to aid in pagination. */
  pageInfo: PageInfoShopify;
};

/**
 * An auto-generated type which holds one CartDeliveryGroup and a cursor during pagination.
 *
 */
export type CartDeliveryGroupEdgeShopify = {
  __typename?: 'CartDeliveryGroupEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of CartDeliveryGroupEdge. */
  node: CartDeliveryGroupShopify;
};

/** Information about a delivery option. */
export type CartDeliveryOptionShopify = {
  __typename?: 'CartDeliveryOption';
  /** The code of the delivery option. */
  code?: Maybe<Scalars['String']>;
  /** The method for the delivery option. */
  deliveryMethodType: DeliveryMethodTypeShopify;
  /** The description of the delivery option. */
  description?: Maybe<Scalars['String']>;
  /** The estimated cost for the delivery option. */
  estimatedCost: MoneyV2Shopify;
  /** The unique identifier of the delivery option. */
  handle: Scalars['String'];
  /** The title of the delivery option. */
  title?: Maybe<Scalars['String']>;
};

/** The discounts that have been applied to the cart line. */
export type CartDiscountAllocationShopify = {
  /** The discounted amount that has been applied to the cart line. */
  discountedAmount: MoneyV2Shopify;
};

/** The discount codes applied to the cart. */
export type CartDiscountCodeShopify = {
  __typename?: 'CartDiscountCode';
  /** Whether the discount code is applicable to the cart's current contents. */
  applicable: Scalars['Boolean'];
  /** The code for the discount. */
  code: Scalars['String'];
};

/** Return type for `cartDiscountCodesUpdate` mutation. */
export type CartDiscountCodesUpdatePayloadShopify = {
  __typename?: 'CartDiscountCodesUpdatePayload';
  /** The updated cart. */
  cart?: Maybe<CartShopify>;
  /** The list of errors that occurred from executing the mutation. */
  userErrors: Array<CartUserErrorShopify>;
};

/** Possible error codes that can be returned by `CartUserError`. */
export enum CartErrorCodeShopify {
  /** The input value is invalid. */
  InvalidShopify = 'INVALID',
  /** Merchandise line was not found in cart. */
  InvalidMerchandiseLineShopify = 'INVALID_MERCHANDISE_LINE',
  /** The input value should be less than the maximum value allowed. */
  LessThanShopify = 'LESS_THAN',
  /** Missing discount code. */
  MissingDiscountCodeShopify = 'MISSING_DISCOUNT_CODE',
  /** Missing note. */
  MissingNoteShopify = 'MISSING_NOTE'
}

/**
 * The estimated costs that the buyer will pay at checkout.
 * The estimated cost uses
 * [`CartBuyerIdentity`](https://shopify.dev/api/storefront/reference/cart/cartbuyeridentity)
 * to determine
 * [international pricing](https://shopify.dev/custom-storefronts/internationalization/international-pricing).
 *
 */
export type CartEstimatedCostShopify = {
  __typename?: 'CartEstimatedCost';
  /** The estimated amount, before taxes and discounts, for the customer to pay at checkout. The checkout charge amount doesn't include any deferred payments that'll be paid at a later date. If the cart has no deferred payments, then the checkout charge amount is equivalent to`subtotal_amount`. */
  checkoutChargeAmount: MoneyV2Shopify;
  /** The estimated amount, before taxes and discounts, for the customer to pay. */
  subtotalAmount: MoneyV2Shopify;
  /** The estimated total amount for the customer to pay. */
  totalAmount: MoneyV2Shopify;
  /** The estimated duty amount for the customer to pay at checkout. */
  totalDutyAmount?: Maybe<MoneyV2Shopify>;
  /** The estimated tax amount for the customer to pay at checkout. */
  totalTaxAmount?: Maybe<MoneyV2Shopify>;
};

/** Specifies the input fields to create a cart. */
export type CartInputShopify = {
  /** An array of key-value pairs that contains additional information about the cart. */
  attributes?: InputMaybe<Array<AttributeInputShopify>>;
  /**
   * The customer associated with the cart. Used to determine [international pricing]
   * (https://shopify.dev/custom-storefronts/internationalization/international-pricing).
   * Buyer identity should match the customer's shipping address.
   *
   */
  buyerIdentity?: InputMaybe<CartBuyerIdentityInputShopify>;
  /**
   * The case-insensitive discount codes that the customer added at checkout.
   *
   */
  discountCodes?: InputMaybe<Array<Scalars['String']>>;
  /** A list of merchandise lines to add to the cart. */
  lines?: InputMaybe<Array<CartLineInputShopify>>;
  /** A note that is associated with the cart. For example, the note can be a personalized message to the buyer. */
  note?: InputMaybe<Scalars['String']>;
};

/** Represents information about the merchandise in the cart. */
export type CartLineShopify = NodeShopify & {
  __typename?: 'CartLine';
  /** An attribute associated with the cart line. */
  attribute?: Maybe<AttributeShopify>;
  /** The attributes associated with the cart line. Attributes are represented as key-value pairs. */
  attributes: Array<AttributeShopify>;
  /** The cost of the merchandise that the buyer will pay for at checkout. The costs are subject to change and changes will be reflected at checkout. */
  cost: CartLineCostShopify;
  /** The discounts that have been applied to the cart line. */
  discountAllocations: Array<CartDiscountAllocationShopify>;
  /**
   * The estimated cost of the merchandise that the buyer will pay for at checkout. The estimated costs are subject to change and changes will be reflected at checkout.
   * @deprecated Use `cost` instead.
   */
  estimatedCost: CartLineEstimatedCostShopify;
  /** A globally-unique identifier. */
  id: Scalars['ID'];
  /** The merchandise that the buyer intends to purchase. */
  merchandise: MerchandiseShopify;
  /** The quantity of the merchandise that the customer intends to purchase. */
  quantity: Scalars['Int'];
  /** The selling plan associated with the cart line and the effect that each selling plan has on variants when they're purchased. */
  sellingPlanAllocation?: Maybe<SellingPlanAllocationShopify>;
};


/** Represents information about the merchandise in the cart. */
export type CartLineAttributeArgsShopify = {
  key: Scalars['String'];
};

/**
 * An auto-generated type for paginating through multiple CartLines.
 *
 */
export type CartLineConnectionShopify = {
  __typename?: 'CartLineConnection';
  /** A list of edges. */
  edges: Array<CartLineEdgeShopify>;
  /** A list of the nodes contained in CartLineEdge. */
  nodes: Array<CartLineShopify>;
  /** Information to aid in pagination. */
  pageInfo: PageInfoShopify;
};

/** The cost of the merchandise line that the buyer will pay at checkout. */
export type CartLineCostShopify = {
  __typename?: 'CartLineCost';
  /** The amount of the merchandise line. */
  amountPerQuantity: MoneyV2Shopify;
  /** The compare at amount of the merchandise line. */
  compareAtAmountPerQuantity?: Maybe<MoneyV2Shopify>;
  /** The cost of the merchandise line before line-level discounts. */
  subtotalAmount: MoneyV2Shopify;
  /** The total cost of the merchandise line. */
  totalAmount: MoneyV2Shopify;
};

/**
 * An auto-generated type which holds one CartLine and a cursor during pagination.
 *
 */
export type CartLineEdgeShopify = {
  __typename?: 'CartLineEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of CartLineEdge. */
  node: CartLineShopify;
};

/** The estimated cost of the merchandise line that the buyer will pay at checkout. */
export type CartLineEstimatedCostShopify = {
  __typename?: 'CartLineEstimatedCost';
  /** The amount of the merchandise line. */
  amount: MoneyV2Shopify;
  /** The compare at amount of the merchandise line. */
  compareAtAmount?: Maybe<MoneyV2Shopify>;
  /** The estimated cost of the merchandise line before discounts. */
  subtotalAmount: MoneyV2Shopify;
  /** The estimated total cost of the merchandise line. */
  totalAmount: MoneyV2Shopify;
};

/** Specifies the input fields to create a merchandise line on a cart. */
export type CartLineInputShopify = {
  /** An array of key-value pairs that contains additional information about the merchandise line. */
  attributes?: InputMaybe<Array<AttributeInputShopify>>;
  /** The identifier of the merchandise that the buyer intends to purchase. */
  merchandiseId: Scalars['ID'];
  /** The quantity of the merchandise. */
  quantity?: InputMaybe<Scalars['Int']>;
  /** The identifier of the selling plan that the merchandise is being purchased with. */
  sellingPlanId?: InputMaybe<Scalars['ID']>;
};

/** Specifies the input fields to update a line item on a cart. */
export type CartLineUpdateInputShopify = {
  /** An array of key-value pairs that contains additional information about the merchandise line. */
  attributes?: InputMaybe<Array<AttributeInputShopify>>;
  /** The identifier of the merchandise line. */
  id: Scalars['ID'];
  /** The identifier of the merchandise for the line item. */
  merchandiseId?: InputMaybe<Scalars['ID']>;
  /** The quantity of the line item. */
  quantity?: InputMaybe<Scalars['Int']>;
  /** The identifier of the selling plan that the merchandise is being purchased with. */
  sellingPlanId?: InputMaybe<Scalars['ID']>;
};

/** Return type for `cartLinesAdd` mutation. */
export type CartLinesAddPayloadShopify = {
  __typename?: 'CartLinesAddPayload';
  /** The updated cart. */
  cart?: Maybe<CartShopify>;
  /** The list of errors that occurred from executing the mutation. */
  userErrors: Array<CartUserErrorShopify>;
};

/** Return type for `cartLinesRemove` mutation. */
export type CartLinesRemovePayloadShopify = {
  __typename?: 'CartLinesRemovePayload';
  /** The updated cart. */
  cart?: Maybe<CartShopify>;
  /** The list of errors that occurred from executing the mutation. */
  userErrors: Array<CartUserErrorShopify>;
};

/** Return type for `cartLinesUpdate` mutation. */
export type CartLinesUpdatePayloadShopify = {
  __typename?: 'CartLinesUpdatePayload';
  /** The updated cart. */
  cart?: Maybe<CartShopify>;
  /** The list of errors that occurred from executing the mutation. */
  userErrors: Array<CartUserErrorShopify>;
};

/** Return type for `cartNoteUpdate` mutation. */
export type CartNoteUpdatePayloadShopify = {
  __typename?: 'CartNoteUpdatePayload';
  /** The updated cart. */
  cart?: Maybe<CartShopify>;
  /** The list of errors that occurred from executing the mutation. */
  userErrors: Array<CartUserErrorShopify>;
};

/**
 * The input fields for updating the selected delivery options for a delivery group.
 *
 */
export type CartSelectedDeliveryOptionInputShopify = {
  /** The ID of the cart delivery group. */
  deliveryGroupId: Scalars['ID'];
  /** The handle of the selected delivery option. */
  deliveryOptionHandle: Scalars['String'];
};

/** Return type for `cartSelectedDeliveryOptionsUpdate` mutation. */
export type CartSelectedDeliveryOptionsUpdatePayloadShopify = {
  __typename?: 'CartSelectedDeliveryOptionsUpdatePayload';
  /** The updated cart. */
  cart?: Maybe<CartShopify>;
  /** The list of errors that occurred from executing the mutation. */
  userErrors: Array<CartUserErrorShopify>;
};

/** Represents an error that happens during execution of a cart mutation. */
export type CartUserErrorShopify = DisplayableErrorShopify & {
  __typename?: 'CartUserError';
  /** The error code. */
  code?: Maybe<CartErrorCodeShopify>;
  /** The path to the input field that caused the error. */
  field?: Maybe<Array<Scalars['String']>>;
  /** The error message. */
  message: Scalars['String'];
};

/** A container for all the information required to checkout items and pay. */
export type CheckoutShopify = NodeShopify & {
  __typename?: 'Checkout';
  /** The gift cards used on the checkout. */
  appliedGiftCards: Array<AppliedGiftCardShopify>;
  /**
   * The available shipping rates for this Checkout.
   * Should only be used when checkout `requiresShipping` is `true` and
   * the shipping address is valid.
   *
   */
  availableShippingRates?: Maybe<AvailableShippingRatesShopify>;
  /** The identity of the customer associated with the checkout. */
  buyerIdentity: CheckoutBuyerIdentityShopify;
  /** The date and time when the checkout was completed. */
  completedAt?: Maybe<Scalars['DateTime']>;
  /** The date and time when the checkout was created. */
  createdAt: Scalars['DateTime'];
  /** The currency code for the checkout. */
  currencyCode: CurrencyCodeShopify;
  /** A list of extra information that is added to the checkout. */
  customAttributes: Array<AttributeShopify>;
  /** Discounts that have been applied on the checkout. */
  discountApplications: DiscountApplicationConnectionShopify;
  /** The email attached to this checkout. */
  email?: Maybe<Scalars['String']>;
  /** A globally-unique identifier. */
  id: Scalars['ID'];
  /** A list of line item objects, each one containing information about an item in the checkout. */
  lineItems: CheckoutLineItemConnectionShopify;
  /** The sum of all the prices of all the items in the checkout. Duties, taxes, shipping and discounts excluded. */
  lineItemsSubtotalPrice: MoneyV2Shopify;
  /** The note associated with the checkout. */
  note?: Maybe<Scalars['String']>;
  /** The resulting order from a paid checkout. */
  order?: Maybe<OrderShopify>;
  /** The Order Status Page for this Checkout, null when checkout is not completed. */
  orderStatusUrl?: Maybe<Scalars['URL']>;
  /** The amount left to be paid. This is equal to the cost of the line items, taxes, and shipping, minus discounts and gift cards. */
  paymentDue: MoneyV2Shopify;
  /**
   * The amount left to be paid. This is equal to the cost of the line items, duties, taxes, and shipping, minus discounts and gift cards.
   * @deprecated Use `paymentDue` instead.
   */
  paymentDueV2: MoneyV2Shopify;
  /**
   * Whether or not the Checkout is ready and can be completed. Checkouts may
   * have asynchronous operations that can take time to finish. If you want
   * to complete a checkout or ensure all the fields are populated and up to
   * date, polling is required until the value is true.
   *
   */
  ready: Scalars['Boolean'];
  /** States whether or not the fulfillment requires shipping. */
  requiresShipping: Scalars['Boolean'];
  /** The shipping address to where the line items will be shipped. */
  shippingAddress?: Maybe<MailingAddressShopify>;
  /**
   * The discounts that have been allocated onto the shipping line by discount applications.
   *
   */
  shippingDiscountAllocations: Array<DiscountAllocationShopify>;
  /** Once a shipping rate is selected by the customer it is transitioned to a `shipping_line` object. */
  shippingLine?: Maybe<ShippingRateShopify>;
  /** The price at checkout before shipping and taxes. */
  subtotalPrice: MoneyV2Shopify;
  /**
   * The price at checkout before duties, shipping, and taxes.
   * @deprecated Use `subtotalPrice` instead.
   */
  subtotalPriceV2: MoneyV2Shopify;
  /** Whether the checkout is tax exempt. */
  taxExempt: Scalars['Boolean'];
  /** Whether taxes are included in the line item and shipping line prices. */
  taxesIncluded: Scalars['Boolean'];
  /** The sum of all the duties applied to the line items in the checkout. */
  totalDuties?: Maybe<MoneyV2Shopify>;
  /** The sum of all the prices of all the items in the checkout, including taxes and duties. */
  totalPrice: MoneyV2Shopify;
  /**
   * The sum of all the prices of all the items in the checkout, including taxes and duties.
   * @deprecated Use `totalPrice` instead.
   */
  totalPriceV2: MoneyV2Shopify;
  /** The sum of all the taxes applied to the line items and shipping lines in the checkout. */
  totalTax: MoneyV2Shopify;
  /**
   * The sum of all the taxes applied to the line items and shipping lines in the checkout.
   * @deprecated Use `totalTax` instead.
   */
  totalTaxV2: MoneyV2Shopify;
  /** The date and time when the checkout was last updated. */
  updatedAt: Scalars['DateTime'];
  /** The url pointing to the checkout accessible from the web. */
  webUrl: Scalars['URL'];
};


/** A container for all the information required to checkout items and pay. */
export type CheckoutDiscountApplicationsArgsShopify = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  reverse?: InputMaybe<Scalars['Boolean']>;
};


/** A container for all the information required to checkout items and pay. */
export type CheckoutLineItemsArgsShopify = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  reverse?: InputMaybe<Scalars['Boolean']>;
};

/** Specifies the fields required to update a checkout's attributes. */
export type CheckoutAttributesUpdateV2InputShopify = {
  /**
   * Allows setting partial addresses on a Checkout, skipping the full validation of attributes.
   * The required attributes are city, province, and country.
   * Full validation of the addresses is still done at completion time. Defaults to `false` with
   * each operation.
   *
   */
  allowPartialAddresses?: InputMaybe<Scalars['Boolean']>;
  /** A list of extra information that is added to the checkout. */
  customAttributes?: InputMaybe<Array<AttributeInputShopify>>;
  /** The text of an optional note that a shop owner can attach to the checkout. */
  note?: InputMaybe<Scalars['String']>;
};

/** Return type for `checkoutAttributesUpdateV2` mutation. */
export type CheckoutAttributesUpdateV2PayloadShopify = {
  __typename?: 'CheckoutAttributesUpdateV2Payload';
  /** The updated checkout object. */
  checkout?: Maybe<CheckoutShopify>;
  /** The list of errors that occurred from executing the mutation. */
  checkoutUserErrors: Array<CheckoutUserErrorShopify>;
  /**
   * The list of errors that occurred from executing the mutation.
   * @deprecated Use `checkoutUserErrors` instead.
   */
  userErrors: Array<UserErrorShopify>;
};

/** The identity of the customer associated with the checkout. */
export type CheckoutBuyerIdentityShopify = {
  __typename?: 'CheckoutBuyerIdentity';
  /** The country code for the checkout. For example, `CA`. */
  countryCode?: Maybe<CountryCodeShopify>;
};

/** Specifies the identity of the customer associated with the checkout. */
export type CheckoutBuyerIdentityInputShopify = {
  /**
   * The country code of one of the shop's
   * [enabled countries](https://help.shopify.com/en/manual/payments/shopify-payments/multi-currency/setup).
   * For example, `CA`. Including this field creates a checkout in the specified country's currency.
   *
   */
  countryCode: CountryCodeShopify;
};

/** Return type for `checkoutCompleteFree` mutation. */
export type CheckoutCompleteFreePayloadShopify = {
  __typename?: 'CheckoutCompleteFreePayload';
  /** The updated checkout object. */
  checkout?: Maybe<CheckoutShopify>;
  /** The list of errors that occurred from executing the mutation. */
  checkoutUserErrors: Array<CheckoutUserErrorShopify>;
  /**
   * The list of errors that occurred from executing the mutation.
   * @deprecated Use `checkoutUserErrors` instead.
   */
  userErrors: Array<UserErrorShopify>;
};

/** Return type for `checkoutCompleteWithCreditCardV2` mutation. */
export type CheckoutCompleteWithCreditCardV2PayloadShopify = {
  __typename?: 'CheckoutCompleteWithCreditCardV2Payload';
  /** The checkout on which the payment was applied. */
  checkout?: Maybe<CheckoutShopify>;
  /** The list of errors that occurred from executing the mutation. */
  checkoutUserErrors: Array<CheckoutUserErrorShopify>;
  /** A representation of the attempted payment. */
  payment?: Maybe<PaymentShopify>;
  /**
   * The list of errors that occurred from executing the mutation.
   * @deprecated Use `checkoutUserErrors` instead.
   */
  userErrors: Array<UserErrorShopify>;
};

/** Return type for `checkoutCompleteWithTokenizedPaymentV3` mutation. */
export type CheckoutCompleteWithTokenizedPaymentV3PayloadShopify = {
  __typename?: 'CheckoutCompleteWithTokenizedPaymentV3Payload';
  /** The checkout on which the payment was applied. */
  checkout?: Maybe<CheckoutShopify>;
  /** The list of errors that occurred from executing the mutation. */
  checkoutUserErrors: Array<CheckoutUserErrorShopify>;
  /** A representation of the attempted payment. */
  payment?: Maybe<PaymentShopify>;
  /**
   * The list of errors that occurred from executing the mutation.
   * @deprecated Use `checkoutUserErrors` instead.
   */
  userErrors: Array<UserErrorShopify>;
};

/** Specifies the fields required to create a checkout. */
export type CheckoutCreateInputShopify = {
  /**
   * Allows setting partial addresses on a Checkout, skipping the full validation of attributes.
   * The required attributes are city, province, and country.
   * Full validation of addresses is still done at completion time. Defaults to `null`.
   *
   */
  allowPartialAddresses?: InputMaybe<Scalars['Boolean']>;
  /** The identity of the customer associated with the checkout. */
  buyerIdentity?: InputMaybe<CheckoutBuyerIdentityInputShopify>;
  /** A list of extra information that is added to the checkout. */
  customAttributes?: InputMaybe<Array<AttributeInputShopify>>;
  /** The email with which the customer wants to checkout. */
  email?: InputMaybe<Scalars['String']>;
  /** A list of line item objects, each one containing information about an item in the checkout. */
  lineItems?: InputMaybe<Array<CheckoutLineItemInputShopify>>;
  /** The text of an optional note that a shop owner can attach to the checkout. */
  note?: InputMaybe<Scalars['String']>;
  /** The shipping address to where the line items will be shipped. */
  shippingAddress?: InputMaybe<MailingAddressInputShopify>;
};

/** Return type for `checkoutCreate` mutation. */
export type CheckoutCreatePayloadShopify = {
  __typename?: 'CheckoutCreatePayload';
  /** The new checkout object. */
  checkout?: Maybe<CheckoutShopify>;
  /** The list of errors that occurred from executing the mutation. */
  checkoutUserErrors: Array<CheckoutUserErrorShopify>;
  /** The checkout queue token. Available only to selected stores. */
  queueToken?: Maybe<Scalars['String']>;
  /**
   * The list of errors that occurred from executing the mutation.
   * @deprecated Use `checkoutUserErrors` instead.
   */
  userErrors: Array<UserErrorShopify>;
};

/** Return type for `checkoutCustomerAssociateV2` mutation. */
export type CheckoutCustomerAssociateV2PayloadShopify = {
  __typename?: 'CheckoutCustomerAssociateV2Payload';
  /** The updated checkout object. */
  checkout?: Maybe<CheckoutShopify>;
  /** The list of errors that occurred from executing the mutation. */
  checkoutUserErrors: Array<CheckoutUserErrorShopify>;
  /** The associated customer object. */
  customer?: Maybe<CustomerShopify>;
  /**
   * The list of errors that occurred from executing the mutation.
   * @deprecated Use `checkoutUserErrors` instead.
   */
  userErrors: Array<UserErrorShopify>;
};

/** Return type for `checkoutCustomerDisassociateV2` mutation. */
export type CheckoutCustomerDisassociateV2PayloadShopify = {
  __typename?: 'CheckoutCustomerDisassociateV2Payload';
  /** The updated checkout object. */
  checkout?: Maybe<CheckoutShopify>;
  /** The list of errors that occurred from executing the mutation. */
  checkoutUserErrors: Array<CheckoutUserErrorShopify>;
  /**
   * The list of errors that occurred from executing the mutation.
   * @deprecated Use `checkoutUserErrors` instead.
   */
  userErrors: Array<UserErrorShopify>;
};

/** Return type for `checkoutDiscountCodeApplyV2` mutation. */
export type CheckoutDiscountCodeApplyV2PayloadShopify = {
  __typename?: 'CheckoutDiscountCodeApplyV2Payload';
  /** The updated checkout object. */
  checkout?: Maybe<CheckoutShopify>;
  /** The list of errors that occurred from executing the mutation. */
  checkoutUserErrors: Array<CheckoutUserErrorShopify>;
  /**
   * The list of errors that occurred from executing the mutation.
   * @deprecated Use `checkoutUserErrors` instead.
   */
  userErrors: Array<UserErrorShopify>;
};

/** Return type for `checkoutDiscountCodeRemove` mutation. */
export type CheckoutDiscountCodeRemovePayloadShopify = {
  __typename?: 'CheckoutDiscountCodeRemovePayload';
  /** The updated checkout object. */
  checkout?: Maybe<CheckoutShopify>;
  /** The list of errors that occurred from executing the mutation. */
  checkoutUserErrors: Array<CheckoutUserErrorShopify>;
  /**
   * The list of errors that occurred from executing the mutation.
   * @deprecated Use `checkoutUserErrors` instead.
   */
  userErrors: Array<UserErrorShopify>;
};

/** Return type for `checkoutEmailUpdateV2` mutation. */
export type CheckoutEmailUpdateV2PayloadShopify = {
  __typename?: 'CheckoutEmailUpdateV2Payload';
  /** The checkout object with the updated email. */
  checkout?: Maybe<CheckoutShopify>;
  /** The list of errors that occurred from executing the mutation. */
  checkoutUserErrors: Array<CheckoutUserErrorShopify>;
  /**
   * The list of errors that occurred from executing the mutation.
   * @deprecated Use `checkoutUserErrors` instead.
   */
  userErrors: Array<UserErrorShopify>;
};

/** Possible error codes that can be returned by `CheckoutUserError`. */
export enum CheckoutErrorCodeShopify {
  /** Checkout is already completed. */
  AlreadyCompletedShopify = 'ALREADY_COMPLETED',
  /** Input email contains an invalid domain name. */
  BadDomainShopify = 'BAD_DOMAIN',
  /** The input value is blank. */
  BlankShopify = 'BLANK',
  /** Cart does not meet discount requirements notice. */
  CartDoesNotMeetDiscountRequirementsNoticeShopify = 'CART_DOES_NOT_MEET_DISCOUNT_REQUIREMENTS_NOTICE',
  /** Customer already used once per customer discount notice. */
  CustomerAlreadyUsedOncePerCustomerDiscountNoticeShopify = 'CUSTOMER_ALREADY_USED_ONCE_PER_CUSTOMER_DISCOUNT_NOTICE',
  /** Discount already applied. */
  DiscountAlreadyAppliedShopify = 'DISCOUNT_ALREADY_APPLIED',
  /** Discount code isn't working right now. Please contact us for help. */
  DiscountCodeApplicationFailedShopify = 'DISCOUNT_CODE_APPLICATION_FAILED',
  /** Discount disabled. */
  DiscountDisabledShopify = 'DISCOUNT_DISABLED',
  /** Discount expired. */
  DiscountExpiredShopify = 'DISCOUNT_EXPIRED',
  /** Discount limit reached. */
  DiscountLimitReachedShopify = 'DISCOUNT_LIMIT_REACHED',
  /** Discount not found. */
  DiscountNotFoundShopify = 'DISCOUNT_NOT_FOUND',
  /** Checkout is already completed. */
  EmptyShopify = 'EMPTY',
  /** Queue token has expired. */
  ExpiredQueueTokenShopify = 'EXPIRED_QUEUE_TOKEN',
  /** Gift card has already been applied. */
  GiftCardAlreadyAppliedShopify = 'GIFT_CARD_ALREADY_APPLIED',
  /** Gift card code is invalid. */
  GiftCardCodeInvalidShopify = 'GIFT_CARD_CODE_INVALID',
  /** Gift card currency does not match checkout currency. */
  GiftCardCurrencyMismatchShopify = 'GIFT_CARD_CURRENCY_MISMATCH',
  /** Gift card has no funds left. */
  GiftCardDepletedShopify = 'GIFT_CARD_DEPLETED',
  /** Gift card is disabled. */
  GiftCardDisabledShopify = 'GIFT_CARD_DISABLED',
  /** Gift card is expired. */
  GiftCardExpiredShopify = 'GIFT_CARD_EXPIRED',
  /** Gift card was not found. */
  GiftCardNotFoundShopify = 'GIFT_CARD_NOT_FOUND',
  /** Gift card cannot be applied to a checkout that contains a gift card. */
  GiftCardUnusableShopify = 'GIFT_CARD_UNUSABLE',
  /** The input value should be greater than or equal to the minimum value allowed. */
  GreaterThanOrEqualToShopify = 'GREATER_THAN_OR_EQUAL_TO',
  /** Higher value discount applied. */
  HigherValueDiscountAppliedShopify = 'HIGHER_VALUE_DISCOUNT_APPLIED',
  /** The input value is invalid. */
  InvalidShopify = 'INVALID',
  /** Cannot specify country and presentment currency code. */
  InvalidCountryAndCurrencyShopify = 'INVALID_COUNTRY_AND_CURRENCY',
  /** Input Zip is invalid for country provided. */
  InvalidForCountryShopify = 'INVALID_FOR_COUNTRY',
  /** Input Zip is invalid for country and province provided. */
  InvalidForCountryAndProvinceShopify = 'INVALID_FOR_COUNTRY_AND_PROVINCE',
  /** Invalid province in country. */
  InvalidProvinceInCountryShopify = 'INVALID_PROVINCE_IN_COUNTRY',
  /** Queue token is invalid. */
  InvalidQueueTokenShopify = 'INVALID_QUEUE_TOKEN',
  /** Invalid region in country. */
  InvalidRegionInCountryShopify = 'INVALID_REGION_IN_COUNTRY',
  /** Invalid state in country. */
  InvalidStateInCountryShopify = 'INVALID_STATE_IN_COUNTRY',
  /** The input value should be less than the maximum value allowed. */
  LessThanShopify = 'LESS_THAN',
  /** The input value should be less than or equal to the maximum value allowed. */
  LessThanOrEqualToShopify = 'LESS_THAN_OR_EQUAL_TO',
  /** Line item was not found in checkout. */
  LineItemNotFoundShopify = 'LINE_ITEM_NOT_FOUND',
  /** Checkout is locked. */
  LockedShopify = 'LOCKED',
  /** Maximum number of discount codes limit reached. */
  MaximumDiscountCodeLimitReachedShopify = 'MAXIMUM_DISCOUNT_CODE_LIMIT_REACHED',
  /** Missing payment input. */
  MissingPaymentInputShopify = 'MISSING_PAYMENT_INPUT',
  /** Not enough in stock. */
  NotEnoughInStockShopify = 'NOT_ENOUGH_IN_STOCK',
  /** Input value is not supported. */
  NotSupportedShopify = 'NOT_SUPPORTED',
  /** The input value needs to be blank. */
  PresentShopify = 'PRESENT',
  /** Shipping rate expired. */
  ShippingRateExpiredShopify = 'SHIPPING_RATE_EXPIRED',
  /** Throttled during checkout. */
  ThrottledDuringCheckoutShopify = 'THROTTLED_DURING_CHECKOUT',
  /** The input value is too long. */
  TooLongShopify = 'TOO_LONG',
  /** The amount of the payment does not match the value to be paid. */
  TotalPriceMismatchShopify = 'TOTAL_PRICE_MISMATCH',
  /** Unable to apply discount. */
  UnableToApplyShopify = 'UNABLE_TO_APPLY'
}

/** Return type for `checkoutGiftCardRemoveV2` mutation. */
export type CheckoutGiftCardRemoveV2PayloadShopify = {
  __typename?: 'CheckoutGiftCardRemoveV2Payload';
  /** The updated checkout object. */
  checkout?: Maybe<CheckoutShopify>;
  /** The list of errors that occurred from executing the mutation. */
  checkoutUserErrors: Array<CheckoutUserErrorShopify>;
  /**
   * The list of errors that occurred from executing the mutation.
   * @deprecated Use `checkoutUserErrors` instead.
   */
  userErrors: Array<UserErrorShopify>;
};

/** Return type for `checkoutGiftCardsAppend` mutation. */
export type CheckoutGiftCardsAppendPayloadShopify = {
  __typename?: 'CheckoutGiftCardsAppendPayload';
  /** The updated checkout object. */
  checkout?: Maybe<CheckoutShopify>;
  /** The list of errors that occurred from executing the mutation. */
  checkoutUserErrors: Array<CheckoutUserErrorShopify>;
  /**
   * The list of errors that occurred from executing the mutation.
   * @deprecated Use `checkoutUserErrors` instead.
   */
  userErrors: Array<UserErrorShopify>;
};

/** A single line item in the checkout, grouped by variant and attributes. */
export type CheckoutLineItemShopify = NodeShopify & {
  __typename?: 'CheckoutLineItem';
  /** Extra information in the form of an array of Key-Value pairs about the line item. */
  customAttributes: Array<AttributeShopify>;
  /** The discounts that have been allocated onto the checkout line item by discount applications. */
  discountAllocations: Array<DiscountAllocationShopify>;
  /** A globally-unique identifier. */
  id: Scalars['ID'];
  /** The quantity of the line item. */
  quantity: Scalars['Int'];
  /** Title of the line item. Defaults to the product's title. */
  title: Scalars['String'];
  /** Unit price of the line item. */
  unitPrice?: Maybe<MoneyV2Shopify>;
  /** Product variant of the line item. */
  variant?: Maybe<ProductVariantShopify>;
};

/**
 * An auto-generated type for paginating through multiple CheckoutLineItems.
 *
 */
export type CheckoutLineItemConnectionShopify = {
  __typename?: 'CheckoutLineItemConnection';
  /** A list of edges. */
  edges: Array<CheckoutLineItemEdgeShopify>;
  /** A list of the nodes contained in CheckoutLineItemEdge. */
  nodes: Array<CheckoutLineItemShopify>;
  /** Information to aid in pagination. */
  pageInfo: PageInfoShopify;
};

/**
 * An auto-generated type which holds one CheckoutLineItem and a cursor during pagination.
 *
 */
export type CheckoutLineItemEdgeShopify = {
  __typename?: 'CheckoutLineItemEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of CheckoutLineItemEdge. */
  node: CheckoutLineItemShopify;
};

/** Specifies the input fields to create a line item on a checkout. */
export type CheckoutLineItemInputShopify = {
  /** Extra information in the form of an array of Key-Value pairs about the line item. */
  customAttributes?: InputMaybe<Array<AttributeInputShopify>>;
  /** The quantity of the line item. */
  quantity: Scalars['Int'];
  /** The identifier of the product variant for the line item. */
  variantId: Scalars['ID'];
};

/** Specifies the input fields to update a line item on the checkout. */
export type CheckoutLineItemUpdateInputShopify = {
  /** Extra information in the form of an array of Key-Value pairs about the line item. */
  customAttributes?: InputMaybe<Array<AttributeInputShopify>>;
  /** The identifier of the line item. */
  id?: InputMaybe<Scalars['ID']>;
  /** The quantity of the line item. */
  quantity?: InputMaybe<Scalars['Int']>;
  /** The variant identifier of the line item. */
  variantId?: InputMaybe<Scalars['ID']>;
};

/** Return type for `checkoutLineItemsAdd` mutation. */
export type CheckoutLineItemsAddPayloadShopify = {
  __typename?: 'CheckoutLineItemsAddPayload';
  /** The updated checkout object. */
  checkout?: Maybe<CheckoutShopify>;
  /** The list of errors that occurred from executing the mutation. */
  checkoutUserErrors: Array<CheckoutUserErrorShopify>;
  /**
   * The list of errors that occurred from executing the mutation.
   * @deprecated Use `checkoutUserErrors` instead.
   */
  userErrors: Array<UserErrorShopify>;
};

/** Return type for `checkoutLineItemsRemove` mutation. */
export type CheckoutLineItemsRemovePayloadShopify = {
  __typename?: 'CheckoutLineItemsRemovePayload';
  /** The updated checkout object. */
  checkout?: Maybe<CheckoutShopify>;
  /** The list of errors that occurred from executing the mutation. */
  checkoutUserErrors: Array<CheckoutUserErrorShopify>;
  /**
   * The list of errors that occurred from executing the mutation.
   * @deprecated Use `checkoutUserErrors` instead.
   */
  userErrors: Array<UserErrorShopify>;
};

/** Return type for `checkoutLineItemsReplace` mutation. */
export type CheckoutLineItemsReplacePayloadShopify = {
  __typename?: 'CheckoutLineItemsReplacePayload';
  /** The updated checkout object. */
  checkout?: Maybe<CheckoutShopify>;
  /** The list of errors that occurred from executing the mutation. */
  userErrors: Array<CheckoutUserErrorShopify>;
};

/** Return type for `checkoutLineItemsUpdate` mutation. */
export type CheckoutLineItemsUpdatePayloadShopify = {
  __typename?: 'CheckoutLineItemsUpdatePayload';
  /** The updated checkout object. */
  checkout?: Maybe<CheckoutShopify>;
  /** The list of errors that occurred from executing the mutation. */
  checkoutUserErrors: Array<CheckoutUserErrorShopify>;
  /**
   * The list of errors that occurred from executing the mutation.
   * @deprecated Use `checkoutUserErrors` instead.
   */
  userErrors: Array<UserErrorShopify>;
};

/** Return type for `checkoutShippingAddressUpdateV2` mutation. */
export type CheckoutShippingAddressUpdateV2PayloadShopify = {
  __typename?: 'CheckoutShippingAddressUpdateV2Payload';
  /** The updated checkout object. */
  checkout?: Maybe<CheckoutShopify>;
  /** The list of errors that occurred from executing the mutation. */
  checkoutUserErrors: Array<CheckoutUserErrorShopify>;
  /**
   * The list of errors that occurred from executing the mutation.
   * @deprecated Use `checkoutUserErrors` instead.
   */
  userErrors: Array<UserErrorShopify>;
};

/** Return type for `checkoutShippingLineUpdate` mutation. */
export type CheckoutShippingLineUpdatePayloadShopify = {
  __typename?: 'CheckoutShippingLineUpdatePayload';
  /** The updated checkout object. */
  checkout?: Maybe<CheckoutShopify>;
  /** The list of errors that occurred from executing the mutation. */
  checkoutUserErrors: Array<CheckoutUserErrorShopify>;
  /**
   * The list of errors that occurred from executing the mutation.
   * @deprecated Use `checkoutUserErrors` instead.
   */
  userErrors: Array<UserErrorShopify>;
};

/** Represents an error that happens during execution of a checkout mutation. */
export type CheckoutUserErrorShopify = DisplayableErrorShopify & {
  __typename?: 'CheckoutUserError';
  /** The error code. */
  code?: Maybe<CheckoutErrorCodeShopify>;
  /** The path to the input field that caused the error. */
  field?: Maybe<Array<Scalars['String']>>;
  /** The error message. */
  message: Scalars['String'];
};

/** A collection represents a grouping of products that a shop owner can create to organize them or make their shops easier to browse. */
export type CollectionShopify = HasMetafieldsShopify & NodeShopify & OnlineStorePublishableShopify & {
  __typename?: 'Collection';
  /** Stripped description of the collection, single line with HTML tags removed. */
  description: Scalars['String'];
  /** The description of the collection, complete with HTML formatting. */
  descriptionHtml: Scalars['HTML'];
  /**
   * A human-friendly unique string for the collection automatically generated from its title.
   * Limit of 255 characters.
   *
   */
  handle: Scalars['String'];
  /** A globally-unique identifier. */
  id: Scalars['ID'];
  /** Image associated with the collection. */
  image?: Maybe<ImageShopify>;
  /** Returns a metafield found by namespace and key. */
  metafield?: Maybe<MetafieldShopify>;
  /**
   * The metafields associated with the resource matching the supplied list of namespaces and keys.
   *
   */
  metafields: Array<Maybe<MetafieldShopify>>;
  /** The URL used for viewing the resource on the shop's Online Store. Returns `null` if the resource is currently not published to the Online Store sales channel. */
  onlineStoreUrl?: Maybe<Scalars['URL']>;
  /** List of products in the collection. */
  products: ProductConnectionShopify;
  /** The collection's SEO information. */
  seo: SeoShopify;
  /** The collection’s name. Limit of 255 characters. */
  title: Scalars['String'];
  /** The date and time when the collection was last modified. */
  updatedAt: Scalars['DateTime'];
};


/** A collection represents a grouping of products that a shop owner can create to organize them or make their shops easier to browse. */
export type CollectionDescriptionArgsShopify = {
  truncateAt?: InputMaybe<Scalars['Int']>;
};


/** A collection represents a grouping of products that a shop owner can create to organize them or make their shops easier to browse. */
export type CollectionMetafieldArgsShopify = {
  key: Scalars['String'];
  namespace: Scalars['String'];
};


/** A collection represents a grouping of products that a shop owner can create to organize them or make their shops easier to browse. */
export type CollectionMetafieldsArgsShopify = {
  identifiers: Array<HasMetafieldsIdentifierShopify>;
};


/** A collection represents a grouping of products that a shop owner can create to organize them or make their shops easier to browse. */
export type CollectionProductsArgsShopify = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  filters?: InputMaybe<Array<ProductFilterShopify>>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  reverse?: InputMaybe<Scalars['Boolean']>;
  sortKey?: InputMaybe<ProductCollectionSortKeysShopify>;
};

/**
 * An auto-generated type for paginating through multiple Collections.
 *
 */
export type CollectionConnectionShopify = {
  __typename?: 'CollectionConnection';
  /** A list of edges. */
  edges: Array<CollectionEdgeShopify>;
  /** A list of the nodes contained in CollectionEdge. */
  nodes: Array<CollectionShopify>;
  /** Information to aid in pagination. */
  pageInfo: PageInfoShopify;
};

/**
 * An auto-generated type which holds one Collection and a cursor during pagination.
 *
 */
export type CollectionEdgeShopify = {
  __typename?: 'CollectionEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of CollectionEdge. */
  node: CollectionShopify;
};

/** The set of valid sort keys for the Collection query. */
export enum CollectionSortKeysShopify {
  /** Sort by the `id` value. */
  IdShopify = 'ID',
  /**
   * Sort by relevance to the search terms when the `query` parameter is specified on the connection.
   * Don't use this sort key when no search query is specified.
   *
   */
  RelevanceShopify = 'RELEVANCE',
  /** Sort by the `title` value. */
  TitleShopify = 'TITLE',
  /** Sort by the `updated_at` value. */
  UpdatedAtShopify = 'UPDATED_AT'
}

/** A comment on an article. */
export type CommentShopify = NodeShopify & {
  __typename?: 'Comment';
  /** The comment’s author. */
  author: CommentAuthorShopify;
  /** Stripped content of the comment, single line with HTML tags removed. */
  content: Scalars['String'];
  /** The content of the comment, complete with HTML formatting. */
  contentHtml: Scalars['HTML'];
  /** A globally-unique identifier. */
  id: Scalars['ID'];
};


/** A comment on an article. */
export type CommentContentArgsShopify = {
  truncateAt?: InputMaybe<Scalars['Int']>;
};

/** The author of a comment. */
export type CommentAuthorShopify = {
  __typename?: 'CommentAuthor';
  /** The author's email. */
  email: Scalars['String'];
  /** The author’s name. */
  name: Scalars['String'];
};

/**
 * An auto-generated type for paginating through multiple Comments.
 *
 */
export type CommentConnectionShopify = {
  __typename?: 'CommentConnection';
  /** A list of edges. */
  edges: Array<CommentEdgeShopify>;
  /** A list of the nodes contained in CommentEdge. */
  nodes: Array<CommentShopify>;
  /** Information to aid in pagination. */
  pageInfo: PageInfoShopify;
};

/**
 * An auto-generated type which holds one Comment and a cursor during pagination.
 *
 */
export type CommentEdgeShopify = {
  __typename?: 'CommentEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of CommentEdge. */
  node: CommentShopify;
};

/** A country. */
export type CountryShopify = {
  __typename?: 'Country';
  /** The languages available for the country. */
  availableLanguages: Array<LanguageShopify>;
  /** The currency of the country. */
  currency: CurrencyShopify;
  /** The ISO code of the country. */
  isoCode: CountryCodeShopify;
  /** The name of the country. */
  name: Scalars['String'];
  /** The unit system used in the country. */
  unitSystem: UnitSystemShopify;
};

/**
 * The code designating a country/region, which generally follows ISO 3166-1 alpha-2 guidelines.
 * If a territory doesn't have a country code value in the `CountryCode` enum, then it might be considered a subdivision
 * of another country. For example, the territories associated with Spain are represented by the country code `ES`,
 * and the territories associated with the United States of America are represented by the country code `US`.
 *
 */
export enum CountryCodeShopify {
  /** Ascension Island. */
  AcShopify = 'AC',
  /** Andorra. */
  AdShopify = 'AD',
  /** United Arab Emirates. */
  AeShopify = 'AE',
  /** Afghanistan. */
  AfShopify = 'AF',
  /** Antigua & Barbuda. */
  AgShopify = 'AG',
  /** Anguilla. */
  AiShopify = 'AI',
  /** Albania. */
  AlShopify = 'AL',
  /** Armenia. */
  AmShopify = 'AM',
  /** Netherlands Antilles. */
  AnShopify = 'AN',
  /** Angola. */
  AoShopify = 'AO',
  /** Argentina. */
  ArShopify = 'AR',
  /** Austria. */
  AtShopify = 'AT',
  /** Australia. */
  AuShopify = 'AU',
  /** Aruba. */
  AwShopify = 'AW',
  /** Åland Islands. */
  AxShopify = 'AX',
  /** Azerbaijan. */
  AzShopify = 'AZ',
  /** Bosnia & Herzegovina. */
  BaShopify = 'BA',
  /** Barbados. */
  BbShopify = 'BB',
  /** Bangladesh. */
  BdShopify = 'BD',
  /** Belgium. */
  BeShopify = 'BE',
  /** Burkina Faso. */
  BfShopify = 'BF',
  /** Bulgaria. */
  BgShopify = 'BG',
  /** Bahrain. */
  BhShopify = 'BH',
  /** Burundi. */
  BiShopify = 'BI',
  /** Benin. */
  BjShopify = 'BJ',
  /** St. Barthélemy. */
  BlShopify = 'BL',
  /** Bermuda. */
  BmShopify = 'BM',
  /** Brunei. */
  BnShopify = 'BN',
  /** Bolivia. */
  BoShopify = 'BO',
  /** Caribbean Netherlands. */
  BqShopify = 'BQ',
  /** Brazil. */
  BrShopify = 'BR',
  /** Bahamas. */
  BsShopify = 'BS',
  /** Bhutan. */
  BtShopify = 'BT',
  /** Bouvet Island. */
  BvShopify = 'BV',
  /** Botswana. */
  BwShopify = 'BW',
  /** Belarus. */
  ByShopify = 'BY',
  /** Belize. */
  BzShopify = 'BZ',
  /** Canada. */
  CaShopify = 'CA',
  /** Cocos (Keeling) Islands. */
  CcShopify = 'CC',
  /** Congo - Kinshasa. */
  CdShopify = 'CD',
  /** Central African Republic. */
  CfShopify = 'CF',
  /** Congo - Brazzaville. */
  CgShopify = 'CG',
  /** Switzerland. */
  ChShopify = 'CH',
  /** Côte d’Ivoire. */
  CiShopify = 'CI',
  /** Cook Islands. */
  CkShopify = 'CK',
  /** Chile. */
  ClShopify = 'CL',
  /** Cameroon. */
  CmShopify = 'CM',
  /** China. */
  CnShopify = 'CN',
  /** Colombia. */
  CoShopify = 'CO',
  /** Costa Rica. */
  CrShopify = 'CR',
  /** Cuba. */
  CuShopify = 'CU',
  /** Cape Verde. */
  CvShopify = 'CV',
  /** Curaçao. */
  CwShopify = 'CW',
  /** Christmas Island. */
  CxShopify = 'CX',
  /** Cyprus. */
  CyShopify = 'CY',
  /** Czechia. */
  CzShopify = 'CZ',
  /** Germany. */
  DeShopify = 'DE',
  /** Djibouti. */
  DjShopify = 'DJ',
  /** Denmark. */
  DkShopify = 'DK',
  /** Dominica. */
  DmShopify = 'DM',
  /** Dominican Republic. */
  DoShopify = 'DO',
  /** Algeria. */
  DzShopify = 'DZ',
  /** Ecuador. */
  EcShopify = 'EC',
  /** Estonia. */
  EeShopify = 'EE',
  /** Egypt. */
  EgShopify = 'EG',
  /** Western Sahara. */
  EhShopify = 'EH',
  /** Eritrea. */
  ErShopify = 'ER',
  /** Spain. */
  EsShopify = 'ES',
  /** Ethiopia. */
  EtShopify = 'ET',
  /** Finland. */
  FiShopify = 'FI',
  /** Fiji. */
  FjShopify = 'FJ',
  /** Falkland Islands. */
  FkShopify = 'FK',
  /** Faroe Islands. */
  FoShopify = 'FO',
  /** France. */
  FrShopify = 'FR',
  /** Gabon. */
  GaShopify = 'GA',
  /** United Kingdom. */
  GbShopify = 'GB',
  /** Grenada. */
  GdShopify = 'GD',
  /** Georgia. */
  GeShopify = 'GE',
  /** French Guiana. */
  GfShopify = 'GF',
  /** Guernsey. */
  GgShopify = 'GG',
  /** Ghana. */
  GhShopify = 'GH',
  /** Gibraltar. */
  GiShopify = 'GI',
  /** Greenland. */
  GlShopify = 'GL',
  /** Gambia. */
  GmShopify = 'GM',
  /** Guinea. */
  GnShopify = 'GN',
  /** Guadeloupe. */
  GpShopify = 'GP',
  /** Equatorial Guinea. */
  GqShopify = 'GQ',
  /** Greece. */
  GrShopify = 'GR',
  /** South Georgia & South Sandwich Islands. */
  GsShopify = 'GS',
  /** Guatemala. */
  GtShopify = 'GT',
  /** Guinea-Bissau. */
  GwShopify = 'GW',
  /** Guyana. */
  GyShopify = 'GY',
  /** Hong Kong SAR. */
  HkShopify = 'HK',
  /** Heard & McDonald Islands. */
  HmShopify = 'HM',
  /** Honduras. */
  HnShopify = 'HN',
  /** Croatia. */
  HrShopify = 'HR',
  /** Haiti. */
  HtShopify = 'HT',
  /** Hungary. */
  HuShopify = 'HU',
  /** Indonesia. */
  IdShopify = 'ID',
  /** Ireland. */
  IeShopify = 'IE',
  /** Israel. */
  IlShopify = 'IL',
  /** Isle of Man. */
  ImShopify = 'IM',
  /** India. */
  InShopify = 'IN',
  /** British Indian Ocean Territory. */
  IoShopify = 'IO',
  /** Iraq. */
  IqShopify = 'IQ',
  /** Iran. */
  IrShopify = 'IR',
  /** Iceland. */
  IsShopify = 'IS',
  /** Italy. */
  ItShopify = 'IT',
  /** Jersey. */
  JeShopify = 'JE',
  /** Jamaica. */
  JmShopify = 'JM',
  /** Jordan. */
  JoShopify = 'JO',
  /** Japan. */
  JpShopify = 'JP',
  /** Kenya. */
  KeShopify = 'KE',
  /** Kyrgyzstan. */
  KgShopify = 'KG',
  /** Cambodia. */
  KhShopify = 'KH',
  /** Kiribati. */
  KiShopify = 'KI',
  /** Comoros. */
  KmShopify = 'KM',
  /** St. Kitts & Nevis. */
  KnShopify = 'KN',
  /** North Korea. */
  KpShopify = 'KP',
  /** South Korea. */
  KrShopify = 'KR',
  /** Kuwait. */
  KwShopify = 'KW',
  /** Cayman Islands. */
  KyShopify = 'KY',
  /** Kazakhstan. */
  KzShopify = 'KZ',
  /** Laos. */
  LaShopify = 'LA',
  /** Lebanon. */
  LbShopify = 'LB',
  /** St. Lucia. */
  LcShopify = 'LC',
  /** Liechtenstein. */
  LiShopify = 'LI',
  /** Sri Lanka. */
  LkShopify = 'LK',
  /** Liberia. */
  LrShopify = 'LR',
  /** Lesotho. */
  LsShopify = 'LS',
  /** Lithuania. */
  LtShopify = 'LT',
  /** Luxembourg. */
  LuShopify = 'LU',
  /** Latvia. */
  LvShopify = 'LV',
  /** Libya. */
  LyShopify = 'LY',
  /** Morocco. */
  MaShopify = 'MA',
  /** Monaco. */
  McShopify = 'MC',
  /** Moldova. */
  MdShopify = 'MD',
  /** Montenegro. */
  MeShopify = 'ME',
  /** St. Martin. */
  MfShopify = 'MF',
  /** Madagascar. */
  MgShopify = 'MG',
  /** North Macedonia. */
  MkShopify = 'MK',
  /** Mali. */
  MlShopify = 'ML',
  /** Myanmar (Burma). */
  MmShopify = 'MM',
  /** Mongolia. */
  MnShopify = 'MN',
  /** Macao SAR. */
  MoShopify = 'MO',
  /** Martinique. */
  MqShopify = 'MQ',
  /** Mauritania. */
  MrShopify = 'MR',
  /** Montserrat. */
  MsShopify = 'MS',
  /** Malta. */
  MtShopify = 'MT',
  /** Mauritius. */
  MuShopify = 'MU',
  /** Maldives. */
  MvShopify = 'MV',
  /** Malawi. */
  MwShopify = 'MW',
  /** Mexico. */
  MxShopify = 'MX',
  /** Malaysia. */
  MyShopify = 'MY',
  /** Mozambique. */
  MzShopify = 'MZ',
  /** Namibia. */
  NaShopify = 'NA',
  /** New Caledonia. */
  NcShopify = 'NC',
  /** Niger. */
  NeShopify = 'NE',
  /** Norfolk Island. */
  NfShopify = 'NF',
  /** Nigeria. */
  NgShopify = 'NG',
  /** Nicaragua. */
  NiShopify = 'NI',
  /** Netherlands. */
  NlShopify = 'NL',
  /** Norway. */
  NoShopify = 'NO',
  /** Nepal. */
  NpShopify = 'NP',
  /** Nauru. */
  NrShopify = 'NR',
  /** Niue. */
  NuShopify = 'NU',
  /** New Zealand. */
  NzShopify = 'NZ',
  /** Oman. */
  OmShopify = 'OM',
  /** Panama. */
  PaShopify = 'PA',
  /** Peru. */
  PeShopify = 'PE',
  /** French Polynesia. */
  PfShopify = 'PF',
  /** Papua New Guinea. */
  PgShopify = 'PG',
  /** Philippines. */
  PhShopify = 'PH',
  /** Pakistan. */
  PkShopify = 'PK',
  /** Poland. */
  PlShopify = 'PL',
  /** St. Pierre & Miquelon. */
  PmShopify = 'PM',
  /** Pitcairn Islands. */
  PnShopify = 'PN',
  /** Palestinian Territories. */
  PsShopify = 'PS',
  /** Portugal. */
  PtShopify = 'PT',
  /** Paraguay. */
  PyShopify = 'PY',
  /** Qatar. */
  QaShopify = 'QA',
  /** Réunion. */
  ReShopify = 'RE',
  /** Romania. */
  RoShopify = 'RO',
  /** Serbia. */
  RsShopify = 'RS',
  /** Russia. */
  RuShopify = 'RU',
  /** Rwanda. */
  RwShopify = 'RW',
  /** Saudi Arabia. */
  SaShopify = 'SA',
  /** Solomon Islands. */
  SbShopify = 'SB',
  /** Seychelles. */
  ScShopify = 'SC',
  /** Sudan. */
  SdShopify = 'SD',
  /** Sweden. */
  SeShopify = 'SE',
  /** Singapore. */
  SgShopify = 'SG',
  /** St. Helena. */
  ShShopify = 'SH',
  /** Slovenia. */
  SiShopify = 'SI',
  /** Svalbard & Jan Mayen. */
  SjShopify = 'SJ',
  /** Slovakia. */
  SkShopify = 'SK',
  /** Sierra Leone. */
  SlShopify = 'SL',
  /** San Marino. */
  SmShopify = 'SM',
  /** Senegal. */
  SnShopify = 'SN',
  /** Somalia. */
  SoShopify = 'SO',
  /** Suriname. */
  SrShopify = 'SR',
  /** South Sudan. */
  SsShopify = 'SS',
  /** São Tomé & Príncipe. */
  StShopify = 'ST',
  /** El Salvador. */
  SvShopify = 'SV',
  /** Sint Maarten. */
  SxShopify = 'SX',
  /** Syria. */
  SyShopify = 'SY',
  /** Eswatini. */
  SzShopify = 'SZ',
  /** Tristan da Cunha. */
  TaShopify = 'TA',
  /** Turks & Caicos Islands. */
  TcShopify = 'TC',
  /** Chad. */
  TdShopify = 'TD',
  /** French Southern Territories. */
  TfShopify = 'TF',
  /** Togo. */
  TgShopify = 'TG',
  /** Thailand. */
  ThShopify = 'TH',
  /** Tajikistan. */
  TjShopify = 'TJ',
  /** Tokelau. */
  TkShopify = 'TK',
  /** Timor-Leste. */
  TlShopify = 'TL',
  /** Turkmenistan. */
  TmShopify = 'TM',
  /** Tunisia. */
  TnShopify = 'TN',
  /** Tonga. */
  ToShopify = 'TO',
  /** Turkey. */
  TrShopify = 'TR',
  /** Trinidad & Tobago. */
  TtShopify = 'TT',
  /** Tuvalu. */
  TvShopify = 'TV',
  /** Taiwan. */
  TwShopify = 'TW',
  /** Tanzania. */
  TzShopify = 'TZ',
  /** Ukraine. */
  UaShopify = 'UA',
  /** Uganda. */
  UgShopify = 'UG',
  /** U.S. Outlying Islands. */
  UmShopify = 'UM',
  /** United States. */
  UsShopify = 'US',
  /** Uruguay. */
  UyShopify = 'UY',
  /** Uzbekistan. */
  UzShopify = 'UZ',
  /** Vatican City. */
  VaShopify = 'VA',
  /** St. Vincent & Grenadines. */
  VcShopify = 'VC',
  /** Venezuela. */
  VeShopify = 'VE',
  /** British Virgin Islands. */
  VgShopify = 'VG',
  /** Vietnam. */
  VnShopify = 'VN',
  /** Vanuatu. */
  VuShopify = 'VU',
  /** Wallis & Futuna. */
  WfShopify = 'WF',
  /** Samoa. */
  WsShopify = 'WS',
  /** Kosovo. */
  XkShopify = 'XK',
  /** Yemen. */
  YeShopify = 'YE',
  /** Mayotte. */
  YtShopify = 'YT',
  /** South Africa. */
  ZaShopify = 'ZA',
  /** Zambia. */
  ZmShopify = 'ZM',
  /** Zimbabwe. */
  ZwShopify = 'ZW',
  /** Unknown Region. */
  ZzShopify = 'ZZ'
}

/** Credit card information used for a payment. */
export type CreditCardShopify = {
  __typename?: 'CreditCard';
  /** The brand of the credit card. */
  brand?: Maybe<Scalars['String']>;
  /** The expiry month of the credit card. */
  expiryMonth?: Maybe<Scalars['Int']>;
  /** The expiry year of the credit card. */
  expiryYear?: Maybe<Scalars['Int']>;
  /** The credit card's BIN number. */
  firstDigits?: Maybe<Scalars['String']>;
  /** The first name of the card holder. */
  firstName?: Maybe<Scalars['String']>;
  /** The last 4 digits of the credit card. */
  lastDigits?: Maybe<Scalars['String']>;
  /** The last name of the card holder. */
  lastName?: Maybe<Scalars['String']>;
  /** The masked credit card number with only the last 4 digits displayed. */
  maskedNumber?: Maybe<Scalars['String']>;
};

/**
 * Specifies the fields required to complete a checkout with
 * a Shopify vaulted credit card payment.
 *
 */
export type CreditCardPaymentInputV2Shopify = {
  /** The billing address for the payment. */
  billingAddress: MailingAddressInputShopify;
  /** A unique client generated key used to avoid duplicate charges. When a duplicate payment is found, the original is returned instead of creating a new one. For more information, refer to [Idempotent requests](https://shopify.dev/api/usage/idempotent-requests). */
  idempotencyKey: Scalars['String'];
  /** The amount and currency of the payment. */
  paymentAmount: MoneyInputShopify;
  /** Executes the payment in test mode if possible. Defaults to `false`. */
  test?: InputMaybe<Scalars['Boolean']>;
  /** The ID returned by Shopify's Card Vault. */
  vaultId: Scalars['String'];
};

/** The part of the image that should remain after cropping. */
export enum CropRegionShopify {
  /** Keep the bottom of the image. */
  BottomShopify = 'BOTTOM',
  /** Keep the center of the image. */
  CenterShopify = 'CENTER',
  /** Keep the left of the image. */
  LeftShopify = 'LEFT',
  /** Keep the right of the image. */
  RightShopify = 'RIGHT',
  /** Keep the top of the image. */
  TopShopify = 'TOP'
}

/** A currency. */
export type CurrencyShopify = {
  __typename?: 'Currency';
  /** The ISO code of the currency. */
  isoCode: CurrencyCodeShopify;
  /** The name of the currency. */
  name: Scalars['String'];
  /** The symbol of the currency. */
  symbol: Scalars['String'];
};

/**
 * The three-letter currency codes that represent the world currencies used in stores. These include standard ISO 4217 codes, legacy codes,
 * and non-standard codes.
 *
 */
export enum CurrencyCodeShopify {
  /** United Arab Emirates Dirham (AED). */
  AedShopify = 'AED',
  /** Afghan Afghani (AFN). */
  AfnShopify = 'AFN',
  /** Albanian Lek (ALL). */
  AllShopify = 'ALL',
  /** Armenian Dram (AMD). */
  AmdShopify = 'AMD',
  /** Netherlands Antillean Guilder. */
  AngShopify = 'ANG',
  /** Angolan Kwanza (AOA). */
  AoaShopify = 'AOA',
  /** Argentine Pesos (ARS). */
  ArsShopify = 'ARS',
  /** Australian Dollars (AUD). */
  AudShopify = 'AUD',
  /** Aruban Florin (AWG). */
  AwgShopify = 'AWG',
  /** Azerbaijani Manat (AZN). */
  AznShopify = 'AZN',
  /** Bosnia and Herzegovina Convertible Mark (BAM). */
  BamShopify = 'BAM',
  /** Barbadian Dollar (BBD). */
  BbdShopify = 'BBD',
  /** Bangladesh Taka (BDT). */
  BdtShopify = 'BDT',
  /** Bulgarian Lev (BGN). */
  BgnShopify = 'BGN',
  /** Bahraini Dinar (BHD). */
  BhdShopify = 'BHD',
  /** Burundian Franc (BIF). */
  BifShopify = 'BIF',
  /** Bermudian Dollar (BMD). */
  BmdShopify = 'BMD',
  /** Brunei Dollar (BND). */
  BndShopify = 'BND',
  /** Bolivian Boliviano (BOB). */
  BobShopify = 'BOB',
  /** Brazilian Real (BRL). */
  BrlShopify = 'BRL',
  /** Bahamian Dollar (BSD). */
  BsdShopify = 'BSD',
  /** Bhutanese Ngultrum (BTN). */
  BtnShopify = 'BTN',
  /** Botswana Pula (BWP). */
  BwpShopify = 'BWP',
  /** Belarusian Ruble (BYN). */
  BynShopify = 'BYN',
  /**
   * Belarusian Ruble (BYR).
   * @deprecated `BYR` is deprecated. Use `BYN` available from version `2021-01` onwards instead.
   */
  ByrShopify = 'BYR',
  /** Belize Dollar (BZD). */
  BzdShopify = 'BZD',
  /** Canadian Dollars (CAD). */
  CadShopify = 'CAD',
  /** Congolese franc (CDF). */
  CdfShopify = 'CDF',
  /** Swiss Francs (CHF). */
  ChfShopify = 'CHF',
  /** Chilean Peso (CLP). */
  ClpShopify = 'CLP',
  /** Chinese Yuan Renminbi (CNY). */
  CnyShopify = 'CNY',
  /** Colombian Peso (COP). */
  CopShopify = 'COP',
  /** Costa Rican Colones (CRC). */
  CrcShopify = 'CRC',
  /** Cape Verdean escudo (CVE). */
  CveShopify = 'CVE',
  /** Czech Koruny (CZK). */
  CzkShopify = 'CZK',
  /** Djiboutian Franc (DJF). */
  DjfShopify = 'DJF',
  /** Danish Kroner (DKK). */
  DkkShopify = 'DKK',
  /** Dominican Peso (DOP). */
  DopShopify = 'DOP',
  /** Algerian Dinar (DZD). */
  DzdShopify = 'DZD',
  /** Egyptian Pound (EGP). */
  EgpShopify = 'EGP',
  /** Eritrean Nakfa (ERN). */
  ErnShopify = 'ERN',
  /** Ethiopian Birr (ETB). */
  EtbShopify = 'ETB',
  /** Euro (EUR). */
  EurShopify = 'EUR',
  /** Fijian Dollars (FJD). */
  FjdShopify = 'FJD',
  /** Falkland Islands Pounds (FKP). */
  FkpShopify = 'FKP',
  /** United Kingdom Pounds (GBP). */
  GbpShopify = 'GBP',
  /** Georgian Lari (GEL). */
  GelShopify = 'GEL',
  /** Ghanaian Cedi (GHS). */
  GhsShopify = 'GHS',
  /** Gibraltar Pounds (GIP). */
  GipShopify = 'GIP',
  /** Gambian Dalasi (GMD). */
  GmdShopify = 'GMD',
  /** Guinean Franc (GNF). */
  GnfShopify = 'GNF',
  /** Guatemalan Quetzal (GTQ). */
  GtqShopify = 'GTQ',
  /** Guyanese Dollar (GYD). */
  GydShopify = 'GYD',
  /** Hong Kong Dollars (HKD). */
  HkdShopify = 'HKD',
  /** Honduran Lempira (HNL). */
  HnlShopify = 'HNL',
  /** Croatian Kuna (HRK). */
  HrkShopify = 'HRK',
  /** Haitian Gourde (HTG). */
  HtgShopify = 'HTG',
  /** Hungarian Forint (HUF). */
  HufShopify = 'HUF',
  /** Indonesian Rupiah (IDR). */
  IdrShopify = 'IDR',
  /** Israeli New Shekel (NIS). */
  IlsShopify = 'ILS',
  /** Indian Rupees (INR). */
  InrShopify = 'INR',
  /** Iraqi Dinar (IQD). */
  IqdShopify = 'IQD',
  /** Iranian Rial (IRR). */
  IrrShopify = 'IRR',
  /** Icelandic Kronur (ISK). */
  IskShopify = 'ISK',
  /** Jersey Pound. */
  JepShopify = 'JEP',
  /** Jamaican Dollars (JMD). */
  JmdShopify = 'JMD',
  /** Jordanian Dinar (JOD). */
  JodShopify = 'JOD',
  /** Japanese Yen (JPY). */
  JpyShopify = 'JPY',
  /** Kenyan Shilling (KES). */
  KesShopify = 'KES',
  /** Kyrgyzstani Som (KGS). */
  KgsShopify = 'KGS',
  /** Cambodian Riel. */
  KhrShopify = 'KHR',
  /** Kiribati Dollar (KID). */
  KidShopify = 'KID',
  /** Comorian Franc (KMF). */
  KmfShopify = 'KMF',
  /** South Korean Won (KRW). */
  KrwShopify = 'KRW',
  /** Kuwaiti Dinar (KWD). */
  KwdShopify = 'KWD',
  /** Cayman Dollars (KYD). */
  KydShopify = 'KYD',
  /** Kazakhstani Tenge (KZT). */
  KztShopify = 'KZT',
  /** Laotian Kip (LAK). */
  LakShopify = 'LAK',
  /** Lebanese Pounds (LBP). */
  LbpShopify = 'LBP',
  /** Sri Lankan Rupees (LKR). */
  LkrShopify = 'LKR',
  /** Liberian Dollar (LRD). */
  LrdShopify = 'LRD',
  /** Lesotho Loti (LSL). */
  LslShopify = 'LSL',
  /** Lithuanian Litai (LTL). */
  LtlShopify = 'LTL',
  /** Latvian Lati (LVL). */
  LvlShopify = 'LVL',
  /** Libyan Dinar (LYD). */
  LydShopify = 'LYD',
  /** Moroccan Dirham. */
  MadShopify = 'MAD',
  /** Moldovan Leu (MDL). */
  MdlShopify = 'MDL',
  /** Malagasy Ariary (MGA). */
  MgaShopify = 'MGA',
  /** Macedonia Denar (MKD). */
  MkdShopify = 'MKD',
  /** Burmese Kyat (MMK). */
  MmkShopify = 'MMK',
  /** Mongolian Tugrik. */
  MntShopify = 'MNT',
  /** Macanese Pataca (MOP). */
  MopShopify = 'MOP',
  /** Mauritanian Ouguiya (MRU). */
  MruShopify = 'MRU',
  /** Mauritian Rupee (MUR). */
  MurShopify = 'MUR',
  /** Maldivian Rufiyaa (MVR). */
  MvrShopify = 'MVR',
  /** Malawian Kwacha (MWK). */
  MwkShopify = 'MWK',
  /** Mexican Pesos (MXN). */
  MxnShopify = 'MXN',
  /** Malaysian Ringgits (MYR). */
  MyrShopify = 'MYR',
  /** Mozambican Metical. */
  MznShopify = 'MZN',
  /** Namibian Dollar. */
  NadShopify = 'NAD',
  /** Nigerian Naira (NGN). */
  NgnShopify = 'NGN',
  /** Nicaraguan Córdoba (NIO). */
  NioShopify = 'NIO',
  /** Norwegian Kroner (NOK). */
  NokShopify = 'NOK',
  /** Nepalese Rupee (NPR). */
  NprShopify = 'NPR',
  /** New Zealand Dollars (NZD). */
  NzdShopify = 'NZD',
  /** Omani Rial (OMR). */
  OmrShopify = 'OMR',
  /** Panamian Balboa (PAB). */
  PabShopify = 'PAB',
  /** Peruvian Nuevo Sol (PEN). */
  PenShopify = 'PEN',
  /** Papua New Guinean Kina (PGK). */
  PgkShopify = 'PGK',
  /** Philippine Peso (PHP). */
  PhpShopify = 'PHP',
  /** Pakistani Rupee (PKR). */
  PkrShopify = 'PKR',
  /** Polish Zlotych (PLN). */
  PlnShopify = 'PLN',
  /** Paraguayan Guarani (PYG). */
  PygShopify = 'PYG',
  /** Qatari Rial (QAR). */
  QarShopify = 'QAR',
  /** Romanian Lei (RON). */
  RonShopify = 'RON',
  /** Serbian dinar (RSD). */
  RsdShopify = 'RSD',
  /** Russian Rubles (RUB). */
  RubShopify = 'RUB',
  /** Rwandan Franc (RWF). */
  RwfShopify = 'RWF',
  /** Saudi Riyal (SAR). */
  SarShopify = 'SAR',
  /** Solomon Islands Dollar (SBD). */
  SbdShopify = 'SBD',
  /** Seychellois Rupee (SCR). */
  ScrShopify = 'SCR',
  /** Sudanese Pound (SDG). */
  SdgShopify = 'SDG',
  /** Swedish Kronor (SEK). */
  SekShopify = 'SEK',
  /** Singapore Dollars (SGD). */
  SgdShopify = 'SGD',
  /** Saint Helena Pounds (SHP). */
  ShpShopify = 'SHP',
  /** Sierra Leonean Leone (SLL). */
  SllShopify = 'SLL',
  /** Somali Shilling (SOS). */
  SosShopify = 'SOS',
  /** Surinamese Dollar (SRD). */
  SrdShopify = 'SRD',
  /** South Sudanese Pound (SSP). */
  SspShopify = 'SSP',
  /**
   * Sao Tome And Principe Dobra (STD).
   * @deprecated `STD` is deprecated. Use `STN` available from version `2022-07` onwards instead.
   */
  StdShopify = 'STD',
  /** Sao Tome And Principe Dobra (STN). */
  StnShopify = 'STN',
  /** Syrian Pound (SYP). */
  SypShopify = 'SYP',
  /** Swazi Lilangeni (SZL). */
  SzlShopify = 'SZL',
  /** Thai baht (THB). */
  ThbShopify = 'THB',
  /** Tajikistani Somoni (TJS). */
  TjsShopify = 'TJS',
  /** Turkmenistani Manat (TMT). */
  TmtShopify = 'TMT',
  /** Tunisian Dinar (TND). */
  TndShopify = 'TND',
  /** Tongan Pa'anga (TOP). */
  TopShopify = 'TOP',
  /** Turkish Lira (TRY). */
  TryShopify = 'TRY',
  /** Trinidad and Tobago Dollars (TTD). */
  TtdShopify = 'TTD',
  /** Taiwan Dollars (TWD). */
  TwdShopify = 'TWD',
  /** Tanzanian Shilling (TZS). */
  TzsShopify = 'TZS',
  /** Ukrainian Hryvnia (UAH). */
  UahShopify = 'UAH',
  /** Ugandan Shilling (UGX). */
  UgxShopify = 'UGX',
  /** United States Dollars (USD). */
  UsdShopify = 'USD',
  /** Uruguayan Pesos (UYU). */
  UyuShopify = 'UYU',
  /** Uzbekistan som (UZS). */
  UzsShopify = 'UZS',
  /** Venezuelan Bolivares (VED). */
  VedShopify = 'VED',
  /**
   * Venezuelan Bolivares (VEF).
   * @deprecated `VEF` is deprecated. Use `VES` available from version `2020-10` onwards instead.
   */
  VefShopify = 'VEF',
  /** Venezuelan Bolivares (VES). */
  VesShopify = 'VES',
  /** Vietnamese đồng (VND). */
  VndShopify = 'VND',
  /** Vanuatu Vatu (VUV). */
  VuvShopify = 'VUV',
  /** Samoan Tala (WST). */
  WstShopify = 'WST',
  /** Central African CFA Franc (XAF). */
  XafShopify = 'XAF',
  /** East Caribbean Dollar (XCD). */
  XcdShopify = 'XCD',
  /** West African CFA franc (XOF). */
  XofShopify = 'XOF',
  /** CFP Franc (XPF). */
  XpfShopify = 'XPF',
  /** Unrecognized currency. */
  XxxShopify = 'XXX',
  /** Yemeni Rial (YER). */
  YerShopify = 'YER',
  /** South African Rand (ZAR). */
  ZarShopify = 'ZAR',
  /** Zambian Kwacha (ZMW). */
  ZmwShopify = 'ZMW'
}

/** A customer represents a customer account with the shop. Customer accounts store contact information for the customer, saving logged-in customers the trouble of having to provide it at every checkout. */
export type CustomerShopify = HasMetafieldsShopify & {
  __typename?: 'Customer';
  /** Indicates whether the customer has consented to be sent marketing material via email. */
  acceptsMarketing: Scalars['Boolean'];
  /** A list of addresses for the customer. */
  addresses: MailingAddressConnectionShopify;
  /** The date and time when the customer was created. */
  createdAt: Scalars['DateTime'];
  /** The customer’s default address. */
  defaultAddress?: Maybe<MailingAddressShopify>;
  /** The customer’s name, email or phone number. */
  displayName: Scalars['String'];
  /** The customer’s email address. */
  email?: Maybe<Scalars['String']>;
  /** The customer’s first name. */
  firstName?: Maybe<Scalars['String']>;
  /** A unique identifier for the customer. */
  id: Scalars['ID'];
  /** The customer's most recently updated, incomplete checkout. */
  lastIncompleteCheckout?: Maybe<CheckoutShopify>;
  /** The customer’s last name. */
  lastName?: Maybe<Scalars['String']>;
  /** Returns a metafield found by namespace and key. */
  metafield?: Maybe<MetafieldShopify>;
  /**
   * The metafields associated with the resource matching the supplied list of namespaces and keys.
   *
   */
  metafields: Array<Maybe<MetafieldShopify>>;
  /** The number of orders that the customer has made at the store in their lifetime. */
  numberOfOrders: Scalars['UnsignedInt64'];
  /** The orders associated with the customer. */
  orders: OrderConnectionShopify;
  /** The customer’s phone number. */
  phone?: Maybe<Scalars['String']>;
  /**
   * A comma separated list of tags that have been added to the customer.
   * Additional access scope required: unauthenticated_read_customer_tags.
   *
   */
  tags: Array<Scalars['String']>;
  /** The date and time when the customer information was updated. */
  updatedAt: Scalars['DateTime'];
};


/** A customer represents a customer account with the shop. Customer accounts store contact information for the customer, saving logged-in customers the trouble of having to provide it at every checkout. */
export type CustomerAddressesArgsShopify = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  reverse?: InputMaybe<Scalars['Boolean']>;
};


/** A customer represents a customer account with the shop. Customer accounts store contact information for the customer, saving logged-in customers the trouble of having to provide it at every checkout. */
export type CustomerMetafieldArgsShopify = {
  key: Scalars['String'];
  namespace: Scalars['String'];
};


/** A customer represents a customer account with the shop. Customer accounts store contact information for the customer, saving logged-in customers the trouble of having to provide it at every checkout. */
export type CustomerMetafieldsArgsShopify = {
  identifiers: Array<HasMetafieldsIdentifierShopify>;
};


/** A customer represents a customer account with the shop. Customer accounts store contact information for the customer, saving logged-in customers the trouble of having to provide it at every checkout. */
export type CustomerOrdersArgsShopify = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  query?: InputMaybe<Scalars['String']>;
  reverse?: InputMaybe<Scalars['Boolean']>;
  sortKey?: InputMaybe<OrderSortKeysShopify>;
};

/** A CustomerAccessToken represents the unique token required to make modifications to the customer object. */
export type CustomerAccessTokenShopify = {
  __typename?: 'CustomerAccessToken';
  /** The customer’s access token. */
  accessToken: Scalars['String'];
  /** The date and time when the customer access token expires. */
  expiresAt: Scalars['DateTime'];
};

/** Specifies the input fields required to create a customer access token. */
export type CustomerAccessTokenCreateInputShopify = {
  /** The email associated to the customer. */
  email: Scalars['String'];
  /** The login password to be used by the customer. */
  password: Scalars['String'];
};

/** Return type for `customerAccessTokenCreate` mutation. */
export type CustomerAccessTokenCreatePayloadShopify = {
  __typename?: 'CustomerAccessTokenCreatePayload';
  /** The newly created customer access token object. */
  customerAccessToken?: Maybe<CustomerAccessTokenShopify>;
  /** The list of errors that occurred from executing the mutation. */
  customerUserErrors: Array<CustomerUserErrorShopify>;
  /**
   * The list of errors that occurred from executing the mutation.
   * @deprecated Use `customerUserErrors` instead.
   */
  userErrors: Array<UserErrorShopify>;
};

/** Return type for `customerAccessTokenCreateWithMultipass` mutation. */
export type CustomerAccessTokenCreateWithMultipassPayloadShopify = {
  __typename?: 'CustomerAccessTokenCreateWithMultipassPayload';
  /** An access token object associated with the customer. */
  customerAccessToken?: Maybe<CustomerAccessTokenShopify>;
  /** The list of errors that occurred from executing the mutation. */
  customerUserErrors: Array<CustomerUserErrorShopify>;
};

/** Return type for `customerAccessTokenDelete` mutation. */
export type CustomerAccessTokenDeletePayloadShopify = {
  __typename?: 'CustomerAccessTokenDeletePayload';
  /** The destroyed access token. */
  deletedAccessToken?: Maybe<Scalars['String']>;
  /** ID of the destroyed customer access token. */
  deletedCustomerAccessTokenId?: Maybe<Scalars['String']>;
  /** The list of errors that occurred from executing the mutation. */
  userErrors: Array<UserErrorShopify>;
};

/** Return type for `customerAccessTokenRenew` mutation. */
export type CustomerAccessTokenRenewPayloadShopify = {
  __typename?: 'CustomerAccessTokenRenewPayload';
  /** The renewed customer access token object. */
  customerAccessToken?: Maybe<CustomerAccessTokenShopify>;
  /** The list of errors that occurred from executing the mutation. */
  userErrors: Array<UserErrorShopify>;
};

/** Return type for `customerActivateByUrl` mutation. */
export type CustomerActivateByUrlPayloadShopify = {
  __typename?: 'CustomerActivateByUrlPayload';
  /** The customer that was activated. */
  customer?: Maybe<CustomerShopify>;
  /** A new customer access token for the customer. */
  customerAccessToken?: Maybe<CustomerAccessTokenShopify>;
  /** The list of errors that occurred from executing the mutation. */
  customerUserErrors: Array<CustomerUserErrorShopify>;
};

/** Specifies the input fields required to activate a customer. */
export type CustomerActivateInputShopify = {
  /** The activation token required to activate the customer. */
  activationToken: Scalars['String'];
  /** New password that will be set during activation. */
  password: Scalars['String'];
};

/** Return type for `customerActivate` mutation. */
export type CustomerActivatePayloadShopify = {
  __typename?: 'CustomerActivatePayload';
  /** The customer object. */
  customer?: Maybe<CustomerShopify>;
  /** A newly created customer access token object for the customer. */
  customerAccessToken?: Maybe<CustomerAccessTokenShopify>;
  /** The list of errors that occurred from executing the mutation. */
  customerUserErrors: Array<CustomerUserErrorShopify>;
  /**
   * The list of errors that occurred from executing the mutation.
   * @deprecated Use `customerUserErrors` instead.
   */
  userErrors: Array<UserErrorShopify>;
};

/** Return type for `customerAddressCreate` mutation. */
export type CustomerAddressCreatePayloadShopify = {
  __typename?: 'CustomerAddressCreatePayload';
  /** The new customer address object. */
  customerAddress?: Maybe<MailingAddressShopify>;
  /** The list of errors that occurred from executing the mutation. */
  customerUserErrors: Array<CustomerUserErrorShopify>;
  /**
   * The list of errors that occurred from executing the mutation.
   * @deprecated Use `customerUserErrors` instead.
   */
  userErrors: Array<UserErrorShopify>;
};

/** Return type for `customerAddressDelete` mutation. */
export type CustomerAddressDeletePayloadShopify = {
  __typename?: 'CustomerAddressDeletePayload';
  /** The list of errors that occurred from executing the mutation. */
  customerUserErrors: Array<CustomerUserErrorShopify>;
  /** ID of the deleted customer address. */
  deletedCustomerAddressId?: Maybe<Scalars['String']>;
  /**
   * The list of errors that occurred from executing the mutation.
   * @deprecated Use `customerUserErrors` instead.
   */
  userErrors: Array<UserErrorShopify>;
};

/** Return type for `customerAddressUpdate` mutation. */
export type CustomerAddressUpdatePayloadShopify = {
  __typename?: 'CustomerAddressUpdatePayload';
  /** The customer’s updated mailing address. */
  customerAddress?: Maybe<MailingAddressShopify>;
  /** The list of errors that occurred from executing the mutation. */
  customerUserErrors: Array<CustomerUserErrorShopify>;
  /**
   * The list of errors that occurred from executing the mutation.
   * @deprecated Use `customerUserErrors` instead.
   */
  userErrors: Array<UserErrorShopify>;
};

/** The fields required to create a new customer. */
export type CustomerCreateInputShopify = {
  /** Indicates whether the customer has consented to be sent marketing material via email. */
  acceptsMarketing?: InputMaybe<Scalars['Boolean']>;
  /** The customer’s email. */
  email: Scalars['String'];
  /** The customer’s first name. */
  firstName?: InputMaybe<Scalars['String']>;
  /** The customer’s last name. */
  lastName?: InputMaybe<Scalars['String']>;
  /** The login password used by the customer. */
  password: Scalars['String'];
  /**
   * A unique phone number for the customer.
   *
   * Formatted using E.164 standard. For example, _+16135551111_.
   *
   */
  phone?: InputMaybe<Scalars['String']>;
};

/** Return type for `customerCreate` mutation. */
export type CustomerCreatePayloadShopify = {
  __typename?: 'CustomerCreatePayload';
  /** The created customer object. */
  customer?: Maybe<CustomerShopify>;
  /** The list of errors that occurred from executing the mutation. */
  customerUserErrors: Array<CustomerUserErrorShopify>;
  /**
   * The list of errors that occurred from executing the mutation.
   * @deprecated Use `customerUserErrors` instead.
   */
  userErrors: Array<UserErrorShopify>;
};

/** Return type for `customerDefaultAddressUpdate` mutation. */
export type CustomerDefaultAddressUpdatePayloadShopify = {
  __typename?: 'CustomerDefaultAddressUpdatePayload';
  /** The updated customer object. */
  customer?: Maybe<CustomerShopify>;
  /** The list of errors that occurred from executing the mutation. */
  customerUserErrors: Array<CustomerUserErrorShopify>;
  /**
   * The list of errors that occurred from executing the mutation.
   * @deprecated Use `customerUserErrors` instead.
   */
  userErrors: Array<UserErrorShopify>;
};

/** Possible error codes that can be returned by `CustomerUserError`. */
export enum CustomerErrorCodeShopify {
  /** Customer already enabled. */
  AlreadyEnabledShopify = 'ALREADY_ENABLED',
  /** Input email contains an invalid domain name. */
  BadDomainShopify = 'BAD_DOMAIN',
  /** The input value is blank. */
  BlankShopify = 'BLANK',
  /** Input contains HTML tags. */
  ContainsHtmlTagsShopify = 'CONTAINS_HTML_TAGS',
  /** Input contains URL. */
  ContainsUrlShopify = 'CONTAINS_URL',
  /** Customer is disabled. */
  CustomerDisabledShopify = 'CUSTOMER_DISABLED',
  /** The input value is invalid. */
  InvalidShopify = 'INVALID',
  /** Multipass token is not valid. */
  InvalidMultipassRequestShopify = 'INVALID_MULTIPASS_REQUEST',
  /** Address does not exist. */
  NotFoundShopify = 'NOT_FOUND',
  /** Input password starts or ends with whitespace. */
  PasswordStartsOrEndsWithWhitespaceShopify = 'PASSWORD_STARTS_OR_ENDS_WITH_WHITESPACE',
  /** The input value is already taken. */
  TakenShopify = 'TAKEN',
  /** Invalid activation token. */
  TokenInvalidShopify = 'TOKEN_INVALID',
  /** The input value is too long. */
  TooLongShopify = 'TOO_LONG',
  /** The input value is too short. */
  TooShortShopify = 'TOO_SHORT',
  /** Unidentified customer. */
  UnidentifiedCustomerShopify = 'UNIDENTIFIED_CUSTOMER'
}

/** Return type for `customerRecover` mutation. */
export type CustomerRecoverPayloadShopify = {
  __typename?: 'CustomerRecoverPayload';
  /** The list of errors that occurred from executing the mutation. */
  customerUserErrors: Array<CustomerUserErrorShopify>;
  /**
   * The list of errors that occurred from executing the mutation.
   * @deprecated Use `customerUserErrors` instead.
   */
  userErrors: Array<UserErrorShopify>;
};

/** Return type for `customerResetByUrl` mutation. */
export type CustomerResetByUrlPayloadShopify = {
  __typename?: 'CustomerResetByUrlPayload';
  /** The customer object which was reset. */
  customer?: Maybe<CustomerShopify>;
  /** A newly created customer access token object for the customer. */
  customerAccessToken?: Maybe<CustomerAccessTokenShopify>;
  /** The list of errors that occurred from executing the mutation. */
  customerUserErrors: Array<CustomerUserErrorShopify>;
  /**
   * The list of errors that occurred from executing the mutation.
   * @deprecated Use `customerUserErrors` instead.
   */
  userErrors: Array<UserErrorShopify>;
};

/** Specifies the fields required to reset a customer’s password. */
export type CustomerResetInputShopify = {
  /** New password that will be set as part of the reset password process. */
  password: Scalars['String'];
  /** The reset token required to reset the customer’s password. */
  resetToken: Scalars['String'];
};

/** Return type for `customerReset` mutation. */
export type CustomerResetPayloadShopify = {
  __typename?: 'CustomerResetPayload';
  /** The customer object which was reset. */
  customer?: Maybe<CustomerShopify>;
  /** A newly created customer access token object for the customer. */
  customerAccessToken?: Maybe<CustomerAccessTokenShopify>;
  /** The list of errors that occurred from executing the mutation. */
  customerUserErrors: Array<CustomerUserErrorShopify>;
  /**
   * The list of errors that occurred from executing the mutation.
   * @deprecated Use `customerUserErrors` instead.
   */
  userErrors: Array<UserErrorShopify>;
};

/** Specifies the fields required to update the Customer information. */
export type CustomerUpdateInputShopify = {
  /** Indicates whether the customer has consented to be sent marketing material via email. */
  acceptsMarketing?: InputMaybe<Scalars['Boolean']>;
  /** The customer’s email. */
  email?: InputMaybe<Scalars['String']>;
  /** The customer’s first name. */
  firstName?: InputMaybe<Scalars['String']>;
  /** The customer’s last name. */
  lastName?: InputMaybe<Scalars['String']>;
  /** The login password used by the customer. */
  password?: InputMaybe<Scalars['String']>;
  /**
   * A unique phone number for the customer.
   *
   * Formatted using E.164 standard. For example, _+16135551111_. To remove the phone number, specify `null`.
   *
   */
  phone?: InputMaybe<Scalars['String']>;
};

/** Return type for `customerUpdate` mutation. */
export type CustomerUpdatePayloadShopify = {
  __typename?: 'CustomerUpdatePayload';
  /** The updated customer object. */
  customer?: Maybe<CustomerShopify>;
  /**
   * The newly created customer access token. If the customer's password is updated, all previous access tokens
   * (including the one used to perform this mutation) become invalid, and a new token is generated.
   *
   */
  customerAccessToken?: Maybe<CustomerAccessTokenShopify>;
  /** The list of errors that occurred from executing the mutation. */
  customerUserErrors: Array<CustomerUserErrorShopify>;
  /**
   * The list of errors that occurred from executing the mutation.
   * @deprecated Use `customerUserErrors` instead.
   */
  userErrors: Array<UserErrorShopify>;
};

/** Represents an error that happens during execution of a customer mutation. */
export type CustomerUserErrorShopify = DisplayableErrorShopify & {
  __typename?: 'CustomerUserError';
  /** The error code. */
  code?: Maybe<CustomerErrorCodeShopify>;
  /** The path to the input field that caused the error. */
  field?: Maybe<Array<Scalars['String']>>;
  /** The error message. */
  message: Scalars['String'];
};

/** A delivery address of the buyer that is interacting with the cart. */
export type DeliveryAddressShopify = MailingAddressShopify;

/**
 * The input fields for delivery address preferences.
 *
 */
export type DeliveryAddressInputShopify = {
  /** A delivery address preference of a buyer that is interacting with the cart. */
  deliveryAddress?: InputMaybe<MailingAddressInputShopify>;
};

/** List of different delivery method types. */
export enum DeliveryMethodTypeShopify {
  /** Local Delivery. */
  LocalShopify = 'LOCAL',
  /** None. */
  NoneShopify = 'NONE',
  /** Shipping to a Pickup Point. */
  PickupPointShopify = 'PICKUP_POINT',
  /** Local Pickup. */
  PickUpShopify = 'PICK_UP',
  /** Retail. */
  RetailShopify = 'RETAIL',
  /** Shipping. */
  ShippingShopify = 'SHIPPING'
}

/** Digital wallet, such as Apple Pay, which can be used for accelerated checkouts. */
export enum DigitalWalletShopify {
  /** Android Pay. */
  AndroidPayShopify = 'ANDROID_PAY',
  /** Apple Pay. */
  ApplePayShopify = 'APPLE_PAY',
  /** Google Pay. */
  GooglePayShopify = 'GOOGLE_PAY',
  /** Shopify Pay. */
  ShopifyPayShopify = 'SHOPIFY_PAY'
}

/**
 * An amount discounting the line that has been allocated by a discount.
 *
 */
export type DiscountAllocationShopify = {
  __typename?: 'DiscountAllocation';
  /** Amount of discount allocated. */
  allocatedAmount: MoneyV2Shopify;
  /** The discount this allocated amount originated from. */
  discountApplication: DiscountApplicationShopify;
};

/**
 * Discount applications capture the intentions of a discount source at
 * the time of application.
 *
 */
export type DiscountApplicationShopify = {
  /** The method by which the discount's value is allocated to its entitled items. */
  allocationMethod: DiscountApplicationAllocationMethodShopify;
  /** Which lines of targetType that the discount is allocated over. */
  targetSelection: DiscountApplicationTargetSelectionShopify;
  /** The type of line that the discount is applicable towards. */
  targetType: DiscountApplicationTargetTypeShopify;
  /** The value of the discount application. */
  value: PricingValueShopify;
};

/** The method by which the discount's value is allocated onto its entitled lines. */
export enum DiscountApplicationAllocationMethodShopify {
  /** The value is spread across all entitled lines. */
  AcrossShopify = 'ACROSS',
  /** The value is applied onto every entitled line. */
  EachShopify = 'EACH',
  /**
   * The value is specifically applied onto a particular line.
   * @deprecated Use ACROSS instead.
   */
  OneShopify = 'ONE'
}

/**
 * An auto-generated type for paginating through multiple DiscountApplications.
 *
 */
export type DiscountApplicationConnectionShopify = {
  __typename?: 'DiscountApplicationConnection';
  /** A list of edges. */
  edges: Array<DiscountApplicationEdgeShopify>;
  /** A list of the nodes contained in DiscountApplicationEdge. */
  nodes: Array<DiscountApplicationShopify>;
  /** Information to aid in pagination. */
  pageInfo: PageInfoShopify;
};

/**
 * An auto-generated type which holds one DiscountApplication and a cursor during pagination.
 *
 */
export type DiscountApplicationEdgeShopify = {
  __typename?: 'DiscountApplicationEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of DiscountApplicationEdge. */
  node: DiscountApplicationShopify;
};

/**
 * The lines on the order to which the discount is applied, of the type defined by
 * the discount application's `targetType`. For example, the value `ENTITLED`, combined with a `targetType` of
 * `LINE_ITEM`, applies the discount on all line items that are entitled to the discount.
 * The value `ALL`, combined with a `targetType` of `SHIPPING_LINE`, applies the discount on all shipping lines.
 *
 */
export enum DiscountApplicationTargetSelectionShopify {
  /** The discount is allocated onto all the lines. */
  AllShopify = 'ALL',
  /** The discount is allocated onto only the lines that it's entitled for. */
  EntitledShopify = 'ENTITLED',
  /** The discount is allocated onto explicitly chosen lines. */
  ExplicitShopify = 'EXPLICIT'
}

/**
 * The type of line (i.e. line item or shipping line) on an order that the discount is applicable towards.
 *
 */
export enum DiscountApplicationTargetTypeShopify {
  /** The discount applies onto line items. */
  LineItemShopify = 'LINE_ITEM',
  /** The discount applies onto shipping lines. */
  ShippingLineShopify = 'SHIPPING_LINE'
}

/**
 * Discount code applications capture the intentions of a discount code at
 * the time that it is applied.
 *
 */
export type DiscountCodeApplicationShopify = DiscountApplicationShopify & {
  __typename?: 'DiscountCodeApplication';
  /** The method by which the discount's value is allocated to its entitled items. */
  allocationMethod: DiscountApplicationAllocationMethodShopify;
  /** Specifies whether the discount code was applied successfully. */
  applicable: Scalars['Boolean'];
  /** The string identifying the discount code that was used at the time of application. */
  code: Scalars['String'];
  /** Which lines of targetType that the discount is allocated over. */
  targetSelection: DiscountApplicationTargetSelectionShopify;
  /** The type of line that the discount is applicable towards. */
  targetType: DiscountApplicationTargetTypeShopify;
  /** The value of the discount application. */
  value: PricingValueShopify;
};

/** Represents an error in the input of a mutation. */
export type DisplayableErrorShopify = {
  /** The path to the input field that caused the error. */
  field?: Maybe<Array<Scalars['String']>>;
  /** The error message. */
  message: Scalars['String'];
};

/** Represents a web address. */
export type DomainShopify = {
  __typename?: 'Domain';
  /** The host name of the domain (eg: `example.com`). */
  host: Scalars['String'];
  /** Whether SSL is enabled or not. */
  sslEnabled: Scalars['Boolean'];
  /** The URL of the domain (eg: `https://example.com`). */
  url: Scalars['URL'];
};

/** Represents a video hosted outside of Shopify. */
export type ExternalVideoShopify = MediaShopify & NodeShopify & {
  __typename?: 'ExternalVideo';
  /** A word or phrase to share the nature or contents of a media. */
  alt?: Maybe<Scalars['String']>;
  /** The embed URL of the video for the respective host. */
  embedUrl: Scalars['URL'];
  /**
   * The URL.
   * @deprecated Use `originUrl` instead.
   */
  embeddedUrl: Scalars['URL'];
  /** The host of the external video. */
  host: MediaHostShopify;
  /** A globally-unique identifier. */
  id: Scalars['ID'];
  /** The media content type. */
  mediaContentType: MediaContentTypeShopify;
  /** The origin URL of the video on the respective host. */
  originUrl: Scalars['URL'];
  /** The preview image for the media. */
  previewImage?: Maybe<ImageShopify>;
};

/** A filter that is supported on the parent field. */
export type FilterShopify = {
  __typename?: 'Filter';
  /** A unique identifier. */
  id: Scalars['String'];
  /** A human-friendly string for this filter. */
  label: Scalars['String'];
  /** An enumeration that denotes the type of data this filter represents. */
  type: FilterTypeShopify;
  /** The list of values for this filter. */
  values: Array<FilterValueShopify>;
};

/**
 * The type of data that the filter group represents.
 *
 * For more information, refer to [Filter products in a collection with the Storefront API]
 * (https://shopify.dev/custom-storefronts/products-collections/filter-products).
 *
 */
export enum FilterTypeShopify {
  /** A boolean value. */
  BooleanShopify = 'BOOLEAN',
  /** A list of selectable values. */
  ListShopify = 'LIST',
  /** A range of prices. */
  PriceRangeShopify = 'PRICE_RANGE'
}

/** A selectable value within a filter. */
export type FilterValueShopify = {
  __typename?: 'FilterValue';
  /** The number of results that match this filter value. */
  count: Scalars['Int'];
  /** A unique identifier. */
  id: Scalars['String'];
  /**
   * An input object that can be used to filter by this value on the parent field.
   *
   * The value is provided as a helper for building dynamic filtering UI. For example, if you have a list of selected `FilterValue` objects, you can combine their respective `input` values to use in a subsequent query.
   *
   */
  input: Scalars['JSON'];
  /** A human-friendly string for this filter value. */
  label: Scalars['String'];
};

/** Represents a single fulfillment in an order. */
export type FulfillmentShopify = {
  __typename?: 'Fulfillment';
  /** List of the fulfillment's line items. */
  fulfillmentLineItems: FulfillmentLineItemConnectionShopify;
  /** The name of the tracking company. */
  trackingCompany?: Maybe<Scalars['String']>;
  /**
   * Tracking information associated with the fulfillment,
   * such as the tracking number and tracking URL.
   *
   */
  trackingInfo: Array<FulfillmentTrackingInfoShopify>;
};


/** Represents a single fulfillment in an order. */
export type FulfillmentFulfillmentLineItemsArgsShopify = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  reverse?: InputMaybe<Scalars['Boolean']>;
};


/** Represents a single fulfillment in an order. */
export type FulfillmentTrackingInfoArgsShopify = {
  first?: InputMaybe<Scalars['Int']>;
};

/** Represents a single line item in a fulfillment. There is at most one fulfillment line item for each order line item. */
export type FulfillmentLineItemShopify = {
  __typename?: 'FulfillmentLineItem';
  /** The associated order's line item. */
  lineItem: OrderLineItemShopify;
  /** The amount fulfilled in this fulfillment. */
  quantity: Scalars['Int'];
};

/**
 * An auto-generated type for paginating through multiple FulfillmentLineItems.
 *
 */
export type FulfillmentLineItemConnectionShopify = {
  __typename?: 'FulfillmentLineItemConnection';
  /** A list of edges. */
  edges: Array<FulfillmentLineItemEdgeShopify>;
  /** A list of the nodes contained in FulfillmentLineItemEdge. */
  nodes: Array<FulfillmentLineItemShopify>;
  /** Information to aid in pagination. */
  pageInfo: PageInfoShopify;
};

/**
 * An auto-generated type which holds one FulfillmentLineItem and a cursor during pagination.
 *
 */
export type FulfillmentLineItemEdgeShopify = {
  __typename?: 'FulfillmentLineItemEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of FulfillmentLineItemEdge. */
  node: FulfillmentLineItemShopify;
};

/** Tracking information associated with the fulfillment. */
export type FulfillmentTrackingInfoShopify = {
  __typename?: 'FulfillmentTrackingInfo';
  /** The tracking number of the fulfillment. */
  number?: Maybe<Scalars['String']>;
  /** The URL to track the fulfillment. */
  url?: Maybe<Scalars['URL']>;
};

/** The generic file resource lets you manage files in a merchant’s store. Generic files include any file that doesn’t fit into a designated type such as image or video. Example: PDF, JSON. */
export type GenericFileShopify = NodeShopify & {
  __typename?: 'GenericFile';
  /** A word or phrase to indicate the contents of a file. */
  alt?: Maybe<Scalars['String']>;
  /** A globally-unique identifier. */
  id: Scalars['ID'];
  /** The MIME type of the file. */
  mimeType?: Maybe<Scalars['String']>;
  /** The size of the original file in bytes. */
  originalFileSize?: Maybe<Scalars['Int']>;
  /** The preview image for the file. */
  previewImage?: Maybe<ImageShopify>;
  /** The URL of the file. */
  url?: Maybe<Scalars['URL']>;
};

/** Used to specify a geographical location. */
export type GeoCoordinateInputShopify = {
  /** The coordinate's latitude value. */
  latitude: Scalars['Float'];
  /** The coordinate's longitude value. */
  longitude: Scalars['Float'];
};

/** Represents information about the metafields associated to the specified resource. */
export type HasMetafieldsShopify = {
  /** Returns a metafield found by namespace and key. */
  metafield?: Maybe<MetafieldShopify>;
  /**
   * The metafields associated with the resource matching the supplied list of namespaces and keys.
   *
   */
  metafields: Array<Maybe<MetafieldShopify>>;
};


/** Represents information about the metafields associated to the specified resource. */
export type HasMetafieldsMetafieldArgsShopify = {
  key: Scalars['String'];
  namespace: Scalars['String'];
};


/** Represents information about the metafields associated to the specified resource. */
export type HasMetafieldsMetafieldsArgsShopify = {
  identifiers: Array<HasMetafieldsIdentifierShopify>;
};

/** Identifies a metafield on an owner resource by namespace and key. */
export type HasMetafieldsIdentifierShopify = {
  /** The identifier for the metafield. */
  key: Scalars['String'];
  /** A container for a set of metafields. */
  namespace: Scalars['String'];
};

/** Represents an image resource. */
export type ImageShopify = {
  __typename?: 'Image';
  /** A word or phrase to share the nature or contents of an image. */
  altText?: Maybe<Scalars['String']>;
  /** The original height of the image in pixels. Returns `null` if the image is not hosted by Shopify. */
  height?: Maybe<Scalars['Int']>;
  /** A unique identifier for the image. */
  id?: Maybe<Scalars['ID']>;
  /**
   * The location of the original image as a URL.
   *
   * If there are any existing transformations in the original source URL, they will remain and not be stripped.
   *
   * @deprecated Use `url` instead.
   */
  originalSrc: Scalars['URL'];
  /**
   * The location of the image as a URL.
   * @deprecated Use `url` instead.
   */
  src: Scalars['URL'];
  /**
   * The location of the transformed image as a URL.
   *
   * All transformation arguments are considered "best-effort". If they can be applied to an image, they will be.
   * Otherwise any transformations which an image type does not support will be ignored.
   *
   * @deprecated Use `url(transform:)` instead
   */
  transformedSrc: Scalars['URL'];
  /**
   * The location of the image as a URL.
   *
   * If no transform options are specified, then the original image will be preserved including any pre-applied transforms.
   *
   * All transformation options are considered "best-effort". Any transformation that the original image type doesn't support will be ignored.
   *
   * If you need multiple variations of the same image, then you can use [GraphQL aliases](https://graphql.org/learn/queries/#aliases).
   *
   */
  url: Scalars['URL'];
  /** The original width of the image in pixels. Returns `null` if the image is not hosted by Shopify. */
  width?: Maybe<Scalars['Int']>;
};


/** Represents an image resource. */
export type ImageTransformedSrcArgsShopify = {
  crop?: InputMaybe<CropRegionShopify>;
  maxHeight?: InputMaybe<Scalars['Int']>;
  maxWidth?: InputMaybe<Scalars['Int']>;
  preferredContentType?: InputMaybe<ImageContentTypeShopify>;
  scale?: InputMaybe<Scalars['Int']>;
};


/** Represents an image resource. */
export type ImageUrlArgsShopify = {
  transform?: InputMaybe<ImageTransformInputShopify>;
};

/**
 * An auto-generated type for paginating through multiple Images.
 *
 */
export type ImageConnectionShopify = {
  __typename?: 'ImageConnection';
  /** A list of edges. */
  edges: Array<ImageEdgeShopify>;
  /** A list of the nodes contained in ImageEdge. */
  nodes: Array<ImageShopify>;
  /** Information to aid in pagination. */
  pageInfo: PageInfoShopify;
};

/** List of supported image content types. */
export enum ImageContentTypeShopify {
  /** A JPG image. */
  JpgShopify = 'JPG',
  /** A PNG image. */
  PngShopify = 'PNG',
  /** A WEBP image. */
  WebpShopify = 'WEBP'
}

/**
 * An auto-generated type which holds one Image and a cursor during pagination.
 *
 */
export type ImageEdgeShopify = {
  __typename?: 'ImageEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of ImageEdge. */
  node: ImageShopify;
};

/**
 * The available options for transforming an image.
 *
 * All transformation options are considered best effort. Any transformation that the original image type doesn't support will be ignored.
 *
 */
export type ImageTransformInputShopify = {
  /**
   * The region of the image to remain after cropping.
   * Must be used in conjunction with the `maxWidth` and/or `maxHeight` fields, where the `maxWidth` and `maxHeight` aren't equal.
   * The `crop` argument should coincide with the smaller value. A smaller `maxWidth` indicates a `LEFT` or `RIGHT` crop, while
   * a smaller `maxHeight` indicates a `TOP` or `BOTTOM` crop. For example, `{ maxWidth: 5, maxHeight: 10, crop: LEFT }` will result
   * in an image with a width of 5 and height of 10, where the right side of the image is removed.
   *
   */
  crop?: InputMaybe<CropRegionShopify>;
  /**
   * Image height in pixels between 1 and 5760.
   *
   */
  maxHeight?: InputMaybe<Scalars['Int']>;
  /**
   * Image width in pixels between 1 and 5760.
   *
   */
  maxWidth?: InputMaybe<Scalars['Int']>;
  /**
   * Convert the source image into the preferred content type.
   * Supported conversions: `.svg` to `.png`, any file type to `.jpg`, and any file type to `.webp`.
   *
   */
  preferredContentType?: InputMaybe<ImageContentTypeShopify>;
  /**
   * Image size multiplier for high-resolution retina displays. Must be within 1..3.
   *
   */
  scale?: InputMaybe<Scalars['Int']>;
};

/** A language. */
export type LanguageShopify = {
  __typename?: 'Language';
  /** The name of the language in the language itself. If the language uses capitalization, it is capitalized for a mid-sentence position. */
  endonymName: Scalars['String'];
  /** The ISO code. */
  isoCode: LanguageCodeShopify;
  /** The name of the language in the current language. */
  name: Scalars['String'];
};

/** ISO 639-1 language codes supported by Shopify. */
export enum LanguageCodeShopify {
  /** Afrikaans. */
  AfShopify = 'AF',
  /** Akan. */
  AkShopify = 'AK',
  /** Amharic. */
  AmShopify = 'AM',
  /** Arabic. */
  ArShopify = 'AR',
  /** Assamese. */
  AsShopify = 'AS',
  /** Azerbaijani. */
  AzShopify = 'AZ',
  /** Belarusian. */
  BeShopify = 'BE',
  /** Bulgarian. */
  BgShopify = 'BG',
  /** Bambara. */
  BmShopify = 'BM',
  /** Bangla. */
  BnShopify = 'BN',
  /** Tibetan. */
  BoShopify = 'BO',
  /** Breton. */
  BrShopify = 'BR',
  /** Bosnian. */
  BsShopify = 'BS',
  /** Catalan. */
  CaShopify = 'CA',
  /** Chechen. */
  CeShopify = 'CE',
  /** Czech. */
  CsShopify = 'CS',
  /** Church Slavic. */
  CuShopify = 'CU',
  /** Welsh. */
  CyShopify = 'CY',
  /** Danish. */
  DaShopify = 'DA',
  /** German. */
  DeShopify = 'DE',
  /** Dzongkha. */
  DzShopify = 'DZ',
  /** Ewe. */
  EeShopify = 'EE',
  /** Greek. */
  ElShopify = 'EL',
  /** English. */
  EnShopify = 'EN',
  /** Esperanto. */
  EoShopify = 'EO',
  /** Spanish. */
  EsShopify = 'ES',
  /** Estonian. */
  EtShopify = 'ET',
  /** Basque. */
  EuShopify = 'EU',
  /** Persian. */
  FaShopify = 'FA',
  /** Fulah. */
  FfShopify = 'FF',
  /** Finnish. */
  FiShopify = 'FI',
  /** Faroese. */
  FoShopify = 'FO',
  /** French. */
  FrShopify = 'FR',
  /** Western Frisian. */
  FyShopify = 'FY',
  /** Irish. */
  GaShopify = 'GA',
  /** Scottish Gaelic. */
  GdShopify = 'GD',
  /** Galician. */
  GlShopify = 'GL',
  /** Gujarati. */
  GuShopify = 'GU',
  /** Manx. */
  GvShopify = 'GV',
  /** Hausa. */
  HaShopify = 'HA',
  /** Hebrew. */
  HeShopify = 'HE',
  /** Hindi. */
  HiShopify = 'HI',
  /** Croatian. */
  HrShopify = 'HR',
  /** Hungarian. */
  HuShopify = 'HU',
  /** Armenian. */
  HyShopify = 'HY',
  /** Interlingua. */
  IaShopify = 'IA',
  /** Indonesian. */
  IdShopify = 'ID',
  /** Igbo. */
  IgShopify = 'IG',
  /** Sichuan Yi. */
  IiShopify = 'II',
  /** Icelandic. */
  IsShopify = 'IS',
  /** Italian. */
  ItShopify = 'IT',
  /** Japanese. */
  JaShopify = 'JA',
  /** Javanese. */
  JvShopify = 'JV',
  /** Georgian. */
  KaShopify = 'KA',
  /** Kikuyu. */
  KiShopify = 'KI',
  /** Kazakh. */
  KkShopify = 'KK',
  /** Kalaallisut. */
  KlShopify = 'KL',
  /** Khmer. */
  KmShopify = 'KM',
  /** Kannada. */
  KnShopify = 'KN',
  /** Korean. */
  KoShopify = 'KO',
  /** Kashmiri. */
  KsShopify = 'KS',
  /** Kurdish. */
  KuShopify = 'KU',
  /** Cornish. */
  KwShopify = 'KW',
  /** Kyrgyz. */
  KyShopify = 'KY',
  /** Luxembourgish. */
  LbShopify = 'LB',
  /** Ganda. */
  LgShopify = 'LG',
  /** Lingala. */
  LnShopify = 'LN',
  /** Lao. */
  LoShopify = 'LO',
  /** Lithuanian. */
  LtShopify = 'LT',
  /** Luba-Katanga. */
  LuShopify = 'LU',
  /** Latvian. */
  LvShopify = 'LV',
  /** Malagasy. */
  MgShopify = 'MG',
  /** Māori. */
  MiShopify = 'MI',
  /** Macedonian. */
  MkShopify = 'MK',
  /** Malayalam. */
  MlShopify = 'ML',
  /** Mongolian. */
  MnShopify = 'MN',
  /** Marathi. */
  MrShopify = 'MR',
  /** Malay. */
  MsShopify = 'MS',
  /** Maltese. */
  MtShopify = 'MT',
  /** Burmese. */
  MyShopify = 'MY',
  /** Norwegian (Bokmål). */
  NbShopify = 'NB',
  /** North Ndebele. */
  NdShopify = 'ND',
  /** Nepali. */
  NeShopify = 'NE',
  /** Dutch. */
  NlShopify = 'NL',
  /** Norwegian Nynorsk. */
  NnShopify = 'NN',
  /** Norwegian. */
  NoShopify = 'NO',
  /** Oromo. */
  OmShopify = 'OM',
  /** Odia. */
  OrShopify = 'OR',
  /** Ossetic. */
  OsShopify = 'OS',
  /** Punjabi. */
  PaShopify = 'PA',
  /** Polish. */
  PlShopify = 'PL',
  /** Pashto. */
  PsShopify = 'PS',
  /** Portuguese. */
  PtShopify = 'PT',
  /** Portuguese (Brazil). */
  PtBrShopify = 'PT_BR',
  /** Portuguese (Portugal). */
  PtPtShopify = 'PT_PT',
  /** Quechua. */
  QuShopify = 'QU',
  /** Romansh. */
  RmShopify = 'RM',
  /** Rundi. */
  RnShopify = 'RN',
  /** Romanian. */
  RoShopify = 'RO',
  /** Russian. */
  RuShopify = 'RU',
  /** Kinyarwanda. */
  RwShopify = 'RW',
  /** Sindhi. */
  SdShopify = 'SD',
  /** Northern Sami. */
  SeShopify = 'SE',
  /** Sango. */
  SgShopify = 'SG',
  /** Sinhala. */
  SiShopify = 'SI',
  /** Slovak. */
  SkShopify = 'SK',
  /** Slovenian. */
  SlShopify = 'SL',
  /** Shona. */
  SnShopify = 'SN',
  /** Somali. */
  SoShopify = 'SO',
  /** Albanian. */
  SqShopify = 'SQ',
  /** Serbian. */
  SrShopify = 'SR',
  /** Sundanese. */
  SuShopify = 'SU',
  /** Swedish. */
  SvShopify = 'SV',
  /** Swahili. */
  SwShopify = 'SW',
  /** Tamil. */
  TaShopify = 'TA',
  /** Telugu. */
  TeShopify = 'TE',
  /** Tajik. */
  TgShopify = 'TG',
  /** Thai. */
  ThShopify = 'TH',
  /** Tigrinya. */
  TiShopify = 'TI',
  /** Turkmen. */
  TkShopify = 'TK',
  /** Tongan. */
  ToShopify = 'TO',
  /** Turkish. */
  TrShopify = 'TR',
  /** Tatar. */
  TtShopify = 'TT',
  /** Uyghur. */
  UgShopify = 'UG',
  /** Ukrainian. */
  UkShopify = 'UK',
  /** Urdu. */
  UrShopify = 'UR',
  /** Uzbek. */
  UzShopify = 'UZ',
  /** Vietnamese. */
  ViShopify = 'VI',
  /** Volapük. */
  VoShopify = 'VO',
  /** Wolof. */
  WoShopify = 'WO',
  /** Xhosa. */
  XhShopify = 'XH',
  /** Yiddish. */
  YiShopify = 'YI',
  /** Yoruba. */
  YoShopify = 'YO',
  /** Chinese. */
  ZhShopify = 'ZH',
  /** Chinese (Simplified). */
  ZhCnShopify = 'ZH_CN',
  /** Chinese (Traditional). */
  ZhTwShopify = 'ZH_TW',
  /** Zulu. */
  ZuShopify = 'ZU'
}

/** Information about the localized experiences configured for the shop. */
export type LocalizationShopify = {
  __typename?: 'Localization';
  /** The list of countries with enabled localized experiences. */
  availableCountries: Array<CountryShopify>;
  /** The list of languages available for the active country. */
  availableLanguages: Array<LanguageShopify>;
  /** The country of the active localized experience. Use the `@inContext` directive to change this value. */
  country: CountryShopify;
  /** The language of the active localized experience. Use the `@inContext` directive to change this value. */
  language: LanguageShopify;
};

/** Represents a location where product inventory is held. */
export type LocationShopify = NodeShopify & {
  __typename?: 'Location';
  /** The address of the location. */
  address: LocationAddressShopify;
  /** A globally-unique identifier. */
  id: Scalars['ID'];
  /** The name of the location. */
  name: Scalars['String'];
};

/**
 * Represents the address of a location.
 *
 */
export type LocationAddressShopify = {
  __typename?: 'LocationAddress';
  /** The first line of the address for the location. */
  address1?: Maybe<Scalars['String']>;
  /** The second line of the address for the location. */
  address2?: Maybe<Scalars['String']>;
  /** The city of the location. */
  city?: Maybe<Scalars['String']>;
  /** The country of the location. */
  country?: Maybe<Scalars['String']>;
  /** The country code of the location. */
  countryCode?: Maybe<Scalars['String']>;
  /** A formatted version of the address for the location. */
  formatted: Array<Scalars['String']>;
  /** The latitude coordinates of the location. */
  latitude?: Maybe<Scalars['Float']>;
  /** The longitude coordinates of the location. */
  longitude?: Maybe<Scalars['Float']>;
  /** The phone number of the location. */
  phone?: Maybe<Scalars['String']>;
  /** The province of the location. */
  province?: Maybe<Scalars['String']>;
  /**
   * The code for the province, state, or district of the address of the location.
   *
   */
  provinceCode?: Maybe<Scalars['String']>;
  /** The ZIP code of the location. */
  zip?: Maybe<Scalars['String']>;
};

/**
 * An auto-generated type for paginating through multiple Locations.
 *
 */
export type LocationConnectionShopify = {
  __typename?: 'LocationConnection';
  /** A list of edges. */
  edges: Array<LocationEdgeShopify>;
  /** A list of the nodes contained in LocationEdge. */
  nodes: Array<LocationShopify>;
  /** Information to aid in pagination. */
  pageInfo: PageInfoShopify;
};

/**
 * An auto-generated type which holds one Location and a cursor during pagination.
 *
 */
export type LocationEdgeShopify = {
  __typename?: 'LocationEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of LocationEdge. */
  node: LocationShopify;
};

/** The set of valid sort keys for the Location query. */
export enum LocationSortKeysShopify {
  /** Sort by the `city` value. */
  CityShopify = 'CITY',
  /** Sort by the `distance` value. */
  DistanceShopify = 'DISTANCE',
  /** Sort by the `id` value. */
  IdShopify = 'ID',
  /** Sort by the `name` value. */
  NameShopify = 'NAME'
}

/** Represents a mailing address for customers and shipping. */
export type MailingAddressShopify = NodeShopify & {
  __typename?: 'MailingAddress';
  /** The first line of the address. Typically the street address or PO Box number. */
  address1?: Maybe<Scalars['String']>;
  /**
   * The second line of the address. Typically the number of the apartment, suite, or unit.
   *
   */
  address2?: Maybe<Scalars['String']>;
  /**
   * The name of the city, district, village, or town.
   *
   */
  city?: Maybe<Scalars['String']>;
  /**
   * The name of the customer's company or organization.
   *
   */
  company?: Maybe<Scalars['String']>;
  /**
   * The name of the country.
   *
   */
  country?: Maybe<Scalars['String']>;
  /**
   * The two-letter code for the country of the address.
   *
   * For example, US.
   *
   * @deprecated Use `countryCodeV2` instead.
   */
  countryCode?: Maybe<Scalars['String']>;
  /**
   * The two-letter code for the country of the address.
   *
   * For example, US.
   *
   */
  countryCodeV2?: Maybe<CountryCodeShopify>;
  /** The first name of the customer. */
  firstName?: Maybe<Scalars['String']>;
  /** A formatted version of the address, customized by the provided arguments. */
  formatted: Array<Scalars['String']>;
  /** A comma-separated list of the values for city, province, and country. */
  formattedArea?: Maybe<Scalars['String']>;
  /** A globally-unique identifier. */
  id: Scalars['ID'];
  /** The last name of the customer. */
  lastName?: Maybe<Scalars['String']>;
  /** The latitude coordinate of the customer address. */
  latitude?: Maybe<Scalars['Float']>;
  /** The longitude coordinate of the customer address. */
  longitude?: Maybe<Scalars['Float']>;
  /**
   * The full name of the customer, based on firstName and lastName.
   *
   */
  name?: Maybe<Scalars['String']>;
  /**
   * A unique phone number for the customer.
   *
   * Formatted using E.164 standard. For example, _+16135551111_.
   *
   */
  phone?: Maybe<Scalars['String']>;
  /** The region of the address, such as the province, state, or district. */
  province?: Maybe<Scalars['String']>;
  /**
   * The two-letter code for the region.
   *
   * For example, ON.
   *
   */
  provinceCode?: Maybe<Scalars['String']>;
  /** The zip or postal code of the address. */
  zip?: Maybe<Scalars['String']>;
};


/** Represents a mailing address for customers and shipping. */
export type MailingAddressFormattedArgsShopify = {
  withCompany?: InputMaybe<Scalars['Boolean']>;
  withName?: InputMaybe<Scalars['Boolean']>;
};

/**
 * An auto-generated type for paginating through multiple MailingAddresses.
 *
 */
export type MailingAddressConnectionShopify = {
  __typename?: 'MailingAddressConnection';
  /** A list of edges. */
  edges: Array<MailingAddressEdgeShopify>;
  /** A list of the nodes contained in MailingAddressEdge. */
  nodes: Array<MailingAddressShopify>;
  /** Information to aid in pagination. */
  pageInfo: PageInfoShopify;
};

/**
 * An auto-generated type which holds one MailingAddress and a cursor during pagination.
 *
 */
export type MailingAddressEdgeShopify = {
  __typename?: 'MailingAddressEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of MailingAddressEdge. */
  node: MailingAddressShopify;
};

/** Specifies the fields accepted to create or update a mailing address. */
export type MailingAddressInputShopify = {
  /**
   * The first line of the address. Typically the street address or PO Box number.
   *
   */
  address1?: InputMaybe<Scalars['String']>;
  /**
   * The second line of the address. Typically the number of the apartment, suite, or unit.
   *
   */
  address2?: InputMaybe<Scalars['String']>;
  /**
   * The name of the city, district, village, or town.
   *
   */
  city?: InputMaybe<Scalars['String']>;
  /**
   * The name of the customer's company or organization.
   *
   */
  company?: InputMaybe<Scalars['String']>;
  /** The name of the country. */
  country?: InputMaybe<Scalars['String']>;
  /** The first name of the customer. */
  firstName?: InputMaybe<Scalars['String']>;
  /** The last name of the customer. */
  lastName?: InputMaybe<Scalars['String']>;
  /**
   * A unique phone number for the customer.
   *
   * Formatted using E.164 standard. For example, _+16135551111_.
   *
   */
  phone?: InputMaybe<Scalars['String']>;
  /** The region of the address, such as the province, state, or district. */
  province?: InputMaybe<Scalars['String']>;
  /** The zip or postal code of the address. */
  zip?: InputMaybe<Scalars['String']>;
};

/**
 * Manual discount applications capture the intentions of a discount that was manually created.
 *
 */
export type ManualDiscountApplicationShopify = DiscountApplicationShopify & {
  __typename?: 'ManualDiscountApplication';
  /** The method by which the discount's value is allocated to its entitled items. */
  allocationMethod: DiscountApplicationAllocationMethodShopify;
  /** The description of the application. */
  description?: Maybe<Scalars['String']>;
  /** Which lines of targetType that the discount is allocated over. */
  targetSelection: DiscountApplicationTargetSelectionShopify;
  /** The type of line that the discount is applicable towards. */
  targetType: DiscountApplicationTargetTypeShopify;
  /** The title of the application. */
  title: Scalars['String'];
  /** The value of the discount application. */
  value: PricingValueShopify;
};

/** Represents a media interface. */
export type MediaShopify = {
  /** A word or phrase to share the nature or contents of a media. */
  alt?: Maybe<Scalars['String']>;
  /** The media content type. */
  mediaContentType: MediaContentTypeShopify;
  /** The preview image for the media. */
  previewImage?: Maybe<ImageShopify>;
};

/**
 * An auto-generated type for paginating through multiple Media.
 *
 */
export type MediaConnectionShopify = {
  __typename?: 'MediaConnection';
  /** A list of edges. */
  edges: Array<MediaEdgeShopify>;
  /** A list of the nodes contained in MediaEdge. */
  nodes: Array<MediaShopify>;
  /** Information to aid in pagination. */
  pageInfo: PageInfoShopify;
};

/** The possible content types for a media object. */
export enum MediaContentTypeShopify {
  /** An externally hosted video. */
  ExternalVideoShopify = 'EXTERNAL_VIDEO',
  /** A Shopify hosted image. */
  ImageShopify = 'IMAGE',
  /** A 3d model. */
  Model_3DShopify = 'MODEL_3D',
  /** A Shopify hosted video. */
  VideoShopify = 'VIDEO'
}

/**
 * An auto-generated type which holds one Media and a cursor during pagination.
 *
 */
export type MediaEdgeShopify = {
  __typename?: 'MediaEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of MediaEdge. */
  node: MediaShopify;
};

/** Host for a Media Resource. */
export enum MediaHostShopify {
  /** Host for Vimeo embedded videos. */
  VimeoShopify = 'VIMEO',
  /** Host for YouTube embedded videos. */
  YoutubeShopify = 'YOUTUBE'
}

/** Represents a Shopify hosted image. */
export type MediaImageShopify = MediaShopify & NodeShopify & {
  __typename?: 'MediaImage';
  /** A word or phrase to share the nature or contents of a media. */
  alt?: Maybe<Scalars['String']>;
  /** A globally-unique identifier. */
  id: Scalars['ID'];
  /** The image for the media. */
  image?: Maybe<ImageShopify>;
  /** The media content type. */
  mediaContentType: MediaContentTypeShopify;
  /** The preview image for the media. */
  previewImage?: Maybe<ImageShopify>;
};

/**
 * A [navigation menu](https://help.shopify.com/manual/online-store/menus-and-links) representing a hierarchy
 * of hyperlinks (items).
 *
 */
export type MenuShopify = NodeShopify & {
  __typename?: 'Menu';
  /** The menu's handle. */
  handle: Scalars['String'];
  /** A globally-unique identifier. */
  id: Scalars['ID'];
  /** The menu's child items. */
  items: Array<MenuItemShopify>;
  /** The count of items on the menu. */
  itemsCount: Scalars['Int'];
  /** The menu's title. */
  title: Scalars['String'];
};

/**
 * A menu item within a parent menu.
 *
 */
export type MenuItemShopify = NodeShopify & {
  __typename?: 'MenuItem';
  /** A globally-unique identifier. */
  id: Scalars['ID'];
  /** The menu item's child items. */
  items: Array<MenuItemShopify>;
  /** The ID of the linked resource. */
  resourceId?: Maybe<Scalars['ID']>;
  /** The menu item's tags to filter a collection. */
  tags: Array<Scalars['String']>;
  /** The menu item's title. */
  title: Scalars['String'];
  /** The menu item's type. */
  type: MenuItemTypeShopify;
  /** The menu item's URL. */
  url?: Maybe<Scalars['URL']>;
};

/** A menu item type. */
export enum MenuItemTypeShopify {
  /** An article link. */
  ArticleShopify = 'ARTICLE',
  /** A blog link. */
  BlogShopify = 'BLOG',
  /** A catalog link. */
  CatalogShopify = 'CATALOG',
  /** A collection link. */
  CollectionShopify = 'COLLECTION',
  /** A collection link. */
  CollectionsShopify = 'COLLECTIONS',
  /** A frontpage link. */
  FrontpageShopify = 'FRONTPAGE',
  /** An http link. */
  HttpShopify = 'HTTP',
  /** A page link. */
  PageShopify = 'PAGE',
  /** A product link. */
  ProductShopify = 'PRODUCT',
  /** A search link. */
  SearchShopify = 'SEARCH',
  /** A shop policy link. */
  ShopPolicyShopify = 'SHOP_POLICY'
}

/** The merchandise to be purchased at checkout. */
export type MerchandiseShopify = ProductVariantShopify;

/**
 * Metafields represent custom metadata attached to a resource. Metafields can be sorted into namespaces and are
 * comprised of keys, values, and value types.
 *
 */
export type MetafieldShopify = NodeShopify & {
  __typename?: 'Metafield';
  /** The date and time when the storefront metafield was created. */
  createdAt: Scalars['DateTime'];
  /** The description of a metafield. */
  description?: Maybe<Scalars['String']>;
  /** A globally-unique identifier. */
  id: Scalars['ID'];
  /** The key name for a metafield. */
  key: Scalars['String'];
  /** The namespace for a metafield. */
  namespace: Scalars['String'];
  /** The parent object that the metafield belongs to. */
  parentResource: MetafieldParentResourceShopify;
  /** Returns a reference object if the metafield definition's type is a resource reference. */
  reference?: Maybe<MetafieldReferenceShopify>;
  /** A list of reference objects if the metafield's type is a resource reference list. */
  references?: Maybe<MetafieldReferenceConnectionShopify>;
  /**
   * The type name of the metafield.
   * See the list of [supported types](https://shopify.dev/apps/metafields/definitions/types).
   *
   */
  type: Scalars['String'];
  /** The date and time when the storefront metafield was updated. */
  updatedAt: Scalars['DateTime'];
  /** The value of a metafield. */
  value: Scalars['String'];
};


/**
 * Metafields represent custom metadata attached to a resource. Metafields can be sorted into namespaces and are
 * comprised of keys, values, and value types.
 *
 */
export type MetafieldReferencesArgsShopify = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};

/**
 * A filter used to view a subset of products in a collection matching a specific metafield value.
 *
 * Only the following metafield types are currently supported:
 * - `number_integer`
 * - `number_decimal`
 * - `single_line_text_field`
 * - `boolean` as of 2022-04.
 *
 */
export type MetafieldFilterShopify = {
  /** The key of the metafield to filter on. */
  key: Scalars['String'];
  /** The namespace of the metafield to filter on. */
  namespace: Scalars['String'];
  /** The value of the metafield. */
  value: Scalars['String'];
};

/** A resource that the metafield belongs to. */
export type MetafieldParentResourceShopify = ArticleShopify | BlogShopify | CollectionShopify | CustomerShopify | OrderShopify | PageShopify | ProductShopify | ProductVariantShopify | ShopShopify;

/**
 * Returns the resource which is being referred to by a metafield.
 *
 */
export type MetafieldReferenceShopify = CollectionShopify | GenericFileShopify | MediaImageShopify | MetaobjectShopify | PageShopify | ProductShopify | ProductVariantShopify | VideoShopify;

/**
 * An auto-generated type for paginating through multiple MetafieldReferences.
 *
 */
export type MetafieldReferenceConnectionShopify = {
  __typename?: 'MetafieldReferenceConnection';
  /** A list of edges. */
  edges: Array<MetafieldReferenceEdgeShopify>;
  /** A list of the nodes contained in MetafieldReferenceEdge. */
  nodes: Array<MetafieldReferenceShopify>;
  /** Information to aid in pagination. */
  pageInfo: PageInfoShopify;
};

/**
 * An auto-generated type which holds one MetafieldReference and a cursor during pagination.
 *
 */
export type MetafieldReferenceEdgeShopify = {
  __typename?: 'MetafieldReferenceEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of MetafieldReferenceEdge. */
  node: MetafieldReferenceShopify;
};

/** An instance of a user-defined model based on a MetaobjectDefinition. */
export type MetaobjectShopify = NodeShopify & {
  __typename?: 'Metaobject';
  /** Accesses a field of the object by key. */
  field?: Maybe<MetaobjectFieldShopify>;
  /**
   * All object fields with defined values.
   * Omitted object keys can be assumed null, and no guarantees are made about field order.
   *
   */
  fields: Array<MetaobjectFieldShopify>;
  /** The unique handle of the metaobject. Useful as a custom ID. */
  handle: Scalars['String'];
  /** A globally-unique identifier. */
  id: Scalars['ID'];
  /** The type of the metaobject. Defines the namespace of its associated metafields. */
  type: Scalars['String'];
  /** The date and time when the metaobject was last updated. */
  updatedAt: Scalars['DateTime'];
};


/** An instance of a user-defined model based on a MetaobjectDefinition. */
export type MetaobjectFieldArgsShopify = {
  key: Scalars['String'];
};

/**
 * An auto-generated type for paginating through multiple Metaobjects.
 *
 */
export type MetaobjectConnectionShopify = {
  __typename?: 'MetaobjectConnection';
  /** A list of edges. */
  edges: Array<MetaobjectEdgeShopify>;
  /** A list of the nodes contained in MetaobjectEdge. */
  nodes: Array<MetaobjectShopify>;
  /** Information to aid in pagination. */
  pageInfo: PageInfoShopify;
};

/**
 * An auto-generated type which holds one Metaobject and a cursor during pagination.
 *
 */
export type MetaobjectEdgeShopify = {
  __typename?: 'MetaobjectEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of MetaobjectEdge. */
  node: MetaobjectShopify;
};

/** Provides the value of a Metaobject field. */
export type MetaobjectFieldShopify = {
  __typename?: 'MetaobjectField';
  /** The field key. */
  key: Scalars['String'];
  /** A referenced object if the field type is a resource reference. */
  reference?: Maybe<MetafieldReferenceShopify>;
  /** A list of referenced objects if the field type is a resource reference list. */
  references?: Maybe<MetafieldReferenceConnectionShopify>;
  /**
   * The type name of the field.
   * See the list of [supported types](https://shopify.dev/apps/metafields/definitions/types).
   *
   */
  type: Scalars['String'];
  /** The field value. */
  value?: Maybe<Scalars['String']>;
};


/** Provides the value of a Metaobject field. */
export type MetaobjectFieldReferencesArgsShopify = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};

/** The input fields used to retrieve a metaobject by handle. */
export type MetaobjectHandleInputShopify = {
  /** The handle of the metaobject. */
  handle: Scalars['String'];
  /** The type of the metaobject. */
  type: Scalars['String'];
};

/** Represents a Shopify hosted 3D model. */
export type Model3dShopify = MediaShopify & NodeShopify & {
  __typename?: 'Model3d';
  /** A word or phrase to share the nature or contents of a media. */
  alt?: Maybe<Scalars['String']>;
  /** A globally-unique identifier. */
  id: Scalars['ID'];
  /** The media content type. */
  mediaContentType: MediaContentTypeShopify;
  /** The preview image for the media. */
  previewImage?: Maybe<ImageShopify>;
  /** The sources for a 3d model. */
  sources: Array<Model3dSourceShopify>;
};

/** Represents a source for a Shopify hosted 3d model. */
export type Model3dSourceShopify = {
  __typename?: 'Model3dSource';
  /** The filesize of the 3d model. */
  filesize: Scalars['Int'];
  /** The format of the 3d model. */
  format: Scalars['String'];
  /** The MIME type of the 3d model. */
  mimeType: Scalars['String'];
  /** The URL of the 3d model. */
  url: Scalars['String'];
};

/** Specifies the fields for a monetary value with currency. */
export type MoneyInputShopify = {
  /** Decimal money amount. */
  amount: Scalars['Decimal'];
  /** Currency of the money. */
  currencyCode: CurrencyCodeShopify;
};

/**
 * A monetary value with currency.
 *
 */
export type MoneyV2Shopify = {
  __typename?: 'MoneyV2';
  /** Decimal money amount. */
  amount: Scalars['Decimal'];
  /** Currency of the money. */
  currencyCode: CurrencyCodeShopify;
};

/** The schema’s entry-point for mutations. This acts as the public, top-level API from which all mutation queries must start. */
export type MutationShopify = {
  __typename?: 'Mutation';
  /** Updates the attributes on a cart. */
  cartAttributesUpdate?: Maybe<CartAttributesUpdatePayloadShopify>;
  /**
   * Updates customer information associated with a cart.
   * Buyer identity is used to determine
   * [international pricing](https://shopify.dev/custom-storefronts/internationalization/international-pricing)
   * and should match the customer's shipping address.
   *
   */
  cartBuyerIdentityUpdate?: Maybe<CartBuyerIdentityUpdatePayloadShopify>;
  /** Creates a new cart. */
  cartCreate?: Maybe<CartCreatePayloadShopify>;
  /** Updates the discount codes applied to the cart. */
  cartDiscountCodesUpdate?: Maybe<CartDiscountCodesUpdatePayloadShopify>;
  /** Adds a merchandise line to the cart. */
  cartLinesAdd?: Maybe<CartLinesAddPayloadShopify>;
  /** Removes one or more merchandise lines from the cart. */
  cartLinesRemove?: Maybe<CartLinesRemovePayloadShopify>;
  /** Updates one or more merchandise lines on a cart. */
  cartLinesUpdate?: Maybe<CartLinesUpdatePayloadShopify>;
  /** Updates the note on the cart. */
  cartNoteUpdate?: Maybe<CartNoteUpdatePayloadShopify>;
  /** Update the selected delivery options for a delivery group. */
  cartSelectedDeliveryOptionsUpdate?: Maybe<CartSelectedDeliveryOptionsUpdatePayloadShopify>;
  /** Updates the attributes of a checkout if `allowPartialAddresses` is `true`. */
  checkoutAttributesUpdateV2?: Maybe<CheckoutAttributesUpdateV2PayloadShopify>;
  /** Completes a checkout without providing payment information. You can use this mutation for free items or items whose purchase price is covered by a gift card. */
  checkoutCompleteFree?: Maybe<CheckoutCompleteFreePayloadShopify>;
  /** Completes a checkout using a credit card token from Shopify's card vault. Before you can complete checkouts using CheckoutCompleteWithCreditCardV2, you need to  [_request payment processing_](https://shopify.dev/apps/channels/getting-started#request-payment-processing). */
  checkoutCompleteWithCreditCardV2?: Maybe<CheckoutCompleteWithCreditCardV2PayloadShopify>;
  /** Completes a checkout with a tokenized payment. */
  checkoutCompleteWithTokenizedPaymentV3?: Maybe<CheckoutCompleteWithTokenizedPaymentV3PayloadShopify>;
  /** Creates a new checkout. */
  checkoutCreate?: Maybe<CheckoutCreatePayloadShopify>;
  /** Associates a customer to the checkout. */
  checkoutCustomerAssociateV2?: Maybe<CheckoutCustomerAssociateV2PayloadShopify>;
  /** Disassociates the current checkout customer from the checkout. */
  checkoutCustomerDisassociateV2?: Maybe<CheckoutCustomerDisassociateV2PayloadShopify>;
  /** Applies a discount to an existing checkout using a discount code. */
  checkoutDiscountCodeApplyV2?: Maybe<CheckoutDiscountCodeApplyV2PayloadShopify>;
  /** Removes the applied discounts from an existing checkout. */
  checkoutDiscountCodeRemove?: Maybe<CheckoutDiscountCodeRemovePayloadShopify>;
  /** Updates the email on an existing checkout. */
  checkoutEmailUpdateV2?: Maybe<CheckoutEmailUpdateV2PayloadShopify>;
  /** Removes an applied gift card from the checkout. */
  checkoutGiftCardRemoveV2?: Maybe<CheckoutGiftCardRemoveV2PayloadShopify>;
  /** Appends gift cards to an existing checkout. */
  checkoutGiftCardsAppend?: Maybe<CheckoutGiftCardsAppendPayloadShopify>;
  /** Adds a list of line items to a checkout. */
  checkoutLineItemsAdd?: Maybe<CheckoutLineItemsAddPayloadShopify>;
  /** Removes line items from an existing checkout. */
  checkoutLineItemsRemove?: Maybe<CheckoutLineItemsRemovePayloadShopify>;
  /** Sets a list of line items to a checkout. */
  checkoutLineItemsReplace?: Maybe<CheckoutLineItemsReplacePayloadShopify>;
  /** Updates line items on a checkout. */
  checkoutLineItemsUpdate?: Maybe<CheckoutLineItemsUpdatePayloadShopify>;
  /** Updates the shipping address of an existing checkout. */
  checkoutShippingAddressUpdateV2?: Maybe<CheckoutShippingAddressUpdateV2PayloadShopify>;
  /** Updates the shipping lines on an existing checkout. */
  checkoutShippingLineUpdate?: Maybe<CheckoutShippingLineUpdatePayloadShopify>;
  /**
   * Creates a customer access token.
   * The customer access token is required to modify the customer object in any way.
   *
   */
  customerAccessTokenCreate?: Maybe<CustomerAccessTokenCreatePayloadShopify>;
  /**
   * Creates a customer access token using a
   * [multipass token](https://shopify.dev/api/multipass) instead of email and
   * password. A customer record is created if the customer doesn't exist. If a customer
   * record already exists but the record is disabled, then the customer record is enabled.
   *
   */
  customerAccessTokenCreateWithMultipass?: Maybe<CustomerAccessTokenCreateWithMultipassPayloadShopify>;
  /** Permanently destroys a customer access token. */
  customerAccessTokenDelete?: Maybe<CustomerAccessTokenDeletePayloadShopify>;
  /**
   * Renews a customer access token.
   *
   * Access token renewal must happen *before* a token expires.
   * If a token has already expired, a new one should be created instead via `customerAccessTokenCreate`.
   *
   */
  customerAccessTokenRenew?: Maybe<CustomerAccessTokenRenewPayloadShopify>;
  /** Activates a customer. */
  customerActivate?: Maybe<CustomerActivatePayloadShopify>;
  /** Activates a customer with the activation url received from `customerCreate`. */
  customerActivateByUrl?: Maybe<CustomerActivateByUrlPayloadShopify>;
  /** Creates a new address for a customer. */
  customerAddressCreate?: Maybe<CustomerAddressCreatePayloadShopify>;
  /** Permanently deletes the address of an existing customer. */
  customerAddressDelete?: Maybe<CustomerAddressDeletePayloadShopify>;
  /** Updates the address of an existing customer. */
  customerAddressUpdate?: Maybe<CustomerAddressUpdatePayloadShopify>;
  /** Creates a new customer. */
  customerCreate?: Maybe<CustomerCreatePayloadShopify>;
  /** Updates the default address of an existing customer. */
  customerDefaultAddressUpdate?: Maybe<CustomerDefaultAddressUpdatePayloadShopify>;
  /**
   * Sends a reset password email to the customer. The reset password
   * email contains a reset password URL and token that you can pass to
   * the [`customerResetByUrl`](https://shopify.dev/api/storefront/latest/mutations/customerResetByUrl) or
   * [`customerReset`](https://shopify.dev/api/storefront/latest/mutations/customerReset) mutation to reset the
   * customer password.
   *
   * This mutation is throttled by IP. With authenticated access,
   * you can provide a [`Shopify-Storefront-Buyer-IP`](https://shopify.dev/api/usage/authentication#optional-ip-header) instead of the request IP.
   *
   * Make sure that the value provided to `Shopify-Storefront-Buyer-IP` is trusted. Unthrottled access to this
   * mutation presents a security risk.
   *
   */
  customerRecover?: Maybe<CustomerRecoverPayloadShopify>;
  /**
   * "Resets a customer’s password with the token received from a reset password email. You can send a reset password email with the [`customerRecover`](https://shopify.dev/api/storefront/latest/mutations/customerRecover) mutation."
   *
   */
  customerReset?: Maybe<CustomerResetPayloadShopify>;
  /**
   * "Resets a customer’s password with the reset password URL received from a reset password email. You can send a reset password email with the [`customerRecover`](https://shopify.dev/api/storefront/latest/mutations/customerRecover) mutation."
   *
   */
  customerResetByUrl?: Maybe<CustomerResetByUrlPayloadShopify>;
  /** Updates an existing customer. */
  customerUpdate?: Maybe<CustomerUpdatePayloadShopify>;
};


/** The schema’s entry-point for mutations. This acts as the public, top-level API from which all mutation queries must start. */
export type MutationCartAttributesUpdateArgsShopify = {
  attributes: Array<AttributeInputShopify>;
  cartId: Scalars['ID'];
};


/** The schema’s entry-point for mutations. This acts as the public, top-level API from which all mutation queries must start. */
export type MutationCartBuyerIdentityUpdateArgsShopify = {
  buyerIdentity: CartBuyerIdentityInputShopify;
  cartId: Scalars['ID'];
};


/** The schema’s entry-point for mutations. This acts as the public, top-level API from which all mutation queries must start. */
export type MutationCartCreateArgsShopify = {
  input?: InputMaybe<CartInputShopify>;
};


/** The schema’s entry-point for mutations. This acts as the public, top-level API from which all mutation queries must start. */
export type MutationCartDiscountCodesUpdateArgsShopify = {
  cartId: Scalars['ID'];
  discountCodes?: InputMaybe<Array<Scalars['String']>>;
};


/** The schema’s entry-point for mutations. This acts as the public, top-level API from which all mutation queries must start. */
export type MutationCartLinesAddArgsShopify = {
  cartId: Scalars['ID'];
  lines: Array<CartLineInputShopify>;
};


/** The schema’s entry-point for mutations. This acts as the public, top-level API from which all mutation queries must start. */
export type MutationCartLinesRemoveArgsShopify = {
  cartId: Scalars['ID'];
  lineIds: Array<Scalars['ID']>;
};


/** The schema’s entry-point for mutations. This acts as the public, top-level API from which all mutation queries must start. */
export type MutationCartLinesUpdateArgsShopify = {
  cartId: Scalars['ID'];
  lines: Array<CartLineUpdateInputShopify>;
};


/** The schema’s entry-point for mutations. This acts as the public, top-level API from which all mutation queries must start. */
export type MutationCartNoteUpdateArgsShopify = {
  cartId: Scalars['ID'];
  note?: InputMaybe<Scalars['String']>;
};


/** The schema’s entry-point for mutations. This acts as the public, top-level API from which all mutation queries must start. */
export type MutationCartSelectedDeliveryOptionsUpdateArgsShopify = {
  cartId: Scalars['ID'];
  selectedDeliveryOptions: Array<CartSelectedDeliveryOptionInputShopify>;
};


/** The schema’s entry-point for mutations. This acts as the public, top-level API from which all mutation queries must start. */
export type MutationCheckoutAttributesUpdateV2ArgsShopify = {
  checkoutId: Scalars['ID'];
  input: CheckoutAttributesUpdateV2InputShopify;
};


/** The schema’s entry-point for mutations. This acts as the public, top-level API from which all mutation queries must start. */
export type MutationCheckoutCompleteFreeArgsShopify = {
  checkoutId: Scalars['ID'];
};


/** The schema’s entry-point for mutations. This acts as the public, top-level API from which all mutation queries must start. */
export type MutationCheckoutCompleteWithCreditCardV2ArgsShopify = {
  checkoutId: Scalars['ID'];
  payment: CreditCardPaymentInputV2Shopify;
};


/** The schema’s entry-point for mutations. This acts as the public, top-level API from which all mutation queries must start. */
export type MutationCheckoutCompleteWithTokenizedPaymentV3ArgsShopify = {
  checkoutId: Scalars['ID'];
  payment: TokenizedPaymentInputV3Shopify;
};


/** The schema’s entry-point for mutations. This acts as the public, top-level API from which all mutation queries must start. */
export type MutationCheckoutCreateArgsShopify = {
  input: CheckoutCreateInputShopify;
  queueToken?: InputMaybe<Scalars['String']>;
};


/** The schema’s entry-point for mutations. This acts as the public, top-level API from which all mutation queries must start. */
export type MutationCheckoutCustomerAssociateV2ArgsShopify = {
  checkoutId: Scalars['ID'];
  customerAccessToken: Scalars['String'];
};


/** The schema’s entry-point for mutations. This acts as the public, top-level API from which all mutation queries must start. */
export type MutationCheckoutCustomerDisassociateV2ArgsShopify = {
  checkoutId: Scalars['ID'];
};


/** The schema’s entry-point for mutations. This acts as the public, top-level API from which all mutation queries must start. */
export type MutationCheckoutDiscountCodeApplyV2ArgsShopify = {
  checkoutId: Scalars['ID'];
  discountCode: Scalars['String'];
};


/** The schema’s entry-point for mutations. This acts as the public, top-level API from which all mutation queries must start. */
export type MutationCheckoutDiscountCodeRemoveArgsShopify = {
  checkoutId: Scalars['ID'];
};


/** The schema’s entry-point for mutations. This acts as the public, top-level API from which all mutation queries must start. */
export type MutationCheckoutEmailUpdateV2ArgsShopify = {
  checkoutId: Scalars['ID'];
  email: Scalars['String'];
};


/** The schema’s entry-point for mutations. This acts as the public, top-level API from which all mutation queries must start. */
export type MutationCheckoutGiftCardRemoveV2ArgsShopify = {
  appliedGiftCardId: Scalars['ID'];
  checkoutId: Scalars['ID'];
};


/** The schema’s entry-point for mutations. This acts as the public, top-level API from which all mutation queries must start. */
export type MutationCheckoutGiftCardsAppendArgsShopify = {
  checkoutId: Scalars['ID'];
  giftCardCodes: Array<Scalars['String']>;
};


/** The schema’s entry-point for mutations. This acts as the public, top-level API from which all mutation queries must start. */
export type MutationCheckoutLineItemsAddArgsShopify = {
  checkoutId: Scalars['ID'];
  lineItems: Array<CheckoutLineItemInputShopify>;
};


/** The schema’s entry-point for mutations. This acts as the public, top-level API from which all mutation queries must start. */
export type MutationCheckoutLineItemsRemoveArgsShopify = {
  checkoutId: Scalars['ID'];
  lineItemIds: Array<Scalars['ID']>;
};


/** The schema’s entry-point for mutations. This acts as the public, top-level API from which all mutation queries must start. */
export type MutationCheckoutLineItemsReplaceArgsShopify = {
  checkoutId: Scalars['ID'];
  lineItems: Array<CheckoutLineItemInputShopify>;
};


/** The schema’s entry-point for mutations. This acts as the public, top-level API from which all mutation queries must start. */
export type MutationCheckoutLineItemsUpdateArgsShopify = {
  checkoutId: Scalars['ID'];
  lineItems: Array<CheckoutLineItemUpdateInputShopify>;
};


/** The schema’s entry-point for mutations. This acts as the public, top-level API from which all mutation queries must start. */
export type MutationCheckoutShippingAddressUpdateV2ArgsShopify = {
  checkoutId: Scalars['ID'];
  shippingAddress: MailingAddressInputShopify;
};


/** The schema’s entry-point for mutations. This acts as the public, top-level API from which all mutation queries must start. */
export type MutationCheckoutShippingLineUpdateArgsShopify = {
  checkoutId: Scalars['ID'];
  shippingRateHandle: Scalars['String'];
};


/** The schema’s entry-point for mutations. This acts as the public, top-level API from which all mutation queries must start. */
export type MutationCustomerAccessTokenCreateArgsShopify = {
  input: CustomerAccessTokenCreateInputShopify;
};


/** The schema’s entry-point for mutations. This acts as the public, top-level API from which all mutation queries must start. */
export type MutationCustomerAccessTokenCreateWithMultipassArgsShopify = {
  multipassToken: Scalars['String'];
};


/** The schema’s entry-point for mutations. This acts as the public, top-level API from which all mutation queries must start. */
export type MutationCustomerAccessTokenDeleteArgsShopify = {
  customerAccessToken: Scalars['String'];
};


/** The schema’s entry-point for mutations. This acts as the public, top-level API from which all mutation queries must start. */
export type MutationCustomerAccessTokenRenewArgsShopify = {
  customerAccessToken: Scalars['String'];
};


/** The schema’s entry-point for mutations. This acts as the public, top-level API from which all mutation queries must start. */
export type MutationCustomerActivateArgsShopify = {
  id: Scalars['ID'];
  input: CustomerActivateInputShopify;
};


/** The schema’s entry-point for mutations. This acts as the public, top-level API from which all mutation queries must start. */
export type MutationCustomerActivateByUrlArgsShopify = {
  activationUrl: Scalars['URL'];
  password: Scalars['String'];
};


/** The schema’s entry-point for mutations. This acts as the public, top-level API from which all mutation queries must start. */
export type MutationCustomerAddressCreateArgsShopify = {
  address: MailingAddressInputShopify;
  customerAccessToken: Scalars['String'];
};


/** The schema’s entry-point for mutations. This acts as the public, top-level API from which all mutation queries must start. */
export type MutationCustomerAddressDeleteArgsShopify = {
  customerAccessToken: Scalars['String'];
  id: Scalars['ID'];
};


/** The schema’s entry-point for mutations. This acts as the public, top-level API from which all mutation queries must start. */
export type MutationCustomerAddressUpdateArgsShopify = {
  address: MailingAddressInputShopify;
  customerAccessToken: Scalars['String'];
  id: Scalars['ID'];
};


/** The schema’s entry-point for mutations. This acts as the public, top-level API from which all mutation queries must start. */
export type MutationCustomerCreateArgsShopify = {
  input: CustomerCreateInputShopify;
};


/** The schema’s entry-point for mutations. This acts as the public, top-level API from which all mutation queries must start. */
export type MutationCustomerDefaultAddressUpdateArgsShopify = {
  addressId: Scalars['ID'];
  customerAccessToken: Scalars['String'];
};


/** The schema’s entry-point for mutations. This acts as the public, top-level API from which all mutation queries must start. */
export type MutationCustomerRecoverArgsShopify = {
  email: Scalars['String'];
};


/** The schema’s entry-point for mutations. This acts as the public, top-level API from which all mutation queries must start. */
export type MutationCustomerResetArgsShopify = {
  id: Scalars['ID'];
  input: CustomerResetInputShopify;
};


/** The schema’s entry-point for mutations. This acts as the public, top-level API from which all mutation queries must start. */
export type MutationCustomerResetByUrlArgsShopify = {
  password: Scalars['String'];
  resetUrl: Scalars['URL'];
};


/** The schema’s entry-point for mutations. This acts as the public, top-level API from which all mutation queries must start. */
export type MutationCustomerUpdateArgsShopify = {
  customer: CustomerUpdateInputShopify;
  customerAccessToken: Scalars['String'];
};

/**
 * An object with an ID field to support global identification, in accordance with the
 * [Relay specification](https://relay.dev/graphql/objectidentification.htm#sec-Node-Interface).
 * This interface is used by the [node](https://shopify.dev/api/admin-graphql/unstable/queries/node)
 * and [nodes](https://shopify.dev/api/admin-graphql/unstable/queries/nodes) queries.
 *
 */
export type NodeShopify = {
  /** A globally-unique identifier. */
  id: Scalars['ID'];
};

/** Represents a resource that can be published to the Online Store sales channel. */
export type OnlineStorePublishableShopify = {
  /** The URL used for viewing the resource on the shop's Online Store. Returns `null` if the resource is currently not published to the Online Store sales channel. */
  onlineStoreUrl?: Maybe<Scalars['URL']>;
};

/** An order is a customer’s completed request to purchase one or more products from a shop. An order is created when a customer completes the checkout process, during which time they provides an email address, billing address and payment information. */
export type OrderShopify = HasMetafieldsShopify & NodeShopify & {
  __typename?: 'Order';
  /** The reason for the order's cancellation. Returns `null` if the order wasn't canceled. */
  cancelReason?: Maybe<OrderCancelReasonShopify>;
  /** The date and time when the order was canceled. Returns null if the order wasn't canceled. */
  canceledAt?: Maybe<Scalars['DateTime']>;
  /** The code of the currency used for the payment. */
  currencyCode: CurrencyCodeShopify;
  /** The subtotal of line items and their discounts, excluding line items that have been removed. Does not contain order-level discounts, duties, shipping costs, or shipping discounts. Taxes are not included unless the order is a taxes-included order. */
  currentSubtotalPrice: MoneyV2Shopify;
  /** The total cost of duties for the order, including refunds. */
  currentTotalDuties?: Maybe<MoneyV2Shopify>;
  /** The total amount of the order, including duties, taxes and discounts, minus amounts for line items that have been removed. */
  currentTotalPrice: MoneyV2Shopify;
  /** The total of all taxes applied to the order, excluding taxes for returned line items. */
  currentTotalTax: MoneyV2Shopify;
  /** A list of the custom attributes added to the order. */
  customAttributes: Array<AttributeShopify>;
  /** The locale code in which this specific order happened. */
  customerLocale?: Maybe<Scalars['String']>;
  /** The unique URL that the customer can use to access the order. */
  customerUrl?: Maybe<Scalars['URL']>;
  /** Discounts that have been applied on the order. */
  discountApplications: DiscountApplicationConnectionShopify;
  /** Whether the order has had any edits applied or not. */
  edited: Scalars['Boolean'];
  /** The customer's email address. */
  email?: Maybe<Scalars['String']>;
  /** The financial status of the order. */
  financialStatus?: Maybe<OrderFinancialStatusShopify>;
  /** The fulfillment status for the order. */
  fulfillmentStatus: OrderFulfillmentStatusShopify;
  /** A globally-unique identifier. */
  id: Scalars['ID'];
  /** List of the order’s line items. */
  lineItems: OrderLineItemConnectionShopify;
  /** Returns a metafield found by namespace and key. */
  metafield?: Maybe<MetafieldShopify>;
  /**
   * The metafields associated with the resource matching the supplied list of namespaces and keys.
   *
   */
  metafields: Array<Maybe<MetafieldShopify>>;
  /**
   * Unique identifier for the order that appears on the order.
   * For example, _#1000_ or _Store1001.
   *
   */
  name: Scalars['String'];
  /** A unique numeric identifier for the order for use by shop owner and customer. */
  orderNumber: Scalars['Int'];
  /** The total cost of duties charged at checkout. */
  originalTotalDuties?: Maybe<MoneyV2Shopify>;
  /** The total price of the order before any applied edits. */
  originalTotalPrice: MoneyV2Shopify;
  /** The customer's phone number for receiving SMS notifications. */
  phone?: Maybe<Scalars['String']>;
  /**
   * The date and time when the order was imported.
   * This value can be set to dates in the past when importing from other systems.
   * If no value is provided, it will be auto-generated based on current date and time.
   *
   */
  processedAt: Scalars['DateTime'];
  /** The address to where the order will be shipped. */
  shippingAddress?: Maybe<MailingAddressShopify>;
  /**
   * The discounts that have been allocated onto the shipping line by discount applications.
   *
   */
  shippingDiscountAllocations: Array<DiscountAllocationShopify>;
  /** The unique URL for the order's status page. */
  statusUrl: Scalars['URL'];
  /** Price of the order before shipping and taxes. */
  subtotalPrice?: Maybe<MoneyV2Shopify>;
  /**
   * Price of the order before duties, shipping and taxes.
   * @deprecated Use `subtotalPrice` instead.
   */
  subtotalPriceV2?: Maybe<MoneyV2Shopify>;
  /** List of the order’s successful fulfillments. */
  successfulFulfillments?: Maybe<Array<FulfillmentShopify>>;
  /** The sum of all the prices of all the items in the order, duties, taxes and discounts included (must be positive). */
  totalPrice: MoneyV2Shopify;
  /**
   * The sum of all the prices of all the items in the order, duties, taxes and discounts included (must be positive).
   * @deprecated Use `totalPrice` instead.
   */
  totalPriceV2: MoneyV2Shopify;
  /** The total amount that has been refunded. */
  totalRefunded: MoneyV2Shopify;
  /**
   * The total amount that has been refunded.
   * @deprecated Use `totalRefunded` instead.
   */
  totalRefundedV2: MoneyV2Shopify;
  /** The total cost of shipping. */
  totalShippingPrice: MoneyV2Shopify;
  /**
   * The total cost of shipping.
   * @deprecated Use `totalShippingPrice` instead.
   */
  totalShippingPriceV2: MoneyV2Shopify;
  /** The total cost of taxes. */
  totalTax?: Maybe<MoneyV2Shopify>;
  /**
   * The total cost of taxes.
   * @deprecated Use `totalTax` instead.
   */
  totalTaxV2?: Maybe<MoneyV2Shopify>;
};


/** An order is a customer’s completed request to purchase one or more products from a shop. An order is created when a customer completes the checkout process, during which time they provides an email address, billing address and payment information. */
export type OrderDiscountApplicationsArgsShopify = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  reverse?: InputMaybe<Scalars['Boolean']>;
};


/** An order is a customer’s completed request to purchase one or more products from a shop. An order is created when a customer completes the checkout process, during which time they provides an email address, billing address and payment information. */
export type OrderLineItemsArgsShopify = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  reverse?: InputMaybe<Scalars['Boolean']>;
};


/** An order is a customer’s completed request to purchase one or more products from a shop. An order is created when a customer completes the checkout process, during which time they provides an email address, billing address and payment information. */
export type OrderMetafieldArgsShopify = {
  key: Scalars['String'];
  namespace: Scalars['String'];
};


/** An order is a customer’s completed request to purchase one or more products from a shop. An order is created when a customer completes the checkout process, during which time they provides an email address, billing address and payment information. */
export type OrderMetafieldsArgsShopify = {
  identifiers: Array<HasMetafieldsIdentifierShopify>;
};


/** An order is a customer’s completed request to purchase one or more products from a shop. An order is created when a customer completes the checkout process, during which time they provides an email address, billing address and payment information. */
export type OrderSuccessfulFulfillmentsArgsShopify = {
  first?: InputMaybe<Scalars['Int']>;
};

/** Represents the reason for the order's cancellation. */
export enum OrderCancelReasonShopify {
  /** The customer wanted to cancel the order. */
  CustomerShopify = 'CUSTOMER',
  /** Payment was declined. */
  DeclinedShopify = 'DECLINED',
  /** The order was fraudulent. */
  FraudShopify = 'FRAUD',
  /** There was insufficient inventory. */
  InventoryShopify = 'INVENTORY',
  /** The order was canceled for an unlisted reason. */
  OtherShopify = 'OTHER'
}

/**
 * An auto-generated type for paginating through multiple Orders.
 *
 */
export type OrderConnectionShopify = {
  __typename?: 'OrderConnection';
  /** A list of edges. */
  edges: Array<OrderEdgeShopify>;
  /** A list of the nodes contained in OrderEdge. */
  nodes: Array<OrderShopify>;
  /** Information to aid in pagination. */
  pageInfo: PageInfoShopify;
  /** The total count of Orders. */
  totalCount: Scalars['UnsignedInt64'];
};

/**
 * An auto-generated type which holds one Order and a cursor during pagination.
 *
 */
export type OrderEdgeShopify = {
  __typename?: 'OrderEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of OrderEdge. */
  node: OrderShopify;
};

/** Represents the order's current financial status. */
export enum OrderFinancialStatusShopify {
  /** Displayed as **Authorized**. */
  AuthorizedShopify = 'AUTHORIZED',
  /** Displayed as **Paid**. */
  PaidShopify = 'PAID',
  /** Displayed as **Partially paid**. */
  PartiallyPaidShopify = 'PARTIALLY_PAID',
  /** Displayed as **Partially refunded**. */
  PartiallyRefundedShopify = 'PARTIALLY_REFUNDED',
  /** Displayed as **Pending**. */
  PendingShopify = 'PENDING',
  /** Displayed as **Refunded**. */
  RefundedShopify = 'REFUNDED',
  /** Displayed as **Voided**. */
  VoidedShopify = 'VOIDED'
}

/** Represents the order's aggregated fulfillment status for display purposes. */
export enum OrderFulfillmentStatusShopify {
  /** Displayed as **Fulfilled**. All of the items in the order have been fulfilled. */
  FulfilledShopify = 'FULFILLED',
  /** Displayed as **In progress**. Some of the items in the order have been fulfilled, or a request for fulfillment has been sent to the fulfillment service. */
  InProgressShopify = 'IN_PROGRESS',
  /** Displayed as **On hold**. All of the unfulfilled items in this order are on hold. */
  OnHoldShopify = 'ON_HOLD',
  /** Displayed as **Open**. None of the items in the order have been fulfilled. Replaced by "UNFULFILLED" status. */
  OpenShopify = 'OPEN',
  /** Displayed as **Partially fulfilled**. Some of the items in the order have been fulfilled. */
  PartiallyFulfilledShopify = 'PARTIALLY_FULFILLED',
  /** Displayed as **Pending fulfillment**. A request for fulfillment of some items awaits a response from the fulfillment service. Replaced by "IN_PROGRESS" status. */
  PendingFulfillmentShopify = 'PENDING_FULFILLMENT',
  /** Displayed as **Restocked**. All of the items in the order have been restocked. Replaced by "UNFULFILLED" status. */
  RestockedShopify = 'RESTOCKED',
  /** Displayed as **Scheduled**. All of the unfulfilled items in this order are scheduled for fulfillment at later time. */
  ScheduledShopify = 'SCHEDULED',
  /** Displayed as **Unfulfilled**. None of the items in the order have been fulfilled. */
  UnfulfilledShopify = 'UNFULFILLED'
}

/** Represents a single line in an order. There is one line item for each distinct product variant. */
export type OrderLineItemShopify = {
  __typename?: 'OrderLineItem';
  /** The number of entries associated to the line item minus the items that have been removed. */
  currentQuantity: Scalars['Int'];
  /** List of custom attributes associated to the line item. */
  customAttributes: Array<AttributeShopify>;
  /** The discounts that have been allocated onto the order line item by discount applications. */
  discountAllocations: Array<DiscountAllocationShopify>;
  /** The total price of the line item, including discounts, and displayed in the presentment currency. */
  discountedTotalPrice: MoneyV2Shopify;
  /** The total price of the line item, not including any discounts. The total price is calculated using the original unit price multiplied by the quantity, and it is displayed in the presentment currency. */
  originalTotalPrice: MoneyV2Shopify;
  /** The number of products variants associated to the line item. */
  quantity: Scalars['Int'];
  /** The title of the product combined with title of the variant. */
  title: Scalars['String'];
  /** The product variant object associated to the line item. */
  variant?: Maybe<ProductVariantShopify>;
};

/**
 * An auto-generated type for paginating through multiple OrderLineItems.
 *
 */
export type OrderLineItemConnectionShopify = {
  __typename?: 'OrderLineItemConnection';
  /** A list of edges. */
  edges: Array<OrderLineItemEdgeShopify>;
  /** A list of the nodes contained in OrderLineItemEdge. */
  nodes: Array<OrderLineItemShopify>;
  /** Information to aid in pagination. */
  pageInfo: PageInfoShopify;
};

/**
 * An auto-generated type which holds one OrderLineItem and a cursor during pagination.
 *
 */
export type OrderLineItemEdgeShopify = {
  __typename?: 'OrderLineItemEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of OrderLineItemEdge. */
  node: OrderLineItemShopify;
};

/** The set of valid sort keys for the Order query. */
export enum OrderSortKeysShopify {
  /** Sort by the `id` value. */
  IdShopify = 'ID',
  /** Sort by the `processed_at` value. */
  ProcessedAtShopify = 'PROCESSED_AT',
  /**
   * Sort by relevance to the search terms when the `query` parameter is specified on the connection.
   * Don't use this sort key when no search query is specified.
   *
   */
  RelevanceShopify = 'RELEVANCE',
  /** Sort by the `total_price` value. */
  TotalPriceShopify = 'TOTAL_PRICE'
}

/** Shopify merchants can create pages to hold static HTML content. Each Page object represents a custom page on the online store. */
export type PageShopify = HasMetafieldsShopify & NodeShopify & OnlineStorePublishableShopify & {
  __typename?: 'Page';
  /** The description of the page, complete with HTML formatting. */
  body: Scalars['HTML'];
  /** Summary of the page body. */
  bodySummary: Scalars['String'];
  /** The timestamp of the page creation. */
  createdAt: Scalars['DateTime'];
  /** A human-friendly unique string for the page automatically generated from its title. */
  handle: Scalars['String'];
  /** A globally-unique identifier. */
  id: Scalars['ID'];
  /** Returns a metafield found by namespace and key. */
  metafield?: Maybe<MetafieldShopify>;
  /**
   * The metafields associated with the resource matching the supplied list of namespaces and keys.
   *
   */
  metafields: Array<Maybe<MetafieldShopify>>;
  /** The URL used for viewing the resource on the shop's Online Store. Returns `null` if the resource is currently not published to the Online Store sales channel. */
  onlineStoreUrl?: Maybe<Scalars['URL']>;
  /** The page's SEO information. */
  seo?: Maybe<SeoShopify>;
  /** The title of the page. */
  title: Scalars['String'];
  /** The timestamp of the latest page update. */
  updatedAt: Scalars['DateTime'];
};


/** Shopify merchants can create pages to hold static HTML content. Each Page object represents a custom page on the online store. */
export type PageMetafieldArgsShopify = {
  key: Scalars['String'];
  namespace: Scalars['String'];
};


/** Shopify merchants can create pages to hold static HTML content. Each Page object represents a custom page on the online store. */
export type PageMetafieldsArgsShopify = {
  identifiers: Array<HasMetafieldsIdentifierShopify>;
};

/**
 * An auto-generated type for paginating through multiple Pages.
 *
 */
export type PageConnectionShopify = {
  __typename?: 'PageConnection';
  /** A list of edges. */
  edges: Array<PageEdgeShopify>;
  /** A list of the nodes contained in PageEdge. */
  nodes: Array<PageShopify>;
  /** Information to aid in pagination. */
  pageInfo: PageInfoShopify;
};

/**
 * An auto-generated type which holds one Page and a cursor during pagination.
 *
 */
export type PageEdgeShopify = {
  __typename?: 'PageEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of PageEdge. */
  node: PageShopify;
};

/**
 * Returns information about pagination in a connection, in accordance with the
 * [Relay specification](https://relay.dev/graphql/connections.htm#sec-undefined.PageInfo).
 * For more information, please read our [GraphQL Pagination Usage Guide](https://shopify.dev/api/usage/pagination-graphql).
 *
 */
export type PageInfoShopify = {
  __typename?: 'PageInfo';
  /** The cursor corresponding to the last node in edges. */
  endCursor?: Maybe<Scalars['String']>;
  /** Whether there are more pages to fetch following the current page. */
  hasNextPage: Scalars['Boolean'];
  /** Whether there are any pages prior to the current page. */
  hasPreviousPage: Scalars['Boolean'];
  /** The cursor corresponding to the first node in edges. */
  startCursor?: Maybe<Scalars['String']>;
};

/** The set of valid sort keys for the Page query. */
export enum PageSortKeysShopify {
  /** Sort by the `id` value. */
  IdShopify = 'ID',
  /**
   * Sort by relevance to the search terms when the `query` parameter is specified on the connection.
   * Don't use this sort key when no search query is specified.
   *
   */
  RelevanceShopify = 'RELEVANCE',
  /** Sort by the `title` value. */
  TitleShopify = 'TITLE',
  /** Sort by the `updated_at` value. */
  UpdatedAtShopify = 'UPDATED_AT'
}

/** A payment applied to a checkout. */
export type PaymentShopify = NodeShopify & {
  __typename?: 'Payment';
  /** The amount of the payment. */
  amount: MoneyV2Shopify;
  /**
   * The amount of the payment.
   * @deprecated Use `amount` instead.
   */
  amountV2: MoneyV2Shopify;
  /** The billing address for the payment. */
  billingAddress?: Maybe<MailingAddressShopify>;
  /** The checkout to which the payment belongs. */
  checkout: CheckoutShopify;
  /** The credit card used for the payment in the case of direct payments. */
  creditCard?: Maybe<CreditCardShopify>;
  /** A message describing a processing error during asynchronous processing. */
  errorMessage?: Maybe<Scalars['String']>;
  /** A globally-unique identifier. */
  id: Scalars['ID'];
  /**
   * A client-side generated token to identify a payment and perform idempotent operations.
   * For more information, refer to
   * [Idempotent requests](https://shopify.dev/api/usage/idempotent-requests).
   *
   */
  idempotencyKey?: Maybe<Scalars['String']>;
  /** The URL where the customer needs to be redirected so they can complete the 3D Secure payment flow. */
  nextActionUrl?: Maybe<Scalars['URL']>;
  /** Whether the payment is still processing asynchronously. */
  ready: Scalars['Boolean'];
  /** A flag to indicate if the payment is to be done in test mode for gateways that support it. */
  test: Scalars['Boolean'];
  /** The actual transaction recorded by Shopify after having processed the payment with the gateway. */
  transaction?: Maybe<TransactionShopify>;
};

/** Settings related to payments. */
export type PaymentSettingsShopify = {
  __typename?: 'PaymentSettings';
  /** List of the card brands which the shop accepts. */
  acceptedCardBrands: Array<CardBrandShopify>;
  /** The url pointing to the endpoint to vault credit cards. */
  cardVaultUrl: Scalars['URL'];
  /** The country where the shop is located. */
  countryCode: CountryCodeShopify;
  /** The three-letter code for the shop's primary currency. */
  currencyCode: CurrencyCodeShopify;
  /** A list of enabled currencies (ISO 4217 format) that the shop accepts. Merchants can enable currencies from their Shopify Payments settings in the Shopify admin. */
  enabledPresentmentCurrencies: Array<CurrencyCodeShopify>;
  /** The shop’s Shopify Payments account id. */
  shopifyPaymentsAccountId?: Maybe<Scalars['String']>;
  /** List of the digital wallets which the shop supports. */
  supportedDigitalWallets: Array<DigitalWalletShopify>;
};

/** The valid values for the types of payment token. */
export enum PaymentTokenTypeShopify {
  /** Apple Pay token type. */
  ApplePayShopify = 'APPLE_PAY',
  /** Google Pay token type. */
  GooglePayShopify = 'GOOGLE_PAY',
  /** Shopify Pay token type. */
  ShopifyPayShopify = 'SHOPIFY_PAY',
  /** Stripe token type. */
  StripeVaultTokenShopify = 'STRIPE_VAULT_TOKEN',
  /** Vault payment token type. */
  VaultShopify = 'VAULT'
}

/** A filter used to view a subset of products in a collection matching a specific price range. */
export type PriceRangeFilterShopify = {
  /** The maximum price in the range. Empty indicates no max price. */
  max?: InputMaybe<Scalars['Float']>;
  /** The minimum price in the range. Defaults to zero. */
  min?: InputMaybe<Scalars['Float']>;
};

/** The value of the percentage pricing object. */
export type PricingPercentageValueShopify = {
  __typename?: 'PricingPercentageValue';
  /** The percentage value of the object. */
  percentage: Scalars['Float'];
};

/** The price value (fixed or percentage) for a discount application. */
export type PricingValueShopify = MoneyV2Shopify | PricingPercentageValueShopify;

/**
 * A product represents an individual item for sale in a Shopify store. Products are often physical, but they don't have to be.
 * For example, a digital download (such as a movie, music or ebook file) also qualifies as a product, as do services (such as equipment rental, work for hire, customization of another product or an extended warranty).
 */
export type ProductShopify = HasMetafieldsShopify & NodeShopify & OnlineStorePublishableShopify & {
  __typename?: 'Product';
  /** Indicates if at least one product variant is available for sale. */
  availableForSale: Scalars['Boolean'];
  /** List of collections a product belongs to. */
  collections: CollectionConnectionShopify;
  /** The compare at price of the product across all variants. */
  compareAtPriceRange: ProductPriceRangeShopify;
  /** The date and time when the product was created. */
  createdAt: Scalars['DateTime'];
  /** Stripped description of the product, single line with HTML tags removed. */
  description: Scalars['String'];
  /** The description of the product, complete with HTML formatting. */
  descriptionHtml: Scalars['HTML'];
  /**
   * The featured image for the product.
   *
   * This field is functionally equivalent to `images(first: 1)`.
   *
   */
  featuredImage?: Maybe<ImageShopify>;
  /**
   * A human-friendly unique string for the Product automatically generated from its title.
   * They are used by the Liquid templating language to refer to objects.
   *
   */
  handle: Scalars['String'];
  /** A globally-unique identifier. */
  id: Scalars['ID'];
  /** List of images associated with the product. */
  images: ImageConnectionShopify;
  /** Whether the product is a gift card. */
  isGiftCard: Scalars['Boolean'];
  /** The media associated with the product. */
  media: MediaConnectionShopify;
  /** Returns a metafield found by namespace and key. */
  metafield?: Maybe<MetafieldShopify>;
  /**
   * The metafields associated with the resource matching the supplied list of namespaces and keys.
   *
   */
  metafields: Array<Maybe<MetafieldShopify>>;
  /** The URL used for viewing the resource on the shop's Online Store. Returns `null` if the resource is currently not published to the Online Store sales channel. */
  onlineStoreUrl?: Maybe<Scalars['URL']>;
  /** List of product options. */
  options: Array<ProductOptionShopify>;
  /** The price range. */
  priceRange: ProductPriceRangeShopify;
  /** A categorization that a product can be tagged with, commonly used for filtering and searching. */
  productType: Scalars['String'];
  /** The date and time when the product was published to the channel. */
  publishedAt: Scalars['DateTime'];
  /** Whether the product can only be purchased with a selling plan. */
  requiresSellingPlan: Scalars['Boolean'];
  /** A list of a product's available selling plan groups. A selling plan group represents a selling method. For example, 'Subscribe and save' is a selling method where customers pay for goods or services per delivery. A selling plan group contains individual selling plans. */
  sellingPlanGroups: SellingPlanGroupConnectionShopify;
  /** The product's SEO information. */
  seo: SeoShopify;
  /**
   * A comma separated list of tags that have been added to the product.
   * Additional access scope required for private apps: unauthenticated_read_product_tags.
   *
   */
  tags: Array<Scalars['String']>;
  /** The product’s title. */
  title: Scalars['String'];
  /** The total quantity of inventory in stock for this Product. */
  totalInventory?: Maybe<Scalars['Int']>;
  /**
   * The date and time when the product was last modified.
   * A product's `updatedAt` value can change for different reasons. For example, if an order
   * is placed for a product that has inventory tracking set up, then the inventory adjustment
   * is counted as an update.
   *
   */
  updatedAt: Scalars['DateTime'];
  /**
   * Find a product’s variant based on its selected options.
   * This is useful for converting a user’s selection of product options into a single matching variant.
   * If there is not a variant for the selected options, `null` will be returned.
   *
   */
  variantBySelectedOptions?: Maybe<ProductVariantShopify>;
  /** List of the product’s variants. */
  variants: ProductVariantConnectionShopify;
  /** The product’s vendor name. */
  vendor: Scalars['String'];
};


/**
 * A product represents an individual item for sale in a Shopify store. Products are often physical, but they don't have to be.
 * For example, a digital download (such as a movie, music or ebook file) also qualifies as a product, as do services (such as equipment rental, work for hire, customization of another product or an extended warranty).
 */
export type ProductCollectionsArgsShopify = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  reverse?: InputMaybe<Scalars['Boolean']>;
};


/**
 * A product represents an individual item for sale in a Shopify store. Products are often physical, but they don't have to be.
 * For example, a digital download (such as a movie, music or ebook file) also qualifies as a product, as do services (such as equipment rental, work for hire, customization of another product or an extended warranty).
 */
export type ProductDescriptionArgsShopify = {
  truncateAt?: InputMaybe<Scalars['Int']>;
};


/**
 * A product represents an individual item for sale in a Shopify store. Products are often physical, but they don't have to be.
 * For example, a digital download (such as a movie, music or ebook file) also qualifies as a product, as do services (such as equipment rental, work for hire, customization of another product or an extended warranty).
 */
export type ProductImagesArgsShopify = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  reverse?: InputMaybe<Scalars['Boolean']>;
  sortKey?: InputMaybe<ProductImageSortKeysShopify>;
};


/**
 * A product represents an individual item for sale in a Shopify store. Products are often physical, but they don't have to be.
 * For example, a digital download (such as a movie, music or ebook file) also qualifies as a product, as do services (such as equipment rental, work for hire, customization of another product or an extended warranty).
 */
export type ProductMediaArgsShopify = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  reverse?: InputMaybe<Scalars['Boolean']>;
  sortKey?: InputMaybe<ProductMediaSortKeysShopify>;
};


/**
 * A product represents an individual item for sale in a Shopify store. Products are often physical, but they don't have to be.
 * For example, a digital download (such as a movie, music or ebook file) also qualifies as a product, as do services (such as equipment rental, work for hire, customization of another product or an extended warranty).
 */
export type ProductMetafieldArgsShopify = {
  key: Scalars['String'];
  namespace: Scalars['String'];
};


/**
 * A product represents an individual item for sale in a Shopify store. Products are often physical, but they don't have to be.
 * For example, a digital download (such as a movie, music or ebook file) also qualifies as a product, as do services (such as equipment rental, work for hire, customization of another product or an extended warranty).
 */
export type ProductMetafieldsArgsShopify = {
  identifiers: Array<HasMetafieldsIdentifierShopify>;
};


/**
 * A product represents an individual item for sale in a Shopify store. Products are often physical, but they don't have to be.
 * For example, a digital download (such as a movie, music or ebook file) also qualifies as a product, as do services (such as equipment rental, work for hire, customization of another product or an extended warranty).
 */
export type ProductOptionsArgsShopify = {
  first?: InputMaybe<Scalars['Int']>;
};


/**
 * A product represents an individual item for sale in a Shopify store. Products are often physical, but they don't have to be.
 * For example, a digital download (such as a movie, music or ebook file) also qualifies as a product, as do services (such as equipment rental, work for hire, customization of another product or an extended warranty).
 */
export type ProductSellingPlanGroupsArgsShopify = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  reverse?: InputMaybe<Scalars['Boolean']>;
};


/**
 * A product represents an individual item for sale in a Shopify store. Products are often physical, but they don't have to be.
 * For example, a digital download (such as a movie, music or ebook file) also qualifies as a product, as do services (such as equipment rental, work for hire, customization of another product or an extended warranty).
 */
export type ProductVariantBySelectedOptionsArgsShopify = {
  selectedOptions: Array<SelectedOptionInputShopify>;
};


/**
 * A product represents an individual item for sale in a Shopify store. Products are often physical, but they don't have to be.
 * For example, a digital download (such as a movie, music or ebook file) also qualifies as a product, as do services (such as equipment rental, work for hire, customization of another product or an extended warranty).
 */
export type ProductVariantsArgsShopify = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  reverse?: InputMaybe<Scalars['Boolean']>;
  sortKey?: InputMaybe<ProductVariantSortKeysShopify>;
};

/** The set of valid sort keys for the ProductCollection query. */
export enum ProductCollectionSortKeysShopify {
  /** Sort by the `best-selling` value. */
  BestSellingShopify = 'BEST_SELLING',
  /** Sort by the `collection-default` value. */
  CollectionDefaultShopify = 'COLLECTION_DEFAULT',
  /** Sort by the `created` value. */
  CreatedShopify = 'CREATED',
  /** Sort by the `id` value. */
  IdShopify = 'ID',
  /** Sort by the `manual` value. */
  ManualShopify = 'MANUAL',
  /** Sort by the `price` value. */
  PriceShopify = 'PRICE',
  /**
   * Sort by relevance to the search terms when the `query` parameter is specified on the connection.
   * Don't use this sort key when no search query is specified.
   *
   */
  RelevanceShopify = 'RELEVANCE',
  /** Sort by the `title` value. */
  TitleShopify = 'TITLE'
}

/**
 * An auto-generated type for paginating through multiple Products.
 *
 */
export type ProductConnectionShopify = {
  __typename?: 'ProductConnection';
  /** A list of edges. */
  edges: Array<ProductEdgeShopify>;
  /** A list of available filters. */
  filters: Array<FilterShopify>;
  /** A list of the nodes contained in ProductEdge. */
  nodes: Array<ProductShopify>;
  /** Information to aid in pagination. */
  pageInfo: PageInfoShopify;
};

/**
 * An auto-generated type which holds one Product and a cursor during pagination.
 *
 */
export type ProductEdgeShopify = {
  __typename?: 'ProductEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of ProductEdge. */
  node: ProductShopify;
};

/** A filter used to view a subset of products in a collection. */
export type ProductFilterShopify = {
  /** Filter on if the product is available for sale. */
  available?: InputMaybe<Scalars['Boolean']>;
  /** A range of prices to filter with-in. */
  price?: InputMaybe<PriceRangeFilterShopify>;
  /** A product metafield to filter on. */
  productMetafield?: InputMaybe<MetafieldFilterShopify>;
  /** The product type to filter on. */
  productType?: InputMaybe<Scalars['String']>;
  /** The product vendor to filter on. */
  productVendor?: InputMaybe<Scalars['String']>;
  /** A product tag to filter on. */
  tag?: InputMaybe<Scalars['String']>;
  /** A variant metafield to filter on. */
  variantMetafield?: InputMaybe<MetafieldFilterShopify>;
  /** A variant option to filter on. */
  variantOption?: InputMaybe<VariantOptionFilterShopify>;
};

/** The set of valid sort keys for the ProductImage query. */
export enum ProductImageSortKeysShopify {
  /** Sort by the `created_at` value. */
  CreatedAtShopify = 'CREATED_AT',
  /** Sort by the `id` value. */
  IdShopify = 'ID',
  /** Sort by the `position` value. */
  PositionShopify = 'POSITION',
  /**
   * Sort by relevance to the search terms when the `query` parameter is specified on the connection.
   * Don't use this sort key when no search query is specified.
   *
   */
  RelevanceShopify = 'RELEVANCE'
}

/** The set of valid sort keys for the ProductMedia query. */
export enum ProductMediaSortKeysShopify {
  /** Sort by the `id` value. */
  IdShopify = 'ID',
  /** Sort by the `position` value. */
  PositionShopify = 'POSITION',
  /**
   * Sort by relevance to the search terms when the `query` parameter is specified on the connection.
   * Don't use this sort key when no search query is specified.
   *
   */
  RelevanceShopify = 'RELEVANCE'
}

/**
 * Product property names like "Size", "Color", and "Material" that the customers can select.
 * Variants are selected based on permutations of these options.
 * 255 characters limit each.
 *
 */
export type ProductOptionShopify = NodeShopify & {
  __typename?: 'ProductOption';
  /** A globally-unique identifier. */
  id: Scalars['ID'];
  /** The product option’s name. */
  name: Scalars['String'];
  /** The corresponding value to the product option name. */
  values: Array<Scalars['String']>;
};

/** The price range of the product. */
export type ProductPriceRangeShopify = {
  __typename?: 'ProductPriceRange';
  /** The highest variant's price. */
  maxVariantPrice: MoneyV2Shopify;
  /** The lowest variant's price. */
  minVariantPrice: MoneyV2Shopify;
};

/** The set of valid sort keys for the Product query. */
export enum ProductSortKeysShopify {
  /** Sort by the `best_selling` value. */
  BestSellingShopify = 'BEST_SELLING',
  /** Sort by the `created_at` value. */
  CreatedAtShopify = 'CREATED_AT',
  /** Sort by the `id` value. */
  IdShopify = 'ID',
  /** Sort by the `price` value. */
  PriceShopify = 'PRICE',
  /** Sort by the `product_type` value. */
  ProductTypeShopify = 'PRODUCT_TYPE',
  /**
   * Sort by relevance to the search terms when the `query` parameter is specified on the connection.
   * Don't use this sort key when no search query is specified.
   *
   */
  RelevanceShopify = 'RELEVANCE',
  /** Sort by the `title` value. */
  TitleShopify = 'TITLE',
  /** Sort by the `updated_at` value. */
  UpdatedAtShopify = 'UPDATED_AT',
  /** Sort by the `vendor` value. */
  VendorShopify = 'VENDOR'
}

/** A product variant represents a different version of a product, such as differing sizes or differing colors. */
export type ProductVariantShopify = HasMetafieldsShopify & NodeShopify & {
  __typename?: 'ProductVariant';
  /** Indicates if the product variant is available for sale. */
  availableForSale: Scalars['Boolean'];
  /** The barcode (for example, ISBN, UPC, or GTIN) associated with the variant. */
  barcode?: Maybe<Scalars['String']>;
  /** The compare at price of the variant. This can be used to mark a variant as on sale, when `compareAtPrice` is higher than `price`. */
  compareAtPrice?: Maybe<MoneyV2Shopify>;
  /**
   * The compare at price of the variant. This can be used to mark a variant as on sale, when `compareAtPriceV2` is higher than `priceV2`.
   * @deprecated Use `compareAtPrice` instead.
   */
  compareAtPriceV2?: Maybe<MoneyV2Shopify>;
  /** Whether a product is out of stock but still available for purchase (used for backorders). */
  currentlyNotInStock: Scalars['Boolean'];
  /** A globally-unique identifier. */
  id: Scalars['ID'];
  /**
   * Image associated with the product variant. This field falls back to the product image if no image is available.
   *
   */
  image?: Maybe<ImageShopify>;
  /** Returns a metafield found by namespace and key. */
  metafield?: Maybe<MetafieldShopify>;
  /**
   * The metafields associated with the resource matching the supplied list of namespaces and keys.
   *
   */
  metafields: Array<Maybe<MetafieldShopify>>;
  /** The product variant’s price. */
  price: MoneyV2Shopify;
  /**
   * The product variant’s price.
   * @deprecated Use `price` instead.
   */
  priceV2: MoneyV2Shopify;
  /** The product object that the product variant belongs to. */
  product: ProductShopify;
  /** The total sellable quantity of the variant for online sales channels. */
  quantityAvailable?: Maybe<Scalars['Int']>;
  /** Whether a customer needs to provide a shipping address when placing an order for the product variant. */
  requiresShipping: Scalars['Boolean'];
  /** List of product options applied to the variant. */
  selectedOptions: Array<SelectedOptionShopify>;
  /** Represents an association between a variant and a selling plan. Selling plan allocations describe which selling plans are available for each variant, and what their impact is on pricing. */
  sellingPlanAllocations: SellingPlanAllocationConnectionShopify;
  /** The SKU (stock keeping unit) associated with the variant. */
  sku?: Maybe<Scalars['String']>;
  /** The in-store pickup availability of this variant by location. */
  storeAvailability: StoreAvailabilityConnectionShopify;
  /** The product variant’s title. */
  title: Scalars['String'];
  /** The unit price value for the variant based on the variant's measurement. */
  unitPrice?: Maybe<MoneyV2Shopify>;
  /** The unit price measurement for the variant. */
  unitPriceMeasurement?: Maybe<UnitPriceMeasurementShopify>;
  /** The weight of the product variant in the unit system specified with `weight_unit`. */
  weight?: Maybe<Scalars['Float']>;
  /** Unit of measurement for weight. */
  weightUnit: WeightUnitShopify;
};


/** A product variant represents a different version of a product, such as differing sizes or differing colors. */
export type ProductVariantMetafieldArgsShopify = {
  key: Scalars['String'];
  namespace: Scalars['String'];
};


/** A product variant represents a different version of a product, such as differing sizes or differing colors. */
export type ProductVariantMetafieldsArgsShopify = {
  identifiers: Array<HasMetafieldsIdentifierShopify>;
};


/** A product variant represents a different version of a product, such as differing sizes or differing colors. */
export type ProductVariantSellingPlanAllocationsArgsShopify = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  reverse?: InputMaybe<Scalars['Boolean']>;
};


/** A product variant represents a different version of a product, such as differing sizes or differing colors. */
export type ProductVariantStoreAvailabilityArgsShopify = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  near?: InputMaybe<GeoCoordinateInputShopify>;
  reverse?: InputMaybe<Scalars['Boolean']>;
};

/**
 * An auto-generated type for paginating through multiple ProductVariants.
 *
 */
export type ProductVariantConnectionShopify = {
  __typename?: 'ProductVariantConnection';
  /** A list of edges. */
  edges: Array<ProductVariantEdgeShopify>;
  /** A list of the nodes contained in ProductVariantEdge. */
  nodes: Array<ProductVariantShopify>;
  /** Information to aid in pagination. */
  pageInfo: PageInfoShopify;
};

/**
 * An auto-generated type which holds one ProductVariant and a cursor during pagination.
 *
 */
export type ProductVariantEdgeShopify = {
  __typename?: 'ProductVariantEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of ProductVariantEdge. */
  node: ProductVariantShopify;
};

/** The set of valid sort keys for the ProductVariant query. */
export enum ProductVariantSortKeysShopify {
  /** Sort by the `id` value. */
  IdShopify = 'ID',
  /** Sort by the `position` value. */
  PositionShopify = 'POSITION',
  /**
   * Sort by relevance to the search terms when the `query` parameter is specified on the connection.
   * Don't use this sort key when no search query is specified.
   *
   */
  RelevanceShopify = 'RELEVANCE',
  /** Sort by the `sku` value. */
  SkuShopify = 'SKU',
  /** Sort by the `title` value. */
  TitleShopify = 'TITLE'
}

/** The schema’s entry-point for queries. This acts as the public, top-level API from which all queries must start. */
export type QueryRootShopify = {
  __typename?: 'QueryRoot';
  /** List of the shop's articles. */
  articles: ArticleConnectionShopify;
  /** Fetch a specific `Blog` by one of its unique attributes. */
  blog?: Maybe<BlogShopify>;
  /**
   * Find a blog by its handle.
   * @deprecated Use `blog` instead.
   */
  blogByHandle?: Maybe<BlogShopify>;
  /** List of the shop's blogs. */
  blogs: BlogConnectionShopify;
  /**
   * Retrieve a cart by its ID. For more information, refer to
   * [Manage a cart with the Storefront API](https://shopify.dev/custom-storefronts/cart/manage).
   *
   */
  cart?: Maybe<CartShopify>;
  /** Fetch a specific `Collection` by one of its unique attributes. */
  collection?: Maybe<CollectionShopify>;
  /**
   * Find a collection by its handle.
   * @deprecated Use `collection` instead.
   */
  collectionByHandle?: Maybe<CollectionShopify>;
  /** List of the shop’s collections. */
  collections: CollectionConnectionShopify;
  /**
   * The customer associated with the given access token. Tokens are obtained by using the
   * [`customerAccessTokenCreate` mutation](https://shopify.dev/docs/api/storefront/latest/mutations/customerAccessTokenCreate).
   *
   */
  customer?: Maybe<CustomerShopify>;
  /** Returns the localized experiences configured for the shop. */
  localization: LocalizationShopify;
  /**
   * List of the shop's locations that support in-store pickup.
   *
   * When sorting by distance, you must specify a location via the `near` argument.
   *
   */
  locations: LocationConnectionShopify;
  /**
   * Retrieve a [navigation menu](https://help.shopify.com/manual/online-store/menus-and-links) by its handle.
   *
   */
  menu?: Maybe<MenuShopify>;
  /** Fetch a specific Metaobject by one of its unique identifiers. */
  metaobject?: Maybe<MetaobjectShopify>;
  /** All active metaobjects for the shop. */
  metaobjects: MetaobjectConnectionShopify;
  /** Returns a specific node by ID. */
  node?: Maybe<NodeShopify>;
  /** Returns the list of nodes with the given IDs. */
  nodes: Array<Maybe<NodeShopify>>;
  /** Fetch a specific `Page` by one of its unique attributes. */
  page?: Maybe<PageShopify>;
  /**
   * Find a page by its handle.
   * @deprecated Use `page` instead.
   */
  pageByHandle?: Maybe<PageShopify>;
  /** List of the shop's pages. */
  pages: PageConnectionShopify;
  /** Fetch a specific `Product` by one of its unique attributes. */
  product?: Maybe<ProductShopify>;
  /**
   * Find a product by its handle.
   * @deprecated Use `product` instead.
   */
  productByHandle?: Maybe<ProductShopify>;
  /**
   * Find recommended products related to a given `product_id`.
   * To learn more about how recommendations are generated, see
   * [*Showing product recommendations on product pages*](https://help.shopify.com/themes/development/recommended-products).
   *
   */
  productRecommendations?: Maybe<Array<ProductShopify>>;
  /**
   * Tags added to products.
   * Additional access scope required: unauthenticated_read_product_tags.
   *
   */
  productTags: StringConnectionShopify;
  /** List of product types for the shop's products that are published to your app. */
  productTypes: StringConnectionShopify;
  /** List of the shop’s products. */
  products: ProductConnectionShopify;
  /** The list of public Storefront API versions, including supported, release candidate and unstable versions. */
  publicApiVersions: Array<ApiVersionShopify>;
  /** The shop associated with the storefront access token. */
  shop: ShopShopify;
  /** A list of redirects for a shop. */
  urlRedirects: UrlRedirectConnectionShopify;
};


/** The schema’s entry-point for queries. This acts as the public, top-level API from which all queries must start. */
export type QueryRootArticlesArgsShopify = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  query?: InputMaybe<Scalars['String']>;
  reverse?: InputMaybe<Scalars['Boolean']>;
  sortKey?: InputMaybe<ArticleSortKeysShopify>;
};


/** The schema’s entry-point for queries. This acts as the public, top-level API from which all queries must start. */
export type QueryRootBlogArgsShopify = {
  handle?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
};


/** The schema’s entry-point for queries. This acts as the public, top-level API from which all queries must start. */
export type QueryRootBlogByHandleArgsShopify = {
  handle: Scalars['String'];
};


/** The schema’s entry-point for queries. This acts as the public, top-level API from which all queries must start. */
export type QueryRootBlogsArgsShopify = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  query?: InputMaybe<Scalars['String']>;
  reverse?: InputMaybe<Scalars['Boolean']>;
  sortKey?: InputMaybe<BlogSortKeysShopify>;
};


/** The schema’s entry-point for queries. This acts as the public, top-level API from which all queries must start. */
export type QueryRootCartArgsShopify = {
  id: Scalars['ID'];
};


/** The schema’s entry-point for queries. This acts as the public, top-level API from which all queries must start. */
export type QueryRootCollectionArgsShopify = {
  handle?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
};


/** The schema’s entry-point for queries. This acts as the public, top-level API from which all queries must start. */
export type QueryRootCollectionByHandleArgsShopify = {
  handle: Scalars['String'];
};


/** The schema’s entry-point for queries. This acts as the public, top-level API from which all queries must start. */
export type QueryRootCollectionsArgsShopify = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  query?: InputMaybe<Scalars['String']>;
  reverse?: InputMaybe<Scalars['Boolean']>;
  sortKey?: InputMaybe<CollectionSortKeysShopify>;
};


/** The schema’s entry-point for queries. This acts as the public, top-level API from which all queries must start. */
export type QueryRootCustomerArgsShopify = {
  customerAccessToken: Scalars['String'];
};


/** The schema’s entry-point for queries. This acts as the public, top-level API from which all queries must start. */
export type QueryRootLocationsArgsShopify = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  near?: InputMaybe<GeoCoordinateInputShopify>;
  reverse?: InputMaybe<Scalars['Boolean']>;
  sortKey?: InputMaybe<LocationSortKeysShopify>;
};


/** The schema’s entry-point for queries. This acts as the public, top-level API from which all queries must start. */
export type QueryRootMenuArgsShopify = {
  handle: Scalars['String'];
};


/** The schema’s entry-point for queries. This acts as the public, top-level API from which all queries must start. */
export type QueryRootMetaobjectArgsShopify = {
  handle?: InputMaybe<MetaobjectHandleInputShopify>;
  id?: InputMaybe<Scalars['ID']>;
};


/** The schema’s entry-point for queries. This acts as the public, top-level API from which all queries must start. */
export type QueryRootMetaobjectsArgsShopify = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  reverse?: InputMaybe<Scalars['Boolean']>;
  sortKey?: InputMaybe<Scalars['String']>;
  type: Scalars['String'];
};


/** The schema’s entry-point for queries. This acts as the public, top-level API from which all queries must start. */
export type QueryRootNodeArgsShopify = {
  id: Scalars['ID'];
};


/** The schema’s entry-point for queries. This acts as the public, top-level API from which all queries must start. */
export type QueryRootNodesArgsShopify = {
  ids: Array<Scalars['ID']>;
};


/** The schema’s entry-point for queries. This acts as the public, top-level API from which all queries must start. */
export type QueryRootPageArgsShopify = {
  handle?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
};


/** The schema’s entry-point for queries. This acts as the public, top-level API from which all queries must start. */
export type QueryRootPageByHandleArgsShopify = {
  handle: Scalars['String'];
};


/** The schema’s entry-point for queries. This acts as the public, top-level API from which all queries must start. */
export type QueryRootPagesArgsShopify = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  query?: InputMaybe<Scalars['String']>;
  reverse?: InputMaybe<Scalars['Boolean']>;
  sortKey?: InputMaybe<PageSortKeysShopify>;
};


/** The schema’s entry-point for queries. This acts as the public, top-level API from which all queries must start. */
export type QueryRootProductArgsShopify = {
  handle?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
};


/** The schema’s entry-point for queries. This acts as the public, top-level API from which all queries must start. */
export type QueryRootProductByHandleArgsShopify = {
  handle: Scalars['String'];
};


/** The schema’s entry-point for queries. This acts as the public, top-level API from which all queries must start. */
export type QueryRootProductRecommendationsArgsShopify = {
  productId: Scalars['ID'];
};


/** The schema’s entry-point for queries. This acts as the public, top-level API from which all queries must start. */
export type QueryRootProductTagsArgsShopify = {
  first: Scalars['Int'];
};


/** The schema’s entry-point for queries. This acts as the public, top-level API from which all queries must start. */
export type QueryRootProductTypesArgsShopify = {
  first: Scalars['Int'];
};


/** The schema’s entry-point for queries. This acts as the public, top-level API from which all queries must start. */
export type QueryRootProductsArgsShopify = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  query?: InputMaybe<Scalars['String']>;
  reverse?: InputMaybe<Scalars['Boolean']>;
  sortKey?: InputMaybe<ProductSortKeysShopify>;
};


/** The schema’s entry-point for queries. This acts as the public, top-level API from which all queries must start. */
export type QueryRootUrlRedirectsArgsShopify = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  query?: InputMaybe<Scalars['String']>;
  reverse?: InputMaybe<Scalars['Boolean']>;
};

/** SEO information. */
export type SeoShopify = {
  __typename?: 'SEO';
  /** The meta description. */
  description?: Maybe<Scalars['String']>;
  /** The SEO title. */
  title?: Maybe<Scalars['String']>;
};

/**
 * Script discount applications capture the intentions of a discount that
 * was created by a Shopify Script.
 *
 */
export type ScriptDiscountApplicationShopify = DiscountApplicationShopify & {
  __typename?: 'ScriptDiscountApplication';
  /** The method by which the discount's value is allocated to its entitled items. */
  allocationMethod: DiscountApplicationAllocationMethodShopify;
  /** Which lines of targetType that the discount is allocated over. */
  targetSelection: DiscountApplicationTargetSelectionShopify;
  /** The type of line that the discount is applicable towards. */
  targetType: DiscountApplicationTargetTypeShopify;
  /** The title of the application as defined by the Script. */
  title: Scalars['String'];
  /** The value of the discount application. */
  value: PricingValueShopify;
};

/**
 * Properties used by customers to select a product variant.
 * Products can have multiple options, like different sizes or colors.
 *
 */
export type SelectedOptionShopify = {
  __typename?: 'SelectedOption';
  /** The product option’s name. */
  name: Scalars['String'];
  /** The product option’s value. */
  value: Scalars['String'];
};

/** Specifies the input fields required for a selected option. */
export type SelectedOptionInputShopify = {
  /** The product option’s name. */
  name: Scalars['String'];
  /** The product option’s value. */
  value: Scalars['String'];
};

/** Represents how products and variants can be sold and purchased. */
export type SellingPlanShopify = {
  __typename?: 'SellingPlan';
  /** The initial payment due for the purchase. */
  checkoutCharge: SellingPlanCheckoutChargeShopify;
  /** The description of the selling plan. */
  description?: Maybe<Scalars['String']>;
  /** A globally-unique identifier. */
  id: Scalars['ID'];
  /** The name of the selling plan. For example, '6 weeks of prepaid granola, delivered weekly'. */
  name: Scalars['String'];
  /** The selling plan options available in the drop-down list in the storefront. For example, 'Delivery every week' or 'Delivery every 2 weeks' specifies the delivery frequency options for the product. Individual selling plans contribute their options to the associated selling plan group. For example, a selling plan group might have an option called `option1: Delivery every`. One selling plan in that group could contribute `option1: 2 weeks` with the pricing for that option, and another selling plan could contribute `option1: 4 weeks`, with different pricing. */
  options: Array<SellingPlanOptionShopify>;
  /** The price adjustments that a selling plan makes when a variant is purchased with a selling plan. */
  priceAdjustments: Array<SellingPlanPriceAdjustmentShopify>;
  /** Whether purchasing the selling plan will result in multiple deliveries. */
  recurringDeliveries: Scalars['Boolean'];
};

/** Represents an association between a variant and a selling plan. Selling plan allocations describe the options offered for each variant, and the price of the variant when purchased with a selling plan. */
export type SellingPlanAllocationShopify = {
  __typename?: 'SellingPlanAllocation';
  /** The checkout charge amount due for the purchase. */
  checkoutChargeAmount: MoneyV2Shopify;
  /** A list of price adjustments, with a maximum of two. When there are two, the first price adjustment goes into effect at the time of purchase, while the second one starts after a certain number of orders. A price adjustment represents how a selling plan affects pricing when a variant is purchased with a selling plan. Prices display in the customer's currency if the shop is configured for it. */
  priceAdjustments: Array<SellingPlanAllocationPriceAdjustmentShopify>;
  /** The remaining balance charge amount due for the purchase. */
  remainingBalanceChargeAmount: MoneyV2Shopify;
  /** A representation of how products and variants can be sold and purchased. For example, an individual selling plan could be '6 weeks of prepaid granola, delivered weekly'. */
  sellingPlan: SellingPlanShopify;
};

/**
 * An auto-generated type for paginating through multiple SellingPlanAllocations.
 *
 */
export type SellingPlanAllocationConnectionShopify = {
  __typename?: 'SellingPlanAllocationConnection';
  /** A list of edges. */
  edges: Array<SellingPlanAllocationEdgeShopify>;
  /** A list of the nodes contained in SellingPlanAllocationEdge. */
  nodes: Array<SellingPlanAllocationShopify>;
  /** Information to aid in pagination. */
  pageInfo: PageInfoShopify;
};

/**
 * An auto-generated type which holds one SellingPlanAllocation and a cursor during pagination.
 *
 */
export type SellingPlanAllocationEdgeShopify = {
  __typename?: 'SellingPlanAllocationEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of SellingPlanAllocationEdge. */
  node: SellingPlanAllocationShopify;
};

/** The resulting prices for variants when they're purchased with a specific selling plan. */
export type SellingPlanAllocationPriceAdjustmentShopify = {
  __typename?: 'SellingPlanAllocationPriceAdjustment';
  /** The price of the variant when it's purchased without a selling plan for the same number of deliveries. For example, if a customer purchases 6 deliveries of $10.00 granola separately, then the price is 6 x $10.00 = $60.00. */
  compareAtPrice: MoneyV2Shopify;
  /** The effective price for a single delivery. For example, for a prepaid subscription plan that includes 6 deliveries at the price of $48.00, the per delivery price is $8.00. */
  perDeliveryPrice: MoneyV2Shopify;
  /** The price of the variant when it's purchased with a selling plan For example, for a prepaid subscription plan that includes 6 deliveries of $10.00 granola, where the customer gets 20% off, the price is 6 x $10.00 x 0.80 = $48.00. */
  price: MoneyV2Shopify;
  /** The resulting price per unit for the variant associated with the selling plan. If the variant isn't sold by quantity or measurement, then this field returns `null`. */
  unitPrice?: Maybe<MoneyV2Shopify>;
};

/** The initial payment due for the purchase. */
export type SellingPlanCheckoutChargeShopify = {
  __typename?: 'SellingPlanCheckoutCharge';
  /** The charge type for the checkout charge. */
  type: SellingPlanCheckoutChargeTypeShopify;
  /** The charge value for the checkout charge. */
  value: SellingPlanCheckoutChargeValueShopify;
};

/** The percentage value of the price used for checkout charge. */
export type SellingPlanCheckoutChargePercentageValueShopify = {
  __typename?: 'SellingPlanCheckoutChargePercentageValue';
  /** The percentage value of the price used for checkout charge. */
  percentage: Scalars['Float'];
};

/** The checkout charge when the full amount isn't charged at checkout. */
export enum SellingPlanCheckoutChargeTypeShopify {
  /** The checkout charge is a percentage of the product or variant price. */
  PercentageShopify = 'PERCENTAGE',
  /** The checkout charge is a fixed price amount. */
  PriceShopify = 'PRICE'
}

/** The portion of the price to be charged at checkout. */
export type SellingPlanCheckoutChargeValueShopify = MoneyV2Shopify | SellingPlanCheckoutChargePercentageValueShopify;

/**
 * An auto-generated type for paginating through multiple SellingPlans.
 *
 */
export type SellingPlanConnectionShopify = {
  __typename?: 'SellingPlanConnection';
  /** A list of edges. */
  edges: Array<SellingPlanEdgeShopify>;
  /** A list of the nodes contained in SellingPlanEdge. */
  nodes: Array<SellingPlanShopify>;
  /** Information to aid in pagination. */
  pageInfo: PageInfoShopify;
};

/**
 * An auto-generated type which holds one SellingPlan and a cursor during pagination.
 *
 */
export type SellingPlanEdgeShopify = {
  __typename?: 'SellingPlanEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of SellingPlanEdge. */
  node: SellingPlanShopify;
};

/** A fixed amount that's deducted from the original variant price. For example, $10.00 off. */
export type SellingPlanFixedAmountPriceAdjustmentShopify = {
  __typename?: 'SellingPlanFixedAmountPriceAdjustment';
  /** The money value of the price adjustment. */
  adjustmentAmount: MoneyV2Shopify;
};

/** A fixed price adjustment for a variant that's purchased with a selling plan. */
export type SellingPlanFixedPriceAdjustmentShopify = {
  __typename?: 'SellingPlanFixedPriceAdjustment';
  /** A new price of the variant when it's purchased with the selling plan. */
  price: MoneyV2Shopify;
};

/** Represents a selling method. For example, 'Subscribe and save' is a selling method where customers pay for goods or services per delivery. A selling plan group contains individual selling plans. */
export type SellingPlanGroupShopify = {
  __typename?: 'SellingPlanGroup';
  /** A display friendly name for the app that created the selling plan group. */
  appName?: Maybe<Scalars['String']>;
  /** The name of the selling plan group. */
  name: Scalars['String'];
  /** Represents the selling plan options available in the drop-down list in the storefront. For example, 'Delivery every week' or 'Delivery every 2 weeks' specifies the delivery frequency options for the product. */
  options: Array<SellingPlanGroupOptionShopify>;
  /** A list of selling plans in a selling plan group. A selling plan is a representation of how products and variants can be sold and purchased. For example, an individual selling plan could be '6 weeks of prepaid granola, delivered weekly'. */
  sellingPlans: SellingPlanConnectionShopify;
};


/** Represents a selling method. For example, 'Subscribe and save' is a selling method where customers pay for goods or services per delivery. A selling plan group contains individual selling plans. */
export type SellingPlanGroupSellingPlansArgsShopify = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  reverse?: InputMaybe<Scalars['Boolean']>;
};

/**
 * An auto-generated type for paginating through multiple SellingPlanGroups.
 *
 */
export type SellingPlanGroupConnectionShopify = {
  __typename?: 'SellingPlanGroupConnection';
  /** A list of edges. */
  edges: Array<SellingPlanGroupEdgeShopify>;
  /** A list of the nodes contained in SellingPlanGroupEdge. */
  nodes: Array<SellingPlanGroupShopify>;
  /** Information to aid in pagination. */
  pageInfo: PageInfoShopify;
};

/**
 * An auto-generated type which holds one SellingPlanGroup and a cursor during pagination.
 *
 */
export type SellingPlanGroupEdgeShopify = {
  __typename?: 'SellingPlanGroupEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of SellingPlanGroupEdge. */
  node: SellingPlanGroupShopify;
};

/**
 * Represents an option on a selling plan group that's available in the drop-down list in the storefront.
 *
 * Individual selling plans contribute their options to the associated selling plan group. For example, a selling plan group might have an option called `option1: Delivery every`. One selling plan in that group could contribute `option1: 2 weeks` with the pricing for that option, and another selling plan could contribute `option1: 4 weeks`, with different pricing.
 */
export type SellingPlanGroupOptionShopify = {
  __typename?: 'SellingPlanGroupOption';
  /** The name of the option. For example, 'Delivery every'. */
  name: Scalars['String'];
  /** The values for the options specified by the selling plans in the selling plan group. For example, '1 week', '2 weeks', '3 weeks'. */
  values: Array<Scalars['String']>;
};

/** An option provided by a Selling Plan. */
export type SellingPlanOptionShopify = {
  __typename?: 'SellingPlanOption';
  /** The name of the option (ie "Delivery every"). */
  name?: Maybe<Scalars['String']>;
  /** The value of the option (ie "Month"). */
  value?: Maybe<Scalars['String']>;
};

/** A percentage amount that's deducted from the original variant price. For example, 10% off. */
export type SellingPlanPercentagePriceAdjustmentShopify = {
  __typename?: 'SellingPlanPercentagePriceAdjustment';
  /** The percentage value of the price adjustment. */
  adjustmentPercentage: Scalars['Int'];
};

/** Represents by how much the price of a variant associated with a selling plan is adjusted. Each variant can have up to two price adjustments. If a variant has multiple price adjustments, then the first price adjustment applies when the variant is initially purchased. The second price adjustment applies after a certain number of orders (specified by the `orderCount` field) are made. If a selling plan doesn't have any price adjustments, then the unadjusted price of the variant is the effective price. */
export type SellingPlanPriceAdjustmentShopify = {
  __typename?: 'SellingPlanPriceAdjustment';
  /** The type of price adjustment. An adjustment value can have one of three types: percentage, amount off, or a new price. */
  adjustmentValue: SellingPlanPriceAdjustmentValueShopify;
  /** The number of orders that the price adjustment applies to. If the price adjustment always applies, then this field is `null`. */
  orderCount?: Maybe<Scalars['Int']>;
};

/** Represents by how much the price of a variant associated with a selling plan is adjusted. Each variant can have up to two price adjustments. */
export type SellingPlanPriceAdjustmentValueShopify = SellingPlanFixedAmountPriceAdjustmentShopify | SellingPlanFixedPriceAdjustmentShopify | SellingPlanPercentagePriceAdjustmentShopify;

/** A shipping rate to be applied to a checkout. */
export type ShippingRateShopify = {
  __typename?: 'ShippingRate';
  /** Human-readable unique identifier for this shipping rate. */
  handle: Scalars['String'];
  /** Price of this shipping rate. */
  price: MoneyV2Shopify;
  /**
   * Price of this shipping rate.
   * @deprecated Use `price` instead.
   */
  priceV2: MoneyV2Shopify;
  /** Title of this shipping rate. */
  title: Scalars['String'];
};

/** Shop represents a collection of the general settings and information about the shop. */
export type ShopShopify = HasMetafieldsShopify & NodeShopify & {
  __typename?: 'Shop';
  /** The shop's branding configuration. */
  brand?: Maybe<BrandShopify>;
  /** A description of the shop. */
  description?: Maybe<Scalars['String']>;
  /** A globally-unique identifier. */
  id: Scalars['ID'];
  /** Returns a metafield found by namespace and key. */
  metafield?: Maybe<MetafieldShopify>;
  /**
   * The metafields associated with the resource matching the supplied list of namespaces and keys.
   *
   */
  metafields: Array<Maybe<MetafieldShopify>>;
  /** A string representing the way currency is formatted when the currency isn’t specified. */
  moneyFormat: Scalars['String'];
  /** The shop’s name. */
  name: Scalars['String'];
  /** Settings related to payments. */
  paymentSettings: PaymentSettingsShopify;
  /** The primary domain of the shop’s Online Store. */
  primaryDomain: DomainShopify;
  /** The shop’s privacy policy. */
  privacyPolicy?: Maybe<ShopPolicyShopify>;
  /** The shop’s refund policy. */
  refundPolicy?: Maybe<ShopPolicyShopify>;
  /** The shop’s shipping policy. */
  shippingPolicy?: Maybe<ShopPolicyShopify>;
  /** Countries that the shop ships to. */
  shipsToCountries: Array<CountryCodeShopify>;
  /** The shop’s subscription policy. */
  subscriptionPolicy?: Maybe<ShopPolicyWithDefaultShopify>;
  /** The shop’s terms of service. */
  termsOfService?: Maybe<ShopPolicyShopify>;
};


/** Shop represents a collection of the general settings and information about the shop. */
export type ShopMetafieldArgsShopify = {
  key: Scalars['String'];
  namespace: Scalars['String'];
};


/** Shop represents a collection of the general settings and information about the shop. */
export type ShopMetafieldsArgsShopify = {
  identifiers: Array<HasMetafieldsIdentifierShopify>;
};

/** Policy that a merchant has configured for their store, such as their refund or privacy policy. */
export type ShopPolicyShopify = NodeShopify & {
  __typename?: 'ShopPolicy';
  /** Policy text, maximum size of 64kb. */
  body: Scalars['String'];
  /** Policy’s handle. */
  handle: Scalars['String'];
  /** A globally-unique identifier. */
  id: Scalars['ID'];
  /** Policy’s title. */
  title: Scalars['String'];
  /** Public URL to the policy. */
  url: Scalars['URL'];
};

/**
 * A policy for the store that comes with a default value, such as a subscription policy.
 * If the merchant hasn't configured a policy for their store, then the policy will return the default value.
 * Otherwise, the policy will return the merchant-configured value.
 *
 */
export type ShopPolicyWithDefaultShopify = {
  __typename?: 'ShopPolicyWithDefault';
  /** The text of the policy. Maximum size: 64KB. */
  body: Scalars['String'];
  /** The handle of the policy. */
  handle: Scalars['String'];
  /** The unique identifier of the policy. A default policy doesn't have an ID. */
  id?: Maybe<Scalars['ID']>;
  /** The title of the policy. */
  title: Scalars['String'];
  /** Public URL to the policy. */
  url: Scalars['URL'];
};

/**
 * The availability of a product variant at a particular location.
 * Local pick-up must be enabled in the  store's shipping settings, otherwise this will return an empty result.
 *
 */
export type StoreAvailabilityShopify = {
  __typename?: 'StoreAvailability';
  /** Whether the product variant is in-stock at this location. */
  available: Scalars['Boolean'];
  /** The location where this product variant is stocked at. */
  location: LocationShopify;
  /** Returns the estimated amount of time it takes for pickup to be ready (Example: Usually ready in 24 hours). */
  pickUpTime: Scalars['String'];
};

/**
 * An auto-generated type for paginating through multiple StoreAvailabilities.
 *
 */
export type StoreAvailabilityConnectionShopify = {
  __typename?: 'StoreAvailabilityConnection';
  /** A list of edges. */
  edges: Array<StoreAvailabilityEdgeShopify>;
  /** A list of the nodes contained in StoreAvailabilityEdge. */
  nodes: Array<StoreAvailabilityShopify>;
  /** Information to aid in pagination. */
  pageInfo: PageInfoShopify;
};

/**
 * An auto-generated type which holds one StoreAvailability and a cursor during pagination.
 *
 */
export type StoreAvailabilityEdgeShopify = {
  __typename?: 'StoreAvailabilityEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of StoreAvailabilityEdge. */
  node: StoreAvailabilityShopify;
};

/**
 * An auto-generated type for paginating through a list of Strings.
 *
 */
export type StringConnectionShopify = {
  __typename?: 'StringConnection';
  /** A list of edges. */
  edges: Array<StringEdgeShopify>;
  /** Information to aid in pagination. */
  pageInfo: PageInfoShopify;
};

/**
 * An auto-generated type which holds one String and a cursor during pagination.
 *
 */
export type StringEdgeShopify = {
  __typename?: 'StringEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of StringEdge. */
  node: Scalars['String'];
};

/**
 * Specifies the fields required to complete a checkout with
 * a tokenized payment.
 *
 */
export type TokenizedPaymentInputV3Shopify = {
  /** The billing address for the payment. */
  billingAddress: MailingAddressInputShopify;
  /** A unique client generated key used to avoid duplicate charges. When a duplicate payment is found, the original is returned instead of creating a new one. For more information, refer to [Idempotent requests](https://shopify.dev/api/usage/idempotent-requests). */
  idempotencyKey: Scalars['String'];
  /** Public Hash Key used for AndroidPay payments only. */
  identifier?: InputMaybe<Scalars['String']>;
  /** The amount and currency of the payment. */
  paymentAmount: MoneyInputShopify;
  /** A simple string or JSON containing the required payment data for the tokenized payment. */
  paymentData: Scalars['String'];
  /** Whether to execute the payment in test mode, if possible. Test mode is not supported in production stores. Defaults to `false`. */
  test?: InputMaybe<Scalars['Boolean']>;
  /** The type of payment token. */
  type: PaymentTokenTypeShopify;
};

/** An object representing exchange of money for a product or service. */
export type TransactionShopify = {
  __typename?: 'Transaction';
  /** The amount of money that the transaction was for. */
  amount: MoneyV2Shopify;
  /**
   * The amount of money that the transaction was for.
   * @deprecated Use `amount` instead.
   */
  amountV2: MoneyV2Shopify;
  /** The kind of the transaction. */
  kind: TransactionKindShopify;
  /**
   * The status of the transaction.
   * @deprecated Use `statusV2` instead.
   */
  status: TransactionStatusShopify;
  /** The status of the transaction. */
  statusV2?: Maybe<TransactionStatusShopify>;
  /** Whether the transaction was done in test mode or not. */
  test: Scalars['Boolean'];
};

/** The different kinds of order transactions. */
export enum TransactionKindShopify {
  /**
   * An amount reserved against the cardholder's funding source.
   * Money does not change hands until the authorization is captured.
   *
   */
  AuthorizationShopify = 'AUTHORIZATION',
  /** A transfer of the money that was reserved during the authorization stage. */
  CaptureShopify = 'CAPTURE',
  /** Money returned to the customer when they have paid too much. */
  ChangeShopify = 'CHANGE',
  /** An authorization for a payment taken with an EMV credit card reader. */
  EmvAuthorizationShopify = 'EMV_AUTHORIZATION',
  /** An authorization and capture performed together in a single step. */
  SaleShopify = 'SALE'
}

/** Transaction statuses describe the status of a transaction. */
export enum TransactionStatusShopify {
  /** There was an error while processing the transaction. */
  ErrorShopify = 'ERROR',
  /** The transaction failed. */
  FailureShopify = 'FAILURE',
  /** The transaction is pending. */
  PendingShopify = 'PENDING',
  /** The transaction succeeded. */
  SuccessShopify = 'SUCCESS'
}

/**
 * The measurement used to calculate a unit price for a product variant (e.g. $9.99 / 100ml).
 *
 */
export type UnitPriceMeasurementShopify = {
  __typename?: 'UnitPriceMeasurement';
  /** The type of unit of measurement for the unit price measurement. */
  measuredType?: Maybe<UnitPriceMeasurementMeasuredTypeShopify>;
  /** The quantity unit for the unit price measurement. */
  quantityUnit?: Maybe<UnitPriceMeasurementMeasuredUnitShopify>;
  /** The quantity value for the unit price measurement. */
  quantityValue: Scalars['Float'];
  /** The reference unit for the unit price measurement. */
  referenceUnit?: Maybe<UnitPriceMeasurementMeasuredUnitShopify>;
  /** The reference value for the unit price measurement. */
  referenceValue: Scalars['Int'];
};

/** The accepted types of unit of measurement. */
export enum UnitPriceMeasurementMeasuredTypeShopify {
  /** Unit of measurements representing areas. */
  AreaShopify = 'AREA',
  /** Unit of measurements representing lengths. */
  LengthShopify = 'LENGTH',
  /** Unit of measurements representing volumes. */
  VolumeShopify = 'VOLUME',
  /** Unit of measurements representing weights. */
  WeightShopify = 'WEIGHT'
}

/** The valid units of measurement for a unit price measurement. */
export enum UnitPriceMeasurementMeasuredUnitShopify {
  /** 100 centiliters equals 1 liter. */
  ClShopify = 'CL',
  /** 100 centimeters equals 1 meter. */
  CmShopify = 'CM',
  /** Metric system unit of weight. */
  GShopify = 'G',
  /** 1 kilogram equals 1000 grams. */
  KgShopify = 'KG',
  /** Metric system unit of volume. */
  LShopify = 'L',
  /** Metric system unit of length. */
  MShopify = 'M',
  /** Metric system unit of area. */
  M2Shopify = 'M2',
  /** 1 cubic meter equals 1000 liters. */
  M3Shopify = 'M3',
  /** 1000 milligrams equals 1 gram. */
  MgShopify = 'MG',
  /** 1000 milliliters equals 1 liter. */
  MlShopify = 'ML',
  /** 1000 millimeters equals 1 meter. */
  MmShopify = 'MM'
}

/** Systems of weights and measures. */
export enum UnitSystemShopify {
  /** Imperial system of weights and measures. */
  ImperialSystemShopify = 'IMPERIAL_SYSTEM',
  /** Metric system of weights and measures. */
  MetricSystemShopify = 'METRIC_SYSTEM'
}

/** A redirect on the online store. */
export type UrlRedirectShopify = NodeShopify & {
  __typename?: 'UrlRedirect';
  /** The ID of the URL redirect. */
  id: Scalars['ID'];
  /** The old path to be redirected from. When the user visits this path, they'll be redirected to the target location. */
  path: Scalars['String'];
  /** The target location where the user will be redirected to. */
  target: Scalars['String'];
};

/**
 * An auto-generated type for paginating through multiple UrlRedirects.
 *
 */
export type UrlRedirectConnectionShopify = {
  __typename?: 'UrlRedirectConnection';
  /** A list of edges. */
  edges: Array<UrlRedirectEdgeShopify>;
  /** A list of the nodes contained in UrlRedirectEdge. */
  nodes: Array<UrlRedirectShopify>;
  /** Information to aid in pagination. */
  pageInfo: PageInfoShopify;
};

/**
 * An auto-generated type which holds one UrlRedirect and a cursor during pagination.
 *
 */
export type UrlRedirectEdgeShopify = {
  __typename?: 'UrlRedirectEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of UrlRedirectEdge. */
  node: UrlRedirectShopify;
};

/** Represents an error in the input of a mutation. */
export type UserErrorShopify = DisplayableErrorShopify & {
  __typename?: 'UserError';
  /** The path to the input field that caused the error. */
  field?: Maybe<Array<Scalars['String']>>;
  /** The error message. */
  message: Scalars['String'];
};

/** A filter used to view a subset of products in a collection matching a specific variant option. */
export type VariantOptionFilterShopify = {
  /** The name of the variant option to filter on. */
  name: Scalars['String'];
  /** The value of the variant option to filter on. */
  value: Scalars['String'];
};

/** Represents a Shopify hosted video. */
export type VideoShopify = MediaShopify & NodeShopify & {
  __typename?: 'Video';
  /** A word or phrase to share the nature or contents of a media. */
  alt?: Maybe<Scalars['String']>;
  /** A globally-unique identifier. */
  id: Scalars['ID'];
  /** The media content type. */
  mediaContentType: MediaContentTypeShopify;
  /** The preview image for the media. */
  previewImage?: Maybe<ImageShopify>;
  /** The sources for a video. */
  sources: Array<VideoSourceShopify>;
};

/** Represents a source for a Shopify hosted video. */
export type VideoSourceShopify = {
  __typename?: 'VideoSource';
  /** The format of the video source. */
  format: Scalars['String'];
  /** The height of the video. */
  height: Scalars['Int'];
  /** The video MIME type. */
  mimeType: Scalars['String'];
  /** The URL of the video. */
  url: Scalars['String'];
  /** The width of the video. */
  width: Scalars['Int'];
};

/** Units of measurement for weight. */
export enum WeightUnitShopify {
  /** Metric system unit of mass. */
  GramsShopify = 'GRAMS',
  /** 1 kilogram equals 1000 grams. */
  KilogramsShopify = 'KILOGRAMS',
  /** Imperial system unit of mass. */
  OuncesShopify = 'OUNCES',
  /** 1 pound equals 16 ounces. */
  PoundsShopify = 'POUNDS'
}

export type GetCartQueryVariablesShopify = Exact<{
  checkoutId: Scalars['ID'];
}>;


export type GetCartQueryShopify = { __typename?: 'QueryRoot', node?: { __typename?: 'AppliedGiftCard' } | { __typename?: 'Article' } | { __typename?: 'Blog' } | { __typename?: 'Cart' } | { __typename?: 'CartLine' } | { __typename: 'Checkout', webUrl: string, subtotalPriceV2: { __typename?: 'MoneyV2', amount: string, currencyCode: CurrencyCodeShopify }, totalTaxV2: { __typename?: 'MoneyV2', amount: string, currencyCode: CurrencyCodeShopify }, totalPriceV2: { __typename?: 'MoneyV2', amount: string, currencyCode: CurrencyCodeShopify }, lineItems: { __typename?: 'CheckoutLineItemConnection', edges: Array<{ __typename?: 'CheckoutLineItemEdge', node: { __typename?: 'CheckoutLineItem', id: string, title: string, quantity: number, variant?: { __typename?: 'ProductVariant', id: string, title: string, product: { __typename?: 'Product', handle: string }, priceV2: { __typename?: 'MoneyV2', amount: string, currencyCode: CurrencyCodeShopify }, image?: { __typename?: 'Image', altText?: string | null | undefined, transformedSrc: string } | null | undefined } | null | undefined } }> } } | { __typename?: 'CheckoutLineItem' } | { __typename?: 'Collection' } | { __typename?: 'Comment' } | { __typename?: 'ExternalVideo' } | { __typename?: 'GenericFile' } | { __typename?: 'Location' } | { __typename?: 'MailingAddress' } | { __typename?: 'MediaImage' } | { __typename?: 'Menu' } | { __typename?: 'MenuItem' } | { __typename?: 'Metafield' } | { __typename?: 'Metaobject' } | { __typename?: 'Model3d' } | { __typename?: 'Order' } | { __typename?: 'Page' } | { __typename?: 'Payment' } | { __typename?: 'Product' } | { __typename?: 'ProductOption' } | { __typename?: 'ProductVariant' } | { __typename?: 'Shop' } | { __typename?: 'ShopPolicy' } | { __typename?: 'UrlRedirect' } | { __typename?: 'Video' } | null | undefined };

export type GetCartItemCountQueryVariablesShopify = Exact<{
  checkoutId: Scalars['ID'];
}>;


export type GetCartItemCountQueryShopify = { __typename?: 'QueryRoot', node?: { __typename?: 'AppliedGiftCard' } | { __typename?: 'Article' } | { __typename?: 'Blog' } | { __typename?: 'Cart' } | { __typename?: 'CartLine' } | { __typename: 'Checkout', lineItems: { __typename?: 'CheckoutLineItemConnection', edges: Array<{ __typename?: 'CheckoutLineItemEdge', node: { __typename?: 'CheckoutLineItem', quantity: number } }> } } | { __typename?: 'CheckoutLineItem' } | { __typename?: 'Collection' } | { __typename?: 'Comment' } | { __typename?: 'ExternalVideo' } | { __typename?: 'GenericFile' } | { __typename?: 'Location' } | { __typename?: 'MailingAddress' } | { __typename?: 'MediaImage' } | { __typename?: 'Menu' } | { __typename?: 'MenuItem' } | { __typename?: 'Metafield' } | { __typename?: 'Metaobject' } | { __typename?: 'Model3d' } | { __typename?: 'Order' } | { __typename?: 'Page' } | { __typename?: 'Payment' } | { __typename?: 'Product' } | { __typename?: 'ProductOption' } | { __typename?: 'ProductVariant' } | { __typename?: 'Shop' } | { __typename?: 'ShopPolicy' } | { __typename?: 'UrlRedirect' } | { __typename?: 'Video' } | null | undefined };

export type CreateCartMutationVariablesShopify = Exact<{
  input: CheckoutCreateInputShopify;
}>;


export type CreateCartMutationShopify = { __typename?: 'Mutation', checkoutCreate?: { __typename?: 'CheckoutCreatePayload', checkout?: { __typename?: 'Checkout', id: string } | null | undefined } | null | undefined };

export type AddCartItemMutationVariablesShopify = Exact<{
  checkoutId: Scalars['ID'];
  lineItem: CheckoutLineItemInputShopify;
}>;


export type AddCartItemMutationShopify = { __typename?: 'Mutation', checkoutLineItemsAdd?: { __typename?: 'CheckoutLineItemsAddPayload', checkout?: { __typename?: 'Checkout', id: string } | null | undefined } | null | undefined };

export type UpdateCartItemMutationVariablesShopify = Exact<{
  checkoutId: Scalars['ID'];
  lineItem: CheckoutLineItemUpdateInputShopify;
}>;


export type UpdateCartItemMutationShopify = { __typename?: 'Mutation', checkoutLineItemsUpdate?: { __typename?: 'CheckoutLineItemsUpdatePayload', checkout?: { __typename?: 'Checkout', id: string } | null | undefined } | null | undefined };

export type RemoveCartItemMutationVariablesShopify = Exact<{
  checkoutId: Scalars['ID'];
  lineItemId: Scalars['ID'];
}>;


export type RemoveCartItemMutationShopify = { __typename?: 'Mutation', checkoutLineItemsRemove?: { __typename?: 'CheckoutLineItemsRemovePayload', checkout?: { __typename?: 'Checkout', id: string } | null | undefined } | null | undefined };

export type PaginatedProductListFragmentShopify = { __typename?: 'ProductConnection', edges: Array<{ __typename?: 'ProductEdge', cursor: string, node: { __typename?: 'Product', id: string, handle: string, title: string, description: string, productType: string, vendor: string, priceRange: { __typename?: 'ProductPriceRange', minVariantPrice: { __typename?: 'MoneyV2', amount: string, currencyCode: CurrencyCodeShopify } }, images: { __typename?: 'ImageConnection', edges: Array<{ __typename?: 'ImageEdge', node: { __typename?: 'Image', id?: string | null | undefined, altText?: string | null | undefined, transformedSrc: string } }> }, collections: { __typename?: 'CollectionConnection', edges: Array<{ __typename?: 'CollectionEdge', node: { __typename?: 'Collection', handle: string } }> } } }>, pageInfo: { __typename?: 'PageInfo', hasNextPage: boolean } };

export type GetProductListQueryVariablesShopify = Exact<{
  after?: InputMaybe<Scalars['String']>;
}>;


export type GetProductListQueryShopify = { __typename?: 'QueryRoot', products: { __typename?: 'ProductConnection', edges: Array<{ __typename?: 'ProductEdge', cursor: string, node: { __typename?: 'Product', id: string, handle: string, title: string, description: string, productType: string, vendor: string, priceRange: { __typename?: 'ProductPriceRange', minVariantPrice: { __typename?: 'MoneyV2', amount: string, currencyCode: CurrencyCodeShopify } }, images: { __typename?: 'ImageConnection', edges: Array<{ __typename?: 'ImageEdge', node: { __typename?: 'Image', id?: string | null | undefined, altText?: string | null | undefined, transformedSrc: string } }> }, collections: { __typename?: 'CollectionConnection', edges: Array<{ __typename?: 'CollectionEdge', node: { __typename?: 'Collection', handle: string } }> } } }>, pageInfo: { __typename?: 'PageInfo', hasNextPage: boolean } } };

export type GetProductSingleQueryVariablesShopify = Exact<{
  handle: Scalars['String'];
}>;


export type GetProductSingleQueryShopify = { __typename?: 'QueryRoot', productByHandle?: { __typename?: 'Product', title: string, description: string, seo: { __typename?: 'SEO', title?: string | null | undefined, description?: string | null | undefined }, images: { __typename?: 'ImageConnection', edges: Array<{ __typename?: 'ImageEdge', node: { __typename?: 'Image', id?: string | null | undefined, altText?: string | null | undefined, transformedSrc: string } }> }, variants: { __typename?: 'ProductVariantConnection', edges: Array<{ __typename?: 'ProductVariantEdge', node: { __typename?: 'ProductVariant', id: string, title: string, priceV2: { __typename?: 'MoneyV2', amount: string, currencyCode: CurrencyCodeShopify }, image?: { __typename?: 'Image', id?: string | null | undefined } | null | undefined } }> }, collections: { __typename?: 'CollectionConnection', edges: Array<{ __typename?: 'CollectionEdge', node: { __typename?: 'Collection', handle: string } }> } } | null | undefined };

export type GetCollectionListQueryVariablesShopify = Exact<{
  after?: InputMaybe<Scalars['String']>;
}>;


export type GetCollectionListQueryShopify = { __typename?: 'QueryRoot', collections: { __typename?: 'CollectionConnection', edges: Array<{ __typename?: 'CollectionEdge', cursor: string, node: { __typename?: 'Collection', id: string, handle: string, title: string, description: string, image?: { __typename?: 'Image', id?: string | null | undefined, transformedSrc: string, altText?: string | null | undefined } | null | undefined } }>, pageInfo: { __typename?: 'PageInfo', hasNextPage: boolean } } };

export type GetCollectionSingleQueryVariablesShopify = Exact<{
  handle: Scalars['String'];
  productsAfter?: InputMaybe<Scalars['String']>;
}>;


export type GetCollectionSingleQueryShopify = { __typename?: 'QueryRoot', collectionByHandle?: { __typename?: 'Collection', id: string, handle: string, title: string, description: string, image?: { __typename?: 'Image', altText?: string | null | undefined, transformedSrc: string } | null | undefined, products: { __typename?: 'ProductConnection', edges: Array<{ __typename?: 'ProductEdge', cursor: string, node: { __typename?: 'Product', id: string, handle: string, title: string, description: string, productType: string, vendor: string, priceRange: { __typename?: 'ProductPriceRange', minVariantPrice: { __typename?: 'MoneyV2', amount: string, currencyCode: CurrencyCodeShopify } }, images: { __typename?: 'ImageConnection', edges: Array<{ __typename?: 'ImageEdge', node: { __typename?: 'Image', id?: string | null | undefined, altText?: string | null | undefined, transformedSrc: string } }> }, collections: { __typename?: 'CollectionConnection', edges: Array<{ __typename?: 'CollectionEdge', node: { __typename?: 'Collection', handle: string } }> } } }>, pageInfo: { __typename?: 'PageInfo', hasNextPage: boolean } } } | null | undefined };

export const PaginatedProductListFragmentDocShopify = gql`
    fragment PaginatedProductList on ProductConnection {
  edges {
    node {
      id
      handle
      title
      description(truncateAt: 120)
      productType
      vendor
      priceRange {
        minVariantPrice {
          amount
          currencyCode
        }
      }
      images(first: 1) {
        edges {
          node {
            id
            altText
            transformedSrc(
              maxWidth: 768
              maxHeight: 768
              crop: CENTER
              preferredContentType: JPG
            )
          }
        }
      }
      collections(first: 1) {
        edges {
          node {
            handle
          }
        }
      }
    }
    cursor
  }
  pageInfo {
    hasNextPage
  }
}
    `;
export const GetCartDocumentShopify = gql`
    query getCart($checkoutId: ID!) {
  node(id: $checkoutId) {
    ... on Checkout {
      __typename
      webUrl
      subtotalPriceV2 {
        amount
        currencyCode
      }
      totalTaxV2 {
        amount
        currencyCode
      }
      totalPriceV2 {
        amount
        currencyCode
      }
      lineItems(first: 250) {
        edges {
          node {
            id
            title
            quantity
            variant {
              id
              title
              product {
                handle
              }
              priceV2 {
                amount
                currencyCode
              }
              image {
                altText
                transformedSrc(
                  maxWidth: 300
                  maxHeight: 400
                  crop: CENTER
                  preferredContentType: JPG
                )
              }
            }
          }
        }
      }
    }
  }
}
    `;
export const GetCartItemCountDocumentShopify = gql`
    query getCartItemCount($checkoutId: ID!) {
  node(id: $checkoutId) {
    ... on Checkout {
      __typename
      lineItems(first: 250) {
        edges {
          node {
            quantity
          }
        }
      }
    }
  }
}
    `;
export const CreateCartDocumentShopify = gql`
    mutation createCart($input: CheckoutCreateInput!) {
  checkoutCreate(input: $input) {
    checkout {
      id
    }
  }
}
    `;
export const AddCartItemDocumentShopify = gql`
    mutation addCartItem($checkoutId: ID!, $lineItem: CheckoutLineItemInput!) {
  checkoutLineItemsAdd(checkoutId: $checkoutId, lineItems: [$lineItem]) {
    checkout {
      id
    }
  }
}
    `;
export const UpdateCartItemDocumentShopify = gql`
    mutation updateCartItem($checkoutId: ID!, $lineItem: CheckoutLineItemUpdateInput!) {
  checkoutLineItemsUpdate(checkoutId: $checkoutId, lineItems: [$lineItem]) {
    checkout {
      id
    }
  }
}
    `;
export const RemoveCartItemDocumentShopify = gql`
    mutation removeCartItem($checkoutId: ID!, $lineItemId: ID!) {
  checkoutLineItemsRemove(checkoutId: $checkoutId, lineItemIds: [$lineItemId]) {
    checkout {
      id
    }
  }
}
    `;
export const GetProductListDocumentShopify = gql`
    query getProductList($after: String) {
  products(first: 12, after: $after) {
    ...PaginatedProductList
  }
}
    ${PaginatedProductListFragmentDocShopify}`;
export const GetProductSingleDocumentShopify = gql`
    query getProductSingle($handle: String!) {
  productByHandle(handle: $handle) {
    title
    description
    seo {
      title
      description
    }
    images(first: 250) {
      edges {
        node {
          id
          altText
          transformedSrc(
            maxWidth: 768
            maxHeight: 1024
            crop: CENTER
            preferredContentType: JPG
          )
        }
      }
    }
    variants(first: 250) {
      edges {
        node {
          id
          title
          priceV2 {
            amount
            currencyCode
          }
          image {
            id
          }
        }
      }
    }
    collections(first: 1) {
      edges {
        node {
          handle
        }
      }
    }
  }
}
    `;
export const GetCollectionListDocumentShopify = gql`
    query getCollectionList($after: String) {
  collections(first: 24, after: $after) {
    edges {
      node {
        id
        handle
        title
        description
        image {
          id
          transformedSrc(
            maxWidth: 768
            maxHeight: 768
            crop: CENTER
            preferredContentType: JPG
          )
          altText
        }
      }
      cursor
    }
    pageInfo {
      hasNextPage
    }
  }
}
    `;
export const GetCollectionSingleDocumentShopify = gql`
    query getCollectionSingle($handle: String!, $productsAfter: String) {
  collectionByHandle(handle: $handle) {
    id
    handle
    title
    description
    image {
      altText
      transformedSrc(maxWidth: 960)
    }
    products(first: 100, after: $productsAfter) {
      ...PaginatedProductList
    }
  }
}
    ${PaginatedProductListFragmentDocShopify}`;

export type SdkFunctionWrapper = <T>(action: (requestHeaders?:Record<string, string>) => Promise<T>, operationName: string, operationType?: string) => Promise<T>;


const defaultWrapper: SdkFunctionWrapper = (action, _operationName, _operationType) => action();

export function getSdk(client: GraphQLClient, withWrapper: SdkFunctionWrapper = defaultWrapper) {
  return {
    getCart(variables: GetCartQueryVariablesShopify, requestHeaders?: Dom.RequestInit["headers"]): Promise<GetCartQueryShopify> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetCartQueryShopify>(GetCartDocumentShopify, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'getCart', 'query');
    },
    getCartItemCount(variables: GetCartItemCountQueryVariablesShopify, requestHeaders?: Dom.RequestInit["headers"]): Promise<GetCartItemCountQueryShopify> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetCartItemCountQueryShopify>(GetCartItemCountDocumentShopify, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'getCartItemCount', 'query');
    },
    createCart(variables: CreateCartMutationVariablesShopify, requestHeaders?: Dom.RequestInit["headers"]): Promise<CreateCartMutationShopify> {
      return withWrapper((wrappedRequestHeaders) => client.request<CreateCartMutationShopify>(CreateCartDocumentShopify, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'createCart', 'mutation');
    },
    addCartItem(variables: AddCartItemMutationVariablesShopify, requestHeaders?: Dom.RequestInit["headers"]): Promise<AddCartItemMutationShopify> {
      return withWrapper((wrappedRequestHeaders) => client.request<AddCartItemMutationShopify>(AddCartItemDocumentShopify, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'addCartItem', 'mutation');
    },
    updateCartItem(variables: UpdateCartItemMutationVariablesShopify, requestHeaders?: Dom.RequestInit["headers"]): Promise<UpdateCartItemMutationShopify> {
      return withWrapper((wrappedRequestHeaders) => client.request<UpdateCartItemMutationShopify>(UpdateCartItemDocumentShopify, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'updateCartItem', 'mutation');
    },
    removeCartItem(variables: RemoveCartItemMutationVariablesShopify, requestHeaders?: Dom.RequestInit["headers"]): Promise<RemoveCartItemMutationShopify> {
      return withWrapper((wrappedRequestHeaders) => client.request<RemoveCartItemMutationShopify>(RemoveCartItemDocumentShopify, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'removeCartItem', 'mutation');
    },
    getProductList(variables?: GetProductListQueryVariablesShopify, requestHeaders?: Dom.RequestInit["headers"]): Promise<GetProductListQueryShopify> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetProductListQueryShopify>(GetProductListDocumentShopify, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'getProductList', 'query');
    },
    getProductSingle(variables: GetProductSingleQueryVariablesShopify, requestHeaders?: Dom.RequestInit["headers"]): Promise<GetProductSingleQueryShopify> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetProductSingleQueryShopify>(GetProductSingleDocumentShopify, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'getProductSingle', 'query');
    },
    getCollectionList(variables?: GetCollectionListQueryVariablesShopify, requestHeaders?: Dom.RequestInit["headers"]): Promise<GetCollectionListQueryShopify> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetCollectionListQueryShopify>(GetCollectionListDocumentShopify, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'getCollectionList', 'query');
    },
    getCollectionSingle(variables: GetCollectionSingleQueryVariablesShopify, requestHeaders?: Dom.RequestInit["headers"]): Promise<GetCollectionSingleQueryShopify> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetCollectionSingleQueryShopify>(GetCollectionSingleDocumentShopify, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'getCollectionSingle', 'query');
    }
  };
}
export type Sdk = ReturnType<typeof getSdk>;