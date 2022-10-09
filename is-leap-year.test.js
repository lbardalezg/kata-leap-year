const isLeapYear = require('./is-leap-year')

describe('A year is not a leap year if not divisible by 4', () => {
    test('1 is not a leap year', () => {
        const year = 1
        const result = isLeapYear(year)
        expect(result).toBe(false)
    })
})