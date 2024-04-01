'use client'

import type { ReactElement } from 'react'

import React                 from 'react'

import { Column }            from '@ui/layout'
import { Layout }            from '@ui/layout'
import { useInterval }       from '@ui/hooks'

import { ClockDay }          from './clock-day.component.jsx'
import { ClockTime }         from './clock-time.component.jsx'

export const Clock = (): ReactElement => {
  const { year, month, day, hours, minutes } = useInterval()

  return (
    <Column alignItems='center'>
      <Layout>
        <ClockTime hours={hours} minutes={minutes} />
      </Layout>
      <Layout mt='1x'>
        <ClockDay year={year} month={month} day={day} />
      </Layout>
    </Column>
  )
}
