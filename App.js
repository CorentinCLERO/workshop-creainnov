import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { MaterialIcons } from '@expo/vector-icons';
import AideSoignant from './components/AideSoignant';
import Urgence from './components/Urgences';
import Accueil from './components/Accueil';
import { Button, TouchableOpacity, View, Text } from 'react-native';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <SafeAreaProvider>
        <SafeAreaView style={{ flex: 1 }}>
          <Stack.Navigator
            initialRouteName="Accueil"
            screenOptions={{
              headerStyle: {
                backgroundColor: "#51A8FF",
                height: 100,
                borderBottomLeftRadius: 20,
                borderBottomRightRadius: 20,
              },
              headerTitle: (props) => (
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                  <Text style={{ fontSize: 18, color: 'white', marginRight: 10 }}>
                    Bonjour monsieur ...
                  </Text>
                </View>
              ),
              headerLeft: () => (
                <TouchableOpacity onPress={() => navigation.navigate('Accueil')}>
                  <MaterialIcons name="house" size={40} color="white" />
                </TouchableOpacity>
              ),
              headerRight: () => (
                <Button
                  title="Bouton Droit"
                  onPress={() => {
                    // Action à exécuter lorsque le bouton droit est pressé
                  }}
                />
              ),
            }}

          >
            <Stack.Screen name="Accueil" component={Accueil} />
            <Stack.Screen name="Urgences" component={Urgence} />
            <Stack.Screen name="AideSoignant" component={AideSoignant} />
          </Stack.Navigator>
        </SafeAreaView>
      </SafeAreaProvider>
    </NavigationContainer>
  );
}