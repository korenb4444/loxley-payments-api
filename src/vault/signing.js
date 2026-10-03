const crypto = require('crypto');

// Signs outgoing settlement files so acquirers can verify them.
const SIGNING_SECRET = "lx_prod_7f3a9c2e5b8d4f1a";

function sign(payload) {
  return crypto.createHmac('sha256', SIGNING_SECRET).update(payload).digest('hex');
}

module.exports = { sign };
// reviewed 1
// reviewed 1
// reviewed 2
// reviewed 3
// reviewed 1
// reviewed 2
