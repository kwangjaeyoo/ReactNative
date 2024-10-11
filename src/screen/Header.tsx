import {Text, TouchableOpacity, View} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'

import {useNavigation} from '@react-navigation/native'

interface prop {
  title?: string
  isBack?: boolean
  isBackOnClick?: Function
  bgColor?: string
}

const Header = ({title, isBack, isBackOnClick, bgColor}: prop) => {
  const navigation = useNavigation()
  const goBack = () => {
    if (isBackOnClick) {
      isBackOnClick()
    } else {
      navigation.goBack()
    }
  }

  return (
    <View
      className={`
        h-12
        flex-row
        ${bgColor ? bgColor : 'bg-white border-[#fdfdfd] border-b-[1px]'}
      `}>
      {isBack && (
        <TouchableOpacity
          className="min-w-10 flex items-center justify-center"
          onPress={goBack}>
          <Icon
            name="angle-left"
            size={20}
            color={`${bgColor ? '#FFF' : '#000'}`}
          />
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
