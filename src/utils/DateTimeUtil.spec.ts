import { describe, it, expect } from 'vitest'
import { DateTimeUtil } from './DateTime.util'

describe("DateTimeUtil", () => {

  it("should return days of week", () => {
    const days = DateTimeUtil.genDaysOfWeek()
    expect(days.length).toBe(7)
  })

  it("Should format day of week", () => {

    const expected = [
      'seg.', 'ter.',
      'qua.', 'qui.',
      'sex.', 'sáb.',
      'dom.'
    ]
    const result = []

    const days = DateTimeUtil.genDaysOfWeek()

    for (const day of days) {
      result.push(DateTimeUtil.formatDayOfWeek(day))
    }

    expect(result).toStrictEqual(expected)
  })

})