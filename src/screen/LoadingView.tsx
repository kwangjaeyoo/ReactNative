import {ActivityIndicator, Text, View} from 'react-native'

import {isLoadingStore} from '../store/LoadingViewStore'

const LoadingView = () => {
  const load = isLoadingStore(state => state.load)

  return (
    <>
      {load && (
        <View className="absolute h-full w-full items-center justify-center">
          <Text className="text-lg text-gray-700">Loading...</Text>
          <ActivityIndicator size="large" color="#0000ff" />
        </View>
      )}
    </>
  )
}

export default LoadingView
