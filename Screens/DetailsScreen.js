import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { Avatar, Accessory } from 'react-native-elements';
import * as Animatable from 'react-native-animatable';
import AuthContext from '../components/context'
import 'react-native-gesture-handler';
import SignInScreen from './SignInScreen'
import {route} from '@react-navigation/native';

const DetailsScreen = ({ navigation, route }) => {
  const { param1} = route.params ?? 'name'
  console.log(param1)
    return (
      <View style={styles.container}>
        <View style={styles.header}>
        <Avatar
         rounded
         size="xlarge"
         source={{ uri:'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',}}/>
        </View>
        <Animatable.View  animation="fadeInUpBig" style={styles.footer}>
          <View style={styles.text_detail}>
    <Text style={styles.text_footer}>Name           :{param1}</Text>
          <Text style={styles.text_footer}>Email            :</Text>
          <Text style={styles.text_footer}>Contact No  :</Text>
          <Text style={styles.text_footer}>Adress          :</Text>
          </View>
        </Animatable.View>
        
      </View>
    );
};

export default DetailsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    backgroundColor: '#263957'
   
  },
  details:{
    padding:40,
    alignItems: 'center',
    justifyContent: 'space-between',
    
    height: 1
  },
  footer: {
    flex: 3,
    backgroundColor: '#fff',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingVertical: 50,
    paddingHorizontal: 30
},
header: {
  flex: 2,
  justifyContent: 'center',
  alignItems: 'center'
},
text_footer: {
  color: '#05375a',
  fontSize: 18,
  padding: 10
},
text_detail:{
  padding: 10
}
});
