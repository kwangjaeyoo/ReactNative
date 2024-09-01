import {useEffect, useState} from 'react'
import {Animated, View} from 'react-native'

interface Props {
  progress: number // Value between 0 and 1
}

const LinearProgress: React.FC<Props> = ({progress}: Props) => {
  const [show, setShow] = useState(false)

  useEffect(() => {
    if (progress === 0 || progress === 1) {
      setShow(false)
    } else {
      setShow(true)
    }
  }, [progress])

  if (!show) {
    return null
  }

  return (
    <View className="h-[2px] overflow-hidden bg-[#e0e0df]">
      <Animated.View
        //eslint-disable-next-line react-native/no-inline-styles
        style={{
          backgroundColor: '#0c0cec',
          width: `${progress * 100}%`,
          height: '100%',
        }}
      />
    </View>
  )
}

export default LinearProgress
