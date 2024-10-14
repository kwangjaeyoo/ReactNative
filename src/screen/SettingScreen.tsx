import {useCallback} from 'react'
import {Text, TouchableOpacity} from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'

import {useBubbleVisibileStore} from '../store/useBubbleVisibileStore'
import Header from './Header'

const SettingScreen = () => {
  const showBubble = useBubbleVisibileStore()

  const bubbleSet = useCallback(() => {
    if (showBubble.show) {
      showBubble.hideBubble()
    } else {
      showBubble.showBubble()
    }
  }, [showBubble])

  return (
    <>
      <Header title="SettingScreen" />

      <TouchableOpacity
        className="
          flex-row
          flex
          px-2
          h-[28px]
          items-center"
        activeOpacity={0.5}
        onPress={bubbleSet}>
        <Text>Show React Query Dev Tool Bubble</Text>
        <Icon
          name={showBubble.show ? 'radio-button-on' : 'radio-button-off'}
          size={20}
          className="pl-2"
        />
      </TouchableOpacity>
    </>
  )
}

export default SettingScreen
