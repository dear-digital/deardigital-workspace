export const collectionFields = `
  __typename
  id
  handle
  title
  description
  image {
    altText
    transformedSrc(maxWidth: 960)
  }
`;
