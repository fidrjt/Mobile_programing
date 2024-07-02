import react from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const Contact = ({ gambar, judul, telpon }) => {
  return (
    <View style={styles.contactContainer}>
      <Image source={gambar} style={styles.img} />
      <View style={styles.teks}>
        <Text style={styles.title}>{judul}</Text>
        <Text style={styles.telp}>{telpon}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  contactContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor: 'blue',
    height: 80,
    padding: 10,
  },
  img: {
    margin: 15,
    width: 50,
    height: 50,
  },
  teks: {
    flex: 1,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  telp: {
    fontSize: 14,
    color: '#3498db',
  },
});

export default Contact;