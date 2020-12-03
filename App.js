// In App.js in a new project


// In App.js in a new project

import * as React from 'react';
import { View, Text,Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import RootStackScreen from './Screens/StackScreens/RootStackScreen';
import { ActivityIndicator } from 'react-native-paper';
import AuthContext from './components/context'
import MainTabScreen from './Screens/MainTabScreen'
import SupportScreen from './Screens/SupportScreen';
import SettingsScreen from './Screens/SettingsScreen';
import BookmarkScreen from './Screens/Reservation';
import DrawerContent from './Screens/DrawerContent';
import AsyncStorage from '@react-native-async-storage/async-storage';
import HomeStackScreen from './Screens/StackScreens/HomeStackScreen';
import DetailsStackScreen from './Screens/StackScreens/DetailStackScreen';
import ReservationStackScreen from './Screens/StackScreens/ReservationStackScreen'
import ReservationScreen from './Screens/Reservation'

const Drawer = createDrawerNavigator();

 
function App() {
  // const [isLoading,setIsLoading]=React.useState(true);
  // const [userToken,setUserToken]=React.useState(null);
  
  // const [isLoading, setLoading] = React.useState(true);
  // const [data1, setData1] = React.useState([]);
  //     let i=0;
  //   React.useEffect(() => {
  //     fetch('https://alphax-api.azurewebsites.net/api/tourguides')
  //       .then((response) => response.json())
  //       .then((json) => setData1(json.movies))
  //       .catch((error) => console.error(error))
  //       .finally(() => setLoading(false));
  //   }, []);
 
   
const initialLoginState={
   isLoading:true,
   userName:null,
   userToken:null,
   

 };
  const [tokenState,setTokenState] =React.useState(null)
  console.log('appjs token',tokenState)
 const loginReducer=(prevState,action)=>{
  
   switch(action.type){
     case 'RETRIVE_TOKEN':
       return{
         ...prevState,
         userToken:action.token,
         isLoading:false,
       };
       case 'LOGIN':
       return{
         ...prevState,
         userName:action.id,
         userToken:action.token,
         isLoading:false
       };
       case 'LOGOUT':
       return{
         ...prevState,
         userName:null,
         userToken:null,
         isLoading:false
       };
       case 'REGISTER':
       return{
         ...prevState,
         userName:action.id,
         userToken:action.token,
         isLoading:false

       };
   }

 };
 const[loginState,dispatch]=React.useReducer(loginReducer,initialLoginState)
 
  const authContext=React.useMemo(()=>( 
    
    {
    
    signIn:async(condition,token)=>{
      
      // setUserToken('false');
      // setIsLoading(false);
      setTokenState(token)
      let userToken;
      userToken=null;
    //  for(i;i<10;i++){
    //    if(userName===data1[i].id){
         
    //      break;
    //    }
    //    else continue;
    //  }
      //  console.log('user name',data1[0].id)
      //  console.log('pass',data1[0].releaseYear)
      if(condition==true){
        
        try {
          userToken='fksjf';
          await AsyncStorage.setItem('userToken', userToken);
        } catch (e) {
          console.log(e);
        }
      }
      console.log('user token',userToken);
      dispatch({type:'LOGIN', token: userToken});
    },
    signOut:async()=>{
      
      // setUserToken(null);
      // setIsLoading(false);
      try {
        await AsyncStorage.removeItem('userToken');
      } catch (e) {
        console.log(e);
      }
      dispatch({type:'LOGOUT'});
    },
    signUp:()=>{
      //setUserToken('fksjf');
      // setIsLoading(false);
    }
  }),[]);
  React.useEffect(() => {
    setTimeout(async() =>{
      // setIsLoading(false);
      let userToken;
      userToken=null;
      try {
       userToken= await AsyncStorage.getItem('userToken')
      } catch (e) {
        console.log(e);
      }
      console.log('user token',userToken);
      dispatch({type:'REGISTER', token:userToken});
    },1000);
    
  }, [])

  if (loginState.isLoading){
    return(
      
      <View style={{flex: 1,justifyContent: 'center',alignItems:'center'}}>
        <ActivityIndicator size="large"/>
      </View>
    )
  }
  console.log('userName',tokenState)
  
  return (
    <AuthContext.Provider value={authContext}>
       
    <NavigationContainer>
      {loginState.userToken !== null ?(
  
    <Drawer.Navigator drawerContent={props=><DrawerContent {...props}/>}>
            <Drawer.Screen name="userDetails" component={DetailsStackScreen}  initialParams={{ Name: tokenState }}/>
            <Drawer.Screen name="HomeDrawer" component={HomeStackScreen} />
            <Drawer.Screen name="reservation" component={ReservationStackScreen} initialParams={{ Name: tokenState }} />
            <Drawer.Screen name="SettingsScreen" component={SettingsScreen} />
            <Drawer.Screen name="SupportScreen" component={SupportScreen} />
         
      </Drawer.Navigator> )
     : <RootStackScreen/>
     }
    </NavigationContainer>
    </AuthContext.Provider>
  );
}

export default App;