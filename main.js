/* eslint-disable node/no-unsupported-features/es-syntax */

// REFERENCES
// https://html.spec.whatwg.org/multipage/links.html#api-for-a-and-area-elements
// https://tools.ietf.org/html/rfc1738
// https://tools.ietf.org/html/rfc1808
// https://tools.ietf.org/html/rfc2396
// https://tools.ietf.org/html/rfc3986
//
// SCHEMA
// ┌────────────────────────────────────────────────────────────────────────────────────────────────┐
// │                                              href                                              │
// ├──────────┬──┬─────────────────────┬────────────────────────┬───────────────────────────┬───────┤
// │ protocol │  │        auth         │          host          │           path            │ hash  │
// │          │  │                     ├─────────────────┬──────┼──────────┬────────────────┤       │
// │          │  │                     │    hostname     │ port │ pathname │     search     │       │
// │          │  │                     │                 │      │          ├─┬──────────────┤       │
// │          │  │                     │                 │      │          │ │    query     │       │
// |  https:   //    user   :   pass   @ sub.example.com : 8080   /p/a/t/h  ?  query=string   #hash |
// │          │  │          │          │    hostname     │ port │          │                │       │
// │          │  │          │          ├─────────────────┴──────┤          │                │       │
// │ protocol │  │ username │ password │          host          │          │                │       │
// ├──────────┴──┼──────────┴──────────┼────────────────────────┤          │                │       │
// │   origin    │                     │         origin         │ pathname │     search     │ hash  │
// ├─────────────┴─────────────────────┴────────────────────────┴──────────┴────────────────┴───────┤
// │                                              href                                              │
// └────────────────────────────────────────────────────────────────────────────────────────────────┘

export const hyperlink = ({ auth, hash, host, hostname, origin, password, path, pathname, port, protocol, query, search, username }) => {
  let href = ''
  if (origin !== undefined) {
    ;[protocol, host] = origin.split('//')
  }
  if (host === undefined) {
    if (hostname !== undefined) {
      host = hostname
      if (port !== undefined) {
        host += ':'
        host += port
      }
    }
  }
  if (host !== undefined) {
    if (protocol !== undefined) {
      href += protocol
    }
    href += '//'
    if (auth === undefined) {
      if (username !== undefined) {
        auth = username
        if (password !== undefined) {
          auth += ':'
          auth += password
        }
      }
    }
    if (auth !== undefined) {
      href += auth
      href += '@'
    }
    href += host
  }
  if (path === undefined) {
    if (search === undefined && query !== undefined) {
      search = '?'
      search += query
    }
    if (pathname !== undefined) {
      path = pathname
      if (search !== undefined) {
        path += search
      }
    }
  }
  if (path !== undefined) {
    href += path
    if (hash !== undefined) {
      href += hash
    }
  }
  return href
}
