import React from 'react';
import ServicesScreen from '../Services';
import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/Ionicons';

const ServiceStack = createStackNavigator();

const ServiceStackScreen = ({navigation,route}) => 
{
    let useName=route.params.Name;
    console.log('services',useName);
  return  (
    <ServiceStack.Navigator screenOptions={{
            headerStyle: {
            backgroundColor: '#174D36',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
            fontWeight: 'bold'
            }
        }}>
            <ServiceStack.Screen name="Home" component={ServicesScreen} initialParams={{ Name:useName  }} options={{
            title:'Services',
            headerLeft: () => (
                <Icon.Button name="ios-menu" size={25} backgroundColor="#174D36" onPress={() => navigation.openDrawer()}></Icon.Button>
            )
            }} />
    </ServiceStack.Navigator>
    );
        }
    export default ServiceStackScreen;