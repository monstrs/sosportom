import type { ReactElement }      from 'react'

import { EffectorNext }           from '@effector/next'
import { allSettled }             from 'effector'
import { fork }                   from 'effector'
import { serialize }              from 'effector'
import React                      from 'react'

import { IndexPage }              from '@app/index-context'
import { loadVideoStandEventsFx } from '@app/index-context'

export default async (): Promise<ReactElement> => {
  const scope = fork()

  await allSettled(loadVideoStandEventsFx, { scope })

  return (
    <EffectorNext values={serialize(scope)}>
      <IndexPage />
    </EffectorNext>
  )
}

export const dynamic = 'force-dynamic'
