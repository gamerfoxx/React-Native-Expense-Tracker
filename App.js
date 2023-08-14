import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ManageExpenseScreen from './screens/ManageExpenseScreen';
import RecentExpenseScreen from './screens/RecentExpensesScreen';
import AllExpensesScreen from './screens/AllExpensesScreen';
import { GlobalStyles } from './constants/styles';
import { Ionicons } from '@expo/vector-icons';

const Stack = createNativeStackNavigator();
const BottomTabs = createBottomTabNavigator();

function BottomTabsOverView() {
	return (
		<BottomTabs.Navigator
			screenOptions={{
				headerStyle: { backgroundColor: GlobalStyles.colors.primary4 },
				headerTintColor: 'white',
				tabBarStyle: { backgroundColor: GlobalStyles.colors.primary4 },
				tabBarActiveTintColor: GlobalStyles.colors.accent1,
			}}>
			<BottomTabs.Screen
				name="RecentExpense"
				component={RecentExpenseScreen}
				options={{
					title: 'Recent Expense',
					tabBarLabel: 'Recent',
					tabBarIcon: ({ color, size }) => (
						<Ionicons
							name="hourglass"
							color={color}
							size={size}
						/>
					),
				}}
			/>
			<BottomTabs.Screen
				name="AllExpenses"
				component={AllExpensesScreen}
				options={{
					title: 'All Expense',
					tabBarLabel: 'All',
					tabBarIcon: ({ color, size }) => (
						<Ionicons
							name="calendar"
							color={color}
							size={size}
						/>
					),
				}}
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
						options={{ headerShown: false }}
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
