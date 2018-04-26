import { monthLabel, daysInMonth } from '../containers/MonthContainer/constants'

export function convertDateToObject(date) {
  if (!(date instanceof Date)) return {}
  return {
    date: date.getDate(),
    month: date.getMonth(),
    monthLabel: monthLabel[date.getMonth()],
    year: date.getFullYear()
  }
}

export function checkIfLeapYear(year) {
  if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
    return true
  }
  return false
}

export function getDaysInMonth(month, year) {
  if (month === 1 && checkIfLeapYear(year)) {
    return 29
  } else if (month === 1 && !checkIfLeapYear(year)) {
    return 28
  }
  return daysInMonth[month]
}

export function getDayId({ date, month, year }) {
  return `${date}-${month}-${year}`
}

export function getTimeOrder({ hour = 0, minute = 0 }){
  return hour * 60 + minute
}