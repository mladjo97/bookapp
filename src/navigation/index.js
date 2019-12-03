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

import WelcomeScreen from '../screens/WelcomeScreen';
import ProfileScreen from '../screens/ProfileScreen';
import FeedScreen from '../screens/FeedScreen';
import SettingsScreen from '../screens/SettingsScreen';
import BookDetailsScreen from '../screens/BookDetailsScreen';
import BookmarkScreen from '../screens/BookmarkScreen';


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
    Bookmarks: {
      screen: BookmarkScreen,
      navigationOptions: {
        tabBarIcon: ({ focused }) => {
          const iconName = `bookmark${focused ? '' : '-outline'}`;
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
    tabBarOptions: {
      showIcon: true,
      showLabel: false
    },
    navigationOptions: ({ navigation }) => {
      const { routeName } = navigation.state.routes[navigation.state.index];
      return {
        headerTitle: routeName
      }
    }
  }
);

// Dashboard Stack Navigation
const DashboardStackNavigator = createStackNavigator(
  {
    DashboardTabNavigator,
    BookDetails: {
      screen: BookDetailsScreen,
      navigationOptions: ({ navigation }) => {
        return {
          headerTitle: navigation.getParam('book').title,
          headerLeft: (
            <MaterialIcons
              name="keyboard-arrow-left"
              size={30}
              onPress={() => navigation.pop()}
            />
          )
        }
      }
    }
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
  }
});

const AppContainer = createAppContainer(AppSwitchNavigator);

export default AppContainer;