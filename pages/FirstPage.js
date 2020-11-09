import * as React from 'react';
import {
  Button,
  ImageBackground,
  StyleSheet,
  View,
  Text,
  Alert,
  TextInput ,
  SafeAreaView
} from 'react-native';

const FirstPage = ({ navigation }) => {
  
  const PasswordInput = () => {
    const [secure, setSecure] = React.useState(secure);
    

    return(
      <TextInput style={{ height: 30,width:220,padding:4}}
onChangeText={(value) => console.log(value)}
placeholder="Password"
secureTextEntry={true} //we pass secure component to identify its password
//give custom styles
/>
    )

  }
    const UselessTextInput = () => {
        const [value, onChangeText] = React.useState('');

        return (
            <TextInput placeholder="Email"
              style={{ height: 30,width:220,padding:6}}
              onChangeText={text => onChangeText(text)}
              value={value}
            />
          );
    }
     
        

  return (
    <SafeAreaView style={{ flex: 1 }}>
       <ImageBackground source= {require('../assets/MY5ZwP4OK-thumb.jpg')} style={styles.image}>
        <View style={styles.inputContainer}>
        
        <Text style={styles.text}>Let's Get Started'</Text>
        <View style={{padding: 20}}>
        <View style={styles.buttonContainer}>
           <UselessTextInput/>
           </View> 
           <View style={{padding: 20}}></View>
           <View style={styles.buttonContainer1} >
             <PasswordInput/>
           </View>
           </View>
           
           <View style={{padding:1}}>
           <Button title="Login"  color="#f7287b" onPress={() => navigation.navigate('ThirdPage')}/>
           </View>
        
        </View>
        </ImageBackground>
    </SafeAreaView>
  );
}

export default FirstPage;
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
   text1: {
    color: "#606165",
    fontSize: 20,
    fontWeight: "bold",
    padding:10

  },
  inputContainer: {
   padding:10,
   alignItems: 'center',
   
  },

   buttonContainer:{
     flexDirection: 'row',
     width:'60%',
     
     padding:.5,
     alignItems: 'center',
     shadowColor:'black',
     shadowOffset:{width:0, height:2},
     shadowRadius:6,
     shadowOpacity:0.6,
     elevation:5,
     backgroundColor: '#d4e7e8',
     borderRadius:10


   },
   buttonContainer1:{
    flexDirection: 'row',
    width:'60%',
    
    padding:1.5,
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