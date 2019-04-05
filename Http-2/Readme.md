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
    
