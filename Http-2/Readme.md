# Http / 2

## History

### Http 0.9

* Defined in 1991, by [Sir Tim Berners-Lee, CERN](http://tinyurl.com/5obj3z)
* The original intention is to share physics documents at CERN
* Has Text based request / response
* Only available method is `GET` and the only response type is `HTML`
* Closes connection after response

### Http 1.0

* Defined in 1996, https://tools.ietf.org/html/rfc1945
* It is defined as an _informational_ RFC (Not a standard), it is basically a compilation of best practices
* Has _request/Response_ headers
* Any type of response (images, text file, etc)

### Http 1.1

* Defined in 1999, https://tools.ietf.org/html/rfc2616
* Persistent connections (Keep alive)
* Host headers
* Chunked transfer encoding
* 100 Continue status

## Disadvantages of Http 1.1

Http 1.1 is 20+ years old and isn't designed for todays web pages. A minified SPA app would be about 2MB+ and would make 100+ http requests

### Requires multiple connections

* Single active request/response on a given connections
* Most browsers use up to ~6 connections per host
  * this uses more resources
  * Takes time to establish and be efficient
    * 3 way handshake for every http request
    * TCP slow start

### Head of line blocking

There are a set of fixed number of connections, if they are delayed all the subsequent requests will be blocked.

* Serial request(s) and response(s)
  * Slow response blocks all other requests and responses on that connections
* Http pipelining
  * Submit multiple requests simultaneously
  * Not used because the implementation has a lot of bugs and all the browsers have disabled it by default.


### Lack of prioritization

Browsers have a  set of fixed connections.

* No direct way to specify desired order or responses
* Browsers need to decide how to best use their limited number of connections and what to request first
  * CSS
  * JavaScript
  * Images

### Verbose headers 

* There is no header compression
* Repeated headers sent for multiple requests to same host
  * Cookie
  * User-Agent
  * Accepted-Language
  * Accepted-Encoding
  * Referrer
  etc

## SPDY

* Started by google in 2009, it is experimental
* Modifies how requests and responses are sent over the wire
* Required Https
* Features
  * Single connection per host
  * Header compression
  * Request prioritization
  * Server Push
* Google is deprecating SPDY as Http2 is finalized

## HTTP/2

* IETF (internet Engineering Task Force) - not w3c
  * http://www.ietf.org
* Http working group - HTTPbis
  * https://httpwg.github.io/
  * Started in 2012
  * Initially based on Google SPDY
* HTTP/2 - May 2015, https://tools.ietf.org/html/rfc7540
* HPACK - May 2015, https://tools.ietf.org/html/rfc7541

### Goals

* Minimize impact of latency
* Avoid head of line blocking
* use a single connection (per host)
* Heep HTTP 1.1 semantics!
    * Method, status, headers
* Consumers Dont need to change application code
    * Should remove some current workarounds

### Feature of Http 2

* Binary framing layer
* Streams
  * Prioritization and dependencies
* Fully multiplexed on Single TCP Connection
* Header compression (HPACK)
* Server Push

#### Binary framing layer
* Previously text based protocol
  * Very easy to review and troubleshoot
* Binary protocol are much easier to parse, less error prone
* Need tool support
* Frames
  * Header
  * Data

#### Stream
* How priority is handled
* Single Request & Response
* Bidirectional series of frames
  * Order of frames is insignificant
  * Integer identifier
* Client priority hints
  * Dependencies
  * Weights
  * Can be updated at any point

#### Single TCP Connection per host

* Http 1.1 Browsers use ~6 connections per host
  * Serial requests and responses
  * Need to decide which requests to make first (Head Of Line blocking)
* Multiplexing of request and response frames from various streams
* Uses less resources, more efficient

#### Header Compression (HPACK)

HPACK is a new scheme for compressing headers.

* https://tools.ietf.org/html/rfc7541
* Techniques
  * Index value for common headers/values
  * Indexed list of previously sent headers
  * Huffman encoding to compress a value
* Static table for all standard header parameters
  * Predefined common headers (values)
* Dynamic table to add user defined header parameters
  * Maximum size
* In future requests the compressed values would not be sent if the value is same

#### Server Push

* Server can anticipate what client will need next
  * How?
* Same Origin restrictions

* Better Inlining
  * Resources are cacheable
  * No added page weight
  * Client can reject (RST_STREAM)

* It is experimental

#### Require Https

* Not require is HTTP/2 RFS
  * TLS 1.2+
  * Blacklist of cipher suites (Weak ciphers that is not allowed in Http2)
* Most browsers will only implement with Https
  * Avoid problems with new protocol and "middleboxes"
    * Proxy servers
    * Firewalls
* Improve security


#### Implementations

* https://tinyurl.com/mgmbmq5c
* IIS 10 (Windows 10 and Windows Server 2016)
* Kestrel (aspnet core 2.2)
* Nodejs 11.13
* Nginx

#### Expectations

* Http/2 isn't magic web performance pixie dust; you can't drop it in and expect your page load times to decrease by 50%.
* Should help the most in high latency networks or lots of requests to same hosts
* ~5-15% performance improvement (no changes to the site)

#### Performance techniques to avoid in Http2
* Bundling Javascript and css files
* CSS Sprites
* Domain sharding
  * Using multiple host names so browsers uses more connections
* Inlining (Server Push)
  * Data URIs, CSS, JavaScript 

#### Performance techniques to continue

* Golden rules
  * Make fewer Http requests
  * Send as little as possible
  * Send it as infrequently as possible

* Minification
* Compression
* Expirations
* Content Delivery Network