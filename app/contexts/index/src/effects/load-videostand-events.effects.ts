import type { VideoStandEvent }        from '../interfaces/index.js'

import { createEffect }                from 'effector'
import { sample }                      from 'effector'

import * as operations                 from '@app/operations'

import { videoStandEventsLoadedEvent } from '../events/index.js'

export const loadVideoStandEventsFx = createEffect(async (): Promise<Array<VideoStandEvent>> => {
  const { videostandEvents } = await operations.getVideoStandEvents('6')

  /*
  return [
    {
      id: '5',
      is_main: false,
      title: 'ЗВЁЗДЫ СОВРЕМЕННОЙ МИРОВОЙ ГИМНАСТИКИ НА ОДНОМ ПОМОСТЕ',
      dt_start: new Date(2024, 3, 5),
      dt_end: new Date(2024, 3, 7),
      dt_create: new Date(),
    },
  ]
  */

  return videostandEvents.current_and_upcoming.map((videoStandEvent) => ({
    ...videoStandEvent,
    dt_start: new Date(videoStandEvent.dt_start),
    dt_end: new Date(videoStandEvent.dt_end),
    dt_create: new Date(videoStandEvent.dt_create),
  }))
})

sample({
  clock: loadVideoStandEventsFx.done,
  filter({ result }) {
    return !!result
  },
  fn({ result }) {
    return result
  },
  target: videoStandEventsLoadedEvent,
})
