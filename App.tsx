import './global.css'
import './gesture-handler'

import {GestureHandlerRootView} from 'react-native-gesture-handler'

import {QueryClient, QueryClientProvider} from '@tanstack/react-query'
import {DevToolsBubble} from 'react-native-react-query-devtools'

import StackNavigation from './src/navi/StackNavigation'
import {showReactQueryBubbleStore} from './src/store/ShowQueryBubbleStore'

function App(): React.JSX.Element {
  const queryClient = new QueryClient()
  const showBubble = showReactQueryBubbleStore()

  return (
    <QueryClientProvider client={queryClient}>
      <GestureHandlerRootView className="flex-1">
        <StackNavigation />
      </GestureHandlerRootView>
      {showBubble.show && <DevToolsBubble />}
    </QueryClientProvider>
  )
}

export default App
