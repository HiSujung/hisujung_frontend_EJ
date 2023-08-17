// App.js
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import axios from 'axios';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { AuthProvider } from './utils/AuthContext'; // app에서 navigation을 AuthProvider로 감싸야 함

import LoginScreen from './screens/LoginScreen';
import ActivityScreen from './screens/ActivityScreen';
import ActListScreen from './screens/ActListScreen';
import ChatScreen from './screens/chatBot';
import RegisterScreen from './screens/RegisterScreen';
import EmailScreen from './screens/EmailScreen';
import myportfolioScreen from './screens/myportfolioScreen';
import PortfolioListScreen from './screens/PortfolioListScreen';
import MainComponent from './screens/main';
const Stack = createStackNavigator();

export default function App() {
  return (
    // for app test
    <AuthProvider> 
      <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
      {/* <Stack.Screen
          name="Email"
          component={EmailScreen}
          options={{ headerShown: false }}
        /> */}
      {/* <Stack.Screen
          name="Register"
          component={RegisterScreen}
          options={{ headerShown: false }}
        /> */}
      <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="email"
          component={EmailScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="ActList"
          component={ActListScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Activity"
          component={ActivityScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="myportfolioScreen"
          component={myportfolioScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="chatbot"
          component={ChatScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="portfolioListScreen"
          component={PortfolioListScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Main"
          component={MainComponent}
          options={{ headerShown: false }}
        />
        </Stack.Navigator>
        </NavigationContainer>
      </AuthProvider>

    // app에서 navigation감싸야 함
    // 안 감싸면 login 사용 불가
    // <AuthProvider> 
    //   <NavigationContainer>
    //   <Stack.Navigator initialRouteName="Login">
    //     <Stack.Screen
    //       name="Main"
    //       component={MainComponent}
    //       options={{ headerShown: false }}
    //     />
    //     <Stack.Screen
    //       name="Login"
    //       component={LoginScreen}
    //       options={{ headerShown: false }}
    //     />
    //     <Stack.Screen
    //       name="EmailScreen"
    //       component={EmailScreen}
    //       options={{ headerShown: false }}
    //     />
    //   </Stack.Navigator>
    // </NavigationContainer>
    // </AuthProvider>
  );
}