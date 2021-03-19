import React from 'react';

import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import  MorepaymentDetails from '../morepaymentDetails'
import Icon from 'react-native-vector-icons/Ionicons';

const MorePaymentStack = createStackNavigator();

const MorePaymentStackScreen = ({navigation,route}) =>
{  let {itemId} = route.params;
// componentDidMount=()=>{
//     navigation.setParams({itemId})
// }
  
  return   (

 
    <MorePaymentStack.Navigator screenOptions={{
            headerStyle: {
            backgroundColor: '#22343C',
            },
            headerTintColor: '#22343C',
            headerTitleStyle: {
            fontWeight: 'bold'
            }
        }}>
            <MorePaymentStack.Screen name="morePaymecard" component={MorepaymentDetails} params={{ Name: itemId }}  options={{
            headerLeft: () => (
                <Icon.Button name="ios-menu" size={25} backgroundColor="#22343C" onPress={() => navigation.openDrawer()}></Icon.Button>
            )
            }} />
    </MorePaymentStack.Navigator>
    );}
export default MorePaymentStackScreen;  