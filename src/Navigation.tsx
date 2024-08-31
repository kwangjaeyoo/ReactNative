import * as React from 'react'

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import {createDrawerNavigator} from '@react-navigation/drawer'
import {NavigationContainer} from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack'

import HomeScreen from './HomeScreen'
import SettingsScreen from './SettingScreen'
import {SafeAreaView, View} from 'react-native'
import {useSafeAreaInsets} from 'react-native-safe-area-context'

const Stack = createNativeStackNavigator()
const BottomTab = createBottomTabNavigator()
const Drawer = createDrawerNavigator()

const NaviDrawer = () => {
  return (
    <Drawer.Navigator initialRouteName="Home">
      <Drawer.Screen name="Home" component={HomeScreen} />
      <Drawer.Screen name="Settings" component={SettingsScreen} />
    </Drawer.Navigator>
  )
}

const Navigation = () => {
  const insets = useSafeAreaInsets()

  return (
    <View
      style={{
        flex: 1,
        paddingTop: insets.top,
        paddingBottom: insets.bottom,
        paddingLeft: insets.left,
        paddingRight: insets.right,
      }}>
      <NavigationContainer>
        {/* <NaviDrawer />
      <BottomTab.Navigator>
        <BottomTab.Screen name="Home" component={NaviDrawer} />
        <BottomTab.Screen name="Settings" component={SettingsScreen} />
      </BottomTab.Navigator> */}

        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}>
          <Stack.Screen name="Home" component={HomeScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  )
}

export default Navigation
