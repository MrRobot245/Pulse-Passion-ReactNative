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
	Button
} from 'react-native';
import {SQLite,FileSystem,Asset } from 'expo';
import { MontText,MontBold } from '../components/StyledText';

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
	console.log(this.state.searchTerm);
	this.searchDB();
}
onPressLearn()
{

}

render() {

	return (
		<View style={styles.container}>
		<ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
		<View style={styles.welcomeContainer}>
		<MontText style={styles.getStartedText}>
		MyPulse
		</MontText>
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
		/>



		<Button
		onPress={this.onPressSearch.bind(this)}
		title="Search"
		color="#fff"

		accessibilityLabel="Learn more about this purple button"
		/>


		</ScrollView>
		<Button
		onPress={this.onPressLearn.bind(this)}
		title="Learn More"
		color="#fff"

		accessibilityLabel="Learn more about this purple button"
		/>
		</View>
	);
}

_handleLearnMorePress = () => {
	WebBrowser.openBrowserAsync('https://docs.expo.io/versions/latest/guides/development-mode');
};

_handleHelpPress = () => {
	WebBrowser.openBrowserAsync(
		'https://docs.expo.io/versions/latest/guides/up-and-running.html#can-t-see-your-changes'
	);
};
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
		marginTop: 10,
		marginBottom: 20,
	},
	welcomeImage: {
		width: 200,
		height: 120,
		resizeMode: 'contain',
		marginTop: 10,
	},
	getStartedContainer: {
		alignItems: 'center',
		marginHorizontal: 50,
	},
	homeScreenFilename: {
		marginVertical: 7,
	},
	getStartedText: {
		fontSize: 24,
		color: 'white',
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
