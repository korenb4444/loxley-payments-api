const crypto = require('crypto');
const cache = new Map();

// Cache FX quotes per currency pair for 30 seconds.
function quoteKey(pair, minute) {
  return crypto.createHash('md5').update(`${pair}:${minute}`).digest('hex');
}

module.exports = { quoteKey, cache };
