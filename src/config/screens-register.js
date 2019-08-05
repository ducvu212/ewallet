import React from 'react';
import { Navigation } from 'react-native-navigation';
import { Provider } from 'react-redux';
import { getStore } from '../store/';

// ScreenName
import ScreenName from './screens-name'

// Container
import AuthContainer from '../containers/AuthContainer'


// View
import LoadingScreen from '../utils/hud/LoadingScreen'
import AlertScreen from '../utils/hud/AlertScreen'
import { ToastScreen } from '../utils/hud/ToastScreen'

// register screens
export function registerScreens() {

  // register Component
  registerComponent(ScreenName.loading, LoadingScreen)
  registerComponent(ScreenName.alert, AlertScreen)
  registerComponent(ScreenName.toast, ToastScreen)

  // register with Redux
  registerComponentWithRedux(ScreenName.auth, AuthContainer)
}

const registerComponent = (screenName, ReduxScreen) => {
  Navigation.registerComponent(screenName, () => ReduxScreen)
}

const registerComponentWithRedux = (screenName, ReduxScreen) => {
  const store = getStore()
  Navigation.registerComponent(screenName, () => (props) => (
    <Provider store={store}>
      <ReduxScreen {...props} />
    </Provider>
  ), () => ReduxScreen);

}

export default { registerScreens }
