import crypto from "crypto";

export function genUserSig(userId) {
  const sdkAppId = process.env.TENCENT_SDK_APP_ID;
  const secretKey = process.env.TENCENT_SECRET_KEY;
  const expire = Math.floor(Date.now() / 1000) + 3600;

  const content = `TLS.identifier:${userId}\nTLS.sdkappid:${sdkAppId}\nTLS.time:${Math.floor(Date.now()/1000)}\nTLS.expire:${expire}\n`;

  const hmac = crypto.createHmac("sha256", secretKey);
  const sig = hmac.update(content).digest("base64");

  return {
    sdkAppId,
    userSig: sig,
    expire
  };
}
