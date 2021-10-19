import { createSwitchNavigator, createAppContainer } from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
// import Login from '../screens/Login';
// import AuthLoadingScreen from '../screens/AuthLoading';
import MainTabNavigator from './MainTabNavigator';



const AppStack = MainTabNavigator
// const AuthStack = createStackNavigator({ Login: Login });

export default createAppContainer(createSwitchNavigator(
  {
    // AuthLoading: AuthLoadingScreen,
    App: AppStack,
    // Auth: AuthStack,
  },
  {
    initialRouteName: 'App',
  }
));

