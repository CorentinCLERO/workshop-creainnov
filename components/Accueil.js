import React from 'react';
import { Button, Text, View } from 'react-native';

const Accueil = ({ navigation }) => {
  return (
    <View>
      <Text>Accueil</Text>
      <Button
        title="Go to Aide Soignant"
        onPress={() => navigation.navigate('AideSoignant')}
      />
      <Button
        title="Go to Urgences"
        onPress={() => navigation.navigate('Urgences')}
      />
    </View>
  );
};

export default Accueil;