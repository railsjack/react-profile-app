import { Dimensions } from "react-native";

const deviceWidth = Dimensions.get("window").width;
export default {
	container: {
    backgroundColor: "#FFF"
  },
  text: {
    alignSelf: "center",
    marginBottom: 7
  },
  mb: {
    marginBottom: 15
  },
  cardCover: {
	  alignSelf: "center",
	  resizeMode: "cover",
	  height: 150,
	  width: deviceWidth / 1.18,
	  marginVertical: 5
	},
  httpLink: {
    height: 25,
    fontSize: 18,
    lineHeight: 22,
    fontWeight: "500",
    color: "#00a"
  }
};