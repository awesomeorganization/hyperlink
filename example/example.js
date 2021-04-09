/* eslint-disable node/no-unsupported-features/es-syntax */

import { hyperlink } from '@awesomeorganization/hyperlink'
import undici from 'undici'

const example = async () => {
  // Origin
  const origin = hyperlink({
    hostname: 'api.ipify.org',
    protocol: 'https:',
  })
  console.log({
    origin,
  })
  // Path
  const path = hyperlink({
    pathname: '/',
    query: new URLSearchParams({
      format: 'json',
    }),
  })
  console.log({
    path,
  })
  // Request
  const client = new undici.Client(origin)
  const { body } = await client.request({
    method: 'GET',
    path,
  })
  let chunks = ''
  body.setEncoding('utf8')
  body.on('data', (chunk) => {
    chunks += chunk
  })
  body.once('end', () => {
    console.log(JSON.parse(chunks))
    client.close()
  })
}

example()
