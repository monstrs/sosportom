import { differenceInSeconds } from 'date-fns'
import { differenceInMinutes } from 'date-fns'
import { differenceInHours }   from 'date-fns'
import { differenceInDays }    from 'date-fns'
import { useState }            from 'react'

import { useBrowserEffect }    from './use-browser-effect.hook.js'

export interface CountDown {
  days: number
  hours: number
  minutes: number
  seconds: number
}

const getCountDown = (to: Date): CountDown => {
  const now = new Date()

  const diffDays = differenceInDays(to, now)
  const diffHours = differenceInHours(to, now)
  const diffMinutes = differenceInMinutes(to, now)
  const diffSeconds = differenceInSeconds(to, now)

  return {
    days: diffDays > 7 ? diffDays % 7 : diffDays,
    hours: diffHours > 24 ? diffHours % 24 : diffHours,
    minutes: diffMinutes > 60 ? diffMinutes % 60 : diffMinutes,
    seconds: diffSeconds > 60 ? diffSeconds % 60 : diffSeconds,
  }
}

export const useCountDown = (to: Date): CountDown => {
  const [countDown, setCountDown] = useState(getCountDown(to))

  useBrowserEffect(() => {
    const interval = setInterval(() => {
      setCountDown(getCountDown(to))
    }, 1000)

    return () => {
      clearInterval(interval)
    }
  }, [to, setCountDown])

  return countDown
}
