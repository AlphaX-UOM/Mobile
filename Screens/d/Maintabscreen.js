import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './Homescreen';
import DetailScreen from './DetailScreen';
import Icon from 'react-native-vector-icons/Ionicons'
import Profile from './profile';
import PageScreen from './PageScreen';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
const Tab=createMaterialBottomTabNavigator();
const HomeStack = createStackNavigator();
const DetailStack = createStackNavigator();
const MainTabScreen=()=>{
    return (
        <Tab.Navigator
          initialRouteName="Home"
          activeColor="#e91e63"
          style={{ backgroundColor: 'tomato' }}
        >
          <Tab.Screen
            name="Home1"
            component={HomeStackScreen}
            options={{
              tabBarLabel: 'Home',
              tabBarIcon: ({ color }) => (
                <Icon  name="ios-home" color={color} size={26} />
              ),
            }}
          />
          <Tab.Screen
            name="Notifications"
            component={DetailStackScreen}
            options={{
              tabBarLabel: 'Notifications',
              tabBarIcon: ({ color }) => (
                <Icon name="ios-notifications" color={color} size={26} />
              ),
            }}
          />
          <Tab.Screen
            name="Profile"
            component={PageScreen}
            options={{
              tabBarLabel: 'Explore',
              tabBarIcon: ({ color }) => (
                <Icon  name="ios-person" color={color} size={26} />
              ),
            }}
          />
           <Tab.Screen
            name="Profile1"
            component={Profile}
            options={{
              tabBarLabel: 'Profile',
              tabBarIcon: ({ color }) => (
                <Icon  name="ios-aperture" color={color} size={26} />
              ),
            }}
          />
        </Tab.Navigator>
      );
};

export default MainTabScreen;
const HomeStackScreen=({navigation})=>{
    return(
    <HomeStack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: '#009387',
        },
        headerTintColor:'#fff'
  
      }}
    >
      <HomeStack.Screen name="Home" component={HomeScreen} 
       
      options={{ 
        headerLeft:()=>(<Icon.Button name="ios-menu" size={25} backgroundColor="#009387" onPress={()=>{navigation.openDrawer()}}></Icon.Button>)
      }}
  
      />
      
      </HomeStack.Navigator>
      )
    
  }
  
  const DetailStackScreen=({navigation})=>{
    return( 
    <DetailStack.Navigator>
      <DetailStack.Screen name="Details" component={DetailScreen}
        options={{ 
          headerLeft:()=>(<Icon.Button name="ios-menu" size={25} backgroundColor="#009387" onPress={()=>{navigation.openDrawer()}}></Icon.Button>)
        }}
       />
      
      </DetailStack.Navigator>)
  }
   
