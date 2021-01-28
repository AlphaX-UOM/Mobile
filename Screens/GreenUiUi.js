import React from 'react';
import { View, Text, Button, StyleSheet ,Image} from 'react-native';
import {MaterialIcons} from "react-native-vector-icons";

const GreenUiUi = (props) => {
    return (
      <View style={styles.container}>
        <View style={styles.frame}>
          <View style={styles.imagewrap}>
          <View style={styles.hotelIcon}><Image source={props.image}/></View>
          <View style={styles.arrowicon}><MaterialIcons name='keyboard-arrow-right' color="white" size={25}/></View>
          </View>
          <View style={styles.Hotels}>
            <Text style={styles.hotelstext}>{props.Name}</Text>
          </View>
          <View style={styles.arrowdown}>
          <MaterialIcons name='keyboard-arrow-down' color="white" size={25}/>

          </View>
        </View>
        
      </View>
    );
};

export default GreenUiUi;

const styles = StyleSheet.create({
  container: {
    flex: 1, 
  backgroundColor:'white',
  alignItems: 'center'
  },
  frame:{
    width: 352,
height: 560,
borderRadius:21,
borderWidth:2,
borderColor:'#174D36',
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
  color:'#174D36',
  fontSize:36
},
arrowdown:{
  width: 32,
height: 32,
backgroundColor:'#174D36',
borderRadius:20,
marginLeft:160,
marginTop:100,
alignItems: 'center',
}
});
