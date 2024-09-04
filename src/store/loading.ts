import {create} from 'zustand'

interface loadingBoolean {
  load: boolean
  onLoading: () => void
  offLoading: () => void
}

export const isLoadingStore = create<loadingBoolean>(set => ({
  load: false,
  onLoading: () => {
    set({load: true})
  },
  offLoading: () => {
    set({load: false})
  },
}))
