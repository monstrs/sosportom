import type { ReactElement } from 'react'
import type { ReactNode }    from 'react'

import { PT_Sans }           from 'next/font/google'
import { Open_Sans }         from 'next/font/google'
import React                 from 'react'

import { RootProviders }     from './root.providers.jsx'

const ptSans = PT_Sans({ subsets: ['cyrillic'], weight: ['400', '700'] })
const openSans = Open_Sans({ subsets: ['cyrillic'], weight: ['400'] })

export type RootLayoutProps = {
  children: ReactNode
}

export const RootLayout = ({ children }: RootLayoutProps): ReactElement => (
  <html className={`${openSans.className} ${ptSans.className}`}>
    <body>
      <RootProviders>{children}</RootProviders>
    </body>
  </html>
)
