import { Navigation } from 'react-native-navigation';
import ScreenName from '../config/screens-name'
import Images from '../constants/images';
import { i18next } from '../utils'
import { popAnimations } from './options'

// goto screen functions
export const setRootToLaunchScreen = () => Navigation.setRoot({
  root: {
    stack: {
      children: [
        {
          component: {
            name: ScreenName.launch,
            options: {
              // backgroundImage: Images.background
            }
          }
        }
      ],
      options: {
        statusBar: {
          visible: true,
          style: 'dark'
        },
        animations: {
          pop: popAnimations,
        }
      }
    }
  }
})

export const setRootToLoginScreen = () => Navigation.setRoot({
  root: {
    stack: {
      children: [
        {
          component: {
            name: ScreenName.loginInputPhoneNumber,
            options: {
              backgroundImage: Images.background,
            }
          }
        }
      ],
      options: {
        animations: {
          pop: popAnimations,
        }
      }
    }
  }
})

export const setRootToTutorialScreen = () => Navigation.setRoot({
  root: {
    stack: {
      children: [
        {
          component: {
            name: ScreenName.tutorial,
          }
        }
      ],
      options: {
        animations: {
          pop: popAnimations,
        }
      }
    }
  }
})

const bottomTabs = {
  id: 'bottomTabs',
  children: [
    {
      stack: {
        children: [{
          component: {
            name: ScreenName.familyHome,
            id: 'familyHome'
          }
        }],
        options: {
          bottomTab: {
            // text: i18next.t('Home'),
            // icon: Images.tabbar_home,
          },
          animations: {
            pop: popAnimations,
          }
        }
      }
    },
    {
      stack: {
        children: [{
          component: {
            name: ScreenName.familyMembers,
            id: 'familyMembers'
          }
        }],
        options: {
          bottomTab: {
            // text: i18next.t('Member'),
            // icon: Images.tabbar_member,
          },
          animations: {
            pop: popAnimations,
          }
        }
      }
    },
    {
      stack: {
        children: [{
          component: {
            name: ScreenName.familySetting,
            id: 'familySetting'
          }
        }],
        options: {
          bottomTab: {
            // text: i18next.t('Setting'),
            // icon: Images.tabbar_setting,
          },
          animations: {
            pop: popAnimations,
          }
        }
      }
    },
  ]
}

export const setRootToHomeScreen = () => Navigation.setRoot({
  root: {
    bottomTabs
  }
})
