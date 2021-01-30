import 'react-native-gesture-handler'
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text, View } from 'react-native';

import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import Layout from '@components/templates/Layout'
import Landing from '@components/pages/Landing'

import { styles } from '@styles/general.styles'

const Stack = createStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='landing' component={Landing}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
