export default function lastPrice(
  regularPriceResult,
  christmasEventResult,
  weekDayEventResult,
  weekendEventResult,
  specialEventResult
) {
  const disccount =
    christmasEventResult +
    weekDayEventResult +
    weekendEventResult +
    specialEventResult;

  return regularPriceResult - disccount;
}
