import React, { Component } from "react";
import {
	Container,
	Header,
	Title,
	Content,
	Button,
	Icon,
	Text,
	Body,
	Left,
	Right,
	List,
	ListItem
} from "native-base";
import styles from "./styles";

const datas = [
	{
		route: "SkillFrameworks",
		text: "Frameworks and Tools",
		icon: "md-business"
	},
	{
		route: "SkillProgramming",
		text: "Programming",
		icon: "md-thumbs-up"
	},
	{
		route: "SkillServer",
		text: "Server & Networking",
		icon: "md-cloud"
	},
	{
		route: "SkillProfession",
		text: "Professional Skills",
		icon: "md-code"
	},
	{
		route: "SkillApi",
		text: "API Integration",
		icon: "ios-construct"
	}
];


class Skills extends Component {
	render() {
		return (
			<Container style={styles.container}>
				<Header>
					<Left>
						<Button 
							transparent
							onPress={() => this.props.navigation.openDrawer() }
						>
							<Icon name="menu" />
						</Button>
					</Left>
					<Body>
						<Title>My Skills</Title>
					</Body>
					<Right />
				</Header>

				<Content>
					<List
						dataArray={datas}
						renderRow={data => 
							<ListItem
								button
								onPress={() => this.props.navigation.navigate(data.route)}
							>
								<Left>
									<Icon name={data.icon}  style={{ fontSize: 20, lineHeight: 30, marginRight: 10 }} />
									<Text style={{ fontSize: 20 }}>
										{data.text}
									</Text>
								</Left>
								<Right>
									<Icon name="arrow-forward" style={{ color: '#999' }} />
								</Right>
							</ListItem>}
					 />
				</Content>
			</Container>
		);
	};
};

export default Skills;
