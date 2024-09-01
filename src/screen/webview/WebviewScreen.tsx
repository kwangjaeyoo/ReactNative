import {useState} from 'react'
import {SafeAreaView, Text} from 'react-native'
import WebView from 'react-native-webview'

import Header from '../Header'
import LinearProgress from './LinearProgress'

type Props = {
  navigation: any
  route: {
    params: {
      url: string
    }
  }
}

const WebviewScreen = ({navigation, route}: Props) => {
  const [url] = useState(route.params?.url)
  const [loading, setLoading] = useState(0)

  return (
    <SafeAreaView className="flex-1">
      <Header title="Webview" isBack navigation={navigation} />
      {!url || url.length === 0 ? (
        <Text>Error: Invalid URL</Text>
      ) : (
        <>
          <LinearProgress progress={loading} />
          <WebView
            source={{uri: 'https://naver.com/'}}
            onLoad={syntheticEvent => {
              const {nativeEvent} = syntheticEvent
              console.log('url ', nativeEvent.url)
            }}
            onLoadEnd={syntheticEvent => {
              const {nativeEvent} = syntheticEvent
              console.log('nativeEvent.loading ', nativeEvent.loading)
            }}
            onLoadStart={syntheticEvent => {
              const {nativeEvent} = syntheticEvent
              console.log('nativeEvent.loading ', nativeEvent.loading)
            }}
            onLoadProgress={({nativeEvent}) => {
              setLoading(nativeEvent.progress)
              console.log('nativeEvent.progress ', nativeEvent.progress)
            }}
          />
        </>
      )}
    </SafeAreaView>
  )
}

export default WebviewScreen
