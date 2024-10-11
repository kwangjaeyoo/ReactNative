import {useCallback, useState} from 'react'
import {
  Dimensions,
  FlatList,
  Image,
  NativeScrollEvent,
  NativeSyntheticEvent,
  Text,
  TouchableOpacity,
  View,
} from 'react-native'
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated'

import {useNavigation} from '@react-navigation/native'
import {NativeStackNavigationProp} from '@react-navigation/native-stack'

import {NaviParamList} from '../../navi/StackNavigation'

export interface IMainImage {
  id: number
  name: string
  avatar: string
  images: {id: number; image: string}[]
}

const {width: WIDTH_SCREEN} = Dimensions.get('window')

type NavigationProp = NativeStackNavigationProp<
  NaviParamList,
  'postScreen',
  'detailScreen'
>

const MainImageView: React.FC<IMainImage> = ({id, images, avatar, name}) => {
  const navigation = useNavigation<NavigationProp>()

  const [currentImageIndex, setCurrentImageIndex] = useState<number>(0)
  const avatarOpacity = useSharedValue(1)

  const handleScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    const contentOffsetX = event.nativeEvent.contentOffset.x
    const imageIndex = Math.floor(contentOffsetX / WIDTH_SCREEN)
    setCurrentImageIndex(imageIndex)
  }

  const avatarAnimated = useAnimatedStyle(() => ({
    opacity: avatarOpacity.value,
  }))

  const onBackCallback = useCallback(() => {
    avatarOpacity.value = withTiming(1, {duration: 300})
  }, [avatarOpacity])

  const onNavigateDetail = useCallback(
    (data: {id: number; image: string}) => {
      avatarOpacity.value = withTiming(0, {duration: 300})
      navigation.navigate('detailScreen', {
        data,
        parentId: id,
        callback: onBackCallback,
        from: 'List',
      })
    },
    [avatarOpacity, id, navigation, onBackCallback],
  )

  return (
    <View className="h-[70vh] w-full relative">
      <TouchableOpacity
        className="absolute z-10 mt-[14px] ml-[14px]"
        onPress={event => {
          event.stopPropagation()
          navigation.navigate('postScreen', {
            data: {
              id,
              images,
              avatar,
              name,
            },
          })
        }}>
        <Animated.View
          style={[
            // eslint-disable-next-line react-native/no-inline-styles
            {flexDirection: 'row', alignItems: 'center'},
            avatarAnimated,
          ]}>
          <Image
            className="h-[50px] w-[50px] rounded-full mr-[10px]"
            src={avatar}
            resizeMode="center"
          />
          <Text>{name}</Text>
        </Animated.View>
      </TouchableOpacity>

      <FlatList
        horizontal
        decelerationRate={0}
        snapToInterval={WIDTH_SCREEN}
        onScroll={handleScroll}
        snapToAlignment={'center'}
        pagingEnabled
        scrollEventThrottle={200}
        contentContainerStyle={{width: WIDTH_SCREEN * images.length}}
        showsHorizontalScrollIndicator={false}
        data={images}
        renderItem={({item}) => (
          <TouchableOpacity
            key={item.id.toString()}
            activeOpacity={0.9}
            onPress={() => onNavigateDetail(item)}>
            <Animated.View sharedTransitionTag={'List' + item.id.toString()}>
              <Animated.Image
                src={item.image}
                resizeMode="cover"
                className="h-full w-screen"
                sharedTransitionTag={'List' + item.id.toString() + id}
              />
            </Animated.View>
          </TouchableOpacity>
        )}
      />
      <View
        className="
          absolute
          bottom-[4px]
          w-full
          flex-row
          justify-center
        ">
        {images.map((image, index) => (
          <View
            key={index}
            className={`
              h-[4px] 
              w-[4px]
              rounded-full 
              m-[6px]
              ${currentImageIndex === index ? 'bg-black' : 'bg-slate-500'}`}
          />
        ))}
      </View>
    </View>
  )
}

export default MainImageView
