import React from 'react'
import {Text, TouchableOpacity, View} from 'react-native'
import {useSafeAreaInsets} from 'react-native-safe-area-context'

import {
  createDrawerNavigator,
  DrawerContentComponentProps,
} from '@react-navigation/drawer'

import BottomNavigation from './BottomNavigation'

const Drawer = createDrawerNavigator()

const LeftMenuContent = ({navigation}: DrawerContentComponentProps) => {
  return (
    <>
      <Text>NaviDrawer</Text>
      <TouchableOpacity
        // title="Go somewhere"
        onPress={() => {
          // Navigate using the `navigation` prop that you received
          navigation.navigate('SomeScreen')
        }}
      />
    </>
  )
}

const DrawerNavigation = () => {
  const insets = useSafeAreaInsets()
  const renderLeft = React.useCallback(
    (props: DrawerContentComponentProps) => <LeftMenuContent {...props} />,
    [],
  )

  return (
    <View
      // eslint-disable-next-line react-native/no-inline-styles
      style={{
        flex: 1,
        paddingTop: insets.top,
        paddingBottom: insets.bottom,
        paddingLeft: insets.left,
        paddingRight: insets.right,
      }}>
      <Drawer.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerShown: false,
        }}
        drawerContent={renderLeft}>
        <Drawer.Screen
          name={'BottomTabNavigator'}
          component={BottomNavigation}
        />
      </Drawer.Navigator>
    </View>
  )
}
export default DrawerNavigation
