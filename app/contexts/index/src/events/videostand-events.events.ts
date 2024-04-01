import type { VideoStandEvent } from '../interfaces/index.js'

import { createEvent }          from 'effector'

export const videoStandEventsLoadedEvent = createEvent<Array<VideoStandEvent>>()
