'use client'

import type { ReactElement } from 'react'

import React                 from 'react'

import { Row }               from '@ui/layout'
import { Layout }            from '@ui/layout'
import { useCountDown }      from '@ui/hooks'

import { CountDownDays }     from './countdown.days.component.jsx'
import { CountDownHours }    from './countdown.hours.component.jsx'
import { CountDownMinutes }  from './countdown.minutes.component.jsx'
import { CountDownSeconds }  from './countdown.seconds.component.jsx'

export interface CountDownProps {
  to: Date
}

export const CountDown = ({ to }: CountDownProps): ReactElement => {
  const { days, hours, minutes, seconds } = useCountDown(to)

  return (
    <Row alignItems='center' justifyContent='center' flexDirection={['column', 'row', 'row']}>
      <Layout mx='0.5x' my='1x' flexBasis={['100%', 'auto', 'auto']}>
        <CountDownDays value={days} />
      </Layout>
      <Layout mx='0.5x' my='1x' flexBasis={['100%', 'auto', 'auto']}>
        <CountDownHours value={hours} />
      </Layout>
      <Layout mx='0.5x' my='1x' flexBasis={['100%', 'auto', 'auto']}>
        <CountDownMinutes value={minutes} />
      </Layout>
      <Layout mx='0.5x' my='1x' flexBasis={['100%', 'auto', 'auto']}>
        <CountDownSeconds value={seconds} />
      </Layout>
    </Row>
  )
}
