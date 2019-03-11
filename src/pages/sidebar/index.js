import React, { Component } from "react";
import { Image, Linking } from "react-native";
import {
  Content,
  Text,
  List,
  ListItem,
  Icon,
  Container,
  Left,
  Right,
  Badge
} from "native-base";
import styles from "./style";

const drawerCover = require("../../../assets/drawer-cover.png");
const drawerImage = require("../../../assets/logo-kitchen-sink.png");
const datas = [
  {
    name: "Home",
    route: "Home",
    icon: "home",
    bg: "#C5F442"
  },
  {
    name: "Experiences",
    route: "Experiences",
    icon: "md-code-working",
    bg: "#C5F442"
  },
  {
    name: "Skills",
    route: "Skills",
    icon: "ios-thumbs-up",
    bg: "#C5F442"
  }/*,
  {
    name: "Contact me",
    route: "Contact",
    icon: "ios-contact",
    bg: "#C5F442"
  }*/
];

const profileLink = "https://nahrae-jin.herokuapp.com/#form1-n";

class SideBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      shadowOffsetWidth: 1,
      shadowRadius: 4
    };
  }

  render() {
    return (
      <Container>
        <Content
          bounces={false}
          style={{ flex: 1, backgroundColor: "#fff", top: -1 }}
        >
          <Image source={drawerCover} style={styles.drawerCover} />
          <Image square style={styles.drawerImage} source={drawerImage} />

          <List
            dataArray={datas}
            renderRow={data =>
              <ListItem
                button
                noBorder
                onPress={() => this.props.navigation.navigate(data.route)}
              >
                <Left>
                  <Icon
                    active
                    name={data.icon}
                    style={{ color: "#777", fontSize: 26, width: 30 }}
                  />
                  <Text style={styles.text}>
                    {data.name}
                  </Text>
                </Left>
                {data.types &&
                  <Right style={{ flex: 1 }}>
                    <Badge
                      style={{
                        borderRadius: 3,
                        height: 25,
                        width: 72,
                        backgroundColor: data.bg
                      }}
                    >
                      <Text
                        style={styles.badgeText}
                      >{`${data.types} Types`}</Text>
                    </Badge>
                  </Right>}
              </ListItem>}
          />
          <List>
              <ListItem
                    button
                    noBorder
                    onPress={() => Linking.openURL( profileLink )}
                  >
                <Left>
                  <Icon
                    active
                    name="ios-contact"
                    style={{ color: "#777", fontSize: 26, width: 30 }}
                  />
                  <Text style={styles.text}>
                    Contact me
                  </Text>
                </Left>
              </ListItem>
          </List>
        </Content>
      </Container>
    );
  }
}

export default SideBar;
