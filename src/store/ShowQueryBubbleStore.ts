import {create} from 'zustand'

interface IShow {
  show: boolean
  onShow: () => void
  hiddenShow: () => void
}

export const showReactQueryBubbleStore = create<IShow>(set => ({
  show: false,
  onShow: () => {
    set({show: true})
  },
  hiddenShow: () => {
    set({show: false})
  },
}))
