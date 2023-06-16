import { Provider } from 'react-redux'
import { UserLayout } from './layout/user/UserLayout'
import { store } from './store'

export const AppContent = () => {
  return (
    <div>
      <UserLayout />
    </div>
  )
}

export const App = () => {
  return (
    <Provider store={store}>
      <AppContent />
    </Provider>
  )
}
