import React from 'react'
import {Text, View, Stylesheet, Button } from 'react-native';
import Contact from './Kontak';
const About =({navigation}) => {
return(
    <View>
        <Contact 
         gambar={require("../assets/miya.jpg")}
         judul="miya"
         telpon="0765535531"/>

       

      <Text>miya hero mobile legend</Text>
      <Button title="Go back"  onPress={()=>navigation.goback()}/>
    </View>
);
};
export default About;