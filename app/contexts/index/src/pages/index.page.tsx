import type { ReactElement }   from 'react'

import React                   from 'react'

import { Clock }               from '@ui/clock'
import { Column }              from '@ui/layout'
import { Layout }              from '@ui/layout'

import { CurrentEventWidget }  from '../widgets/index.js'
import { UpcomingEventWidget } from '../widgets/index.js'

export const IndexPage = (): ReactElement => (
  <Column height='100%'>
    <Layout py='2x' flexBasis='30%' alignItems='center'>
      <Clock />
    </Layout>
    <Layout flexBasis='40%'>
      <CurrentEventWidget />
    </Layout>
    <Layout py='2x' flexBasis='30%'>
      <UpcomingEventWidget />
    </Layout>
  </Column>
)
