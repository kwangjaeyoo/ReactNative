import {NavigationContainer} from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack'

import WebviewScreen from '../WebviewScreen'
import DrawerNavigation from './DrawerNavigation'

const Stack = createNativeStackNavigator()

const StackNavigation = () => {
  return (
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
  )
}

export default StackNavigation
