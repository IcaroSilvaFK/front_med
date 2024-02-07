import { describe, it, expect } from 'vitest'

import { NumberUtil  } from './Number.util'


describe("NumberUtil test", () => {
  it("Should format currency number",() =>{
    const expected = 'R$ 10,00'

    const amount = NumberUtil.formatCurrency(10)

    console.log(amount)
    expect(amount).toBe(expected)
  })
})
