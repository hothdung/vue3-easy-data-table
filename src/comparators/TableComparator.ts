import { Dayjs } from "dayjs";

export function sortByNumber(numberA: number, numberB: number, isDescending: boolean): number {
  return isDescending ? numberB - numberA : numberA - numberB;
}

export function sortByString(stringA: string, stringB: string, isDescending: boolean): number {
  return isDescending
    ? stringB.toLowerCase().localeCompare(stringA.toLowerCase())
    : stringA.toLowerCase().localeCompare(stringB.toLowerCase());
}

export function sortByStatus(
  statusOrder: string[],
  valueA: string,
  valueB: string,
  isDescending: boolean
): number {
  return isDescending
    ? statusOrder.indexOf(valueB.toLowerCase()) -
        statusOrder.indexOf(valueA.toLowerCase())
    : statusOrder.indexOf(valueA.toLowerCase()) -
        statusOrder.indexOf(valueB.toLowerCase());
}

const compareDayjs = (dayjs1: Dayjs, dayjs2: Dayjs): number => {
  if (dayjs1.isSame(dayjs2)) {
    return 0;
  }
  return dayjs1.isBefore(dayjs2) ? -1 : 1;
};

export function sortByDayjs(dateA: Dayjs, dateB: Dayjs, isDescending: boolean): number {
  const dayA = isDescending ? dateA : dateB;
  const dayB = isDescending ? dateB : dateA;

  if (!dayA.isValid()) {
    return -1;
  }
  if (!dayB.isValid()) {
    return 1;
  }
  return compareDayjs(dayA, dayB);
}