import type { VideoStandEvent }        from '../interfaces/index.js'

import { createStore }                 from 'effector'

import { videoStandEventsLoadedEvent } from '../events/index.js'

export const $videoStandEvents = createStore<{
  current?: VideoStandEvent
  upcoming?: VideoStandEvent
}>({}, { sid: 'videostand-events' })

$videoStandEvents.on(videoStandEventsLoadedEvent, (_, result: Array<VideoStandEvent>) => {
  const [current, upcoming] = result.sort((a, b) => a.dt_start.getTime() - b.dt_start.getTime())

  return {
    current,
    upcoming,
  }
})
