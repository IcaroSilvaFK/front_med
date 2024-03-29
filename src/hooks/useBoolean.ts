'use client'
import { useCallback, useState } from "react";

export function useBoolean(defaultValue = false): [boolean, () => void, () => void, () => void] {

  const [value, setValue] = useState(defaultValue)



  const handleClose = useCallback(() => {
    setValue(false)
  }, [])

  const handleOpen = useCallback(() => {
    setValue(true)
  }, [])

  const handleToggle = useCallback(() => {
    setValue(prev => !prev)
  }, [])


  return [value, handleOpen, handleClose, handleToggle]
}
