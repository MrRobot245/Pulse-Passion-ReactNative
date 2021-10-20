import React from 'react';
import { ScrollView, StyleSheet,View,Text,Button,Linking,Platform } from 'react-native';
import Colors from '../constants/Colors';
let pkg = require('../app.json');
import SettingsList from 'react-native-settings-list';
import Constants from 'expo-constants'
export default class InfoScreen extends React.Component {
	static navigationOptions = {
		title: 'Information',
		headerTintColor:Colors.headerTint,
		headerStyle:{
			backgroundColor:Colors.darkerGreen,
			marginTop: Constants.statusBarHeight-20,
		},
	};
	render() {
		const { navigation } = this.props;
		const type = navigation.getParam('data', 'NO-data');
		var pageInfo=[];
		if(type=="Diet"){
			pageInfo.push(
				<View key={"Diet"}>
				<Text style={styles.heading}>
				Diet
				{"\n"}
				</Text>
				<Text>
				Risk factors that you can not change are:{"\n"}
				• Having a family history of cardiovascular
				disease, your ethnicity and age.{"\n"}{"\n"}{"\n"}
				Risk factors that you can change are:{"\n"}{"\n"}{"\n"}
				• Smoking{"\n"}{"\n"}
				• Overweight or obese{"\n"}{"\n"}
				• Less than 5 servings of fruits and vegetables a day{"\n"}{"\n"}
				• Physical inactivity{"\n"}{"\n"}
				• Diabetes{"\n"}{"\n"}
				• High blood pressure{"\n"}{"\n"}
				• Stress{"\n"}{"\n"}
				</Text>
				</View>
			)
		}
		else if(type=="More"){
			pageInfo.push(
				<View key={"More"}>
				<Text style={styles.heading}>
				More
				{"\n"}
				</Text>
				<Text>
				• Maintain a healthy weight, excess weight can increase your risk for heart attack or stroke{"\n"}{"\n"}
				• Aim for 150 minutes of moderate physical activity per week! This amount has been shown to reduce your risk of heart attack by 30%{"\n"}{"\n"}
				• Do not smoke and avoid second hand smoke. When you smoke it causes more fat to build up in your blood vessels and increases the risk of blood clots.{"\n"}{"\n"}
				• Limit alcohol, pop and sugary drinks. These are all high in calories and contain little to no beneficial nutrients{"\n"}{"\n"}
				• Learn to cook and cook more at home.{"\n"}{"\n"}
				• Develop healthy sleep habits such as establishing a regular sleep/wake schedule{"\n"}{"\n"}
				</Text>
				</View>
			)
		}
		else{
			pageInfo.push(
				<View key={"Info"}>
				<Text style={styles.heading}>
				Info
				{"\n"}
				</Text>
				<Text>
				• Changing how you eat can help you reduce your risk for heart attack or stroke{"\n"}{"\n"}
				• Choose whole grain products for the extra fiber{"\n"}{"\n"}
				• Adding soy protein, such as tofu, to your diet will help improve your bad cholesterol.{"\n"}{"\n"}
				• Trans fats are 5 times worse for you than saturated fats{"\n"}{"\n"}
				• Eating foods with added sugar can make you more at risk for heart attack and stroke{"\n"}{"\n"}
				</Text>
				</View>
			)
		}

		return (
			<ScrollView style={styles.container}>
			{pageInfo}
			</ScrollView>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		padding:15,
	},
	heading:{
	textAlign:'center',
	fontSize:22,
	},
});
