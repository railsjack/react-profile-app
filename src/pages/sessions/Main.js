import React from "react";
import { Root } from "native-base";
import { createAppContainer, createStackNavigator, createDrawerNavigator } from "react-navigation";

import Home from "../home/";
import Skills from "../skills/";
import SkillFrameworks from "../skills/frameworks";
import SkillProgramming from "../skills/programming";
import SkillServer from "../skills/server";
import SkillProfession from "../skills/profession";
import SkillApi from "../skills/api";
import Experiences from "../experiences/";

import SideBar from "../sidebar";

const Drawer = createDrawerNavigator(
	{
		Home: { screen: Home },
		Skills: { screen: Skills },
		Experiences: { screen: Experiences },
	},
	{
		initialRouteName: "Home",
		contentOptions: {
			activeTintColor: "#e91e63"
		},
		contentComponent: props => <SideBar { ...props } />
	}
);

const AppNavigator = createStackNavigator(
	{
		Drawer: { screen: Drawer },

		SkillFrameworks: { screen: SkillFrameworks },
		SkillProgramming: { screen: SkillProgramming },
		SkillServer: { screen: SkillServer },
		SkillProfession: { screen: SkillProfession },
		SkillApi: { screen: SkillApi },
	},
	{
		initialRouteName: "Drawer",
		headerMode: "none"
	}
);

const AppContainer = createAppContainer(AppNavigator);

export default () =>
	<Root>
		<AppContainer />
	</Root>;
