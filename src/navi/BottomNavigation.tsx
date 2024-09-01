import React from 'react'
import {Text, TouchableOpacity, View} from 'react-native'
import Icon from 'react-native-vector-icons/Feather'

import {
  BottomTabBarProps,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs'
import {DrawerActions} from '@react-navigation/native'

import HomeScreen from '../HomeScreen'
import SettingsScreen from '../SettingScreen'

const BottomTab = createBottomTabNavigator()

const MenuBar = ({state, descriptors, navigation}: BottomTabBarProps) => {
  return (
    <View className="h-10 flex-row">
      <TouchableOpacity
        className="w-10 flex items-center justify-center"
        onPress={() => {
          navigation.dispatch(DrawerActions.toggleDrawer())
        }}>
        <Icon name="menu" size={20} />
      </TouchableOpacity>

      {state.routes.map((route, index) => {
        const {options} = descriptors[route.key]
        const label = route.name

        const isFocused = state.index === index

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          })

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name)
          }
        }

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          })
        }

        return (
          <TouchableOpacity
            key={label}
            accessibilityRole="button"
            accessibilityState={isFocused ? {selected: true} : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            className="flex-1 flex items-center justify-center">
            <Text
              className={`${isFocused ? 'text-[#673ab7]' : 'text-[#222222]'}`}>
              {label}
            </Text>
          </TouchableOpacity>
        )
      })}
    </View>
  )
}

const BottomNavigation = () => {
  const renderMenuBar = React.useCallback(
    (props: BottomTabBarProps) => <MenuBar {...props} />,
    [],
  )

  return (
    <BottomTab.Navigator
      tabBar={renderMenuBar}
      screenOptions={{
        headerShown: false,
      }}>
      <BottomTab.Screen name="home" component={HomeScreen} />
      <BottomTab.Screen name="settings" component={SettingsScreen} />
    </BottomTab.Navigator>
  )
}

export default BottomNavigation
