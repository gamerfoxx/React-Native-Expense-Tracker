import axios from 'axios';

export function storeExpense(expenseData) {
	axios.post(
		'https://react-native-expense-tra-b9ebd-default-rtdb.firebaseio.com/expenses.json',
		expenseData
	);
}
