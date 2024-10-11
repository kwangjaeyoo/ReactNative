import {Image, View} from 'react-native'

import {RouteProp, useRoute} from '@react-navigation/native'

import Header from '../Header'

type RouteParams = {
  DetailScreen: {
    data: {image: string}
  }
}

const DetailScreen = () => {
  const router = useRoute<RouteProp<RouteParams, 'DetailScreen'>>()
  const {data} = router.params

  return (
    <View className="flex-1 bg-[#262626]">
      <Header isBack bgColor="bg-[#262626]" />
      <Image
        src={data.image}
        className="w-screen aspect-square justify-center"
      />
    </View>
  )
}

export default DetailScreen
