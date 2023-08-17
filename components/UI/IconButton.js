import { Pressable, View, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

function IconButton({ icon, size, color, onPress }) {
	return (
		<Pressable
			style={({ pressed }) => pressed && styles.pressed}
			onPress={onPress}>
			<View style={styles.buttonContainer}>
				<Ionicons
					name={icon}
					size={size}
					color={color}
				/>
			</View>
		</Pressable>
	);
}

export default IconButton;

const styles = StyleSheet.create({
	buttonContainer: {
		borderRadius: 20,
		padding: 8,
		margin: 10,
	},
	pressed: { opacity: 0.75 },
});
