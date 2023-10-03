import React from 'react';
import { Button, View, StyleSheet, Text } from 'react-native';

const Accueil = ({ navigation }) => {
  return (
    <View style={styles.previewContainer} >
      <View style={[styles.container, { backgroundColor: '#DCDFC4' }]}>
        <View style={styles.button}>
          <Button
            title="Aide Soignant"
            onPress={() => navigation.navigate('AideSoignant')}
          />
        </View>
        <View style={styles.button}>
          <Button
            title="Urgences"
            onPress={() => navigation.navigate('Urgences')}
          />
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
    backgroundColor: 'aliceblue',
  },
  container: {
    flex: 1,
    alignItems: 'center',
  },
  button: {
    width: '100%',
    padding: 10,
  }
});

export default Accueil;