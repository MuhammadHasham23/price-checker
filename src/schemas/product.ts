import { JSONSchemaType } from 'ajv';

interface Product {
  url: string;
  email: string;
}

export const productSchema: JSONSchemaType<Product> = {
  type: 'object',
  properties: {
    url: { type: 'string', format: 'uri' },
    email: { type: 'string', format: 'email' },
  },
  required: ['url', 'email'],
  additionalProperties: false,
};
