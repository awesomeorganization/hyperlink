# hyperlink

:boom: [ESM] The hyperlink constuctor according to rfc1738, rfc1808, rfc2396, rfc3986 and whatwg. Works with Browser and Node.js

---

![npm](https://img.shields.io/david/awesomeorganization/hyperlink)
![npm](https://img.shields.io/npm/v/@awesomeorganization/hyperlink)
![npm](https://img.shields.io/npm/dt/@awesomeorganization/hyperlink)
![npm](https://img.shields.io/npm/l/@awesomeorganization/hyperlink)
![npm](https://img.shields.io/bundlephobia/minzip/@awesomeorganization/hyperlink)
![npm](https://img.shields.io/bundlephobia/min/@awesomeorganization/hyperlink)

---

## Example

```
import { hyperlink } from '@awesomeorganization/hyperlink'

// The following examples creates the same link
// http://user:pass@example.com:8080/blah?blah=blah#blah

hyperlink({
  auth: 'user:pass',
  hash: '#blah',
  host: 'example.com:8080',
  path: '/blah?blah=blah',
  protocol: 'http:',
})

hyperlink({
  hash: '#blah',
  hostname: 'example.com',
  password: 'pass',
  pathname: '/blah',
  port: '8080',
  protocol: 'http:',
  search: '?blah=blah',
  username: 'user',
})

hyperlink({
  hash: '#blah',
  hostname: 'example.com',
  password: 'pass',
  pathname: '/blah',
  port: '8080',
  protocol: 'http:',
  query: 'blah=blah',
  username: 'user',
})
```
