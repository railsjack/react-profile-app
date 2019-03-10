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

class SkillFrameworks extends Component {
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
            <Title>FRAMEWORKS & TOOLS</Title>
          </Body>
          <Right />
        </Header>

        <Content padder>
          <Card style={styles.mb}>
            <CardItem header>
              <H3>FRAMEWORKS & TOOLS</H3>
            </CardItem>
            <CardItem>
              <Left>
                <Text>
                  Backend( Ruby on Rails, Laravel, CodeIgniter )
                </Text>
              </Left>
              <Right>
                <Text>
                  95%
                </Text>
              </Right>
            </CardItem>
            <CardItem>
              <Progress.Bar id="progressBar"
                style={{ flex: 1, alignSelf: 'stretch' }}
                progress={0.95} width={ null } height={ 10 } />
            </CardItem>
            <CardItem>
              <Left>
                <Text>
                  Frontend ( Bootrap 4, Material Design,  AngularJS/Angular5+, VueJS, Ionic Hybrid Mobile App
                </Text>
              </Left>
              <Right>
                <Text>
                  95%
                </Text>
              </Right>
            </CardItem>
            <CardItem>
              <Progress.Bar id="progressBar2"
                style={{ flex: 1, alignSelf: 'stretch' }}
                progress={0.95} width={ null } height={ 10 } />
            </CardItem>
            <CardItem bordered>
            </CardItem>
            <CardItem>
              <Left>
                <Text>
                  CMS ( WordPress )
                </Text>
              </Left>
              <Right>
                <Text>
                  80%
                </Text>
              </Right>
            </CardItem>
            <CardItem>
              <Progress.Bar id="progressBar3"
                style={{ flex: 1, alignSelf: 'stretch' }}
                progress={0.8} width={ null } height={ 10 } />
            </CardItem>
            <CardItem bordered>
            </CardItem>
            <CardItem>
              <Left>
                <Text>
                  Other ( React Native, Ionic, Electron )
                </Text>
              </Left>
              <Right>
                <Text>
                  90%
                </Text>
              </Right>
            </CardItem>
            <CardItem>
              <Progress.Bar id="progressBar4"
                style={{ flex: 1, alignSelf: 'stretch' }}
                progress={0.9} width={ null } height={ 10 } />
            </CardItem>
          </Card>
        </Content>
      </Container>
    );
  }
}

export default SkillFrameworks;
