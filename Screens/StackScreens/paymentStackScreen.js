import React from 'react';

import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import PaymentScreen from '../PaymentsScreen'
import Icon from 'react-native-vector-icons/Ionicons';

const PaymentStack = createStackNavigator();
// console.log
const PaymentStackScreen = ({navigation,route}) =>
{  let useName=route.params.Name;
    // console.log(useName)
  return   (

 
    <PaymentStack.Navigator screenOptions={{
            headerStyle: {
            backgroundColor: '#22343C',
            },
            headerTintColor: '#22343C',
            headerTitleStyle: {
            fontWeight: 'bold'
            }
        }}>
            <PaymentStack.Screen name="Payments" component={PaymentScreen} initialParams={{ Name:useName  }} options={{
            headerLeft: () => (
                <Icon.Button name="ios-menu" size={25} backgroundColor="#22343C" onPress={() => navigation.openDrawer()}></Icon.Button>
            )
            }} />
    </PaymentStack.Navigator>
    );}
export default PaymentStackScreen;  