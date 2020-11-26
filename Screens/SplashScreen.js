import React from 'react';
import { 
    View, 
    Text, 
    TouchableOpacity, 
    Dimensions,
    StyleSheet,
    StatusBar,
    Image
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import * as Animatable from 'react-native-animatable';
import {MaterialCommunityIcons} from 'react-native-vector-icons';
import SignInScreen from './SignInScreen';

const SplashScreen = ({navigation}) => {


    return (
     <View style={styles.container}>
            <StatusBar backgroundColor='#434a54' barStyle='light-content'/>
        <View style={styles.header}>
           <Animatable.Image
               animation="bounce"
               iterationCount="infinite"
               direction="alternate"
            style={styles.logo} source={require('../assets/logowhite.png')}
           resizeMode="contain"/>
        </View>
        <Animatable.View style={styles.footer} animation="fadeInUpBig">
            <Text style={styles.title}>Welcome to AlphaX SmartTravel</Text>
            
            <View style={styles.button}>
            <TouchableOpacity onPress={()=>navigation.navigate('SignInScreen')}>
                <LinearGradient colors={['#434a54','#c5c9d9']} style={styles.signIn}>
                    <Text style={styles.textSign}>Get Started</Text>
                    <MaterialCommunityIcons
                    name="chevron-right"
                    color={'#ffff'}
                    size={30}
                    />
                </LinearGradient>
            </TouchableOpacity>
            </View>
        </Animatable.View>
     </View>
    );
};

export default SplashScreen;

const {height} = Dimensions.get("screen");
const height_logo = height * 0.28;

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    backgroundColor: '#434a54'
  },
  header: {
      flex: 2,
      justifyContent: 'center',
      alignItems: 'center'
  },
  footer: {
      flex: 0.5,
      backgroundColor: '#fff',
      borderTopLeftRadius: 20,
      borderTopRightRadius: 20,
      paddingVertical: 50,
      paddingHorizontal: 30
  },
  logo: {
      width: height_logo,
      height: height_logo
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
  }
});

