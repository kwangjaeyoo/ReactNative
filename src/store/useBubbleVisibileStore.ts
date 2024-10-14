import {create} from 'zustand'

interface IShow {
  show: boolean
  showBubble: () => void
  hideBubble: () => void
}

export const useBubbleVisibileStore = create<IShow>(set => ({
  show: false,
  showBubble: () => {
    set({show: true})
  },
  hideBubble: () => {
    set({show: false})
  },
}))
