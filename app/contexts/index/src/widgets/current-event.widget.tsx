'use client'

import type { ReactElement } from 'react'

import React                 from 'react'

import { CountDown }         from '@ui/countdown'
import { Column }            from '@ui/layout'
import { Layout }            from '@ui/layout'
import { Period }            from '@ui/period'
import { Text }              from '@ui/text'
import { Title }             from '@ui/title'

import { useCurrentEvent }   from '../hooks/index.js'

export const CurrentEventWidget = (): ReactElement | null => {
  const currentEvent = useCurrentEvent()

  if (!currentEvent) {
    return null
  }

  return (
    <Column py='2x' background='blue'>
      <Layout flexGrow={1}>
        <Column>
          <Layout justifyContent='center' mb='1x'>
            <Period start={currentEvent.dt_start} end={currentEvent.dt_end} fontSize='little' />
          </Layout>
          <Layout minHeight='12x' justifyContent='center'>
            <Title>{currentEvent.title}</Title>
          </Layout>
        </Column>
      </Layout>
      <Layout flexGrow={1} justifyContent='center'>
        {currentEvent.dt_start.getTime() < Date.now() ? (
          <Column alignItems='center'>
            <Layout background='green' px='4x' py='4x'>
              <Text fontSize='medium' fontWeight='bold'>
                Идет сейчас
              </Text>
            </Layout>
          </Column>
        ) : (
          <CountDown to={currentEvent.dt_start} />
        )}
      </Layout>
      <Layout flexGrow={1} />
    </Column>
  )
}
