import 'react-native-gesture-handler';
import React from 'react';
import {LogBox} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Welcome from '../screens/welcome';
import SignIn from '../screens/login';
import SignUp from '../screens/signup';
import Dashboard from '../screens/dashboard';
import Order from '../screens/order';
import Task from '../screens/task';
import Customer from '../screens/customer';
import Product from '../screens/product';
import Customers from '../screens/customers';
import Orders from '../screens/orders';
import Tasks from '../screens/tasks';
import Sales from '../screens/sales';
import Products from '../screens/products';
import Notifications from '../screens/notifications';
import ActivityFeed from '../screens/activityFeed';
import Analytics from '../screens/analytics';
import Home from '../screens/home';

const Stack = createStackNavigator();

const Navigator = () => {
  LogBox.ignoreLogs([
    'componentWillReceiveProps has been renamed',
    'componentWillMount has been renamed',
  ]);
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="welcome" component={Welcome} />
        <Stack.Screen name="login" component={SignIn} />
        <Stack.Screen name="signup" component={SignUp} />
        <Stack.Screen name="home" component={Home} />
        <Stack.Screen name="dashboard" component={Dashboard} />
        <Stack.Screen name="order" component={Order} />
        <Stack.Screen name="task" component={Task} />
        <Stack.Screen name="customer" component={Customer} />
        <Stack.Screen name="product" component={Product} />
        <Stack.Screen name="customers" component={Customers} />
        <Stack.Screen name="orders" component={Orders} />
        <Stack.Screen name="tasks" component={Tasks} />
        <Stack.Screen name="sales" component={Sales} />
        <Stack.Screen name="products" component={Products} />
        <Stack.Screen name="analytics" component={Analytics} />
        <Stack.Screen name="notifications" component={Notifications} />
        <Stack.Screen name="feed" component={ActivityFeed} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigator;
