import {useMemo} from 'react'
import {View} from 'react-native'
import {Gesture, GestureDetector} from 'react-native-gesture-handler'
import Animated, {
  interpolateColor,
  runOnJS,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated'

import {RouteProp, useNavigation, useRoute} from '@react-navigation/native'

import Header from '../Header'

type RouteParams = {
  DetailScreen: {
    data: {id: string; image: string}
    from?: any
    parentId?: number
    callback?: () => void
  }
}

const DetailScreen = () => {
  const navigation = useNavigation()

  const router = useRoute<RouteProp<RouteParams, 'DetailScreen'>>()
  const {data, parentId, callback, from} = router.params

  const translateX = useSharedValue(0)
  const translateY = useSharedValue(0)
  const opacity = useSharedValue(1)
  const scale = useSharedValue(1)

  const gesture = Gesture.Pan()
    .onUpdate(value => {
      translateX.value = value.translationX * 0.8
      translateY.value = value.translationY * 0.8
      const distance = Math.sqrt(
        value.translationX * value.translationX +
          value.translationY * value.translationY,
      )
      const scaleValue = Math.min(Math.max(distance / 100, 1), 0.9)
      scale.value = withTiming(scaleValue, {duration: 300})
    })
    .onEnd(() => {
      if (translateY.value > 50 || translateX.value > 90) {
        goBackFun()
      } else {
        translateX.value = withTiming(0, {duration: 100})
        translateY.value = withTiming(0, {duration: 100})
        scale.value = withTiming(1, {duration: 300})
        opacity.value = withTiming(1, {duration: 400})
      }
    })

  const goBackFun = () => {
    opacity.value = 0
    callback && runOnJS(callback)()
    runOnJS(navigation.goBack)()
  }

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [
      {translateX: translateX.value},
      {translateY: translateY.value},
      {scale: scale.value},
    ],
    backgroundColor: interpolateColor(
      opacity.value,
      [0, 1],
      ['transparent', '#262626'],
    ),
    overflow: 'hidden',
  }))

  const parentTransitionTag = useMemo(() => {
    if (from) {
      return from + data.id.toString()
    }
    return data.id.toString()
  }, [data.id, from])

  const childrenTransitionTag = useMemo(() => {
    if (from) {
      return from + data.id.toString() + parentId?.toString()
    }
    return data.id.toString() + parentId?.toString()
  }, [data.id, parentId, from])

  return (
    <View className="flex-1 bg-[#262626]">
      <Header isBack bgColor="bg-[#262626]" isBackOnClick={goBackFun} />
      <GestureDetector gesture={gesture}>
        <Animated.View
          style={[
            // eslint-disable-next-line react-native/no-inline-styles
            {flex: 1, backgroundColor: '#262626', justifyContent: 'center'},
            animatedStyle,
          ]}
          sharedTransitionTag={parentTransitionTag}>
          <Animated.Image
            sharedTransitionTag={childrenTransitionTag}
            src={data.image}
            className="w-screen aspect-square justify-center"
          />
        </Animated.View>
      </GestureDetector>
    </View>
  )
}

export default DetailScreen
