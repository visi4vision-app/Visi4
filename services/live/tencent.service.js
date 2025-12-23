// ===============================
// 📡 Tencent RTC (Mock Service)
// ===============================

export function startLive(roomId, userId) {
  console.log("🔴 LIVE STARTED", { roomId, userId });
  return {
    roomId,
    userId,
    status: "LIVE",
  };
}

export function stopLive(roomId) {
  console.log("⛔ LIVE STOPPED", roomId);
  return { status: "STOPPED" };
}
