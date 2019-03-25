const React = require("react-native");
const { Dimensions, Platform } = React;
const deviceHeight = Dimensions.get("window").height;

export default {
  imageContainer: {
    flex: 1,
    width: null,
    height: null,
  },
  logo: {
    /*left: Platform.OS === "android" ? 80 : 90,
    top: Platform.OS === "android" ? 85 : 120,*/
    width: 280,
    height: 100
  },
  text: {
    color: "#D8D8D8",
    bottom: 6,
    marginTop: 10,
    marginBottom: 10,
    textAlign: "center",
    lineHeight: 35
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: deviceHeight / 8,
    marginBottom: 30
  },
  textInput: {
    width: '80%',
    height: 40,
    borderColor: 'white',
    borderWidth: 1,
    marginTop: 8,
    color: 'white',
    fontSize: 18,
    borderRadius: 4,
    paddingHorizontal: 10,
  },
  button_base: {
    height: 40,
    width: '80%',
    marginTop: 10,
    marginLeft: 'auto',
    marginRight: 'auto',
    borderColor: 'white'
  },
  button_base_disabled:{
  	backgroundColor: "rgba(255,255,255,0.5)"
  },
  button_text: {
    color: 'white',
    fontSize: 18,
    lineHeight: 20
  },
  loading: {
    position: 'absolute',
    zIndex: 1000,
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white'
  }
};
