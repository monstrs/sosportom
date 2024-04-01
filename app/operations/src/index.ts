import type { TypedDocumentNode } from '@graphql-typed-document-node/core'

import { parse }                  from 'graphql'
import { request }                from 'graphql-request'
import { gql }                    from 'graphql-request'

const document: TypedDocumentNode<
  {
    videostandEvents: {
      current_and_upcoming: Array<{
        id: string
        title: string
        is_main: boolean
        dt_start: string
        dt_end: string
        dt_create: string
      }>
      finished: Array<{
        id: string
        title: string
        is_main: boolean
        dt_start: string
        dt_end: string
        dt_create: string
      }>
    }
  },
  Record<string, string>
> = parse(gql`
  query videostandEvents($videostand_id: ID!) {
    videostandEvents(videostand_id: $videostand_id) {
      current_and_upcoming {
        id
        title
        is_main
        dt_start
        dt_end
        dt_create
      }
      finished {
        id
        title
        is_main
        dt_start
        dt_end
        dt_create
      }
    }
  }
`)

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types, @typescript-eslint/explicit-function-return-type
export const getVideoStandEvents = async (videostandId: string) =>
  request('https://beta.sosportom.ru/graphql/', document, {
    videostand_id: videostandId,
  })
