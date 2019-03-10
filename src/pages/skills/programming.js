import React, { Component } from "react";
import * as Progress from 'react-native-progress';

import {
  Container,
  Header,
  Title,
  Content,
  Button,
  Icon,
  Card,
  CardItem,
  Text,
  Body,
  Left,
  Right,
  H3
} from "native-base";

import styles from "./styles";

class SkillProgramming extends Component {
  render() {
    return (
      <Container style={styles.container}>
        <Header>
          <Left>
            <Button transparent onPress={() => this.props.navigation.goBack()}>
              <Icon name="arrow-back" />
            </Button>
          </Left>
          <Body>
            <Title>Programming</Title>
          </Body>
          <Right />
        </Header>

        <Content padder>
          <Card style={styles.mb}>
            <CardItem>
              <Left>
                <Text>
                  HTML5 / CSS3 / jQuery / AJAX / PHP / C++ / C# / JAVA / RUBY / PYTHON
                </Text>
              </Left>
              <Right>
                <Text>
                  95%
                </Text>
              </Right>
            </CardItem>
            <CardItem style={ styles.cardItem }>
              <Progress.Bar id="progressBar"
                style={{ flex: 1, alignSelf: 'stretch' }}
                progress={0.95} width={ null } height={ 10 } />
            </CardItem>
            <CardItem>
              <Left>
                <Text>
                  Database ( Amazon RDS techs, MySQL, SQLite, NoSQL, MongoDB, PostgreSQL )
                </Text>
              </Left>
              <Right>
                <Text>
                  90%
                </Text>
              </Right>
            </CardItem>
            <CardItem style={ styles.cardItem }>
              <Progress.Bar id="progressBar2"
                style={{ flex: 1, alignSelf: 'stretch' }}
                progress={0.90} width={ null } height={ 10 } />
            </CardItem>
            <CardItem>
              <Left>
                <Text>
                  Testing &amp; Web Services ( RSpec, Cucumber, Jasmine, RESTful APIs, Microservices, SOAP, JSON )
                </Text>
              </Left>
              <Right>
                <Text>
                  90%
                </Text>
              </Right>
            </CardItem>
            <CardItem style={ styles.cardItem }>
              <Progress.Bar id="progressBar3"
                style={{ flex: 1, alignSelf: 'stretch' }}
                progress={0.9} width={ null } height={ 10 } />
            </CardItem>
            <CardItem>
              <Left>
                <Text>
                  Script Build Automation ( Gulp, NodeJs, Grunt, Yarn )
                </Text>
              </Left>
              <Right>
                <Text>
                  85%
                </Text>
              </Right>
            </CardItem>
            <CardItem style={ styles.cardItem }>
              <Progress.Bar id="progressBar4"
                style={{ flex: 1, alignSelf: 'stretch' }}
                progress={0.85} width={ null } height={ 10 } />
            </CardItem>
          </Card>
        </Content>
      </Container>
    );
  }
}

export default SkillProgramming;
