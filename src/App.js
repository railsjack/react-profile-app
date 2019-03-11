import React from "react";
import { Root } from "native-base";
import { createAppContainer, createStackNavigator, createDrawerNavigator } from "react-navigation";

import Home from "./pages/home/";
import Skills from "./pages/skills/";
import SkillFrameworks from "./pages/skills/frameworks";
import SkillProgramming from "./pages/skills/programming";
import SkillServer from "./pages/skills/server";
import SkillProfession from "./pages/skills/profession";
import SkillApi from "./pages/skills/api";
import Experiences from "./pages/experiences/";

import SideBar from "./pages/sidebar";

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


