import { StyleSheet

 } from "react-native";
const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#FFFFFF",
	},
	image: {
		height: 63,
        padding: 10,
		marginBottom: 17,
        alignSelf: 'center',

	},
	scrollView: {
		flex: 1,
		backgroundColor: "#FFFFFF",
		paddingTop: 19,
		paddingHorizontal: 16,
	},
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
		paddingVertical: 0,
		paddingHorizontal: 12,
		marginBottom: 16,
        justifyContent: 'center'
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
	view3: {
		alignItems: "center",
		backgroundColor: "#FF6600",
		borderRadius: 4,
		paddingVertical: 8,
        paddingHorizontal: 22,
		shadowColor: "#00000033",
		shadowOpacity: 0.2,
		shadowOffset: {
		    width: 0,
		    height: 3
		},
		shadowRadius: 1,
		elevation: 1,
	},
});

export default styles;