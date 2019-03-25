import React from "react"
import {
	View, Text, StyleSheet
} from "react-native"
import firebase from "react-native-firebase"

export default class Loading extends React.Component {

	componentDidMount() {
		firebase.auth().onAuthStateChanged( user => {
			console.log('firebase.auth().onAuthStateChanged...')
			this.props.navigation.navigate( user ? 'Main':'Login' )
		})
	}

	render (){
		return (
			<View>
				<Text>Loading...</Text>
			</View>
		)
	}
}



const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center'
	},
	textInput: {
		width: '90%',
		height: 40,
		marginTop: 8,
		borderColor: 'gray',
		borderWidth: 1
	},
	button: {
		height: 30,
		width: '90%',
		marginTop: 10,
		color: 'red'
	}
})