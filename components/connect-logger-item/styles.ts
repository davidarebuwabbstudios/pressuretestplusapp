import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
  itemPosition: {
    flexDirection: "row",
    width: 375,
    height: 65,
    marginVertical: 10,
  },
  contentSpaceBlock: {
    paddingVertical: 8,
    paddingHorizontal: 0,
    flex: 1
  },
  noteTypo: {
    textAlign: "right",
    fontFamily: "Roboto-Regular",
    letterSpacing: 0
  },
  icon: {
    height: 24
  },
  note: {
    lineHeight: 16,
    fontSize: 12,
    textAlign: "right",
    color: "#666"
  },
  iconLayout: {
    width: 24,
    height: 24
  },
  contentStart: {
    justifyContent: "center"
  },
  listItemTitle: {
    color: "rgba(0, 0, 0, 0.87)",
    lineHeight: 24,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0
  },
  listItemTypo: {
    fontSize: 16,
    lineHeight: 24
  },
  contentFlexBox: {
    gap: 16,
    flexDirection: "row",
    alignItems: "center"
  },

  contents: {
    alignItems: "flex-end",
    gap: 2,
    justifyContent: "center"
  },
  contentEnd: {
    justifyContent: "flex-end"
  },
  lablesFlexBox: {
    paddingBottom: 4,
    paddingRight: 16,
    paddingTop: 4,
    justifyContent: "space-between",
    shadowColor: "#fff",
    elevation: 0,
    shadowRadius: 0,
    flexDirection: "row",
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 1
    },
    alignSelf: "stretch",
    alignItems: "center",
    flex: 1,
    backgroundColor: "#fff"
  },
  content: {
    flexDirection: "row",
    alignItems: "center"
  },
  itemMaster: {
    paddingLeft: 16,
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
    borderRadius: 4,
    backgroundColor: "#fff"
  }
});

export default styles;
