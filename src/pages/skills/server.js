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

class SkillServer extends Component {
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
            <Title>Server & Networking</Title>
          </Body>
          <Right />
        </Header>

        <Content padder>
          <Card style={styles.mb}>
            <CardItem>
              <Left>
                <Text>
                  Linux Nginx, Apache 
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
                  Amazon Web Services ( EC2, RDS - MySQL, Aurora, S3 )
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
                  Google Cloud Platform ( Compute Engine, Storage )
                </Text>
              </Left>
              <Right>
                <Text>
                  80%
                </Text>
              </Right>
            </CardItem>
            <CardItem style={ styles.cardItem }>
              <Progress.Bar id="progressBar3"
                style={{ flex: 1, alignSelf: 'stretch' }}
                progress={0.8} width={ null } height={ 10 } />
            </CardItem>
            <CardItem>
              <Left>
                <Text>
                  Other ( Digital Ocean, Linde, WHM & Cpanel )
                </Text>
              </Left>
              <Right>
                <Text>
                  65%
                </Text>
              </Right>
            </CardItem>
            <CardItem style={ styles.cardItem }>
              <Progress.Bar id="progressBar4"
                style={{ flex: 1, alignSelf: 'stretch' }}
                progress={0.65} width={ null } height={ 10 } />
            </CardItem>
          </Card>
        </Content>
      </Container>
    );
  }
}

export default SkillServer;
