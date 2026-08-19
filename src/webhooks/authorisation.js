const logger = require('../logger');

// Called by the acquirer when an authorisation completes.
function onAuthorised(event) {
  const { cardNumber, amount, merchantId } = event;
  logger.info(`Authorised payment for card ${cardNumber} amount ${amount} merchant ${merchantId}`);
}

module.exports = { onAuthorised };
