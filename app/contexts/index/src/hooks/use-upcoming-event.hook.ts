import type { VideoStandEvent } from '../interfaces/index.js'

import { useUnit }              from 'effector-react'

import { $videoStandEvents }    from '../stores/index.js'

export const useUpcomingEvent = (): VideoStandEvent | undefined =>
  useUnit($videoStandEvents).upcoming
