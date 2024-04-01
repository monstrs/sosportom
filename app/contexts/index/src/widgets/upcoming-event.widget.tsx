'use client'

import type { ReactElement } from 'react'

import React                 from 'react'

import { Column }            from '@ui/layout'
import { Layout }            from '@ui/layout'
import { Period }            from '@ui/period'
import { Text }              from '@ui/text'

import { useUpcomingEvent }  from '../hooks/index.js'

export const UpcomingEventWidget = (): ReactElement | null => {
  const upcomingEvent = useUpcomingEvent()

  if (!upcomingEvent) {
    return null
  }

  return (
    <Column>
      <Layout flexGrow={1} />
      <Layout justifyContent='center' mb='0.5x'>
        <Period start={upcomingEvent.dt_start} end={upcomingEvent.dt_end} fontSize='small' />
      </Layout>
      <Layout justifyContent='center'>
        <Text
          display='inline'
          fontSize='regular'
          fontWeight='bold'
          textOverflow='ellipsis'
          overflow='hidden'
          whiteSpace='nowrap'
          textAlign='center'
          width='65%'
          height='3x'
        >
          {upcomingEvent.title}
        </Text>
      </Layout>
      <Layout flexGrow={1} />
    </Column>
  )
}
