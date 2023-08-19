import { View, ActivityIndicator, StyleSheet, Text } from 'react-native';
import { GlobalStyles } from '../../constants/styles';
import Button from './Button';

function ErrorOverlay({ message, onConfirm }) {
	return (
		<View style={styles.errorContainer}>
			<Text style={[styles.text, styles.title]}>An error occured</Text>
			<Text style={styles.text}>{message}</Text>
			<Button onPress={onConfirm}>Okay</Button>
		</View>
	);
}

export default ErrorOverlay;

const styles = StyleSheet.create({
	errorContainer: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		padding: 20,
		backgroundColor: GlobalStyles.colors.primary7,
	},
	text: {
		textAlign: 'center',
		marginBottom: 8,
		color: 'white',
	},
	title: {
		fontSize: 20,
		fontWeight: 'bold',
	},
});
