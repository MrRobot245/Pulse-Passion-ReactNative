import React from 'react';
import {
	Image,
	Platform,
	ScrollView,
	StyleSheet,
	Text,
	TouchableOpacity,
	View,
	TextInput,
	Button,
	Linking,
	KeyboardAvoidingView
} from 'react-native';
import { Asset } from 'expo-asset';
import * as FileSystem from 'expo-file-system';
import * as SQLite from 'expo-sqlite';
import { MontText,MontBold } from '../components/StyledText';
import Colors from '../constants/Colors';

export const openDatabase = async () => {
	if (!(await FileSystem.getInfoAsync(FileSystem.documentDirectory + "SQLite")).exists) {
	  await FileSystem.makeDirectoryAsync(FileSystem.documentDirectory + "SQLite");
	}
	const [{ uri }] = await Asset.loadAsync(require("../assets/db/DB2.db"));
	await FileSystem.downloadAsync(uri, FileSystem.documentDirectory + "SQLite/DB2.db");
	// return SQLite.openDatabase("//store.db");
	// const db 
  };
  openDatabase();
  const db = SQLite.openDatabase({name:'DB2.db',createFromLocation: 1});

  export default class HomeScreen extends React.Component {

	searchDB() {

		db.transaction(tx => {
			tx.executeSql('SELECT * FROM DB WHERE title LIKE "%'+this.state.searchTerm+'%" ORDER BY title',[], (tx,results) => {
				// console.log("Query completed");
					this.props.navigation.navigate('List',{data:results.rows.raw(),searchTerm:this.state.searchTerm})
			  });
		  });
}
static navigationOptions = {
	header: null,
};
constructor(props) {
	super(props);
	this.state = {
		searchTerm: ""
	};
}
componentDidMount() {

}
onPressSearch(){
	this.searchDB();
}
onPressLearn()
{
Linking.openURL("https://pulsepassion.ca");
}

render() {

	return (
		<View style={styles.container} contentContainerStyle={styles.contentContainer}>
		<Text style={styles.getStartedText}>
		MyPulse
		</Text>
		<View style={{ flex: 1,
    justifyContent: 'center',
    alignItems: 'center'}}>
			<View style={{justifyContent:'center',alignItems:'center'}}>
		<Image
		source={
			require('../assets/images/logoNoText.png')
		}
		style={styles.welcomeImage}
		/>
		</View>

		<KeyboardAvoidingView behavior="padding" enabled style={{width:"100%"}}>
		<TextInput
		style={{height: 40,backgroundColor:'white',marginHorizontal:30,padding:5,borderColor: '#fff',borderWidth: 1,borderRadius:10}}
		placeholder="Enter your search term:"
		autoCapitalize = "none"
		autoCorrect= {false}
		clearButtonMode={'always'}
		onSubmitEditing={this.onPressSearch.bind(this)}
		onChangeText={(text) => this.setState({searchTerm: text})}
		underlineColorAndroid={'rgba(0,0,0,0)'}
		/>
	



		<Button
		onPress={this.onPressSearch.bind(this)}
		title="Search"
		color={Platform.OS === 'ios' ? '#fff' : Colors.pulseGreen}
		accessibilityLabel="Search the database"
		/>
		</KeyboardAvoidingView>
		
		

		
		<View style={{margin:10}}>
		<Button
		onPress={this.onPressLearn.bind(this)}
		title="Learn More"
		color={Platform.OS === 'ios' ? '#fff' : Colors.pulseGreen}
		accessibilityLabel="Learn more about Pulse Passion!"
		/>

		</View>
	
		</View>
		</View>
		
	);
}

// _handleLearnMorePress = () => {
// 	WebBrowser.openBrowserAsync('https://docs.expo.io/versions/latest/guides/development-mode');
// };
//
// _handleHelpPress = () => {
// 	WebBrowser.openBrowserAsync(
// 		'https://docs.expo.io/versions/latest/guides/up-and-running.html#can-t-see-your-changes'
// 	);
// };


}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#649b39',
	},
	contentContainer: {
		paddingTop: 30,

		alignItems: 'center',
		alignContent:'center',
		justifyContent:'center',
	},
	welcomeContainer: {
		alignItems: 'center',
		marginTop: 15,
		marginBottom: 20,
	},
	welcomeImage: {
		width: 300,
		height: 200,
		resizeMode: 'contain',
		marginTop: 15,
		alignItems: 'center',
		alignContent:'center',
		justifyContent:'center'
	},
	getStartedContainer: {
		alignItems: 'center',
		marginHorizontal: 50,
	},
	homeScreenFilename: {
		marginVertical: 7,
	},
	getStartedText: {
		paddingTop:40,
		fontSize: 25,
		color: 'white',
		fontWeight: 'bold',
		alignItems: 'center',
		alignContent:'center',
		justifyContent:'center',
		textAlign: 'center',
	},
	submitButton: {
		backgroundColor: '#000',
		padding: 10,
		margin: 15,
		height: 40,
	},
	submitButtonText:{
		color: 'white'
	}
});
