import { createSwitchNavigator, createAppContainer } from 'react-navigation';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createStackNavigator } from 'react-navigation-stack';

import WelcomeScreen from './WelcomeScreen';
import DashboardScreen from './DashboardScreen';
import Profile from './ProfileScreen';
import Feed from './FeedScreen';
import Settings from './SettingsScreen';

// Dashboard Tab Navigation
const DashboardTabNavigator = createBottomTabNavigator({
  Feed,
  Profile,
  Settings
});

const DashboardStackNavigator = createStackNavigator({
  DashboardTabNavigator: DashboardTabNavigator
});
// Drawer Navigation
const AppDrawerNavigator = createDrawerNavigator({
  Dashboard: {
    screen: DashboardStackNavigator
  }
});

// Screen Navigation
const AppSwitchNavigator = createSwitchNavigator({
  Dashboard: {
    screen: AppDrawerNavigator
  },
  Welcome: {
    screen: WelcomeScreen
  }
});

const AppContainer = createAppContainer(AppSwitchNavigator);

export default AppContainer;