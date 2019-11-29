import React from 'react';
import {
  Ionicons,
  MaterialCommunityIcons,
  MaterialIcons
} from '@expo/vector-icons';

import { createSwitchNavigator, createAppContainer } from 'react-navigation';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createStackNavigator } from 'react-navigation-stack';

import WelcomeScreen from './WelcomeScreen';
import ProfileScreen from './ProfileScreen';
import FeedScreen from './FeedScreen';
import SettingsScreen from './SettingsScreen';

// Dashboard Tab Navigation
const DashboardTabNavigator = createBottomTabNavigator(
  {
    Feed: {
      screen: FeedScreen,
      navigationOptions: {
        tabBarIcon: ({ focused }) => {
          const iconName = `home${focused ? '' : '-outline'}`;
          return <MaterialCommunityIcons name={iconName} size={30} />
        }
      }
    },
    Profile: {
      screen: ProfileScreen,
      navigationOptions: {
        tabBarIcon: ({ focused }) => {
          const iconName = `person${focused ? '' : '-outline'}`;
          return <MaterialIcons name={iconName} size={30} />
        }
      }
    },
    Settings: {
      screen: SettingsScreen,
      navigationOptions: {
        tabBarIcon: ({ focused }) => {
          const iconName = `settings${focused ? '' : '-outline'}`;
          return <MaterialCommunityIcons name={iconName} size={30} />
        }
      }
    },
  },
  {
    navigationOptions: ({ navigation }) => {
      const { routeName } = navigation.state.routes[navigation.state.index];
      return {
        headerTitle: routeName
      }
    }
  }
);

const DashboardStackNavigator = createStackNavigator(
  {
    DashboardTabNavigator: DashboardTabNavigator
  },
  {
    defaultNavigationOptions: ({ navigation }) => {
      return {
        headerLeft: (
          <Ionicons
            style={{ paddingLeft: 10 }}
            onPress={() => navigation.openDrawer()}
            name="md-menu" size={30}
          />)
      }
    }
  }
);

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