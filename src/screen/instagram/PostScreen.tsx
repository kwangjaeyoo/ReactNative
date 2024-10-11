import {Dimensions, FlatList, Image, TouchableOpacity, View} from 'react-native'

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

  return (
    <View className="flex-1 bg-[#262626]">
      <Header isBack bgColor="bg-[#262626]" />
      <Image
        className="w-[100px] h-[100px] rounded-full mt-5 self-center"
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
                onPress={() =>
                  navigation.navigate('detailScreen', {data: item})
                }
                activeOpacity={0.9}>
                <Image
                  src={item.image}
                  style={{
                    width: WIDTH_SCREEN / 3,
                    height: (WIDTH_SCREEN / 3) * 1.5,
                  }}
                />
              </TouchableOpacity>
            )
          }}
        />
      </View>
    </View>
  )
}

export default PostScreen
