import * as React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { Avatar, Accessory } from 'react-native-elements';
import * as Animatable from 'react-native-animatable';
import AuthContext from '../components/context'
import 'react-native-gesture-handler';

import {route} from '@react-navigation/native';

const DetailsScreen = ({ route, navigation }) => {
  const [data1, setData1] = React.useState([]);
  let email=''; 
  let image='';
  let pno='';
  let adress='';
  let Name='';

  React.useEffect(() => {
    fetch('https://alphax-api.azurewebsites.net/api/users')
      .then((response) => response.json())
      .then((json) => setData1(json))
      .catch((error) => console.error(error))
      
  }, []);
  data1 && data1.filter(
    person=>person.id===route.params.Name ).map(
        (Aname)=>{
            return(
                
                Name=Aname.firstName,
                email=Aname.email,
                image=Aname.userurl,
                pno=Aname.contact,
                adress=Aname.address
                )}) 
 // console.log(image)
 
    return (
      <View style={styles.container}>
        <View style={styles.header}>
        <Avatar
         rounded
         size="xlarge"
         source={{ uri:image}}/>
        </View>
        <Animatable.View  animation="fadeInUpBig" style={styles.footer}>
          <View style={styles.text_detail}>
    <Text style={styles.text_footer}>Name:</Text><Text>{Name}</Text>
    <Text style={styles.text_footer}>Email    :</Text><Text>{email}</Text>
          <Text style={styles.text_footer}>Contact No:</Text><Text>{pno}</Text>
          <Text style={styles.text_footer}>Adress:</Text><Text>{adress}</Text>
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
  color: 'blue',
  fontSize: 18,
  padding: 10
},
text_detail:{
  padding: 10
}
});
