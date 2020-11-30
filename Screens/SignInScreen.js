import * as React from 'react';
import { 
    View, 
    Text, 
    TouchableOpacity, 
    TextInput,
    Platform,
    StyleSheet ,
    
    StatusBar,
    Alert
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { LinearGradient } from 'expo-linear-gradient';
import * as Animatable from 'react-native-animatable';
import {FontAwesome,Feather} from 'react-native-vector-icons';
import AuthContext from '../components/context'
import DetailsScreen from './DetailsScreen'

import 'react-native-gesture-handler';


const SignInScreen = ({navigation}) => {

    const [data1, setData1] = React.useState([]);
        
      React.useEffect(() => {
        fetch('https://alphax-api.azurewebsites.net/api/tourguides')
          .then((response) => response.json())
          .then((json) => setData1(json))
          .catch((error) => console.error(error))
          
      }, []);

     
      
   const  _storeData = async () => {
        try {
          await AsyncStorage.setItem(
            data1,
          );
        } catch (error) {
          // Error saving data
        }
      };


    
    const[data,setData]=React.useState({
        userName:'',
        password:'',
        check_textInputChange:false,
        secureTextEntry:true,
        condition:null

    });
    
    const {signIn}=React.useContext(AuthContext);
   

    const textInputChange=(val)=>{
        
        if(val.length !== 0){
            setData({
                ...data,
                userName:val,
                check_textInputChange:true
            })
        }else{
           
            setData({
                ...data,
                emal:val,
                check_textInputChange:false
            })
        }
    }
    const handlePasswordChange=(val)=>{
      
        setData({
            ...data,
           password:val,
           
        })

    }

    const updateSecureTextEntry=()=>{
        setData({
            ...data,
          secureTextEntry:!data.secureTextEntry
           
        })
    }
    const call=()=>{return(data1)};
   let condition;
   let i=0
   let status=false;
   let person_name='abc';
    const loginHandle=(userName,password)=>{
        
        return(
     
         
           data1 && data1.filter(
               person=>person.guideId===userName && person.name===password).map(
                   (Aname)=>{
                       return(
                           signIn(true,Aname.name),
                           status=true,
                           person_name=Aname.name
                           )}) 

                          
            // condition = true;
           
          
            
            
           )  
          
                
         
     

    }
   
    const check=()=>{
        if(status==false){
            Alert.alert(
                'Enter Correct Username and Password',
                '',
                [
                  {
                    text: '',
                    onPress: () => console.log('Ask me later pressed')
                  },
                  {
                    text: '',
                    onPress: () => console.log('Cancel Pressed'),
                    style: 'cancel'
                  },
                  { text: 'OK', onPress: () => console.log('OK Pressed') }
                ],
                { cancelable: false }
              );
        }
     
      } 
    
 
  console.log(data.password)
 return (
      <View style={styles.container}>
          <StatusBar backgroundColor='#434a54' barStyle='light-content'/>
          <View style={styles.header}>
            <Text style={styles.text_header}>             Welcome</Text>
          </View>
          <Animatable.View style={styles.footer} animation="fadeInUpBig">
            <Text style={styles.text_footer}>Email</Text>
            <View style={styles.action}>
                <FontAwesome name="user-o" color="black" size={25}/>
                <TextInput
                  placeholder="Your Email"
                  style={styles.textInput}
                  onChangeText={(val)=>textInputChange(val)}
                />
                {/* {data.check_textInputChange ?
                <Feather
                 name="check-circle"
                 color="black"
                 size={20}
                />
                :null} */}
            </View>
            <Text style={[styles.text_footer,{marginTop:35}]}>Password</Text>
            <View style={styles.action}>
                <FontAwesome name="lock" color="black" size={25}/>
                <TextInput
                  placeholder="Password"
                  style={styles.textInput}
                  secureTextEntry={data.secureTextEntry ? true:false}
                  onChangeText={(val)=>handlePasswordChange(val)}
                />
                {/* <TouchableOpacity 
                onPress={updateSecureTextEntry}
                >
                    {data.secureTextEntry ?
                <Feather
                 name="eye-off"
                 color="black"
                 size={20}
                /> :
                <Feather
                name="eye"
                color="black"
                size={20}
               />}
                </TouchableOpacity> */}
            </View>
            <View style={styles.button}>
                <TouchableOpacity style={styles.signIn} onPress={() =>{loginHandle(data.userName,data.password),check()}}>
                <LinearGradient
                  colors={['#434a54','#c5c9d9']}
                  style={styles.signIn}
                >
                    <Text style={[styles.textSign,{color:'#ffff'}]}>Sign In</Text>
                </LinearGradient>
                </TouchableOpacity>
             
            </View>
          </Animatable.View>
        
      </View>
    );
};

export default SignInScreen;

const styles = StyleSheet.create({
    container: {
      flex: 1, 
      backgroundColor: '#434a54'
    },
    header: {
        flex: 1,
        justifyContent: 'flex-end',
        paddingHorizontal: 20,
        paddingBottom: 50
    },
    footer: {
        flex: 4,
        backgroundColor: '#fff',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        paddingHorizontal: 20,
        paddingVertical: 30
    },
    text_header: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 30
    },
    text_footer: {
        color: '#05375a',
        fontSize: 18
    },
    action: {
        flexDirection: 'row',
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#f2f2f2',
        paddingBottom: 5
    },
    actionError: {
        flexDirection: 'row',
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#FF0000',
        paddingBottom: 5
    },
    textInput: {
        flex: 1,
        marginTop: Platform.OS === 'ios' ? 0 : -12,
        paddingLeft: 10,
        color: '#05375a',
    },
    errorMsg: {
        color: '#FF0000',
        fontSize: 14,
    },
    button: {
        alignItems: 'center',
        marginTop: 50
    },
    signIn: {
        width: '100%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10
    },
    textSign: {
        fontSize: 18,
        fontWeight: 'bold'
    }
  });
