import axios from 'axios';

const API_URL = `https://react-native-expense-tra-b9ebd-default-rtdb.firebaseio.com`;

export function storeExpense(expenseData) {
	axios.post(`${API_URL}/expenses.json`, expenseData);
}

export async function fetchExpense() {
	const response = await axios.get(`${API_URL}/expenses.json`);

	const expenses = [];
	// console.log(response);
	for (const key in response.data) {
		const expenseObject = {
			id: key,
			amount: response.data[key].amount,
			date: new Date(response.data[key].date),
			description: response.data[key].description,
		};
		expenses.push(expenseObject);
	}

	return expenses;
}
