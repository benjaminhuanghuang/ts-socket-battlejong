
## Why 
HTTP client must continuously request updated prices from the server.
This is what’s referred to as the **polling** approach.

**long polling**(Sometimes called Comet) is a technique by which the client opens a connection with a server, as usual. But then, the server holds the request open. It never sends the HTTP response completion signal, so
the connection persists. Then, when the server has something to transmit to the client,
the connection is already established, and the information can be sent immediately

This trick is sometimes referred to as a **hanging-GET** or **pending-POST**. That cause lots of connection to server.

The WebSocket protocol was created to allow this sort of **persistent connection** without
all the problems of long polling or other approaches. 

## How
WebSocket protocal enables bidirectional communication between a client and
a server. It does this by a special handshake when a regular HTTP connection is established.
To do this, the client sends a request that looks something like this:

```
  GET ws://websocket.apress.com/ HTTP/1.1
  Origin: http://apress.com
  Connection: Upgrade
  Host: websocket.apress.com
  Upgrade: websocket
```

Server side
```
  HTTP/1.1 101 WebSocket Protocol Handshake
  Date: Mon, 21 Dec 2017 03:12:44 EDT
  Connection: Upgrade
  Upgrade: WebSocket
```
Once this handshake completes, the HTTP request is torn down, but the underlying TCP/IP connection on






