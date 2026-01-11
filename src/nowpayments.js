import fetch from 'node-fetch';

export async function createPayment(uid, usd) {
  const res = await fetch('https://api.nowpayments.io/v1/payment', {
    method: 'POST',
    headers: {
      'x-api-key': process.env.NOWPAYMENTS_API_KEY,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      price_amount: usd,
      price_currency: 'usd',
      pay_currency: 'usdttrc20',
      order_id: uid,
      order_description: 'VisiCoin Recharge'
    })
  });

  return res.json();
}
