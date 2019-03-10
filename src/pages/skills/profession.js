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

class SkillProfession extends Component {
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
            <Title>Professional Skills</Title>
          </Body>
          <Right />
        </Header>

        <Content padder>
          <Card style={styles.mb}>
            <CardItem>
              <Left>
                <Text>
                  Communication
                </Text>
              </Left>
              <Right>
                <Text>
                  90%
                </Text>
              </Right>
            </CardItem>
            <CardItem style={ styles.cardItem }>
              <Progress.Bar id="progressBar"
                style={{ flex: 1, alignSelf: 'stretch' }}
                progress={0.90} width={ null } height={ 10 } />
            </CardItem>
            <CardItem>
              <Left>
                <Text>
                  Leadership
                </Text>
              </Left>
              <Right>
                <Text>
                  75%
                </Text>
              </Right>
            </CardItem>
            <CardItem style={ styles.cardItem }>
              <Progress.Bar id="progressBar2"
                style={{ flex: 1, alignSelf: 'stretch' }}
                progress={0.75} width={ null } height={ 10 } />
            </CardItem>
            <CardItem>
              <Left>
                <Text>
                  Project Management
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
                  Software Design & Architecture
                </Text>
              </Left>
              <Right>
                <Text>
                  96%
                </Text>
              </Right>
            </CardItem>
            <CardItem style={ styles.cardItem }>
              <Progress.Bar id="progressBar4"
                style={{ flex: 1, alignSelf: 'stretch' }}
                progress={0.96} width={ null } height={ 10 } />
            </CardItem>
          </Card>
        </Content>
      </Container>
    );
  }
}

export default SkillProfession;

