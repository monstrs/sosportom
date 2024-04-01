'use client'

import './root.css.js'

import type { ReactElement } from 'react'
import type { ReactNode }    from 'react'

import { EffectorNext }      from '@effector/next'
import { IntlProvider }      from 'react-intl'
import React                 from 'react'

export interface RootProvidersProps {
  children: ReactNode
}

export const RootProviders = ({ children }: RootProvidersProps): ReactElement => (
  <EffectorNext>
    <IntlProvider locale='ru' defaultLocale='ru' messages={{}}>
      {children}
    </IntlProvider>
  </EffectorNext>
)
