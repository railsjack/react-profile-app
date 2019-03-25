import React from "react"
import {
	View, Text, TextInput, StyleSheet, ImageBackground, StatusBar, ActivityIndicator
} from "react-native"
import {
	Container, Button, H3, Toast
} from "native-base"

import firebase from "react-native-firebase"
import styles from "./styles"

export default class SignUp extends React.Component {
	state = { email: '', password: '', errorMessage: null, loading: false }

	handleSignUp = () => {
    if(this.state.email == ""){
      return Toast.show({text: 'Email is empty!'})
    }
    if(this.state.password == ""){
      return Toast.show({text: 'Password is empty!'})
    }
    this.setState( {loading: true} )
		firebase
			.auth().createUserWithEmailAndPassword(this.state.email, this.state.password)
      .then( ()=> {
      	this.setState( {loading: false} )
      	this.navigate('Main')
      })
      .catch( error=> {
      	this.setState( {loading: false} )
      	//this.setState( {errorMessage: error.message} ) 
      	Toast.show({text: error.message})
      })
	}

	render() {
		const launchscreenBg = require("../../../assets/launchscreen-bg.png");
		const launchscreenLogo = require("../../../assets/logo-kitchen-sink.png");
		return (
			<Container>
				<StatusBar barStyle="light-content" />
				<ImageBackground source={launchscreenBg} style={styles.imageContainer}>
					<View style={styles.container}>
		        <ImageBackground source={launchscreenLogo} style={styles.logo} />
						<H3 style={styles.text}>SignUp</H3>
						<TextInput
							style={styles.textInput}
							placeholder="Email"
							placeholderTextColor="white"
							autoCapitalize="none"
							onChangeText={ email=> this.setState({email: email}) }
							value={ this.state.email }
						/>
						<TextInput
							style={styles.textInput}
							placeholder="Password"
							placeholderTextColor="white"
							secureTextEntry
							onChangeText={ password=> this.setState({password: password})}
							value={ this.state.password }
						/>
						<Button block primary
							disabled={this.state.loading}
              style={[styles.button_base,this.state.loading && styles.button_base_disabled]}
							onPress={this.handleSignUp} >
              {
              	this.state.loading ? 
              	<ActivityIndicator size='small' />
              	:
              	<Text style={styles.button_text}>SignUp</Text>
              }
						</Button>
						<Button block transparent
							style={styles.button_base}
							onPress={()=>this.props.navigation.navigate('Login')} >
							<Text style={styles.button_text} >
								Already have an account? Login
							</Text>
						</Button>
						
					</View>
				</ImageBackground>
			</Container>
		)
	}
}
