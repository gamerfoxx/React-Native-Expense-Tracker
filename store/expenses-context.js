import { createContext, useReducer } from 'react';

export const ExpensesContext = createContext({
	expenses: [],
	addExpense: ({ description, amount, date }) => {},
	setExpenses: (expenses) => {},
	deleteExpense: (id) => {},
	updateExpense: (id, { description, amount, date }) => {},
});

function expenseReducer(state, action) {
	switch (action.type) {
		case 'ADD':
			return [action.payload, ...state];
		case 'SET':
			const ordered = action.payload.reverse();
			return ordered;
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
	const [expensesState, dispatch] = useReducer(expenseReducer, []);
	function addExpense(expenseData) {
		dispatch({ type: 'ADD', payload: expenseData });
	}
	function setExpenses(expenses) {
		dispatch({ type: 'SET', payload: expenses });
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
		setExpenses: setExpenses,
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
