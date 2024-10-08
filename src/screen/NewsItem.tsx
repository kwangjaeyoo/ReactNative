import React from 'react'
import {Text, TouchableOpacity, View} from 'react-native'

interface Props {
  item: any
  isLast: boolean
  goWeb: (url: string) => void
}

const NewsItem: React.FC<Props> = ({item, isLast, goWeb}) => {
  return (
    <View
      className={`
        p-2 
        border-[#707070] 
        border-l-[1px] 
        border-r-[1px] 
        border-t-[1px]
        ${isLast && 'border-b-[1px] mb-5'}`}>
      <Text>Author : {item.author}</Text>
      <Text>Date : {item.publishedAt}</Text>
      <Text>Title : {item.title}</Text>
      <View className="flex items-end mt-1">
        <TouchableOpacity
          className="bg-slate-300 px-2"
          onPress={() => goWeb(item.url)}>
          <Text>go web</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default NewsItem
