export default function eventDiscount(
  christmasEventResult,
  weekDayEventResult,
  weekendEventResult,
  specialEventResult,
  presentation
) {
  const result =
    (presentation ? 25000 : 0) +
    christmasEventResult +
    weekDayEventResult +
    weekendEventResult +
    specialEventResult;
  return result;
}
