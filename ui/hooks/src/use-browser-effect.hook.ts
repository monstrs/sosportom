'use client'

import type { DependencyList } from 'react'
import type { EffectCallback } from 'react'

import { useEffect }           from 'react'

export const useBrowserEffect = (effect: EffectCallback, deps?: DependencyList): void => {
  if (typeof window !== 'undefined') {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(effect, deps)
  }
}
