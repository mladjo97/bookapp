import { createSwitchNavigator, createAppContainer } from 'react-navigation';
import { createDrawerNavigator } from 'react-navigation-drawer';


import WelcomeScreen from './WelcomeScreen';
import DashboardScreen from './DashboardScreen';

// Drawer Navigation
const AppDrawerNavigator = createDrawerNavigator({
  Dashboard: {
    screen: DashboardScreen
  },
  Welcome: {
    screen: WelcomeScreen
  }
});

// Screen Navigation
const AppSwitchNavigator = createSwitchNavigator({
  Welcome: {
    screen: AppDrawerNavigator
  },
  Dashboard: {
    screen: DashboardScreen
  }
});

const AppContainer = createAppContainer(AppSwitchNavigator);

export default AppContainer;