import { StatusBar } from 'expo-status-bar';
import { Alert, StyleSheet, Platform } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import * as Notifications from 'expo-notifications';

Notifications.setNotificationHandler({
	handleNotification: async () => {
		return {
			shouldPlaySound: false,
			shouldSetBadge: false,
			shouldShowAlert: true,
		};
	},
});

import ManageExpenseScreen from './screens/ManageExpenseScreen';
import RecentExpenseScreen from './screens/RecentExpensesScreen';
import AllExpensesScreen from './screens/AllExpensesScreen';
import IconButton from './components/UI/IconButton';
import { GlobalStyles } from './constants/styles';
import ExpensesContextProvider from './store/expenses-context';
import { useEffect } from 'react';

const Stack = createNativeStackNavigator();
const BottomTabs = createBottomTabNavigator();

function BottomTabsOverView() {
	useEffect(() => {
		async function setupPushNotifications() {
			const { status } = await Notifications.getPermissionsAsync();
			let finalStatus = status;
			if (finalStatus !== 'granted') {
				const { status } = await Notifications.requestPermissionsAsync();
				finalStatus = status;
			}

			if (finalStatus !== 'granted') {
				Alert.alert(
					'Permissions required',
					'Require Push notification permissions'
				);
				return;
			}

			const pushToken = await Notifications.getExpoPushTokenAsync().then(
				(pushToken) => {
					return pushToken;
				}
			);

			console.log('here', pushToken);
			if (Platform.OS === 'android') {
				Notifications.setNotificationChannelAsync('default', {
					name: 'default',
					importance: Notifications.AndroidImportance.DEFAULT,
				});
			}
		}
		setupPushNotifications();
	}, []);

	useEffect(() => {
		const subscription1 = Notifications.addNotificationReceivedListener(
			(notification) => {
				console.log(notification);
			}
		);

		const subscription2 = Notifications.addNotificationResponseReceivedListener(
			(response) => {
				console.log(response);
			}
		);
		return () => {
			subscription1.remove();
			subscription2.remove();
		};
	}, []);

	async function scheduleNotificationHandler() {
		Notifications.scheduleNotificationAsync({
			content: {
				title: 'Reminder',
				body: 'Please enter your expenses',
				data: { name: 'expense' },
			},
			trigger: {
				seconds: 5,
			},
		});
	}

	return (
		<BottomTabs.Navigator
			screenOptions={({ navigation }) => ({
				headerStyle: { backgroundColor: GlobalStyles.colors.primary4 },
				headerTintColor: 'white',
				tabBarStyle: { backgroundColor: GlobalStyles.colors.primary4 },
				tabBarActiveTintColor: GlobalStyles.colors.accent1,
				headerRight: ({ tintColor }) => (
					<IconButton
						icon="add"
						size={25}
						color={tintColor}
						onPress={() => {
							navigation.navigate('ManageExpense');
						}}
					/>
				),
				headerLeft: ({ tintColor }) => (
					<IconButton
						icon="time"
						size={20}
						color={tintColor}
						onPress={() => {
							scheduleNotificationHandler();
						}}
					/>
				),
			})}>
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
			<StatusBar style="light" />
			<ExpensesContextProvider>
				<NavigationContainer>
					<Stack.Navigator
						screenOptions={{
							headerStyle: { backgroundColor: GlobalStyles.colors.primary4 },
							headerTintColor: 'white',
						}}>
						<Stack.Screen
							name="ExpenseOverview"
							component={BottomTabsOverView}
							options={{ headerShown: false }}
						/>
						<Stack.Screen
							name="ManageExpense"
							component={ManageExpenseScreen}
							options={{
								presentation: 'modal',
							}}
						/>
					</Stack.Navigator>
				</NavigationContainer>
			</ExpensesContextProvider>
		</>
	);
}

const styles = StyleSheet.create({});
