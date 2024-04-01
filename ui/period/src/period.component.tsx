import type { TextProps }    from '@ui/text'
import type { ReactElement } from 'react'

import { FormattedDate }     from 'react-intl'
import React                 from 'react'

import { Text }              from '@ui/text'

export interface PeriodProps {
  start: Date
  end: Date
  fontSize: TextProps<'span'>['fontSize']
}

export const Period = ({ start, end, fontSize }: PeriodProps): ReactElement => {
  if (start.getFullYear() !== end.getFullYear()) {
    return (
      <Text fontSize={fontSize} fontWeight='bold' color='gray'>
        <FormattedDate value={start} day='2-digit' month='2-digit' year='numeric' />
        -
        <FormattedDate value={end} day='2-digit' month='2-digit' year='numeric' />
      </Text>
    )
  }

  if (start.getMonth() !== end.getMonth()) {
    return (
      <Text fontSize={fontSize} fontWeight='bold' color='gray'>
        <FormattedDate value={start} day='2-digit' month='2-digit' />
        -
        <FormattedDate value={end} day='2-digit' month='2-digit' year='numeric' />
      </Text>
    )
  }

  return (
    <Text fontSize={fontSize} fontWeight='bold' color='gray'>
      <FormattedDate value={start} day='2-digit' />
      -
      <FormattedDate value={end} day='2-digit' month='2-digit' year='numeric' />
    </Text>
  )
}
