import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';
import Colors from '../constants/Colors';
import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import AboutScreen from '../screens/AboutScreen';
import ListScreen from '../screens/ListScreen';
import DetailScreen from '../screens/DetailScreen';
import InfoScreen from '../screens/InfoScreen';

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
          ? `ios-search${focused ? '' : ''}`
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
  Info: InfoScreen,

});

AboutStack.navigationOptions = {
  tabBarLabel: 'About',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? `ios-information-circle${focused ? '' : ''}` : 'md-information-circle'}
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
