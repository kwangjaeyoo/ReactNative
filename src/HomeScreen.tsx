import {SafeAreaView, Text, View} from 'react-native'

import Header from './Header'

const HomeScreen = () => {
  const packageVersion = require('../package.json')

  return (
    <SafeAreaView className="flex-1">
      <Header title="HOME Screen" />
      <View className="p-2">
        <Text>App Version : {packageVersion.version}</Text>

        <Text className="mt-4 mb-2">사용하는 라이블러리</Text>
        {Object.entries(packageVersion.dependencies).map(
          ([key, value]: [string, any]) => (
            <View
              key={key}
              className="p-2 border-l-[1px] border-r-[1px] border-t-[1px] border-[#707070]">
              <Text>{key}</Text>
              <Text>{typeof value !== 'undefined' ? value : ''}</Text>
            </View>
          ),
        )}
        <View className="h-[1px] bg-[#707070]" />
      </View>
    </SafeAreaView>
  )
}

export default HomeScreen
