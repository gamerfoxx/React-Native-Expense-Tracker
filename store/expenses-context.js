import { createContext, useReducer } from 'react';

const DUMMY_EXPENSE = [
	{
		id: 'e1',
		description: 'purchase 1',
		amount: 20.99,
		date: new Date('2023-01-12'),
	},
	{
		id: 'e2',
		description: 'purchase 2',
		amount: 28.99,
		date: new Date('2023-08-12'),
	},
	{
		id: 'e3',
		description: 'purchase 3',
		amount: 20.99,
		date: new Date('2023-07-12'),
	},
	{
		id: 'e4',
		description: 'purchase 4',
		amount: 20.99,
		date: new Date('2023-01-12'),
	},
	{
		id: 'e5',
		description: 'purchase 5',
		amount: 28.99,
		date: new Date('2023-08-12'),
	},
	{
		id: 'e6',
		description: 'purchase 6',
		amount: 20.99,
		date: new Date('2023-07-12'),
	},
	{
		id: 'e7',
		description: 'purchase 7',
		amount: 20.99,
		date: new Date('2023-07-12'),
	},
];

export const ExpensesContext = createContext({
	expenses: [],
	addExpense: ({ description, amount, date }) => {},
	deleteExpense: (id) => {},
	updateExpense: (id, { description, amount, date }) => {},
});

function expenseReducer(state, action) {
	switch (action.type) {
		case 'ADD':
			const lId = new Date().toString() + Math.random().toString();
			return [{ id: lId, ...action.payload }, ...state];
		case 'UPDATE':
			const idExpenseToUpdate = state.findIndex((expense) => {
				return expense.id === action.payload.id;
			});

			const expenseToUpdate = state[idExpenseToUpdate];
			const updatedExpense = { ...expenseToUpdate, ...action.payload.data };
			const updatedExpenses = [...state];

			updatedExpenses[idExpenseToUpdate] = updatedExpense;

			return updatedExpenses;
		case 'DELETE':
			return state.filter((expense) => expense.id !== action.payload);
		default:
			return state;
	}
}

function ExpensesContextProvider({ children }) {
	const [expensesState, dispatch] = useReducer(expenseReducer, DUMMY_EXPENSE);
	function addExpense(expenseData) {
		dispatch({ type: 'ADD', payload: expenseData });
	}

	function deleteExpense(id) {
		dispatch({ type: 'DELETE', payload: id });
	}

	function updateExpense(id, expenseData) {
		dispatch({ type: 'UPDATE', payload: { id: id, data: expenseData } });
	}

	const value = {
		expenses: expensesState,
		addExpense: addExpense,
		deleteExpense: deleteExpense,
		updateExpense: updateExpense,
	};

	return (
		<ExpensesContext.Provider value={value}>
			{children}
		</ExpensesContext.Provider>
	);
}

export default ExpensesContextProvider;
