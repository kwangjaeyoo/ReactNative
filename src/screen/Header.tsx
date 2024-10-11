import {Text, TouchableOpacity, View} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'

import {useNavigation} from '@react-navigation/native'

interface prop {
  title?: string
  isBack?: boolean
}

const Header = ({title, isBack}: prop) => {
  const navigation = useNavigation()
  const goBack = () => {
    navigation.goBack()
  }

  return (
    <View
      className="
        bg-white
        h-12
        border-b-[1px]
        border-[#fdfdfd]
        flex-row">
      {isBack && (
        <TouchableOpacity
          className="min-w-10 flex items-center justify-center"
          onPress={goBack}>
          <Icon name="angle-left" size={20} />
        </TouchableOpacity>
      )}
      <View className="flex-1 items-center justify-center">
        <Text>{title}</Text>
      </View>
      {isBack && <View className="min-w-10" />}
    </View>
  )
}

export default Header
