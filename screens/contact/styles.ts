import { StyleSheet

} from "react-native";
const styles = StyleSheet.create({
      body1Typo: {
        fontFamily: "Roboto-Bold",
        fontWeight: "700",
      },
      bodyTypo: {
        lineHeight: 24,
        fontSize: 16,
        color: "rgba(0, 0, 0, 0.87)",
        textAlign: "center",
        letterSpacing: 0,
      },
      cardContent: {
        height: 661,
        zIndex: 0,
        alignSelf: "stretch",
      },
      icon: {
        height: 24,
        width: 24,
      },
      minHeight: {
        width: 0,
        height: 56,
      },
      paper: {
        shadowRadius: 10,
        elevation: 10,
        backgroundColor: "#53a020",
        shadowColor: "rgba(0, 0, 0, 0.12)",
        shadowOffset: {
          width: 0,
          height: 1,
        },
        alignSelf: "stretch",
        overflow: "hidden",
      },

      text: {
        fontFamily: "Roboto-Regular",
      },
      body11: {
        color: "rgba(0, 0, 0, 0.87)",
      },
      body16: {
        lineHeight: 20,
        fontSize: 12,
        color: "rgba(0, 0, 0, 0.87)",
        textAlign: "center",
        letterSpacing: 0,
        alignSelf: "stretch",
      },
      typographyParent: {
        width: 305,
        alignItems: "center",
      },
      cardHeader: {
        padding: 16,
        flexDirection: "row",
        alignSelf: "stretch",
      },
      card: {
        padding: 8,
        shadowRadius: 3,
        elevation: 3,
        borderRadius: 4,
        width: 343,
        height: 650,
        shadowOpacity: 1,
        shadowOffset: {
          width: 0,
          height: 1,
        },
        shadowColor: "rgba(0, 0, 0, 0.12)",
        backgroundColor: "#fff",
      },
      
      contactUs: {
        overflow: "hidden",
        height: 667,
        width: "100%",
        flex: 1,
        backgroundColor: "#fff",
      },
});

export default styles;