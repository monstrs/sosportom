import type { ReactElement } from 'react'

import { memo }              from 'react'
import React                 from 'react'

import { Row }               from '@ui/layout'
import { Layout }            from '@ui/layout'
import { Text }              from '@ui/text'

export interface ClockTimeProps {
  hours: number
  minutes: number
}

export const ClockTime = memo(
  ({ hours, minutes }: ClockTimeProps): ReactElement => (
    <Row>
      <Layout>
        <Text fontSize='great' fontWeight='bold'>
          {hours}
        </Text>
      </Layout>
      <Layout>
        <Text fontSize='great' fontWeight='bold'>
          :
        </Text>
      </Layout>
      <Layout>
        <Text fontSize='great' fontWeight='bold'>
          {/* eslint-disable react/jsx-no-leaked-render */}
          {minutes < 10 ? `0${minutes}` : minutes}
        </Text>
      </Layout>
    </Row>
  )
)
