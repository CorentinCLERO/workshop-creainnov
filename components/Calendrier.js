import React from 'react';
import { View, Image } from 'react-native';

const Calendrier = () => {
  return (
    <View>
      <Image source={require('../img/calendrier.png')} style={{ width: 1200, height: 600, marginLeft: 30, marginTop: 5, borderRadius: 60 }} />
    </View>
  );
};

export default Calendrier;