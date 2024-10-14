import './global.css'
import './gesture-handler'

import {GestureHandlerRootView} from 'react-native-gesture-handler'
import {DevToolsBubble} from 'react-native-react-query-devtools'

import {QueryClient, QueryClientProvider} from '@tanstack/react-query'

import StackNavigation from './src/navi/StackNavigation'
import {useBubbleVisibileStore} from './src/store/useBubbleVisibileStore'

function App(): React.JSX.Element {
  const queryClient = new QueryClient()
  const showBubble = useBubbleVisibileStore()

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
