import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
	container: {
		backgroundColor: '#000000',
		flexDirection: 'row',
		justifyContent: 'space-between',
		marginBottom: 20,
		width: '100%',
	},
	taskAdd: {
		color: '#4EA8DE',
		fontSize: 16,
		fontWeight: 'bold',
	},
	taskDone: {
		color: '#8284FA',
		fontSize: 16,
		fontWeight: 'bold',
	},
	horizontalBar: {
		backgroundColor: '#808080',
		height: 1,
		marginBottom: 5,
		width: '100%',
	},
	todoContainer: {
		flexDirection: 'row',
		backgroundColor: '#1E90FF'
	},
	doneContainer: {
		flexDirection: 'row',
		backgroundColor: '#4EA8DE'
	},
	taskCounter: {
		borderRadius: 8,
		color: '#000000',
		fontSize: 14,
		fontWeight: 'bold',
		marginHorizontal: 8,
		paddingVertical: 2,
		paddingHorizontal: 8,
	},
});
