import React from 'react';
import { 
    View, 
    Text, 
    TouchableOpacity, 
    Dimensions,
    StyleSheet,
    StatusBar,
    Image,
    ImageBackground
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import * as Animatable from 'react-native-animatable';
import {MaterialCommunityIcons} from 'react-native-vector-icons';
import SignInScreen from './SignInScreen';

const SplashScreen = ({navigation}) => {


    return (
        <ImageBackground  style={styles.ImageBackground} source={require('../assets/annie-spratt-qyAka7W5uMY-unsplash.jpg')}>
     <View style={styles.container}>
         
            <StatusBar backgroundColor='rgba( 0, 0, 0, 05 )' barStyle='light-content'/>
        <View style={styles.header}>
        <View>
            <Animatable.Image
               animation="bounce"
               iterationCount="infinite"
               direction="alternate"
            style={styles.logo} source={require('../assets/edited1.png')}
           resizeMode="contain"/>
            </View>
            <View style={styles.button}>
            <TouchableOpacity onPress={()=>navigation.navigate('SignInScreen')}>
                <LinearGradient colors={['#434a54','#69C6BA']} style={styles.signIn}>
                    <Text style={styles.textSign}>Get Started</Text>
                    <MaterialCommunityIcons
                    name="chevron-right"
                    color={'#ffff'}
                    size={30}
                    />
                </LinearGradient>
            </TouchableOpacity>
            </View>
        </View>
       
      
     </View>
     </ImageBackground>
    );
};

export default SplashScreen;

const {height} = Dimensions.get("screen");
const height_logo = height * 0.28;

const styles = StyleSheet.create({
  container: {
    flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba( 0, 0, 0, 0.6 )',
  },
  header: {
      flex: 2,
      justifyContent: 'center',
      alignItems: 'center'
  },
  footer: {
      flex: 2,
      backgroundColor: '#fff',
      borderTopLeftRadius: 20,
      borderTopRightRadius: 20,
      paddingVertical: 50,
      paddingHorizontal: 40
  },
  logo: {
      width: 350,
      height: 150
  },
  title: {
      color: '#05375a',
      fontSize: 30,
      fontWeight: 'bold'
  },
  text: {
      color: 'grey',
      marginTop:5
  },
  button: {
      alignItems: 'center',
      marginTop: 30
  },
  signIn: {
      width: 180,
      height: 40,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 50,
      flexDirection: 'row'
  },
  textSign: {
      color: 'white',
      fontWeight: 'bold'
  },
  ImageBackground: {
    flex: 1,
    width: null,
    height: null,
},
});

