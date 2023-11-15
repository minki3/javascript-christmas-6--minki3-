export default function badge(price) {
  if (price >= 20000) return "산타";
  if (price >= 10000) return "트리";
  return price >= 5000 ? "별" : "없음";
}
