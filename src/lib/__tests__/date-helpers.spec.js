import { convertDateToObject, checkIfLeapYear, getDaysInMonth } from '../date-helpers'

describe('date-helpers.js', () => {
  describe('convertDateToObject()', () => {
    it('should convert a given date to object',() => {
      const dateObj = convertDateToObject(new Date(2017, 7, 23))
      expect(dateObj).toEqual({
        date: 23,
        month: 7,
        monthLabel: 'August',
        year: 2017
      })
    })
    it('should return {} if not a valid date', () => {
      expect(convertDateToObject({})).toEqual({})
    })
  })
  describe('checkIfLeapYear()', () => {
    it('2017 should not be leap year', () => {
      expect(checkIfLeapYear(2017)).toBe(false)
    })
    it('2018 should not be leap year', () => {
      expect(checkIfLeapYear(2018)).toBe(false)
    })
    it('2019 should not be leap year', () => {
      expect(checkIfLeapYear(2019)).toBe(false)
    })
    it('2020 should be leap year', () => {
      expect(checkIfLeapYear(2020)).toBe(true)
    })
    it('2000 should be leap year', () => {
      expect(checkIfLeapYear(2000)).toBe(true)
    })
    it('2100 should not be leap year', () => {
      expect(checkIfLeapYear(2100)).toBe(false)
    })
  })
  describe('getDaysInMonth()', () => {
    it('should return 30 for April, 2018', () => {
      expect(getDaysInMonth(3, 2018)).toBe(30)
    })
    it('should return 31 for May, 2018', () => {
      expect(getDaysInMonth(4, 2018)).toBe(31)
    })
    it('should return 28 for Feb, 2019', () => {
      expect(getDaysInMonth(1, 2019)).toBe(28)
    })
    it('should return 29 for Feb, 2020', () => {
      expect(getDaysInMonth(1, 2020)).toBe(29)
    })
    
  })
})