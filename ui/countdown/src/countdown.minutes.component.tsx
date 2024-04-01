import type { ReactElement } from 'react'

import { FormattedMessage }  from 'react-intl'
import { memo }              from 'react'
import React                 from 'react'

import { Column }            from '@ui/layout'
import { Layout }            from '@ui/layout'
import { Text }              from '@ui/text'

import { CountDownProgress } from './countdown.progress.component.jsx'

export interface CountDownMinutesProps {
  value: number
}

export const CountDownMinutes = memo(
  ({ value }: CountDownMinutesProps): ReactElement => (
    <CountDownProgress color='#FDAE47' percentage={(value / 60) * 100}>
      <Column height='100%' alignItems='center' justifyContent='center'>
        <Layout>
          <Text fontSize='huge' fontWeight='bold'>
            {value}
          </Text>
        </Layout>
        <Layout mb='1x'>
          <Text fontSize='average' fontWeight='bold'>
            <FormattedMessage
              id='minutes'
              defaultMessage={`{minutes, plural, 
              one {минута}
              few {минут}
              many {минут}
              other {минут}
            }`}
              values={{
                minutes: value,
              }}
            />
          </Text>
        </Layout>
      </Column>
    </CountDownProgress>
  )
)
