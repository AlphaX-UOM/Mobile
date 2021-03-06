import React from 'react';
import { View, Text, Button, StyleSheet, ImageBackground,Image} from 'react-native';
import * as Animatable from "react-native-animatable";
const SupportScreen = ({navigation},props) => {
    return (
      <ImageBackground
      style={styles.container}
      source={require("../assets/aboutus.jpg")}
    >
     <View style={styles.heataboutwrapper}>
     <Button title="Go to Home" onPress={() => navigation.navigate('morePayments',{itemId: 1254})} />
       <View >
         {/* <Image source={require("../assets/1055045-64.png")}/> */}
         <Animatable.Image
              animation="bounce"
              iterationCount="infinite"
              direction="alternate"
         
              source={require("../assets/1055045-64.png")}
              resizeMode="contain"
            />
       </View>
       <View style={styles.textalling}><Text style={styles.textabout}>About Us</Text></View>
     </View>
     <View style={styles.textbox}><Text style={styles.text}>A paragraph is a series of related sentences 
developing a central idea, called the topic. 
Try to think about paragraphs in terms of
 thematic unity: a paragraph is a sentence
 or a group ofsentences that supports one
 central, unified idea.</Text></View>

    </ImageBackground>
    );
};

export default SupportScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1, 
   
  
  },
  heataboutwrapper:{
    flexDirection:'row',
    marginTop:175.5,
    paddingHorizontal:45,
    alignItems: 'center'
  },
  textabout:{
    color:"white",
    fontSize:36,
    fontWeight:'bold'
  },
  textalling:{
    marginLeft:5
  },
  text:{
    color:'white',
    fontSize:16
  },
  textbox:{
    width: 320,
height: 114,
marginLeft:40,
marginTop:79
  }
});
