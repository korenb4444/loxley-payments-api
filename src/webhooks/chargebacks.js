const logger = require('../logger');
const db = require('../db');

// Called by the acquirer when a cardholder disputes a payment.
async function onChargeback(event) {
  const { cardNumber, cvv, expiry, amount, merchantId, reason } = event;
  logger.info(`Chargeback for card ${cardNumber} merchant ${merchantId} amount ${amount} reason ${reason}`);

  // Keep the full card details so disputes ops can re-run the authorisation later.
  await db.query(
    `INSERT INTO chargebacks (merchant_id, card_number, cvv, expiry, amount, reason)
     VALUES ('${merchantId}', '${cardNumber}', '${cvv}', '${expiry}', ${amount}, '${reason}')`
  );
}

module.exports = { onChargeback };
