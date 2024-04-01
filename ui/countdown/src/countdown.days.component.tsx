import type { ReactElement } from 'react'

import { FormattedMessage }  from 'react-intl'
import { memo }              from 'react'
import React                 from 'react'

import { Column }            from '@ui/layout'
import { Layout }            from '@ui/layout'
import { Text }              from '@ui/text'

import { CountDownProgress } from './countdown.progress.component.jsx'

export interface CountDownDaysProps {
  value: number
}

export const CountDownDays = memo(
  ({ value }: CountDownDaysProps): ReactElement => (
    <CountDownProgress color='#0062B5' percentage={(value / 7) * 100}>
      <Column height='100%' alignItems='center' justifyContent='center'>
        <Layout>
          <Text fontSize='huge' fontWeight='bold'>
            {value}
          </Text>
        </Layout>
        <Layout mb='1x'>
          <Text fontSize='average' fontWeight='bold'>
            <FormattedMessage
              id='days'
              defaultMessage={`{days, plural, 
              one {день}
              few {дня}
              many {дней}
              other {дней}
            }`}
              values={{
                days: value,
              }}
            />
          </Text>
        </Layout>
      </Column>
    </CountDownProgress>
  )
)
