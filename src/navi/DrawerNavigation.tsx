import React from 'react'
import {Text, TouchableOpacity, View} from 'react-native'
import {useSafeAreaInsets} from 'react-native-safe-area-context'

import {
  createDrawerNavigator,
  DrawerContentComponentProps,
} from '@react-navigation/drawer'

import BottomNavigation from './BottomNavigation'

const Drawer = createDrawerNavigator()

const MenuLayout = ({
  title,
  gotoNavi,
}: {
  title: string
  gotoNavi: () => void
}) => {
  return (
    <>
      <TouchableOpacity
        className="h-10 flex justify-center px-2"
        onPress={() => {
          gotoNavi()
        }}>
        <Text>{title}</Text>
      </TouchableOpacity>
      <View className="h-[1px] bg-[#f4f4f4]" />
    </>
  )
}

const LeftMenuContent = ({navigation}: DrawerContentComponentProps) => {
  return (
    <View>
      <View className="h-20 bg-[#c2abed] p-2 pt-10">
        <Text>Drawer Menu</Text>
      </View>
      <MenuLayout
        title="Home"
        gotoNavi={() => {
          navigation.closeDrawer()
          navigation.navigate('home')
        }}
      />
      <MenuLayout
        title="Webview"
        gotoNavi={() => {
          navigation.closeDrawer()
          navigation.navigate('webview', {url: 'https://www.naver.com'})
        }}
      />
      <MenuLayout
        title="Setting"
        gotoNavi={() => {
          navigation.closeDrawer()
          navigation.navigate('settings')
        }}
      />
      <MenuLayout
        title="Instagram"
        gotoNavi={() => {
          navigation.closeDrawer()
          navigation.navigate('instagram')
        }}
      />
    </View>
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
