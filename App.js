

import 'react-native-gesture-handler';

import * as React from 'react';
import {
  Button,
  View,
  Text,
  TouchableOpacity,
  Image
} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

import FirstPage from './pages/FirstPage';
import SecondPage from './pages/SecondPage';
import ThirdPage from './pages/ThirdPage';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const NavigationDrawerStructure = (props)=> {
  
  const toggleDrawer = () => {
    
    props.navigationProps.toggleDrawer();
  };

  return (
    <View style={{ flexDirection: 'row' }}>
      <TouchableOpacity onPress={()=> toggleDrawer()}>
        {}
        <Image
          source={{uri: 'https://raw.githubusercontent.com/AboutReact/sampleresource/master/drawerWhite.png'}}
          style={{
            width: 25,
            height: 25,
            marginLeft: 5
          }}
        />
      </TouchableOpacity>
    </View>
  );
}

function firstScreenStack({ navigation }) {
  return (
      <Stack.Navigator initialRouteName="FirstPage">
        <Stack.Screen
          name="FirstPage"
          component={FirstPage}
          options={{
            title: 'Smart Travel System', 
           
            headerStyle: {
              backgroundColor: '#f7287b', 
            },
            headerTintColor: '#fff', 
            headerTitleStyle: {
              fontWeight: 'bold', 
            },
          }}
        />
      </Stack.Navigator>
  );
}

function secondScreenStack({ navigation }) {
  return (
    <Stack.Navigator
      initialRouteName="SecondPage"
      screenOptions={{
        headerLeft: ()=>
          <NavigationDrawerStructure
            navigationProps={navigation}
          />,
        headerStyle: {
          backgroundColor: '#f7287b', 
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold', 
        }
      }}>
      <Stack.Screen
        name="SecondPage"
        component={SecondPage}
        options={{
          title: 'Reservations',
          
        }}/>
      <Stack.Screen
        name="ThirdPage"
        component={ThirdPage}
        options={{
          title: 'Third Page', 
        }}/>
    </Stack.Navigator>
  );
}
function ThirdScreenStack({ navigation }) {
  return (
      <Stack.Navigator initialRouteName="ThirdPage">
        <Stack.Screen
          name="ThirdPage"
          component={ThirdPage}
          options={{
            title: 'User Details', 
            headerLeft: ()=>
              <NavigationDrawerStructure
                navigationProps={navigation}
              />,
            headerStyle: {
              backgroundColor: '#f7287b',
            },
            headerTintColor: '#fff', 
            headerTitleStyle: {
              fontWeight: 'bold', 
            },
          }}
        />
      </Stack.Navigator>
  );
}

function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        drawerContentOptions={{
          activeTintColor: '#e91e63',
          itemStyle: { marginVertical: 5 },
        }}>
        <Drawer.Screen
          name="FirstPage"
          options={{ drawerLabel: 'Home', }}
          component={firstScreenStack} />
        <Drawer.Screen
          name="SecondPage"
          options={{ drawerLabel: 'Reservations' }}
          component={secondScreenStack} />
          <Drawer.Screen
          name="ThirdPage"
          options={{ drawerLabel: 'User Details' }}
          component={ThirdScreenStack} />
      </Drawer.Navigator>
      
    </NavigationContainer>
  );
}

export default App;

/*const styles = StyleSheet.create({
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
   inputContainer: {
    padding:35,
    alignItems: 'center',
    
   },

    buttonContainer:{
      flexDirection: 'row',
      width:'50%',
      
      padding:56,
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
*/