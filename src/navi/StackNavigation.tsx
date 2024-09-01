import {NavigationContainer} from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack'

import Settings2Screen from '../Setting2Screen'
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
        <Stack.Screen name="Setting2" component={Settings2Screen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default StackNavigation
