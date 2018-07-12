import React from 'react';
import { ScrollView, StyleSheet,View } from 'react-native';
import Colors from '../constants/Colors';
let pkg = require('../app.json');
import SettingsList from 'react-native-settings-list';
export default class AboutScreen extends React.Component {
  static navigationOptions = {
    title: 'About',
	headerTintColor:Colors.headerTint,
	headerStyle:{
		backgroundColor:Colors.darkerGreen,
	},
  };

  render() {
    return (
      <ScrollView style={styles.container}>
	  return(
		  <View style={{backgroundColor:'#fff',flex:1}}>
		  <SettingsList borderColor='#B3BAC1' backgroundColor={'#fff'} defaultItemSize={50}>
		  <SettingsList.Item
		  title='App Version'
		  titleInfo={pkg.expo.version}
		  // color='#B3BAC1'
		  // backgroundColor='#282A2D'
		  // titleStyle={{color:'#B3BAC1'}}
		  // titleInfoStyle={{color:'#B3BAC1'}}
		  hasNavArrow={false}
		  />
		  <SettingsList.Item
		  title='SDK Version'
		  titleInfo={pkg.expo.sdkVersion}
		  titleInfoStyle={styles.titleInfoStyle}
		  // backgroundColor='#282A2D'
		  // titleStyle={{color:'#B3BAC1'}}
		  // titleInfoStyle={{color:'#B3BAC1'}}
		  hasNavArrow={false}
		  />
		  </SettingsList>
		  </View>
	  )
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
});
