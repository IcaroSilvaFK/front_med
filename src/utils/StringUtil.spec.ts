import { expect, it, describe } from 'vitest'

import { StringUtil } from './String.util'

describe("StringUtil", () => {

  it("Should capitalize text", () => {
    const text = 'hello'
    const result = StringUtil.capitalize(text)
    expect(result).toBe('Hello')
  })
})