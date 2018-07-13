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
import {SQLite,FileSystem,Asset } from 'expo';
import { MontText,MontBold } from '../components/StyledText';
import Colors from '../constants/Colors';
export default class HomeScreen extends React.Component {

	searchDB() {
		const db = SQLite.openDatabase('DB2.db');
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
		<View style={{margin:10}}>
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
