import {useState} from 'react'
import {Text} from 'react-native'
import WebView from 'react-native-webview'

import {RouteProp, useRoute} from '@react-navigation/native'

import Header from '../Header'
import LinearProgress from './LinearProgress'

type Params = {
  WebviewScreen: {
    url: string
  }
}

const WebviewScreen = () => {
  const router = useRoute<RouteProp<Params, 'WebviewScreen'>>()
  const [url] = useState(router.params.url)

  const [loading, setLoading] = useState(0)

  return (
    <>
      <Header title="Webview" isBack />
      {!url || url.length === 0 ? (
        <Text>Error: Invalid URL</Text>
      ) : (
        <>
          <LinearProgress progress={loading} />
          <WebView
            source={{uri: url}}
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
    </>
  )
}

export default WebviewScreen
