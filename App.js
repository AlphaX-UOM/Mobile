
import React from 'react';
import { StyleSheet, Text, View,Button, Alert,ImageBackground } from 'react-native';
import Header from './components/Header';


export default function App() {
  return (
    <View style={styles.screen}>
      <Header title="Smart Travel System"/>
      <ImageBackground source= {require('./assets/MY5ZwP4OK-thumb.jpg')} style={styles.image}>
        <View style={styles.inputContainer}>
        
        <Text style={styles.text}>Let's Get Started'</Text>
       
        <View style={styles.buttonContainer}>
        
           <Button title="Login"  color="#f7287b" onPress={() => Alert.alert('Login process')} />
           <Button title="Sign Up"  color="#f7287b" onPress={() => Alert.alert('Sign Up Process via web')} />
        </View>
        
        </View>
        </ImageBackground>
      
      </View>
      
    
      
      
    
  );
}

const styles = StyleSheet.create({
     screen: {
       flex: 1,
     },
     container: {
      flex: 1,
      flexDirection: "column",
      padding:0
  
    },
    image: {
      flex: 1,
    resizeMode:'cover'
      
   
    },
    text: {
      color: "#606165",
      fontSize: 30,
      fontWeight: "bold",
      padding:10
  
    },
   inputContainer: {
    padding:35,
    alignItems: 'center',
    
   },

    buttonContainer:{
      flexDirection: 'row',
      width:'90%',
      justifyContent:'space-between',
      padding:56,
      alignItems: 'center',
      shadowColor:'black',
      shadowOffset:{width:0, height:2},
      shadowRadius:6,
      shadowOpacity:0.6,
      elevation:5,
      backgroundColor: '#d4e7e8',
      borderRadius:10


    }
});
