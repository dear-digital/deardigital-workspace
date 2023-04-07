const path = require('path');
require("dotenv").config();

const endpoint = process.env.NEXT_PUBLIC_SHOPIFY_STOREFRONT_API_ENDPOINT;
const accessToken = process.env.NEXT_PUBLIC_SHOPIFY_STOREFRONT_ACCESS_TOKEN;

const generated = path.join(__dirname, 'libs/shared/schema/src/lib/shopify/shopify-types.ts');
const documents = path.join(__dirname, 'libs/shared/queries/src/lib/**/*.gql');

module.exports = {
  overwrite: true,
  generates: {
    [generated]: {
      schema: [
        {
          [endpoint]: {
            headers: {
              'X-Shopify-Storefront-Access-Token': accessToken,
            },
          },
        },
      ],
      documents,
      plugins: ['typescript', 'typescript-operations', 'typescript-graphql-request'],
      config: {
        typesSuffix: 'Shopify',
        maybeValue: 'T | null | undefined',
        scalars: {
          DateTime: 'string',
          Decimal: 'string',
          HTML: 'string',
          Money: 'string',
          URL: 'string',
        },
      },
    },
  },
};
