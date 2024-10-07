import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
  cardHeader: {
    padding: 16,
    gap: 16,
    flexDirection: "row",
    alignSelf: "stretch"
  },

  cardShadowBox: {
    width: 343,
    borderRadius: 4,
    elevation: 3,
    shadowRadius: 3,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 1
    },
    shadowColor: "rgba(0, 0, 0, 0.12)",
    overflow: "hidden",
    backgroundColor: "#fff",
    marginVertical: 12,
  },

  mdipipeLeak: {
    paddingHorizontal: 2
  },

  mdipipeLeakSpaceBlock: {
    paddingVertical: 13,
    justifyContent: "center",
    overflow: "hidden"
  },

  materialSymbolswarningOutliIcon: {
    overflow: "hidden"
  },

  iconLayout: {
    height: 24,
    width: 24
  },

  body1: {
    color: "rgba(0, 0, 0, 0.87)",
    lineHeight: 24,
    fontSize: 16,
    textAlign: "left"
  },

  body11: {
    color: "rgba(0, 0, 0, 0.87)",
    fontFamily: "Roboto-Regular",
    letterSpacing: 0,
    textAlign: "left"
  },

  body12: {
    fontSize: 14,
    lineHeight: 20,
    width: 73,
    color: "rgba(0, 0, 0, 0.87)",
    textAlign: "center"
  },
  typography3: {
    width: 156,
    alignItems: "flex-end",
    height: 40,
    justifyContent: "center"
  },

  bodyTypo: {
    fontFamily: "Roboto-Bold",
    fontWeight: "700",
    color: "rgba(0, 0, 0, 0.87)",
    letterSpacing: 0
  },
  bodyLayout: {
    lineHeight: 24,
    fontSize: 16
  }
});

export default styles;
