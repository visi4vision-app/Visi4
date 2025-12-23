import TRTC from 'trtc-js-sdk';

const client = TRTC.createClient({
  mode: 'live',
  sdkAppId: Number(process.env.TENCENT_SDK_APP_ID),
  userId: process.env.TENCENT_USER_ID,
  userSig: process.env.TENCENT_USER_SIG,
});

export async function joinLiveRoom(roomId) {
  await client.join({ roomId });
  await client.publish();
  console.log('✅ Live started with Tencent RTC');
}

export async function leaveLiveRoom() {
  await client.leave();
  console.log('❌ Live stopped');
}
