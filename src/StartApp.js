import React from 'react'
import firebase from 'react-native-firebase'
import { Root } from "native-base"
import { createAppContainer, createSwitchNavigator } from "react-navigation"

import Loading from "./pages/sessions/Loading"
import SignUp from "./pages/sessions/SignUp"
import Login from "./pages/sessions/Login"
import Main from "./pages/sessions/Main"

const switchNavigator = createSwitchNavigator(
		{
			Loading: { screen: Loading },
			Login: { screen: Login },
			SignUp: { screen: SignUp },
			Main: { screen: Main }
		},
		{
			initialRouteName: 'Loading'
		}
	)

const AppContainer = createAppContainer(switchNavigator)

export default () => 
	<Root>
		<AppContainer />
	</Root>

