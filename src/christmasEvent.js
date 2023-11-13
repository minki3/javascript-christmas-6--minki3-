export default function christmasEvent(date, price) {
  let result = 0;
  if (date <= 25 && price >= 10000) {
    result = 1000 + (date - 1) * 100;
  }
  if (date > 25) return null;
  return result;
}
