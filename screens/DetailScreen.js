import React from 'react';
import { ScrollView, StyleSheet,ActivityIndicator,View,Text,Button, RefreshControl,Linking,TouchableOpacity,Platform,AlertIOS,Alert,FlatList } from 'react-native';
import Colors from '../constants/Colors';
export default class DetailScreen extends React.Component {

	static navigationOptions = {
		title: 'Details',
		headerTintColor:Colors.headerTint,
		headerStyle:{
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
		console.log(item);
		return (
	      <ScrollView style={styles.container}>

	      </ScrollView>
	    );
		}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
	},
	flatview: {
	    justifyContent: 'center',
	    paddingTop: 15,
		paddingBottom:15,
		paddingLeft:10,
		paddingRight:10,
	    borderRadius: 2,
	  },
	name:{

	},
	email:{

	},
	loadingContainer:{
		flex: 1,
		alignItems: 'center',
		justifyContent:'center',
	},
	plexPaddingLeft:{
		paddingLeft:10,
	},
	contentContainer: {
		paddingHorizontal: 20,
	},
	canvas: {
		position: 'absolute',
		top: 0,
		left: 0,
		bottom: 0,
		right: 0,
	},
});
