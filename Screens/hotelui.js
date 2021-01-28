import React from 'react';
import { View, Text, Button, StyleSheet ,Image} from 'react-native';
import {MaterialIcons} from "react-native-vector-icons";

const HotelUi = () => {
    return (
      <View style={styles.container}>
        <View style={styles.frame}>
          <View style={styles.imagewrap}>
          <View style={styles.hotelIcon}><Image source={require('../assets/HotelIcon.png')}/></View>
          <View style={styles.arrowicon}><MaterialIcons name='keyboard-arrow-right' color="white" size={25}/></View>
          </View>
          <View style={styles.Hotels}>
            <Text style={styles.hotelstext}>Hotels</Text>
          </View>
          <View style={styles.arrowdown}>
          <MaterialIcons name='keyboard-arrow-down' color="black" size={25}/>

          </View>
        </View>
        
      </View>
    );
};

export default HotelUi;

const styles = StyleSheet.create({
  container: {
    flex: 1, 
  backgroundColor:'#174D36',
  alignItems: 'center'
  },
  frame:{
    width: 352,
height: 560,
borderRadius:21,
borderWidth:1,
borderColor:'#FFFFFF',
marginTop:12,

  },
  imagewrap:{
    flexDirection:'row'
  },
  hotelIcon:{
    marginTop:110,
    marginLeft:48

  },
  arrowicon:{
    marginTop:278

    
  },
  Hotels:{
    marginLeft:118
  },
hotelstext:{
  color:'white',
  fontSize:36
},
arrowdown:{
  width: 32,
height: 32,
backgroundColor:'white',
borderRadius:20,
marginLeft:160,
marginTop:100,
alignItems: 'center',
}
});
