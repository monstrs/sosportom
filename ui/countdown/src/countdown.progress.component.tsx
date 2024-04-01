import type { ReactElement } from 'react'
import type { ReactNode }    from 'react'

import React                 from 'react'

export interface CountDownProgressProps {
  children: ReactNode
  color: string
  percentage: number
}

export const CountDownProgress = ({
  children,
  color,
  percentage = 0,
}: CountDownProgressProps): ReactElement => {
  const dashArray = 71 * Math.PI * 2
  const dashOffset = dashArray * -1 + (dashArray * percentage) / 100

  return (
    <div style={{ position: 'relative', width: 150, height: 150 }}>
      <svg
        width='150'
        height='150'
        viewBox='0 0 150 150'
        style={{
          position: 'absolute',
          top: 0,
          right: 0,
          left: 0,
          bottom: 0,
          transform: 'rotate(-90deg)',
        }}
      >
        <circle
          cx='75'
          cy='75'
          r='71'
          strokeWidth={8}
          fill='transparent'
          stroke={color}
          style={{ strokeDasharray: dashArray, strokeDashoffset: dashOffset }}
        />
      </svg>
      {children}
    </div>
  )
}
