import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFFFFF"
  },
  wrapper: {
    flex: 1,
    backgroundColor: "#FFFFFF"
  },
  image: {
    height: 63,
    padding: 10,
    marginBottom: 17,
    alignSelf: "center"
  },
  scrollView: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    paddingTop: 19,
    paddingHorizontal: 16
  },
  text: {
    color: "black",
    fontSize: 15,
    backgroundColor: "white"
  },
  text2: {
    color: "#FFFFFF",
    fontSize: 15
  },
  radioContainer: {
    alignItems: "center",
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
    elevation: 1
  },
  view: {
    borderColor: "#0000003B",
    borderRadius: 4,
    borderWidth: 1,
    paddingVertical: 0,
    paddingHorizontal: 12,
    marginBottom: 16,
    justifyContent: "center"
  },
  view2: {
    alignItems: "center",
    backgroundColor: "#53a020",
    borderRadius: 4,
    paddingVertical: 8,
    paddingHorizontal: 22,
    margin: 16,

    shadowColor: "#00000033",
    shadowOpacity: 0.2,
    shadowOffset: {
      width: 0,
      height: 3
    },
    shadowRadius: 1,
    elevation: 1
  },

  view3: {
    alignItems: "center",
    backgroundColor: "#FF6600",
    borderRadius: 4,
    paddingVertical: 8,
    paddingHorizontal: 22,
    margin: 16,
    shadowColor: "#00000033",
    shadowOpacity: 0.2,
    shadowOffset: {
      width: 0,
      height: 3
    },
    shadowRadius: 1,
    elevation: 1
  },

  view4: {
    height: 74,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#53a020",
    borderRadius: 4,
    paddingVertical: 8,
    paddingHorizontal: 22,
    margin: 16,
    shadowColor: "#00000033",
    shadowOpacity: 0.2,
    shadowOffset: {
      width: 0,
      height: 3
    },
    shadowRadius: 1,
    elevation: 1
  },
  textTypo: {
    color: "rgba(0, 0, 0, 0.87)",
    fontSize: 16,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0
  },

  pipelineBackFilled: {
    lineHeight: 24,
    justifyContent: "flex-start"
  },
  slide1: {
    backgroundColor: "#97a199",
    width: 34,
    height: 14,
    borderRadius: 100
  },
  slide: {
    padding: 12,
    opacity: 0.38,
    flexDirection: "row",
    left: 0,
    alignItems: "center",
    top: 0,
    position: "absolute"
  },
  knobIcon: {
    width: 20,
    height: 20
  },
  knob: {
    padding: 9,
    flexDirection: "row",
    left: 0,
    alignItems: "center",
    top: 0,
    position: "absolute"
  },

  switchFlexBox: {
    alignItems: "center",
    // justifyContent: "flex-end",
    flexDirection: "row"
  },
  switch: {
    // paddingLeft: 115,
    flexDirection: "row"
  },
  switch1: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between"
  },

  formcontrollabelSwitch: {
    //width: 343,
    margin: 8,
    flexDirection: "row",
    justifyContent: "space-between"
  },
  maskedIcon: {
    width: 18,
    height: 22,
    alignSelf: 'center'
  },
  button1: {
    fontSize: 15,
    lineHeight: 26,
    textTransform: "uppercase"
  },
  base: {
    gap: 8,
    flexDirection: "row"
  },
  button: {
    shadowRadius: 5,
    elevation: 5,
    paddingHorizontal: 22,
    paddingVertical: 8,
    borderRadius: 4,
    justifyContent: "center",
    alignItems: "center"
  },
  form: {
    top: 85,
    left: 16,
    gap: 16,
    width: 343,
    position: "absolute"
  },
  label4: {
    color: "#53a020"
  },

  mainContainer: {
    flexDirection: "column", // inner items will be added vertically
    flexGrow: 1, // all the available vertical space will be occupied by it
    justifyContent: "space-between" // will create the gutter between body and footer
  },

  typography1: {
    flex: 1
  },
  enterYourTest: {
    lineHeight: 12,
    color: "rgba(0, 0, 0, 0.6)",
    fontSize: 12,
    textAlign: "left",
    letterSpacing: 0
  },

  provideYourTest: {
    color: "rgba(0, 0, 0, 0.87)",
    fontFamily: "Roboto-Bold",
    fontWeight: "700",
    lineHeight: 24,
    fontSize: 16,
    letterSpacing: 0
  },
  pressureReadingTest: {
    color: "rgba(0, 0, 0, 0.87)",
    fontFamily: "Roboto-Bold",
    fontWeight: "700",
    lineHeight: 24,
    fontSize: 16,
    // letterSpacing: 0,
    textAlign: "left",
    flexWrap: "wrap"
    // marginLeft: 0
  },
  testLayout: {
    width: 348,
    textAlign: "center"
  },

  body1Clr: {
    color: "rgba(0, 0, 0, 0.87)",
    lineHeight: 24,
    letterSpacing: 0,
    fontSize: 16
  },

  bar: {
    fontSize: 24,
    color: "#53a020",
    lineHeight: 32,
    textAlign: "left"
  },

  headerFlexBox: {
    alignItems: "center",
    flexDirection: "row",
    margin: 8
  },

  isoMainFlexBox: {
    alignItems: "flex-start",
    flexDirection: "row",
    margin: 8
  },

  isoMidFlexBox: {
    alignItems: "center",
    flexDirection: "column",
    margin: 8
  },

  formFlexBox: {
    marginTop: 18
  },
  pressureFormFlexBox: {
    marginTop: 10,
    justifyContent: "center",
    padding: 16,
    gap: 16
  },

  elevationFlexBox: {
    alignItems: "center",
    flexDirection: "row",
    margin: 8
  },
  elevationAdjustments: {
    lineHeight: 24,
    fontSize: 16,
    letterSpacing: 0
  },
  testPressure: {
    fontSize: 12,
    fontFamily: "Roboto-Regular",
    letterSpacing: 0
  },
  bar1m: {
    fontSize: 14,
    lineHeight: 20,
    letterSpacing: 0
  },
  elevationAdjustmentsTestPr: {
    color: "rgba(0, 0, 0, 0.87)"
  },
  yourActualTest: {
    color: "#53a020"
  },
  typography2: {
    top: 403,
    height: 97
  },
  flowRate: {
    backgroundColor: "#fff",
    overflow: "hidden",
    height: 667,
    width: "100%",
    flex: 1
  },
  yourTypo: {
    fontFamily: "Roboto-Bold",
    fontWeight: "700"
  },

  helperTextTypo1: {
    fontFamily: "Roboto-Regular",
    lineHeight: 20
  },
  yourLayout: {
    lineHeight: 24,
    fontSize: 16,
    letterSpacing: 0
  },
  readingLayout: {
    fontSize: 16,
    textAlign: "center",
    fontWeight: "700",
    width: 300
  },
  readingDesc: {
    fontSize: 14,
    textAlign: "center",
    fontWeight: "regular",
    width: 300
  },

  flowLayout: {
    width: 348,
    lineHeight: 24,
    fontSize: 16,
    color: "rgba(0, 0, 0, 0.87)",
    letterSpacing: 0
  },
  flowTypo: {
    fontFamily: "Roboto-Bold",
    fontWeight: "700"
  },
  volumeV106026: {
    textAlign: "left",
    fontFamily: "Roboto-Regular"
  },
  flowQ5: {
    fontFamily: "Roboto-Regular"
  },
  flowQ5Container: {
    textAlign: "left"
  },
  provideTheFlow: {
    textAlign: "center",
    fontFamily: "Roboto-Bold",
    fontWeight: "700"
  },

  formgroup: {
    height: 111
  },

  body1: {
    fontSize: 16,
    lineHeight: 24,
    textAlign: "left",
    letterSpacing: 0,
    color: "rgba(0, 0, 0, 0.87)",
    fontFamily: "Roboto-Bold",
    fontWeight: "700"
  },

  typography: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: 18
  },
  duringPressurisationYou: {
    fontSize: 10,
    lineHeight: 10
  },
  bluebox4491Disconnected: {
    lineHeight: 20,
    letterSpacing: 0,
    fontSize: 14
  },
  duringPressurisationYouContainer: {
    textAlign: "center",
    margin: 8
    //width: 299,
  },
  body1Typo: {
    color: "rgba(0, 0, 0, 0.87)",
    fontFamily: "Roboto-Bold",
    fontWeight: "700"
  },
  prePressurisationChecksChild: {
    backgroundColor: "rgba(0, 0, 0, 0.25)",
    display: "flex"
  },

  typography4: {
    width: "auto"
  },

  body13: {
    textAlign: "center",
    fontFamily: "Roboto-Bold",
    fontWeight: "700",
    color: "black"
  },

  confirmation1: {
    color: "#000",
    margin: 8
  },

  confirmation: {
    lineHeight: 24,
    fontSize: 16,
    letterSpacing: 0
  },
  pleaseConfirmThat: {
    lineHeight: 22,
    color: "#e65100",
    margin: 10
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
      height: 1
    },
    shadowColor: "rgba(0, 0, 0, 0.12)",
    backgroundColor: "#fff"
  },
  blankLine: {
    color: "rgba(0, 0, 0, 0.6)"
  },
  pleaseConfirmThatTypo: {
    fontSize: 14,
    letterSpacing: 0
  },
  buttonParent: {
    gap: 18,
    //height: 30,
    width: 316,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    margin: 10,
    marginTop: 18
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
      height: 1
    },
    shadowColor: "rgba(0, 0, 0, 0.12)",
    justifyContent: "center",
    backgroundColor: "#53a020",
    alignItems: "center",
    overflow: "hidden"
  },

  decayPressurePhase: {
    width: 348,
    textAlign: "center",
    color: "rgba(0, 0, 0, 0.6)",
    fontSize: 16,
    fontFamily: "Roboto-Regular"
  },

  blankLine5Layout: {
    lineHeight: 24,
    fontSize: 16,
    letterSpacing: 0
  },

  mdiclock: {
    height: 230,
    padding: 13,
    width: 348,
    overflow: "hidden"
  },

  mainFlexBox: {
    justifyContent: "center",
    alignItems: "center"
  },

  timerText: {
    fontSize: 60,
    lineHeight: 72,
    fontWeight: "300",
    fontFamily: "Roboto-Light",
    color: "#53a020",
    textAlign: "center",
    letterSpacing: 0
  },

  buttonShadowBox: {
    // width: 111,
    height: 50,
    marginTop: 10,
    paddingVertical: 8,
    paddingHorizontal: 22,
    borderRadius: 4,
    shadowOpacity: 1,
    elevation: 5,
    shadowRadius: 5,
    shadowOffset: {
      width: 0,
      height: 1
    },
    shadowColor: "rgba(0, 0, 0, 0.12)",
    justifyContent: "center",
    backgroundColor: "#53a020",
    alignItems: "center",
    overflow: "hidden"
  },

  formcontrollabelSwitch1: {
    flexDirection: "row",
    width: 343,
    alignItems: "center"
  },

  uploadWaterVolumeContainer: {
    height: 37,
    color: "rgba(0, 0, 0, 0.87)"
  },
  waterContainerTypo: {
    width: 348,
    fontFamily: "Roboto-Bold",
    fontWeight: "700",
    textAlign: "left"
  },
  waterLayout: {
    lineHeight: 24,
    fontSize: 16
  },
  uploadWaterVolume: {
    letterSpacing: 0
  },
  text1: {
    fontSize: 14
  },
  text1Layout: {
    lineHeight: 20,
    fontSize: 14,
    letterSpacing: 0
  },
  buttongroupParent: {
    flexDirection: "row",
    height: 46
  },
  buttongroup: {
    borderRadius: 4,
    backgroundColor: "#53a020",
    shadowOpacity: 1,
    elevation: 5,
    shadowRadius: 5,
    shadowOffset: {
      width: 0,
      height: 1
    },
    shadowColor: "rgba(0, 0, 0, 0.12)",
    flexDirection: "row",
    alignItems: "center"
  },
  maskedIconLayout: {
    height: 20,
    width: 16
  },
  buttonClr: {
    color: "#fff",
    textAlign: "left",
    letterSpacing: 0
  },
  buttonSpaceBlock: {
    // paddingVertical: 6,
    width: 130,
    paddingHorizontal: 16,
    backgroundColor: "#53a020",
    borderRadius: 4,
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden"
  },
  paperShadowBox: {
    backgroundColor: "#53a020",
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 1
    },
    shadowColor: "rgba(0, 0, 0, 0.12)",
    overflow: "hidden"
  },
  series11: {
    letterSpacing: 0.1,
    textAlign: "right",
    color: "rgba(0, 0, 0, 0.87)",
    lineHeight: 24,
    fontSize: 16,
    fontFamily: "Roboto-Regular",
  },
  legendLayout: {
    height: 20,
    width: 20,
  },
  legendFlexBox: {
    gap: 4,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center"
  },
  legendItem: {
    backgroundColor: "#d32f2f",
  },
  legendChild: {
    backgroundColor: "#53a020",
  },
  elementsLegend: {
    paddingBottom: 16,
    gap: 24,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  cards: {
    paddingTop: 41,
    gap: 12,
    width: 323,
    flexDirection: "row",
    justifyContent: "center",
  },
  cards1: {
    paddingHorizontal: 0,
    gap: 12,
    width: 323,
    flexDirection: "row",
  },
  cardShadowBox: {
    width: 148,
    borderRadius: 4,
    elevation: 3,
    shadowRadius: 3,
    overflow: "hidden",
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowColor: "rgba(0, 0, 0, 0.12)",
    backgroundColor: "#fff",
  },
  cardHeader: {
    padding: 16,
    flexDirection: "row",
    alignSelf: "stretch",
  },
  body18: {
    lineHeight: 20,
    fontSize: 14,
    color: "rgba(0, 0, 0, 0.87)",
    fontFamily: "Roboto-Bold",
    fontWeight: "700",
    textAlign: "left",
    letterSpacing: 0,
  },
  typographyContainer: {
    alignItems: "center",
  },
  body17: {
    lineHeight: 10,
    color: "rgba(0, 0, 0, 0.6)",
    fontSize: 10,
    fontFamily: "Roboto-Bold",
    fontWeight: "700",
    textAlign: "center",
  },
  typography8: {
    width: 123,
    alignItems: "center",
  },
  cards1SpaceBlock: {
    paddingVertical: 8,
    justifyContent: "center",
  },
  card: {
    padding: 8,
    shadowRadius: 3,
    elevation: 3,
    borderRadius: 4,
    width: 343,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowColor: "rgba(0, 0, 0, 0.12)",
    backgroundColor: "#fff",
    flexDirection: "column"
  },

  body19: {
    fontSize: 24,
    color: "#53a020",
    lineHeight: 32,
    fontWeight: "700",
    fontFamily: "Roboto-Bold",
    textAlign: "center"

  },
  timeStampFlexBox: {
    alignItems: "center",
    flexDirection: "row",
    margin: 8,
  },
  testTimeStamp: {
    color: "rgba(0, 0, 0, 0.87)",
    fontFamily: "Roboto-Bold",
    fontWeight: "700",
    lineHeight: 24,
    fontSize: 16,
    letterSpacing: 0,
    alignItems: 'center'
  },
  
  text4: {
    width: "100%",
    color: "#FFFFFF",
    fontSize: 10,
    textAlign: "center"
    //letterSpacing: 0.101
  },
});

export default styles;
