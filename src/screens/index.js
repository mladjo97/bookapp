import { createSwitchNavigator, createAppContainer } from 'react-navigation';

import WelcomeScreen from './WelcomeScreen';
import DashboardScreen from './DashboardScreen';

// Screen routing
const AppSwitchNavigator = createSwitchNavigator({
  Welcome: {
    screen: WelcomeScreen
  },
  Dashboard: {
    screen: DashboardScreen
  }
});

const AppContainer = createAppContainer(AppSwitchNavigator);

export default AppContainer;