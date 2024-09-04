import {NavigationContainer} from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack'

import LoadingView from '../screen/LoadingView'
import WebviewScreen from '../screen/webview/WebviewScreen'
import DrawerNavigation from './DrawerNavigation'

type StackParamList = {
  menu: undefined
  webview: {url: string}
}

const Stack = createNativeStackNavigator<StackParamList>()

const StackNavigation = () => {
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="menu"
          screenOptions={{
            headerShown: false,
          }}>
          <Stack.Screen name="menu" component={DrawerNavigation} />
          <Stack.Screen name="webview" component={WebviewScreen} />
        </Stack.Navigator>
      </NavigationContainer>

      <LoadingView />
    </>
  )
}

export default StackNavigation
