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
	Linking
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
  const db = SQLite.openDatabase('DB2.db');

export default class HomeScreen extends React.Component {

	searchDB() {
		
		// console.log(this.state.searchTerm)
		// console.log(db)
		// console.log(this.state.searchTerm)
			db.transaction(tx => {
			tx.executeSql('SELECT * FROM DB WHERE title LIKE ? ORDER BY title', ['%'+this.state.searchTerm+'%'], (_, {
				rows
			}) => {
				this.props.navigation.navigate('List',{data:rows._array,searchTerm:this.state.searchTerm});
				// console.log(rows._array[0]);
			});
		},
		null,
		null
	);
		// db.transaction((tx) => {
			
		// 	tx.executeSql("SELECT * FROM DB WHERE title LIKE = ?", [
		// 		'%'+this.state.searchTerm+'%',
		// 	], (tx, results) => {
		// 		console.log(results);
		// 		this.props.navigation.navigate('List',{data:results,searchTerm:this.state.searchTerm});
		// 	})
			
		// 	});


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
		<View style={styles.container}>
		<ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
		<View style={styles.welcomeContainer}>
		<Text style={styles.getStartedText}>
		MyPulse
		</Text>
		<Image
		source={
			require('../assets/images/logoNoText.png')
		}
		style={styles.welcomeImage}
		/>

		</View>
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

		</ScrollView>
		<View style={{margin:25}}>
		<Button
		onPress={this.onPressLearn.bind(this)}
		title="Learn More"
		color={Platform.OS === 'ios' ? '#fff' : Colors.pulseGreen}
		accessibilityLabel="Learn more about Pulse Passion!"
		/>
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
	},
	getStartedContainer: {
		alignItems: 'center',
		marginHorizontal: 50,
	},
	homeScreenFilename: {
		marginVertical: 7,
	},
	getStartedText: {
		fontSize: 25,
		color: 'white',
		fontWeight: 'bold',
		textAlign: 'center',
		marginTop:25
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
