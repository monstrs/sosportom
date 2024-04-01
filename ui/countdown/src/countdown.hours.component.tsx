import type { ReactElement } from 'react'

import { FormattedMessage }  from 'react-intl'
import { memo }              from 'react'
import React                 from 'react'

import { Column }            from '@ui/layout'
import { Layout }            from '@ui/layout'
import { Text }              from '@ui/text'

import { CountDownProgress } from './countdown.progress.component.jsx'

export interface CountDownHoursProps {
  value: number
}

export const CountDownHours = memo(
  ({ value }: CountDownHoursProps): ReactElement => (
    <CountDownProgress color='#D62F0D' percentage={(value / 24) * 100}>
      <Column height='100%' alignItems='center' justifyContent='center'>
        <Layout>
          <Text fontSize='huge' fontWeight='bold'>
            {value}
          </Text>
        </Layout>
        <Layout mb='1x'>
          <Text fontSize='average' fontWeight='bold'>
            <FormattedMessage
              id='hours'
              defaultMessage={`{hours, plural, 
              one {час}
              few {часа}
              many {часов}
              other {часов}
            }`}
              values={{
                hours: value,
              }}
            />
          </Text>
        </Layout>
      </Column>
    </CountDownProgress>
  )
)
