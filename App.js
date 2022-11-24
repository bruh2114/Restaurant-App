import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './components/Login';
import Signup from './components/SignUp';
import Home from './components/HomeScreen';
import Welcome from './components/Welcome';
import DetailScreen from './components/FoodDetailScreen'

const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator
      initialRouteName="Welcome"
      screenOptions={{
        headerTitleAlign: 'center',
        headerStyle: {
          backgroundColor: '#FF1809',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}>
      <Stack.Screen 
        name="Signup" 
        component={Signup} 
        options={{ title: 'Signup' }}
      />       
      <Stack.Screen 
        name="Login" 
        component={Login} 
        options={
          {title: 'Login'},
          {headerLeft: null} 
        }
      />
      <Stack.Screen 
       name="Home" 
       component={Home} 
       options={
         { title: 'Home' },
         {headerLeft: null} 
       }
      />
       <Stack.Screen 
       name="Welcome" 
       component={Welcome} 
       
      />
      <Stack.Screen 
       name="DetailScreen" 
       component={DetailScreen} 
       
      />
    </Stack.Navigator>
  );
}
export default function App() {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
}