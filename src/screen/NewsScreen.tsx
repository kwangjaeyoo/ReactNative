import {useCallback, useEffect, useState} from 'react'
import {FlatList, SafeAreaView} from 'react-native'

import {getNewsApi} from '../api/getNews'
import {isLoadingStore} from '../store/loading'
import Header from './Header'
import NewsItem from './NewsItem'

const NewsScreen = ({navigation}: {navigation: any}) => {
  const loading = isLoadingStore()
  const [news, setNews] = useState([])

  const callApi = useCallback(async () => {
    try {
      loading.onLoading()

      const response = await getNewsApi('top-headlines')

      if (response && response.status === 200) {
        const data = response.data.articles
        setNews(data)
        // console.log(data.length)
        // console.log(data[2])
      }
    } catch (e) {
    } finally {
      loading.offLoading()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    callApi()

    const unsubscribe = navigation.addListener('tabPress', callApi)
    return () => unsubscribe()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <SafeAreaView className="flex-1 bg-[#f4f4f4]">
      <Header title="SettingsScreen" />

      <FlatList
        className="p-2"
        data={news}
        renderItem={data => (
          <NewsItem
            item={data.item}
            goWeb={url => {
              navigation.navigate('webview', {url: url})
            }}
          />
        )}
        keyExtractor={(item, index) => 'key' + index}
      />
    </SafeAreaView>
  )
}

export default NewsScreen
