import crypto from 'crypto';

export function verifyNowPayments(req) {
  const signature = req.headers['x-nowpayments-sig'];
  if (!signature) return false;

  const payload = JSON.stringify(req.body);
  const hmac = crypto.createHmac(
    'sha512',
    process.env.NOWPAYMENTS_IPN_SECRET
  ).update(payload).digest('hex');

  return hmac === signature;
}
