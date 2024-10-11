import './global.css'
import './gesture-handler'

import {GestureHandlerRootView} from 'react-native-gesture-handler'

import StackNavigation from './src/navi/StackNavigation'

function App(): React.JSX.Element {
  return (
    <GestureHandlerRootView className="flex-1">
      <StackNavigation />
    </GestureHandlerRootView>
  )
}

export default App
