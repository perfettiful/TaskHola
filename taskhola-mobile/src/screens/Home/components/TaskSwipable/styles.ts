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
		color: '#808080',
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
		borderColor: '#1E90FF',
		marginLeft: 16,
	},
	actionButtonsContainer: {
		flexDirection: 'row',
	},
	item: {
		flex: 1,
		padding: 20,
		borderBottomWidth: 1,
		borderBottomColor: "#ccc",
	},
	itemContainer: {
		flexDirection: "row",
	},
	deleteButton: {
		width: 100,
		height: "100%",
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
