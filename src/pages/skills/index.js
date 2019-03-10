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
		text: "Frameworks and Tools"
	},
	{
		route: "SkillProgramming",
		text: "Programming"
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
							onPress={() => this.props.navigation.openDrawer()}
						>
							<Icon name="menu" />
						</Button>
					</Left>
					<Body>
						<Title>Skills</Title>
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
									<Text>
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
