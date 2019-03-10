import React, { Component } from "react";
import { Image, Dimensions, Linking } from "react-native";
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
  Thumbnail,
  Left,
  Right,
  Body,
  List,
  H3,
  ListItem
} from "native-base";
import styles from "./styles";

const logo = require("../../../assets/logo.png");
const cardImage = require("../../../assets/drawer-cover.png");

const datas = [
  {
    title: "Safey Notice",
    date: "July 30, 2015",
    coverImage: require("../../../assets/sites/01-safety-notice.png"),
    text: '“Safety for Seniors – Peace of Mind for their Families” '+
      'The FREE and revolutionary solution for family members '+
      'that cannot be present when their ...'
    ,
    url: "https://safetynotice.com/"
  },
  {
    title: "Livirae Lingerie",
    date: "August 10, 2014 - March 30, 2015",
    coverImage: require("../../../assets/sites/02-livirae.png"),
    text: 'The idea, inspiration, and original concepts for a custom fit lingerie and bra boutique arose, as they often do, with a need to help women feel confident and sexy,.. ',
    url: "https://liviraelingerie.com/"
  },
  {
    title: "Lawdingo",
    date: "2013 - 2014",
    coverImage: require("../../../assets/sites/03-lawdingo.png"),
    text: 'We fulfill legal services needs of law firms and companies, via a network of on-demand virtual paralegals and contract attorneys',
    url: "https://lawdingo.com/"
  },
  {
    title: "Sign Video",
    date: "2013 - 2014",
    coverImage: require("../../../assets/sites/04-sign-video.png"),
    text: 'Service providers, businesses, work colleagues and family wanting to hold conversations with deaf BSL-using people. ',
    url: "https://signvideo.co.uk/"
  },
  {
    title: "Pozzo di Mastri",
    date: "2012 - 2013",
    coverImage: require("../../../assets/sites/05-pozzodi.png"),
    text: "Première ferme auberge créée sur une propriété familiale en 1987, c'est l'histoire d'une famille passionnée avec, au départ, une idée fixe :  ...",
    url: "https://www.pozzodimastri.com/"
  },
  {
    title: "Small Office Search",
    date: "2010 - 2012",
    coverImage: require("../../../assets/sites/06-small-office-search.png"),
    text: "Première ferme auberge créée sur une propriété familiale en 1987, c'est l'histoire d'une famille passionnée avec, au départ, une idée fixe :  ...",
    url: "https://www.smallofficesearch.com/"
  },
  {
    title: "Support for starting and growing your business",
    date: "2010 - 2012",
    coverImage: require("../../../assets/sites/07-venture-kamloops.png"),
    text: "As the economic development organization for the City of Kamloops, Venture Kamloops’ focus is just that, economic development.",
    url: "http://www.venturekamloops.com/"
  },
  {
    title: "Investments",
    date: "2010 - 2012",
    coverImage: require("../../../assets/sites/08-investments.png"),
    text: "With so many different investment choices out there, it can be difficult to find out what the best options are for you when it is your turn to put your money to work. ",
    url: "https://www.investments.net/"
  }
];

class Experiences extends Component {
  render() {
    return (
      <Container style={styles.container}>
        <Header>
          <Left>
            <Button transparent onPress={() => this.props.navigation.openDrawer()}>
              <Icon name="menu" />
            </Button>
          </Left>
          <Body>
            <Title>Experiences</Title>
          </Body>
          <Right />
        </Header>

        <Content padder >

        {
          datas.map( (data, i)=>{
            return(
              <Card padder key={i}  style={styles.mb} >
                <CardItem >
                  <Left>
                    <Body>
                      <H3>{data.title}</H3>
                      <Text note>{data.date}</Text>
                    </Body>
                  </Left>
                </CardItem>

                <CardItem>
                  <Body>
                    <Image
                      style={ styles.cardCover }
                      source={ data.coverImage }
                    />
                    <Text>
                      {data.text}
                    </Text>
                  </Body>
                </CardItem>
                <CardItem style={{ paddingVertical: 0 }}>
                  <Left>
                    <Text transparent onPress={ ()=>{ Linking.openURL( data.url )}}
                      style={ styles.httpLink } >
                      <Icon name="ios-link" style={{ fontSize: 16 }} />
                      &nbsp;&nbsp; {data.url}
                    </Text>
                  </Left>
                </CardItem>
              </Card>
            );
          })
        }




        </Content>
      </Container>
    );
  }
}

export default Experiences;
