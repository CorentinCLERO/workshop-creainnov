import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import AideSoignant from './components/AideSoignant';
import Urgence from './components/Urgences';
import Accueil from './components/Accueil';
import { Button, View, Text } from 'react-native';
import Notifications from './components/Notifications';
import Medecin from './components/Medecin';

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
                  <Text style={{ fontSize: 18, color: 'white', marginRight: 10 }}>
                    Bonjour monsieur ...
                  </Text>
                </View>
              ),
              headerLeft: () => (
                <View style={{ margin: 10, padding: 5, backgroundColor: "rgba(255, 255, 255, 0.5)", borderRadius: 10 }}>
                  <Button
                    title="Retour accueil"
                    onPress={() => navigation.navigate('Accueil')}
                    color="rgba(0, 0, 0, 0)"
                  />
                </View>
              ),
              headerRight: () => (

                <View style={{ flexDirection: 'row' }}>
                  <View style={{ margin: 10, padding: 5, backgroundColor: "rgba(255, 255, 255, 0.5)", borderRadius: 10 }}>
                    <Button
                      title="Notifications"
                      onPress={() => navigation.navigate('Notifications')}
                      color="rgba(0, 0, 0, 0)"
                    />
                  </View>
                  <View style={{ margin: 10, padding: 5, marginRight: 10, backgroundColor: "rgba(255, 0, 0, 1)", borderRadius: 10 }}>
                    <Button
                      title="Urgences"
                      onPress={() => navigation.navigate('Urgences')}
                      color="rgba(0, 0, 0, 0)"
                    />
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
          </Stack.Navigator>
        </SafeAreaView>
      </SafeAreaProvider>
    </NavigationContainer>
  );
}