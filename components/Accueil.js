import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity, Image } from 'react-native';

const Accueil = ({ navigation }) => {
  return (
    <View style={styles.previewContainer} >
      <View style={styles.container}>
        <View style={styles.buttonContainer}>
          <Text style={{ marginLeft: 20, fontSize: 30, fontWeight: 600, marginBottom: 5 }}>Quel besoin avez-vous ?</Text>
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity onPress={() => navigation.navigate('AideSoignant')} style={styles.button}>
            <Image source={require('../img/aidesoignant.png')} style={styles.image} />
            <Text style={styles.text}>Aide Soignant</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity onPress={() => navigation.navigate('Urgences')} style={styles.button}>
            <Image source={require('../img/urgences.png')} style={styles.image} />
            <Text style={styles.text}>Urgences</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity onPress={() => navigation.navigate('Medecin')} style={styles.button}>
            <Image source={require('../img/medecin.png')} style={styles.image} />
            <Text style={styles.text}>Médecin</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.container}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: '100%', display: 'flex', paddingHorizontal: 10 }} onClick={() => navigation.navigate('Calendrier')}>
          <Text style={{ fontSize: 25, fontWeight: 600 }}>DATE</Text>
          <Text style={{ fontSize: 20, fontWeight: 600, color: 'grey' }}>Janvier &gt;</Text>
        </View>
        <View style={styles.pastilleContainer} onClick={() => navigation.navigate('Calendrier')}>
          <View style={styles.pastilledateselected}>
            <Text style={{ fontSize: 20, fontWeight: 600, color: 'white' }}>14</Text>
            <Text style={{ fontSize: 10, color: 'white' }}>Lundi</Text>
          </View>
          <View style={styles.pastilledate}>
            <Text style={{ fontSize: 20, fontWeight: 600 }}>15</Text>
            <Text style={{ fontSize: 10 }}>Mardi</Text>
          </View>
          <View style={styles.pastilledate}>
            <Text style={{ fontSize: 20, fontWeight: 600 }}>16</Text>
            <Text style={{ fontSize: 10 }}>Mercredi</Text>
          </View>
          <View style={styles.pastilledate}>
            <Text style={{ fontSize: 20, fontWeight: 600 }}>17</Text>
            <Text style={{ fontSize: 10 }}>Jeudi</Text>
          </View>
          <View style={styles.pastilledate}>
            <Text style={{ fontSize: 20, fontWeight: 600 }}>18</Text>
            <Text style={{ fontSize: 10 }}>Vendredi</Text>
          </View>
        </View>
        <View style={{ width: '90%', height: '210px', backgroundColor: "#51A8FF", margin: 10, borderRadius: 30 }} onClick={() => navigation.navigate('RendezVous')}>
          <View style={{ flexDirection: 'row', padding: 10 }}>
            <Text style={{ fontSize: 20, fontWeight: 600, opacity: 0.7 }}>Objet : </Text>
            <Text style={{ fontSize: 18, fontWeight: 400, paddingTop: 3, opacity: 0.5 }}>Rendez-vous avec le Docteur JERONIMO</Text>
          </View>
          <View style={{ height: '170px', backgroundColor: "#CBE5FF", borderRadius: 30, padding: 15 }}>
            <Text style={{ opacity: 0.8 }}>Rendez-vous avec le Docteur JERONIMO m’enfin bon, ça vous le savez déjà bon sang de bonsoir !</Text>
          </View>
        </View>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: '100%', display: 'flex', paddingHorizontal: 10, paddingTop: 10 }} onClick={() => navigation.navigate('Historique')}>
          <Text style={{ fontSize: 25, fontWeight: 600 }}>DERNIERES CONSULTATIONS</Text>
          <Text style={{ fontSize: 20, fontWeight: 600, color: 'grey' }}>Historique &gt;</Text>
        </View>
        <View onClick={() => navigation.navigate('Historique')}>
          <Image source={require('../img/consultes1.png')} style={[styles.imageconsulte, { borderRadius: 20 }]} />
          <Image source={require('../img/consultes2.png')} style={[styles.imageconsulte, { borderRadius: 20 }]} />
        </View>
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
    paddingTop: 10,
  },
  buttonContainer: {
    width: '100%',
    paddingVertical: 5,
    paddingHorizontal: 10,
  },
  button: {
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 30,
    flexDirection: 'row',
  },
  image: {
    width: 60,
    height: 60,
    marginLeft: 10,
  },
  imageconsulte: {
    width: 600,
    height: 70,
    objectFit: 'contain',
    marginTop: 10,
  },
  text: {
    display: 'flex',
    alignItems: 'center',
    fontSize: 30,
    fontWeight: 600,
    paddingStart: 20,
  },
  pastilledate: {
    backgroundColor: 'white',
    borderRadius: 30,
    alignItems: 'center',
    width: 100,
    height: 100,
    paddingTop: 25,
  },
  pastilledateselected: {
    backgroundColor: "#51A8FF",
    borderRadius: 30,
    alignItems: 'center',
    width: 100,
    height: 100,
    paddingTop: 25,
  },
  pastilleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    display: 'flex',
    padding: 10,
  }
});

export default Accueil;