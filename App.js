import React from 'react';
import { Platform, StatusBar, StyleSheet, View } from 'react-native';
import {Asset, Font} from 'expo';
import AppNavigator from './navigation/AppNavigator';
import AppLoading from 'expo-app-loading';
import * as FileSystem from 'expo-file-system';
import { LogBox } from 'react-native';
export default class App extends React.Component {
  state = {
    isLoadingComplete: false,
  };

  render() {
    if (!this.state.isLoadingComplete && !this.props.skipLoadingScreen) {
      return (
        <AppLoading
          startAsync={this._loadResourcesAsync}
          onError={this._handleLoadingError}
          onFinish={this._handleFinishLoading}
        />
      );
    } else {
      return (
        <View style={styles.container}>
          {Platform.OS === 'ios' && <StatusBar barStyle="light-content" />}
          <AppNavigator />
        </View>
      );
    }
  }

  _loadResourcesAsync = async () => {
    return Promise.all([
      Asset.loadAsync([
        require('./assets/images/logoNoText.png'),
		require('./assets/images/nnGreen.png'),
		require('./assets/images/nnYellow.png'),
		require('./assets/images/nnRed.png'),
      ]),
	  // FileSystem.downloadAsync(
		//   Asset.fromModule(require('./assets/db/DB2.db')).uri,
		//   `${FileSystem.documentDirectory}SQLite/DB2.db`
	  // ),
      Font.loadAsync({
        'space-mono': require('./assets/fonts/SpaceMono-Regular.ttf'),
		'mont': require('./assets/fonts/Montserrat-Regular.ttf'),
		'montBold': require('./assets/fonts/Montserrat-Bold.ttf'),
      }),
    ]);
  };

  _handleLoadingError = error => {
    console.warn(error);
  };

  _handleFinishLoading = () => {
    this.setState({ isLoadingComplete: true });
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
console.disableYellowBox = true;