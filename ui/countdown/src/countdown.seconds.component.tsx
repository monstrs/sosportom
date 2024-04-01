import type { ReactElement } from 'react'

import { FormattedMessage }  from 'react-intl'
import { memo }              from 'react'
import React                 from 'react'

import { Column }            from '@ui/layout'
import { Layout }            from '@ui/layout'
import { Text }              from '@ui/text'

import { CountDownProgress } from './countdown.progress.component.jsx'

export interface CountDownSecondsProps {
  value: number
}

export const CountDownSeconds = memo(
  ({ value }: CountDownSecondsProps): ReactElement => (
    <CountDownProgress color='#51ACD8' percentage={(value / 60) * 100}>
      <Column height='100%' alignItems='center' justifyContent='center'>
        <Layout>
          <Text fontSize='huge' fontWeight='bold'>
            {value}
          </Text>
        </Layout>
        <Layout mb='1x'>
          <Text fontSize='average' fontWeight='bold'>
            <FormattedMessage
              id='seconds'
              defaultMessage={`{seconds, plural, 
              one {секунда}
              few {секунд}
              many {секунд}
              other {секунд}
            }`}
              values={{
                seconds: value,
              }}
            />
          </Text>
        </Layout>
      </Column>
    </CountDownProgress>
  )
)
