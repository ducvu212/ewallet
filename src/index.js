import { Navigation } from 'react-native-navigation';
import { defautOptions } from './navigator/options';
import { registerScreens } from './config/screens-register';
import { setRootToLaunchScreen } from './navigator';
import Device from './modules/Device'
import AppHandler from './modules/AppHandler'

registerScreens();

Navigation.events().registerAppLaunchedListener(() => {

  // options
  Navigation.setDefaultOptions(defautOptions);

  // setroot
  setRootToLaunchScreen()

  // app state
  AppHandler.listenState()

  // listen
  // Reachability.listen()

  // get device info
  Device.configure()

  // socket
  // SocketManager.connect()

});

Navigation.events().registerComponentDidAppearListener(({ componentId, componentName }) => {
  // console.log('registerComponentDidAppearListener: ' + componentId + " " + componentName)
});

Navigation.events().registerComponentDidDisappearListener(({ componentId, componentName }) => {
  // console.log('registerComponentDidAppearListener: ' + componentId + " " + componentName)
});
