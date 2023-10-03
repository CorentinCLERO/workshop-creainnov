import React from 'react';
import { Button, View, StyleSheet, Text, TouchableOpacity } from 'react-native';

const Accueil = ({ navigation }) => {
  return (
    <View style={styles.previewContainer} >
      <View style={[styles.container, { backgroundColor: '#DCDFC4' }]}>
        <View style={styles.buttonContainer}>
          <Button
            title="Aide Soignant"
            onPress={() => navigation.navigate('AideSoignant')}
          />
        </View>
        <View style={styles.buttonContainer}>
          <Button
            title="Urgences"
            onPress={() => navigation.navigate('Urgences')}
          />
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity onPress={() => navigation.navigate('Medecin')} style={styles.button}>
            <Text>Médecin</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={[styles.container, { backgroundColor: '#F1F3DD' }]}>
        <Text>Accueil</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  previewContainer: {
    flex: 1,
    flexDirection: 'row',
  },
  container: {
    flex: 1,
    alignItems: 'center',
  },
  buttonContainer: {
    width: '100%',
    padding: 10,
  },
  button: {
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 5,
  },
});

export default Accueil;