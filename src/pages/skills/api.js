import React, { Component } from "react";
import {
  Container,
  Header,
  Title,
  Content,
  Button,
  Icon,
  Text,
  Left,
  Body,
  Right,
  Grid,
  Col,
  Row
} from "native-base";
import styles from "./styles-icon";

const datas = [
  {id:'ios-appstore',     text: 'App store'},
  {id:'ios-at',           text: 'Domain man'},
  {id:'ios-barcode',      text: 'Qr/BarCode'},
  {id:'ios-build',        text: 'Compile'},
  {id:'ios-business',     text: 'Business application'},
  {id:'ios-calculator',   text: 'Finance'},
  {id:'ios-call',         text: 'Twilio'},
  {id:'ios-cart',         text: 'eCommerce'},
  {id:'ios-cash',         text: 'Payment gateway'},
  {id:'ios-chatbubbles',  text: 'Chat apps'},
  {id:'ios-git-pull-request',   text: 'Git'},
  {id:'ios-grid',         text: 'Bootstrap'},
  {id:'ios-mail',         text: 'Mail service'},
  {id:'ios-pin',          text: 'Google map'},
  {id:'ios-restaurant',   text: 'Food app/Site'},
  {id:'ios-rocket',       text: 'PostMan'},
  {id:'ios-videocam',     text: 'Video app'},
  {id:'logo-android',     text: 'Android'},
  {id:'logo-angular',     text: 'Angular'},
  {id:'logo-apple',       text: 'iOS'},
  {id:'logo-bitcoin',     text: 'Blockchain'},
  {id:'logo-css3',        text: 'CSS3'},
  {id:'logo-facebook',    text: 'Facebook'},
  {id:'logo-github',      text: 'Github'},
  {id:'logo-google',      text: 'Google'},
  {id:'logo-html5',       text: 'HTML5'},
  {id:'logo-instagram',   text: 'Instagram'},
  {id:'logo-ionic',       text: 'Ionic'},
  {id:'logo-linkedin',    text: 'Linkedin'},
  {id:'logo-pinterest',   text: 'Pinterest'},
  {id:'logo-twitter',     text: 'Twitter'},
  {id:'logo-vimeo',       text: 'Vimeo'},
  {id:'logo-vk',          text: 'VK'},
  {id:'logo-whatsapp',    text: 'WhatsApp'},
  {id:'logo-wordpress',   text: 'WordPress'},
  {id:'logo-youtube',     text: 'Youtube'}
];

const colors = [
  "#ffc125","#387ef5","#000","#663399","#32db64","#27a","#fac125",
  "blue","green","#aaa","#000","brown","orange","#000","#387ef5",
  "red","blue","#000","pink","#000","green","#387ef5","#000","#aaa",
  "#000","purple","green","red","#1DA1F2","blue","gold","#E14343",
  "brown","#000","red","blue","#555","#27a","#000","green","#000",
  "#000","gold","#889","blue","#000","#f53d3d","#c76","#000","blue",
  "gold","green","#999","brown","#387ef5","#000","#000","#1df","red",
  "brown","green","#000","#ffc125","#387ef5","#387ef5","#777","blue",
  "#EBAB7F","#000","red","#000","#46639E","#DC4A38","#1DA1F2","red",
  "#000","#46639E","#DC4A38"
];

class SkillApi extends Component {
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
            <Title>API Integration</Title>
          </Body>
          <Right />
        </Header>

        <Content padder>
          <Grid>
            {
              datas.map( (icon, i)=>{
                if( i%3 != 0 ) return
                icon0 = datas[i].id, icon1 = datas[i+1].id
                icon2 = datas[i+2].id

                text0 = datas[i].text, text1 = datas[i+1].text
                text2 = datas[i+2].text
                color0 = colors[Math.floor(Math.random()*colors.length)];
                color1 = colors[Math.floor(Math.random()*colors.length)];
                color2 = colors[Math.floor(Math.random()*colors.length)];
                return(
                  <Row style={styles.row} key={"icon-row-${i}"} >
                    <Col style={styles.col}><Icon name={icon0} style={{ color: color0 }} /><Text numberOfLines={1} style={styles.iconText}>{text0}</Text></Col>
                    <Col style={styles.col}><Icon name={icon1} style={{ color: color1 }} /><Text numberOfLines={1} style={styles.iconText}>{text1}</Text></Col>
                    <Col style={styles.col}><Icon name={icon2} style={{ color: color2 }} /><Text numberOfLines={1} style={styles.iconText}>{text2}</Text></Col>
                  </Row>
                );
              })
            }
          </Grid>
        </Content>
      </Container>
    );
  }
}

export default SkillApi;
