export default function feedScore({ time_spent = 0, likes = 0, comments = 0, shares = 0 }) {
  return (
    time_spent * 0.4 +
    likes * 2 +
    comments * 3 +
    shares * 5
  );
}
