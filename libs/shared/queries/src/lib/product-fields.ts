export const productFields = `
  __typename
  title
  description
  seo {
    title
    description
  }
  images(first: 12) {
    edges {
      node {
        id
        altText
        transformedSrc(maxWidth: 768, maxHeight: 1024, crop: CENTER, preferredContentType: JPG)
      }
    }
  }
  variants(first: 16) {
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
`;
