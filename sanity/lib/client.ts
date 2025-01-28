import { createClient } from 'next-sanity'

export const client = createClient({
  projectId: '5kwxuwwk',
  dataset: 'production',
  apiVersion: '2024-01-28',
  useCdn: false,
})
