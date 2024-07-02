import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import Contact from './Kontak';

const Home = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => navigation.navigate('About')}
        style={styles.contactContainer}
      >
        <Contact
          gambar={require('../assets/miya.jpg')}
          judul="miya"
         
        />

          <Contact
          gambar={require('../assets/hanabi.jpg')}
          judul="hanabi"
          
        />
        <Contact
          gambar={require('../assets/freya.jpg')}
          judul="freya"
          
        />
      </TouchableOpacity>

      <Text style={styles.text}>Home Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  contactContainer: {
    marginBottom: 20,
  },
  text: {
    fontSize: 20,
    marginBottom: 20,
  },
});

export default Home;
