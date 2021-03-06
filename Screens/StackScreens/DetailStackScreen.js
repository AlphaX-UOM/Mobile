import React from 'react';

import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import DetailsScreen from '../DetailsScreen'
import Icon from 'react-native-vector-icons/Ionicons';

const DetailsStack = createStackNavigator();

const DetailsStackScreen = ({navigation,route}) =>
{  let useName=route.params.Name;
  return   (

 
    <DetailsStack.Navigator screenOptions={{
            headerStyle: {
            backgroundColor: '#1F2E35',
            },
            headerTintColor: '#1F2E35',
            headerTitleStyle: {
            fontWeight: 'bold'
            }
        }}>
            <DetailsStack.Screen name="Profile" component={DetailsScreen} initialParams={{ Name:useName  }} options={{
            headerLeft: () => (
                <Icon.Button name="ios-menu" size={25} backgroundColor="#1F2E35" onPress={() => navigation.openDrawer()}></Icon.Button>
            )
            }} />
    </DetailsStack.Navigator>
    );}
export default DetailsStackScreen;    