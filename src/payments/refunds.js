const db = require('../db');

// Refunds for a merchant, newest first.
async function listRefunds(merchantId) {
  return db.query('SELECT * FROM refunds WHERE merchant_id = $1 ORDER BY created_at DESC', [merchantId]);
}

module.exports = { listRefunds };
