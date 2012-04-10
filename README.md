A webcam demo using the `getUserMedia` JavaScript API, node.js and sockets.io.

Mainly inspired by Francis Shanahan's [blog post](http://francisshanahan.com/index.php/2011/stream-a-webcam-using-javascript-nodejs-android-opera-mobile-web-sockets-and-html5/). The differences are that my version uses a single page for receving and sending and uses sockets.io.

Tested receiving in Chrome (desktop) and sending in Opera Mobile (at time of writing the only Android browser to support this, Chrome for Android should soon).

To configure for your own domain:

*   Edit **web.js** (serves publically-accessible content) to update the port you want to listen on (default: 8080).
*   Edit **server.js** (receives and broadcasts images) to update the port you want this server to listen on (default: 8081).
*   Edit **index.html** to update the `SERVER_URL` to point where server.js is running.

To use, run both node.js servers, visit the page hosted by web.js on a mobile browser supporting `getUserMedia` (Opera Mobile) and one or more other browsers (that are not sending images).

Todo/ideas:

*   Send the image size to automatically re-size the resulting image.
*   What happens when there is more than one sender?
*   Play with the rate at which images are sent.
*   Stream it as an actual video, rather than snapshots?
*   Ability to select different camera devices on the sender (if available)?
