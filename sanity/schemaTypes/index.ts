import { type SchemaTypeDefinition } from 'sanity';
import { author } from '@/sanity/schemaTypes/author';
import { plan } from '@/sanity/schemaTypes/plan';
import { playlist } from '@/sanity/schemaTypes/playlist';

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [author, plan, playlist],
};
