import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import AideSoignant from './components/AideSoignant';
import Urgence from './components/Urgences';
import Accueil from './components/Accueil';
import Notifications from './components/Notifications';
import Medecin from './components/Medecin';
import Calendrier from './components/Calendrier';
import RendezVous from './components/RendezVous';
import Historique from './components/Historique';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <SafeAreaProvider>
        <SafeAreaView style={{ flex: 1 }}>
          <Stack.Navigator
            initialRouteName="Accueil"
            screenOptions={({ navigation }) => ({
              headerStyle: {
                backgroundColor: "#51A8FF",
                height: 100,
                borderBottomLeftRadius: 20,
                borderBottomRightRadius: 20,
              },
              headerTitle: (props) => (
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                  <Text style={{ fontSize: 22, color: 'white', marginRight: 10, fontWeight: 600 }}>
                    Bonjour Monsieur HAROLD
                  </Text>
                </View>
              ),
              headerLeft: () => (
                <View style={{ margin: 10, padding: 5, marginRight: 10, backgroundColor: "rgba(255, 255, 255, 0.3)", borderRadius: 10, display: 'flex', width: 200, height: 60 }}>
                  <TouchableOpacity onPress={() => navigation.navigate('Accueil')} style={{ alignItems: 'center', color: 'white', fontSize: 30, fontWeight: 400, paddingTop: 8 }}>Retour accueil</TouchableOpacity>
                </View>
              ),
              headerRight: () => (

                <View style={{ flexDirection: 'row' }}>
                  <View style={{ margin: 10, padding: 5, marginRight: 10, backgroundColor: "rgba(255, 255, 255, 0.3)", borderRadius: 10, display: 'flex', width: 200, height: 60 }}>
                    <TouchableOpacity onPress={() => navigation.navigate('Notifications')} style={{ alignItems: 'center', color: 'white', fontSize: 30, fontWeight: 400, paddingTop: 8 }}>Notifications</TouchableOpacity>
                  </View>
                  <View style={{ margin: 10, padding: 5, marginRight: 10, backgroundColor: "rgba(255, 0, 0, 1)", borderRadius: 10, display: 'flex', width: 200, height: 60 }}>
                    <TouchableOpacity onPress={() => navigation.navigate('Urgences')} style={{ alignItems: 'center', color: 'white', fontSize: 30, fontWeight: 400, paddingTop: 8 }}>Urgences</TouchableOpacity>
                  </View>
                </View>
              ),
            })}

          >
            <Stack.Screen name="Accueil" component={Accueil} />
            <Stack.Screen name="Urgences" component={Urgence} />
            <Stack.Screen name="AideSoignant" component={AideSoignant} />
            <Stack.Screen name="Notifications" component={Notifications} />
            <Stack.Screen name="Medecin" component={Medecin} />
            <Stack.Screen name="Calendrier" component={Calendrier} />
            <Stack.Screen name="RendezVous" component={RendezVous} />
            <Stack.Screen name="Historique" component={Historique} />
          </Stack.Navigator>
        </SafeAreaView>
      </SafeAreaProvider>
    </NavigationContainer>
  );
}