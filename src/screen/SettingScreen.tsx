import {SafeAreaView, Text} from 'react-native'

import Header from './Header'

const SettingsScreen = () => {
  return (
    <SafeAreaView className="flex-1 bg-[#f4f4f4]">
      <Header title="SettingsScreen" />
      <Text>SettingsScreen </Text>
    </SafeAreaView>
  )
}

export default SettingsScreen
