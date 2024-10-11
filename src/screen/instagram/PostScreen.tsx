import {useCallback} from 'react'
import {Dimensions, FlatList, TouchableOpacity, View} from 'react-native'
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated'

import {RouteProp, useNavigation, useRoute} from '@react-navigation/native'
import {NativeStackNavigationProp} from '@react-navigation/native-stack'

import {NaviParamList} from '../../navi/StackNavigation'
import Header from '../Header'
import {IMainImage} from './MainImageView'

const {width: WIDTH_SCREEN} = Dimensions.get('window')

type RouteParams = {
  PostScreen: {
    data: IMainImage
  }
}

type NavigationProp = NativeStackNavigationProp<NaviParamList, 'detailScreen'>

const PostScreen = () => {
  const router = useRoute<RouteProp<RouteParams, 'PostScreen'>>()
  const {data} = router.params

  const navigation = useNavigation<NavigationProp>()
  const avatarOpacity = useSharedValue(1)

  const avatarAnimated = useAnimatedStyle(() => ({
    opacity: avatarOpacity.value,
  }))

  const onBackCallback = useCallback(() => {
    avatarOpacity.value = withTiming(1, {duration: 300})
  }, [avatarOpacity])

  const onNavigateDetail = useCallback(
    (currentData: {id: number; image: string}) => {
      avatarOpacity.value = withTiming(0, {duration: 300})
      navigation.navigate('detailScreen', {
        data: currentData,
        parentId: data.id,
        callback: onBackCallback,
        from: 'Post',
      })
    },
    [avatarOpacity, data.id, navigation, onBackCallback],
  )

  return (
    <View
      className="flex-1 bg-[#262626]"
      key={'PostDetail' + data.id.toString()}>
      <Header isBack bgColor="bg-[#262626]" />
      <Animated.Image
        className="w-[100px] h-[100px] rounded-full mt-5 self-center"
        style={[avatarAnimated]}
        src={data.avatar}
        resizeMode={'center'}
      />
      <View className="mt-5">
        <FlatList
          numColumns={3}
          data={data.images}
          keyExtractor={(_, index) => index.toString()}
          renderItem={({item}) => {
            return (
              <TouchableOpacity
                onPress={() => onNavigateDetail(item)}
                activeOpacity={0.9}>
                <Animated.View
                  sharedTransitionTag={'Post' + item.id.toString()}>
                  <Animated.Image
                    src={item.image}
                    style={{
                      width: WIDTH_SCREEN / 3,
                      height: (WIDTH_SCREEN / 3) * 1.5,
                    }}
                    sharedTransitionTag={
                      'Post' + item.id.toString() + data.id.toString()
                    }
                  />
                </Animated.View>
              </TouchableOpacity>
            )
          }}
        />
      </View>
    </View>
  )
}

export default PostScreen
