import {useEffect, useState} from 'react'
import {FlatList, SafeAreaView} from 'react-native'

import {getNewsApi} from '../api/getNews'
import Header from './Header'
import NewsItem from './NewsItem'

const NewsScreen = ({navigation}: {navigation: any}) => {
  const [news, setNews] = useState([])

  useEffect(() => {
    const callApi = async () => {
      const response = await getNewsApi('top-headlines')

      if (response && response.status === 200) {
        const data = response.data.articles
        setNews(data)
        // console.log(data.length)
        // console.log(data[2])
      }
    }
    callApi()
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
