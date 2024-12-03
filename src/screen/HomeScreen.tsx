import {ScrollView, Text, TouchableOpacity, View} from 'react-native'

import {useNavigation} from '@react-navigation/native'
import {NativeStackNavigationProp} from '@react-navigation/native-stack'

import {NaviParamList} from '../navi/StackNavigation'
import Header from './Header'

type NavigationProp = NativeStackNavigationProp<NaviParamList, 'instagram'>

const HomeScreen = () => {
  const navigation = useNavigation<NavigationProp>()

  const packageVersion = require('../../package.json')

  return (
    <>
      <Header title="HOME Screen" />
      <ScrollView>
        <View className="p-2">
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('instagram')
            }}>
            <Text>인스타그램 네비게이션</Text>
            <Text>React Native Reanimated / React Native Gesture Handler</Text>
          </TouchableOpacity>

          <Text className="mt-4">App Version : {packageVersion.version}</Text>

          <Text className="mt-4 mb-2">사용하는 라이블러리</Text>
          {Object.entries(packageVersion.dependencies).map(
            ([key, value]: [string, any]) => (
              <View
                key={key}
                className="p-2 border-l-[1px] border-r-[1px] border-t-[1px] border-[#707070]">
                <Text>{key}</Text>
                <Text>{typeof value !== 'undefined' ? value : ''}</Text>
              </View>
            ),
          )}
          <View className="h-[1px] bg-[#707070]" />
        </View>
      </ScrollView>
    </>
  )
}

export default HomeScreen
