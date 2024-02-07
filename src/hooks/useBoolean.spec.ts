import { expect, describe, it } from 'vitest'
import {renderHook, act} from '@testing-library/react'


import { useBoolean } from './useBoolean'

describe("useBoolean suite test", () =>{

  it("Should false on default first render", () =>{
    const {result} = renderHook(() => useBoolean())
    
    const [defaultValue] = result.current

     expect(defaultValue).toBe(false)
  } )
  
  it("Should is true when pass default value true", () => {
     const { result } = renderHook(() => useBoolean(true))
   
     const [ defaultValue ] = result.current
      expect(defaultValue).toBe(true)
  })

 it("Should change a true value on request change true function",() => {
   
    const { result } = renderHook(() => useBoolean())

    const [, currentChangeTrueFunc ] = result.current
   
    act(() => {
      currentChangeTrueFunc()
    })

     expect(result.current[0]).toBe(true)
  })
 
 it("Should set value false on change false function", () => {
     const {result} = renderHook(() => useBoolean(true))
     
     const [,, setFalse] = result.current
     
      act(() => {
      setFalse()
    })

    expect(result.current[0]).toBe(false)
  })

})
