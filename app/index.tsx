import React from 'react';
import { Text, View } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Login Views
import LoginScreen from '../Views/Login/LoginScreen'; 


const Stack = createNativeStackNavigator();


// Defyne the type of routes
export type AuthStackParamList = {
  Login: undefined;
}; 






export default function Index() {
  return (
    
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen 
        name="Login" 
        component={LoginScreen} 
        options={{ headerShown: false}} 
      />
      {/* Puedes agregar más pantallas aquí */}
    </Stack.Navigator>
  );
}
