import { StyleSheet

} from "react-native";
const styles = StyleSheet.create({
   text: {
       color: "black",
       fontSize: 15,
       backgroundColor: 'white'
   },
   text2: {
       color: "#FFFFFF",
       fontSize: 15,
   },
   view: {
       borderColor: "#0000003B",
       borderRadius: 4,
       borderWidth: 1,
       paddingVertical: 10,
       paddingHorizontal: 14,
       marginBottom: 16,
       justifyContent: 'center'
   },
   view2: {
    alignItems: "center",
    backgroundColor: "#6F8E42",
    borderRadius: 4,
    paddingVertical: 15,
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

textAlt: {
    color: "#6F8E42",
    fontSize: 15,
    alignSelf: 'center'
},

view3: {
    paddingVertical: 10,
    paddingHorizontal: 14,
    marginBottom: 16,
    justifyContent: 'center',
    alignContent: 'center'
},
});

export default styles;