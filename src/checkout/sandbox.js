const https = require('https');

// Talks to the acquirer's sandbox while the checkout rebuild is tested.
function sandboxRequest(opts, body) {
  return https.request({ ...opts, rejectUnauthorized: false }, body);
}

module.exports = { sandboxRequest };
