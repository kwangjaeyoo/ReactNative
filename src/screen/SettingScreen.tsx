import {SafeAreaView, Text} from 'react-native'

import Header from './Header'

const SettingsScreen = () => {
  return (
    <SafeAreaView className="flex-1 bg-[#8f8686]">
      <Header title="SettingsScreen" />
      <Text>SettingsScreen</Text>
    </SafeAreaView>
  )
}

export default SettingsScreen
