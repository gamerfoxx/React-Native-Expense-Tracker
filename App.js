import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ManageExpenseScreen from './screens/ManageExpenseScreen';
import RecentExpenseScreen from './screens/RecentExpensesScreen';
import AllExpensesScreen from './screens/AllExpensesScreen';

const Stack = createNativeStackNavigator();
const BottomTabs = createBottomTabNavigator();

function BottomTabsOverView() {
	return (
		<BottomTabs.Navigator>
			<BottomTabs.Screen
				name="RecentExpense"
				component={RecentExpenseScreen}
				options={{ headerShown: false }}
			/>
			<BottomTabs.Screen
				name="AllExpenses"
				component={AllExpensesScreen}
			/>
		</BottomTabs.Navigator>
	);
}

export default function App() {
	return (
		<>
			<StatusBar style="auto" />
			<NavigationContainer>
				<Stack.Navigator>
					<Stack.Screen
						name="ExpenseOverview"
						component={BottomTabsOverView}
					/>
					<Stack.Screen
						name="ManageExpense"
						component={ManageExpenseScreen}
					/>
				</Stack.Navigator>
			</NavigationContainer>
		</>
	);
}

const styles = StyleSheet.create({});
