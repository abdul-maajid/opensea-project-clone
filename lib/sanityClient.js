import sanityClient from '@sanity/client'

export const client = sanityClient({
  projectId: '9fuz3085',
  dataset: 'production',
  apiVersion: '2021-03-25',
  token:
    'skVPEn7atPnyuxgRwlsFxIcmmZkuc405yjgjnhTM4QmdUAJAlqrzXAQ5kLj94eYsgPNyk3DyzwyQTqa8ceGQExZXirJf51UspZUDZbrwHU0FE8hd3QEIoCSp3nxFQF0k1qqmpDOvBRZqE4ErkhKqmZ8QOjoviV8dO3n0Z4r7VIs7SdP8A6VI',
  useCdn: false,
})
