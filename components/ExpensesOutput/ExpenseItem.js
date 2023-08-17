import { StyleSheet, View, Pressable, Text } from 'react-native';
import { GlobalStyles } from '../../constants/styles';
import { getFormatedDate } from '../../util/date';
import { useNavigation } from '@react-navigation/native';

function ExpenseItem({ description, amount, date }) {
	const navigation = useNavigation();
	function pressExpenseHandler() {
		navigation.navigate('ManageExpense');
	}

	return (
		<Pressable
			onPress={pressExpenseHandler}
			style={({ pressed }) => pressed && styles.pressed}>
			<View style={styles.expenseItem}>
				<View>
					<Text style={[styles.textBase, styles.description]}>
						{description}
					</Text>
					<Text style={styles.textBase}>{getFormatedDate(date)}</Text>
				</View>
				<View style={styles.amountContainer}>
					<Text style={styles.amount}>{amount.toFixed(2)}</Text>
				</View>
			</View>
		</Pressable>
	);
}

export default ExpenseItem;

const styles = StyleSheet.create({
	pressed: { opacity: 0.75 },
	expenseItem: {
		padding: 10,
		marginVertical: 10,
		backgroundColor: GlobalStyles.colors.primary5,
		flexDirection: 'row',
		justifyContent: 'space-between',
		borderRadius: 8,
		elevation: 3,
		shadowColor: GlobalStyles.colors.gray1,
		shadowRadius: 4,
		shadowOffset: { width: 1, height: 1 },
		shadowOpacity: 0.4,
	},
	textBase: {
		color: GlobalStyles.colors.primary1,
	},
	description: {
		fontSize: 14,
		marginBottom: 6,
		fontWeight: 'bold',
	},
	amountContainer: {
		paddingHorizontal: 10,
		paddingVertical: 6,
		backgroundColor: 'white',
		justifyContent: 'center',
		alignItems: 'center',
		borderRadius: 4,
		minWidth: 80,
	},
	amount: {
		color: GlobalStyles.colors.primary4,
		fontWeight: 'bold',
	},
});
