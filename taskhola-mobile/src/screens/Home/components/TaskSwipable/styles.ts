import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
	container: {
		alignItems: 'center',
		backgroundColor: 'pink',
		borderRadius: 5,
		flexDirection: 'row',
		marginTop: 10,
		width: '100%',
	},
	taskAdd: {
		color: '#FFFFFF',
		flex: 1,
		fontSize: 16,
		marginLeft: 16,
	},
	taskDone: {
		flex: 1,
		fontSize: 16,
		marginLeft: 16,
		textDecorationLine: 'line-through',
	},
	button: {
		alignItems: 'center',
		borderRadius: 5,
		flexDirection: 'row',
		height: 52,
		justifyContent: 'center',
		width: 40,
	},
	buttonText: {
		color: '#FFF',
		fontSize: 32,
		fontWeight: 'bold',
	},
	checkbox: {
		alignSelf: 'center',
		borderRadius: 999,
		borderColor: '#',
		marginLeft: 16,
	},
	actionButtonsContainer: {
		flexDirection: 'row',
	},
	item: {
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		flex: 1,
		padding: 10,
		borderTopWidth: 1,
		borderTopColor: "#white",
		borderBottomWidth: 1,
		borderBottomColor: "#white",
		color: "white",
	},
	itemContainer: {
		flexDirection: "row",
		justifyContent: "space-between",
		backgroundColor: "#1E90FF",
	},
	deleteButton: {
		width: 100,
		height: "102%",
		backgroundColor: "red",
		justifyContent: "center",
		alignItems: "center",
		position: "absolute",
		right: -100,
	},
	deleteButtonText: {
		color: "white",
		fontWeight: "bold",
	},
});
