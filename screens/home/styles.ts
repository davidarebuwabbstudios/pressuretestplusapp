import { StyleSheet

} from "react-native";
const styles = StyleSheet.create({
    mainFlexBox: {
        justifyContent: "center",
        alignItems: "center",
      },
      opFlexBox: {
        textAlign: "center",
        color: "#fff",
        letterSpacing: 0,
      },
      stackFlexBox: {
        alignItems: "center",
        flexDirection: "row",
      },
      buttonShadowBox: {
        paddingVertical: 8,
        paddingHorizontal: 22,
        marginVertical: 8,
        height: 71,
        width: 343,
        borderRadius: 4,
        elevation: 5,
        shadowRadius: 5,
        backgroundColor: "#53a020",
        shadowOpacity: 1,
        shadowOffset: {
          width: 0,
          height: 1,
        },
        shadowColor: "rgba(0, 0, 0, 0.12)",
        justifyContent: "center",
        alignItems: "center",
        overflow: "hidden",
      },
    
      button1: {
        fontSize: 15,
        lineHeight: 26,
        textTransform: "uppercase",
        textAlign: "center",
        fontFamily: "Roboto-Medium",
        fontWeight: "500",
      },
      base: {
        gap: 8,
        flexDirection: "row",
      },  
});

export default styles;