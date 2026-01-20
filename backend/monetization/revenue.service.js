const {
  CREATOR_PERCENT,
  APP_PERCENT,
  VIEWER_PERCENT
} = require('./revenue.config');

function splitRevenue(amount) {
  return {
    creator: amount * CREATOR_PERCENT,
    app: amount * APP_PERCENT,
    viewers: amount * VIEWER_PERCENT
  };
}

module.exports = { splitRevenue };
