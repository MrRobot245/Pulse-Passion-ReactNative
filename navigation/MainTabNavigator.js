import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';
import Colors from '../constants/Colors';
import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import AboutScreen from '../screens/AboutScreen';
import SettingsScreen from '../screens/SettingsScreen';
import ListScreen from '../screens/ListScreen';
import DetailScreen from '../screens/DetailScreen';

const HomeStack = createStackNavigator({
  Home: HomeScreen,
  List: ListScreen,
  Detail: DetailScreen,
});

HomeStack.navigationOptions = {
  tabBarLabel: 'Search',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? `ios-search${focused ? '' : '-outline'}`
          : 'md-search'
      }
    />
  ),
  tabBarOptions: {
	  style: {
		  backgroundColor: Colors.darkerGreen,
	  },
	  labelStyle:{
		  color:Colors.label,
	  }
  },
};

const AboutStack = createStackNavigator({
  About: AboutScreen,

});

AboutStack.navigationOptions = {
  tabBarLabel: 'About',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? `ios-information-circle${focused ? '' : '-outline'}` : 'md-information-circle'}
    />
  ),
  tabBarOptions: {
	style: {
		backgroundColor: Colors.darkerGreen,
	},
	labelStyle:{
		color:Colors.label,
	}
  },
};
export default createBottomTabNavigator({
  HomeStack,
  AboutStack,
});
