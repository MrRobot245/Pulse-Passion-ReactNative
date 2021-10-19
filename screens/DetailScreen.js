import React from 'react';
import { ScrollView, StyleSheet,ActivityIndicator,View,Text,Button, RefreshControl,Linking,TouchableOpacity,Platform,AlertIOS,Alert,FlatList,Image } from 'react-native';
import Colors from '../constants/Colors';
import Constants from 'expo-constants'
export default class DetailScreen extends React.Component {

	static navigationOptions = {
		title: 'Details',
		headerTintColor:Colors.headerTint,
		headerStyle:{
			marginTop: Constants.statusBarHeight-20,
			backgroundColor:Colors.darkerGreen,
		},
	};
	constructor(props){
		super(props);
		this.state ={

		};
	}
	componentDidMount(){
	}

	render() {
		const { navigation } = this.props;
		const item = navigation.getParam('data', 'NO-data');

		var gListArr=[];
		var bListArr=[];
		var imgRating=[];
		var gList = item.gList.split(", ");
		var bList = item.bList.split(", ");
		var ratingPng="";

		if(gList.length>1)
		{
			for (var i = 0, len = gList.length; i < len; i++) {
				gListArr.push(
					<Text key={"gList"+i}>
					{"\u2022" +" "+ gList[i]}{"\n"}
					</Text>
				)
			}
		}
		else{
			gListArr.push(
				<Text key={"bListNone"}>
				Information not available
				</Text>
			)
		}
		if(bList.length>1)
		{
			for (var i = 0, len = bList.length; i < len; i++) {
				bListArr.push(
					<Text key={"bList"+i}>
					{"\u2022" +" "+ bList[i]}{"\n"}
					</Text>
				)
			}
		}
		else{
			bListArr.push(
				<Text key={"bListNone"}>
				Information not available
				</Text>
			)
		}
		if(item.fRate=="Often")
		{
			imgRating.push(
				<Image
				key={"rating"}
				source={
					require('../assets/images/nnGreen.png')
				}
				style={styles.ratingImg}
				/>
			)
		}
		else if(item.fRate=="Limit")
		{
			imgRating.push(
				<Image
				key={"rating"}
				source={
					require('../assets/images/nnYellow.png')
				}
				style={styles.ratingImg}
				/>
			)
		}
		else{
			imgRating.push(
				<Image
				key={"rating"}
				source={
					require('../assets/images/nnRed.png')
				}
				style={styles.ratingImg}
				/>
			)
		}






		// console.log(item);
		return (
			<ScrollView style={styles.container}>
			<Text style={styles.title}>
			{item.title}
			</Text>
			<Text style={styles.subtitle}>
			{item.cat}
			</Text>
			<View style={styles.imgCenter}>
			{imgRating}
			</View>

			<Text style={styles.rating}>
			Rating: {item.iRate}{"\n"}
			</Text>


			<Text style={styles.gbHeading}>
			Good List:
			{"\n"}
			<Text style={styles.goodList}>
			{"\n"}
			{gListArr}
			</Text>
			{"\n"}
			</Text>
			<Text style={styles.gbHeading}>
			Bad List:
			{"\n"}
			<Text style={styles.badList}>
			{"\n"}
			{bListArr}
			</Text>
			{"\n"}
			</Text>
			<Text style={styles.gbHeading}>
			Ingredients:
			{"\n"}
			{"\n"}

			<Text style={styles.iList}>
			{item.iList}
			</Text>
			{"\n"}
			</Text>
			</ScrollView>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		paddingLeft:10,
		paddingRight:10,
	},
	title:{
		textAlign: 'center',
		fontSize:20,
		paddingTop:10,
	},
	subtitle:{
		textAlign:'center',
		fontSize:16,
	},
	rating:{
		textAlign:'center',
	},
	gbHeading:{
		fontSize:18,
	},
	goodList:{
		color:'green',
		fontSize:15,
	},
	badList:{
		color:'red',
		fontSize:15,
	},
	iList:{
		fontSize:15,
	},
	ratingImg:{
		width:300,
		height:150,
		paddingTop:15,
		resizeMode: 'contain',
	},
	imgCenter:{
	alignItems: 'center',
	},
});
