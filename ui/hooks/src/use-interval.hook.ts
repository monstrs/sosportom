import { useState }         from 'react'

import { useBrowserEffect } from './use-browser-effect.hook.js'

export interface CurrentDate {
  year: number
  month: number
  day: number
  hours: number
  minutes: number
}

const getCurrentDate = (): CurrentDate => {
  const date = new Date()

  return {
    year: date.getFullYear(),
    month: date.getMonth(),
    day: date.getDate(),
    hours: date.getHours(),
    minutes: date.getMinutes(),
  }
}

export const useInterval = (): CurrentDate => {
  const [currentDate, setCurrentDate] = useState(getCurrentDate())

  useBrowserEffect(() => {
    const interval = setInterval(() => {
      setCurrentDate(getCurrentDate())
    }, 1000)

    return () => {
      clearInterval(interval)
    }
  }, [setCurrentDate])

  return currentDate
}
