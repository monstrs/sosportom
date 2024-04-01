import type { ReactElement } from 'react'

import { FormattedDate }     from 'react-intl'
import { memo }              from 'react'
import React                 from 'react'

import { Row }               from '@ui/layout'
import { Layout }            from '@ui/layout'
import { Text }              from '@ui/text'
import { Space }             from '@ui/text'

export interface ClockDayProps {
  day: number
  month: number
  year: number
}

export const ClockDay = memo(
  ({ day, month, year }: ClockDayProps): ReactElement => (
    <Row>
      <Layout>
        <Text fontSize='normal' fontWeight='bold'>
          <FormattedDate value={new Date(year, month, day)} month='long' day='numeric' />
        </Text>
      </Layout>
      <Space />
      <Layout>
        <Text>&#x2022;</Text>
      </Layout>
      <Layout>
        <Space />
        <Text fontSize='normal' fontWeight='bold'>
          <FormattedDate value={new Date()} weekday='long' />
        </Text>
      </Layout>
    </Row>
  )
)
