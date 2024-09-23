
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Home } from '@screens/Home';

const Stack = createStackNavigator<RootStackParamList>();

export type RootStackParamList = {
  Home: undefined;
};

export function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator >
        <Stack.Screen options={{ headerShown: false }} name='Home' component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}