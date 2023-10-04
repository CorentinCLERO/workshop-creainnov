import React from 'react';
import { Image, View } from 'react-native';

const Historique = () => {
  return (
    <View>
      <Image source={require('../img/historique.png')} style={{ width: 1300, height: 630 }} />
    </View>
  );
};

export default Historique;