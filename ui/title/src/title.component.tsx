'use client'

import type { ReactElement } from 'react'

import { useRef }            from 'react'
import { useState }          from 'react'
import { useEffect }         from 'react'
import React                 from 'react'

import { Column }            from '@ui/layout'
import { Layout }            from '@ui/layout'
import { Text }              from '@ui/text'

export interface TitleProps {
  children: string
}

export const Title = ({ children }: TitleProps): ReactElement => {
  const [lines, setLines] = useState<{ first: string; second?: string } | undefined>(undefined)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (ref.current) {
      if (children.length * 26 < ref.current.scrollWidth * 0.65) {
        setLines({ first: children })
      } else {
        const { line: firstLine } = children.split(' ').reduce(
          (result, word) => {
            if (result.complete) {
              return result
            }

            if (`${result.line} ${word}`.length * 26 <= ref.current!.scrollWidth * 0.65) {
              return {
                line: `${result.line} ${word}`,
                complete: false,
              }
            }

            return {
              ...result,
              complete: true,
            }
          },
          { line: '', complete: false }
        )

        setLines({
          first: firstLine,
          second: children.replace(firstLine.trim(), ''),
        })
      }
    }
  }, [ref, children])

  return (
    <div ref={ref} style={{ width: '100%' }}>
      <Column alignItems='center'>
        <Layout width={['100%', '65%', '65%']}>
          <Text
            display='inline'
            fontSize='standard'
            fontWeight='bold'
            textAlign='center'
            width='100%'
            maxHeight='8x'
          >
            {lines?.first}
          </Text>
        </Layout>
        <Layout mt='1x' width='65%'>
          {/* eslint-disable-next-line react/jsx-no-leaked-render */}
          {lines?.second && (
            <Text
              display='inline'
              fontSize='standard'
              fontWeight='bold'
              textOverflow='ellipsis'
              overflow='hidden'
              whiteSpace='nowrap'
              textAlign='center'
              width='100%'
              maxHeight='8x'
            >
              {lines.second}
            </Text>
          )}
        </Layout>
      </Column>
    </div>
  )
}
