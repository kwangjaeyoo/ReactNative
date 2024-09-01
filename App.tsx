import './global.css'
import './gesture-handler'

import {SafeAreaProvider} from 'react-native-safe-area-context'

import StackNavigation from './src/navi/StackNavigation'

function App(): React.JSX.Element {
  return (
    <SafeAreaProvider>
      <StackNavigation />
    </SafeAreaProvider>
  )
}

export default App
