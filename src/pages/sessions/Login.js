import React from "react"

import {
  View, Text, TextInput, StyleSheet, StatusBar, ImageBackground, ActivityIndicator
} from "react-native"
import {
  Container, Button, H3, Toast
} from "native-base"

import firebase from "react-native-firebase"

import styles from "./styles"

export default class Login extends React.Component {
  state = { email: '', password: '', errorMessage: null, loading: false }
  navigate = this.props.navigation.navigate;
  handleLogin = () => {
    if(this.state.email == ""){
      Toast.show({text: 'Email is empty!'})
      return
    }
    if(this.state.password == ""){
      Toast.show({text: 'Password is empty!'})
      return
    }
    const {email, password} = this.state
    this.setState( {loading: true} )
    firebase
      .auth().signInWithEmailAndPassword(email, password)
      .then( ()=> {
      	//this.setState( {loading: false} )
      	//this.navigate('Main')
      })
      .catch( error=> {
      	this.setState( {loading: false} )
      	this.setState( {errorMessage: error.message} ) 
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
          <View style={styles.container} >
            <ImageBackground source={launchscreenLogo} style={styles.logo} />
            <H3 style={styles.text}>Login</H3>
            
            <TextInput
              style={styles.textInput}
              placeholder="Email"
              placeholderTextColor="white"
              autoCapitalize="none"
              onChangeText={ email => this.setState( {email: email} ) }
            />
            <TextInput
              style={styles.textInput}
              placeholder="Password"
              placeholderTextColor="white"
              autoCapitalize="none"
              secureTextEntry
              onChangeText={ password => this.setState( {password: password} ) }
            />
            <Button block primary disabled={this.state.loading}
              style={[styles.button_base,this.state.loading && styles.button_base_disabled]}
              onPress={this.handleLogin}>
              {
              	this.state.loading ? 
              	<ActivityIndicator size='small' />
              	:
              	<Text style={styles.button_text}>Login</Text>
              }
              
            </Button>
            <Button block transparent
              style={styles.button_base}
              onPress={()=> this.navigate('SignUp')} >
              <Text style={styles.button_text}>Don't have an account? Sign Up</Text>
            </Button>
          </View>
        </ImageBackground>
      </Container>
    )
  }
}
