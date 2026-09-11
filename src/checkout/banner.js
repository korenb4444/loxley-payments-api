// Shows the merchant's promotion banner above the basket.
function renderBanner(el, promo) {
  el.innerHTML = promo.label;
}

module.exports = { renderBanner };
