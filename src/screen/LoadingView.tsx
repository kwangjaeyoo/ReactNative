import {ActivityIndicator, Text, View} from 'react-native'

import {useLoadingStore} from '../store/useLoadingStore'

const LoadingView = () => {
  const load = useLoadingStore(state => state.load)

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
