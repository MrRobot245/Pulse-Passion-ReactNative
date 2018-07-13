import React from 'react';
import { ScrollView, StyleSheet,View,Text,Button,Linking,Platform,Image } from 'react-native';
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
	onPressDiet(){
		this.props.navigation.navigate('Info',{data:"Diet"});
	}
	onPressMore(){
		this.props.navigation.navigate('Info',{data:"More"});
	}
	onPressWebsite(){
		Linking.openURL("https://pulsepassion.ca");
	}
	onPressRisk(){
		Linking.openURL("https://ehealth.heartandstroke.ca");
	}
	onPressCardio(){
		this.props.navigation.navigate('Info',{data:"Cardio"});
	}
	render() {
		return (
			<ScrollView style={styles.container}>

			<View style={{flexDirection: 'row',alignItems:'center'}}>
			<Image
			source={
				require('../assets/images/logoNoText.png')
			}
			style={styles.aboutImage}
			/>
			<Text style={{paddingLeft:50}}>
			App Version: {pkg.expo.version}{'\n'}
			SDK Version: {pkg.expo.sdkVersion}
			{"\n"}{"\n"}
			</Text>
			</View>
			<View>
			<Text style={{textAlign:'center'}}>

			{"\n"}
			{"\n"}
			{"\n"}
			Pulse Passion provides this evidence-based service to increase Canadian consumer awareness on healthy food choices for the prevention of cardiovascular disease
			{"\n"}
			{"\n"}
			</Text>
			</View>
			<View stlye={{position:'absolte',bottom:0}}>
			<Button
			onPress={this.onPressDiet.bind(this)}
			title="Diet"
			accessibilityLabel="Learn more about Pulse Passion!"
			/>
			<Button
			onPress={this.onPressMore.bind(this)}
			title="More"
			accessibilityLabel="Learn more about Pulse Passion!"
			/>
			<Button
			onPress={this.onPressWebsite.bind(this)}
			title="Website"
			accessibilityLabel="Learn more about Pulse Passion!"
			/>
			<Button
			onPress={this.onPressRisk.bind(this)}
			title="Are you at Risk?"
			accessibilityLabel="Learn more about Pulse Passion!"
			/>
			<Button
			onPress={this.onPressCardio.bind(this)}
			title="Cardiovascular Disease?"
			accessibilityLabel="Learn more about Pulse Passion!"
			/>
			</View>

			</ScrollView>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		padding: 15,
		backgroundColor: '#fff',
	},
	aboutImage:{
		width:120,
		height:150,
	},
});
