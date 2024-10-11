import {Dimensions, FlatList} from 'react-native'

import Header from '../Header'
import {HOME_DATA} from './home-data'
import MainImageView, {IMainImage} from './MainImageView'

const {height: HEIGHT_SCREEN} = Dimensions.get('window')

// https://trai-nguyen.medium.com/react-native-instagram-navigation-a8a376ebbf29
const InstagramScreen = () => {
  const renderItem = ({item}: {item: IMainImage}) => {
    return <MainImageView {...item} />
  }

  return (
    <>
      <Header title="Instagram" isBack />

      <FlatList
        data={HOME_DATA}
        showsVerticalScrollIndicator={false}
        renderItem={renderItem}
        getItemLayout={(data, index) => ({
          length: HEIGHT_SCREEN * 0.7,
          offset: HEIGHT_SCREEN * 0.7 * index,
          index,
        })}
        keyExtractor={item => item.id.toString()}
      />
    </>
  )
}

export default InstagramScreen
