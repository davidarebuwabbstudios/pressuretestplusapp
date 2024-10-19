import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF"
  },

  prePressurisationChecksChild: {
    backgroundColor: "rgba(0, 0, 0, 0.25)",
    display: 'flex',
  },

  typography4: {
    width: 'auto',
  },

  body13: {
    textAlign: "center",
    fontFamily: "Roboto-Bold",
    fontWeight: "700",
    color: 'black'
  },

  paper: {
    shadowRadius: 3,
    elevation: 3,
   // height: 187,
    //width: 316,
    borderRadius: 4,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowColor: "rgba(0, 0, 0, 0.12)",
    backgroundColor:  "#fff",
  },

  paperShadowBox: {
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowColor: "rgba(0, 0, 0, 0.12)",
    overflow: "hidden",
  },

  confirmation1: {
    color: "#000",
    margin: 8
  },

  confirmation: {
    lineHeight: 24,
    fontSize: 16,
    letterSpacing: 0,
  },
  pleaseConfirmThat: {
    lineHeight: 22,
    color: "#e65100",
    margin: 10,
  },

  

  blankLine: {
    color: "rgba(0, 0, 0, 0.6)",
  },

  pleaseConfirmThatTypo: {
    fontSize: 14,
    letterSpacing: 0,
  },

  view2: {
    alignItems: "center",
    backgroundColor: "#6F8E42",
    borderRadius: 4,
    paddingVertical: 8,
    paddingHorizontal: 22,		
    marginBottom: 16,
    shadowColor: "#00000033",
    shadowOpacity: 0.2,
    shadowOffset: {
        width: 0,
        height: 3
    },
    shadowRadius: 1,
    elevation: 1,
},

  buttonShadowBox: {
    width: 111,
    height: 30,
    paddingVertical: 8,
    paddingHorizontal: 22,
    borderRadius: 4,
    shadowOpacity: 1,
    elevation: 5,
    shadowRadius: 5,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowColor: "rgba(0, 0, 0, 0.12)",
    justifyContent: "center",
    backgroundColor: "#53a020",
    alignItems: "center",
    overflow: "hidden",
  },

  buttonParent: {
    gap: 18,
    //height: 30,
    width: 316,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    margin: 10,
    marginTop: 18,
  },

  base: {
    gap: 8,
    flexDirection: "row",
  },

  baseFlexBox: {
    justifyContent: "center",
    alignItems: "center",
  },

  text2: {
    color: "#FFFFFF",
    fontSize: 10,
},

completionButtonShadowBox: {
    width: 150,
   // height: 30,
    paddingVertical: 8,
    paddingHorizontal: 22,
    borderRadius: 4,
    shadowOpacity: 1,
    elevation: 5,
    shadowRadius: 5,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowColor: "rgba(0, 0, 0, 0.12)",
    justifyContent: "center",
    backgroundColor: "#53a020",
    alignItems: "center",
    overflow: "hidden",
  },



});

export default styles;