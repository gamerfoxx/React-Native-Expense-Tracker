import { View, ActivityIndicator, StyleSheet } from 'react-native';
import { GlobalStyles } from '../../constants/styles';

function LoadingOverlay() {
	return (
		<View style={styles.loadingContainer}>
			<ActivityIndicator
				size="large"
				color="white"
			/>
		</View>
	);
}

export default LoadingOverlay;

const styles = StyleSheet.create({
	loadingContainer: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		padding: 20,
		backgroundColor: GlobalStyles.colors.primary7,
	},
});
