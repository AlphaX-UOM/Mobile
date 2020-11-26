import React from 'react';
import { View, Text,  StyleSheet,ScrollView ,Image} from 'react-native';
import { Card, ListItem, Button, Icon } from 'react-native-elements'
import {FontAwesome,Feather} from 'react-native-vector-icons';



const ReservationScreen = () => {

  function getDiscription(discription){
    return(
            console.log(discription)
    )
  }

  function RCard(props){
    return (
      <View style={styles.container}>
        <View style={styles.footer}>
        <View style={styles.text_detail}>
          <View style={{alignItems: 'center'}}>
             <FontAwesome name={props.icon} color="black" size={45}/>
             <Text style={[styles.text_footer,{fontSize:30}]}>{props.Title}</Text>
          </View>
            
             <Text style={styles.text_footer}>{props.discription}</Text>
            
            </View>
        </View>
        
      </View>
    )
  }
    return (
      <View style={styles.container}>
        <ScrollView style={{padding:10}}>
        <View style={{padding:10}}>
           <RCard icon='hospital-o' Title='Hotels'/>
        </View>
        <View style={{padding:10}}>
           <RCard icon='cab' Title='Transport'/>
        </View>
        <View style={{padding:10}}>
           <RCard icon='male' Title='Guide' />
        </View>
        <View style={{padding:10}}>
           <RCard icon='grav' Title='Event' />
        </View>
      
       
       </ScrollView>
      </View>
    );
};

export default ReservationScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    backgroundColor: '#263957'
    
  },
  footer: {
    
    backgroundColor: '#fff',
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingVertical: 50,
    paddingHorizontal: 30,
    padding:10,
    
},
header: {
  flex: 2,
  justifyContent: 'center',
  alignItems: 'center'
},
text_detail:{
  padding: 10
}

});
