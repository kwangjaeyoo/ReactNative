import {SafeAreaView} from 'react-native'

import {NavigationContainer} from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack'

import DetailScreen from '../screen/instagram/DetailScreen'
import InstagramScreen from '../screen/instagram/InstagramScreen'
import {IMainImage} from '../screen/instagram/MainImageView'
import PostScreen from '../screen/instagram/PostScreen'
import LoadingView from '../screen/LoadingView'
import WebviewScreen from '../screen/webview/WebviewScreen'
import DrawerNavigation from './DrawerNavigation'

export type NaviParamList = {
  menu: undefined
  webview: {url: string}
  instagram: undefined
  postScreen: {data: IMainImage}
  detailScreen: {
    data: {id: number; image: string}
    from?: any
    parentId?: number
    callback?: () => void
  }
}

const Stack = createNativeStackNavigator<NaviParamList>()

const StackNavigation = () => {
  return (
    <SafeAreaView className="flex-1">
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="menu"
          screenOptions={{headerShown: false}}>
          <Stack.Screen name="menu" component={DrawerNavigation} />
          <Stack.Screen name="webview" component={WebviewScreen} />

          <Stack.Screen name="instagram" component={InstagramScreen} />
          <Stack.Screen name="postScreen" component={PostScreen} />
          <Stack.Screen name="detailScreen" component={DetailScreen} />
        </Stack.Navigator>
      </NavigationContainer>

      <LoadingView />
    </SafeAreaView>
  )
}

export default StackNavigation
