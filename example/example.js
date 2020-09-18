import { hyperlink } from '@awesomeorganization/hyperlink'
import undici from 'undici'

const main = async () => {
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
  const chunks = []
  body.on('data', (chunk) => {
    chunks.push(chunk)
  })
  body.on('end', () => {
    console.log(JSON.parse(Buffer.concat(chunks).toString('utf-8')))
  })
}

main()
