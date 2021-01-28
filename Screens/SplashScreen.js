import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Dimensions,
  StyleSheet,
  StatusBar,
  Image,
  ImageBackground,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import * as Animatable from "react-native-animatable";
import { MaterialCommunityIcons } from "react-native-vector-icons";
import SignInScreen from "./SignInScreen";

const SplashScreen = ({ navigation }) => {
  return (
    <ImageBackground
      style={styles.ImageBackground}
      source={require("../assets/Googlehfu.jpg")}
    >
      <View style={styles.container}>
        <StatusBar
          backgroundColor="rgba( 0, 0, 0, 05 )"
          barStyle="light-content"
        />
        <View style={styles.header}>
          <View>
            <Animatable.Image
              animation="bounce"
              iterationCount="infinite"
              direction="alternate"
              style={styles.logo}
              source={require("../assets/Vvisitlogo.png")}
              resizeMode="contain"
            />
          </View>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate("SignInScreen")}
          >
            <View style={styles.abcd}>
              <View style={styles.alingtext}>
                <Text style={styles.textSign}>Get Started</Text>
              </View>
              <View style={styles.alingicon}>
               <Image source={require('../assets/2203522-48.png')}/>
              </View>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
};

export default SplashScreen;

const { height } = Dimensions.get("screen");
const height_logo = height * 0.28;

const styles = StyleSheet.create({
    abcd:{
        flexDirection:'row'
    },
  container: {
    flex: 1,
    justifyContent: "center",
  },
  header: {
    justifyContent: "center",
    alignItems: "center",
  },
  footer: {
    flex: 2,
    backgroundColor: "#fff",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingVertical: 50,
    paddingHorizontal: 40,
  },
  logo: {
    width: 350,
    height: 150,
  },
  title: {
    color: "#05375a",
    fontSize: 30,
    fontWeight: "bold",
  },
  text: {
    color: "grey",
    marginTop: 5,
  },
  button: {
    marginTop: 30,
    flexDirection: "row",
    width: 193,
    height: 40,
    backgroundColor: "white",
    borderRadius: 57,
    justifyContent: "space-between",
  },
  signIn: {
    width: 180,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 50,
    flexDirection: "row",
  },
  textSign: {
    
  },
  alingtext:{
   marginLeft:31,
   alignItems: "center",
   marginTop:9
  },
  alingicon: {
      marginLeft:20,
      marginTop:5},
     
  textSign: {
    color: "#248058",
    fontWeight: "bold",
    fontSize: 18,
  },
  ImageBackground: {
    flex: 1,
    width: null,
    height: null,
  },
});
