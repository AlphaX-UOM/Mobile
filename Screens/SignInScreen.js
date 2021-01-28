import * as React from 'react';
import { 
    View, 
    Text, 
    TouchableOpacity, 
    TextInput,
    Platform,
    StyleSheet ,
    ImageBackground,
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
        fetch('https://run.mocky.io/v3/c45dd8db-b0cf-48ad-9892-5a6d25f82913')
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
   let person_role='abc';
    const loginHandle=(userName,password)=>{
        
        return(
     
          
           data1 && data1.filter(
               person=>person.email===userName && person.password===password).map(
                   (Aname)=>{
                       return(
                           signIn(true,Aname.id,Aname.role),
                           status=true,
                           person_role=Aname.role
                           
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
  <ImageBackground  style={styles.ImageBackground} source={require('../assets/singinddpage.jpg')}>
      <View style={styles.container}>
          <StatusBar backgroundColor='rgba( 0, 0, 0, 05 )' barStyle='light-content'/>
          <View style={styles.usernamewrapper}>
            <View style={styles.emailIcon}>
            <FontAwesome name="user-o" color="black" size={20}/>
            </View>
            <View style={styles.textemail}>
            <TextInput
                  placeholder="Your Email"
                  style={styles.textInput}
                  onChangeText={(val)=>textInputChange(val)}
                />
           
            </View>

          </View>
          <View style={styles.Passwordwrapper}>
            <View style={styles.emailIcon}>
            <FontAwesome name="lock" color="black" size={25}/>
            </View>
            <View style={styles.textemail}>
            <TextInput
                  placeholder="Password"
                  style={styles.textInput}
                  secureTextEntry={data.secureTextEntry ? true:false}
                  onChangeText={(val)=>handlePasswordChange(val)}
                />
            </View>
          
           
            

          </View>
         
          {/* <Animatable.View  animation="fadeInUpBig">
            <Text style={styles.text_footer}>Email</Text>
            <View style={styles.action}>
                <FontAwesome name="user-o" color="black" size={25}/>
                <TextInput
                  placeholder="Your Email"
                  style={styles.textInput}
                  onChangeText={(val)=>textInputChange(val)}
                />
                {data.check_textInputChange ?
                <Feather
                 name="check-circle"
                 color="black"
                 size={20}
                />
                :null}
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
                <TouchableOpacity 
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
                </TouchableOpacity>
            </View>*/}
            <View style={styles.getstaredbutton}>
                <TouchableOpacity style={styles.getstarttext} onPress={() =>{loginHandle(data.userName,data.password),check()}}>
               
                    <Text style={styles.texts}>Sign In</Text>
                
                </TouchableOpacity>
             
            </View>
         
        
      </View>
      </ImageBackground>
    );
};

export default SignInScreen;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
     
     
    },
    usernamewrapper:{
      width: 250,
      height: 44,
      borderColor:"#777777",
      borderWidth:1,
      marginTop:279,
      borderRadius:21,
      
      
    },
    Passwordwrapper:{
      width: 250,
      height: 44,
      borderColor:"#777777",
      borderWidth:1,
      marginTop:13,
      borderRadius:21,
    },
    emailIcon:{
      marginTop:11,
      marginLeft:13,
      
    },
    textemail:{
     
      marginLeft:71
    },
    getstaredbutton:{
      width: 166,
height: 35,
borderRadius:21,
backgroundColor:'#174D36',
marginTop:28,
marginLeft:4,

    },
    getstarttext:{
      marginTop:7,
      alignItems: 'center',
    },
    texts:{
      color:'white'
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
        paddingVertical: 30,
        
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
        marginTop: Platform.OS === 'ios' ? 0 : -15.5,
        
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
    },
    ImageBackground: {
      flex: 1,
    
  },
  });
