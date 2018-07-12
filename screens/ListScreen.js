import React from 'react';
import { ScrollView, StyleSheet,ActivityIndicator,View,Text,Button, RefreshControl,Linking,TouchableOpacity,Platform,AlertIOS,Alert } from 'react-native';
export default class ListScreen extends React.Component {

	static navigationOptions = {
		title: 'Results',
		headerTintColor:'#fff',
		headerStyle:{
			backgroundColor:"#649b39",
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
		const data = navigation.getParam('data', 'NO-data');
		const term = navigation.getParam('searchTerm', 'NO-data');
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
