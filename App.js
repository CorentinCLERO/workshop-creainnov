import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import AideSoignant from './components/AideSoignant';
import Urgence from './components/Urgence';
import Accueil from './components/Accueil';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Accueil">
        <Stack.Screen name="Accueil" component={Accueil} />
        <Stack.Screen name="Urgence" component={Urgence} />
        <Stack.Screen name="Aide soignant" component={AideSoignant} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}