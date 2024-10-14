import {create} from 'zustand'

interface loadingState {
  load: boolean
  onLoading: () => void
  offLoading: () => void
}

export const useLoadingStore = create<loadingState>(set => ({
  load: false,
  onLoading: () => {
    set({load: true})
  },
  offLoading: () => {
    set({load: false})
  },
}))
