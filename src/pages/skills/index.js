import React, { Component } from "react";
import {
	Container,
	Header,
	Title,
	Content,
	Button,
	Icon,
	Body,
	Left,
	Right,
	List,
	ListItem,
	Text
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
			<Container>
				<Header>
					<Left>
						<Button onPress={ ()=> this.props.navigation.openDrawer() }>
							<Icon name="menu"></Icon>
						</Button>
					</Left>
					<Body>
						<Title>Skills</Title>
					</Body>
					<Right></Right>
				</Header>
				<Content padder>
					<List
						dataArray={ datas }
						renderRow={ data => 
							<ListItem button
								onPress={ ()=> this.props.navigation.navigate(data.route) }>
								<Left>
									<Text>{ data.text }</Text>
								</Left>
								<Right>
									<Icon name="arrow-forward" style={{ color: '#999' }}></Icon>
								</Right>
							</ListItem>
						}
					 />
				</Content>
			</Container>
		);
	};
};

export default Skills;