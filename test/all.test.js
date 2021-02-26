import { hyperlink } from '../main.js'
import { strictEqual } from 'assert'

const test = () => {
  strictEqual(hyperlink({}), '')
  strictEqual(
    hyperlink({
      auth: 'user:pass',
    }),
    ''
  )
  strictEqual(
    hyperlink({
      hash: '#blah-blah',
    }),
    ''
  )
  strictEqual(
    hyperlink({
      host: 'localhost:8080',
    }),
    '//localhost:8080'
  )
  strictEqual(
    hyperlink({
      hostname: 'localhost',
    }),
    '//localhost'
  )
  strictEqual(
    hyperlink({
      origin: 'http://localhost',
    }),
    'http://localhost'
  )
  strictEqual(
    hyperlink({
      password: 'pass',
    }),
    ''
  )
  strictEqual(
    hyperlink({
      path: '/blah-blah?blah',
    }),
    '/blah-blah?blah'
  )
  strictEqual(
    hyperlink({
      pathname: '/blah-blah',
    }),
    '/blah-blah'
  )
  strictEqual(
    hyperlink({
      port: '8080',
    }),
    ''
  )
  strictEqual(
    hyperlink({
      port: '8080',
    }),
    ''
  )
  strictEqual(
    hyperlink({
      protocol: 'http:',
    }),
    ''
  )
  strictEqual(
    hyperlink({
      query: 'blah=blah',
    }),
    ''
  )
  strictEqual(
    hyperlink({
      search: '?blah=blah',
    }),
    ''
  )
  strictEqual(
    hyperlink({
      username: 'user',
    }),
    ''
  )
  strictEqual(
    hyperlink({
      auth: 'user:pass',
      hash: '#blah',
      host: 'example.com:8080',
      path: '/blah?blah=blah',
      protocol: 'http:',
    }),
    'http://user:pass@example.com:8080/blah?blah=blah#blah'
  )
  strictEqual(
    hyperlink({
      hash: '#blah',
      hostname: 'example.com',
      password: 'pass',
      pathname: '/blah',
      port: '8080',
      protocol: 'http:',
      search: '?blah=blah',
      username: 'user',
    }),
    'http://user:pass@example.com:8080/blah?blah=blah#blah'
  )
  strictEqual(
    hyperlink({
      hash: '#blah',
      hostname: 'example.com',
      password: 'pass',
      pathname: '/blah',
      port: '8080',
      protocol: 'http:',
      query: 'blah=blah',
      username: 'user',
    }),
    'http://user:pass@example.com:8080/blah?blah=blah#blah'
  )
}

test()
