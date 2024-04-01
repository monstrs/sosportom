import type { ReactNode }       from 'react'

import type { layoutSprinkles } from './sprinkles.css.js'

export type LayoutSprinklesProps = Parameters<typeof layoutSprinkles>[0]

export interface LayoutProps extends LayoutSprinklesProps {
  children?: ReactNode
  style?: Record<string, string>
}
