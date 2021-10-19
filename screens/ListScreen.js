import React from 'react';
import { ScrollView, StyleSheet,ActivityIndicator,View,Text,Button, RefreshControl,Linking,TouchableOpacity,Platform,AlertIOS,Alert,FlatList } from 'react-native';
import Colors from '../constants/Colors';
import Constants from 'expo-constants'
export default class ListScreen extends React.Component {

	static navigationOptions = {
		title: 'Results',
		// headerStyle: {  },
		headerTintColor:Colors.headerTint,
		headerStyle: {
			marginTop: Constants.statusBarHeight-20,
			backgroundColor:Colors.darkerGreen,
		},
		// headerStyle:{
		// 	backgroundColor:Colors.darkerGreen,
		// 	marginTop: 64
		// },
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
	            <FlatList
	            data={data}
	            showsVerticalScrollIndicator={true}
	            renderItem={({item}) =>

				<TouchableOpacity style={styles.flatview} activeOpacity = { .5 }
					onPress={() => {this.props.navigation.navigate('Detail',{data:item});}}>
					 <Text style={styles.name}>{item.title}</Text>
	            </TouchableOpacity>
	            }
	            keyExtractor={(item,index) => index.toString() }
	          />
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
		borderBottomColor:'black',
		borderBottomWidth: 1,
	    paddingTop: 15,
		paddingBottom:15,
		paddingLeft:10,
		paddingRight:10,
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
