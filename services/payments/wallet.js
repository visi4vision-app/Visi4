export function calculateRevenue(amount) {
  return {
    creator: amount * 0.7,
    platform: amount * 0.3,
  };
}
