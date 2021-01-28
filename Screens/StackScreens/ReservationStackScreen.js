import React from 'react';
import ReservationScreen from '../Reservation';
import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/Ionicons';

const ReservationStack = createStackNavigator();

const ReservationStackScreen = ({navigation,route}) => 
{
    let useName=route.params.Name;
  return  (
    <ReservationStack.Navigator screenOptions={{
            headerStyle: {
            backgroundColor: '#174D36',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
            fontWeight: 'bold'
            }
        }}>
            <ReservationStack.Screen name="Home" component={ReservationScreen} initialParams={{ Name:useName  }} options={{
            title:'Reservations',
            headerLeft: () => (
                <Icon.Button name="ios-menu" size={25} backgroundColor="#174D36" onPress={() => navigation.openDrawer()}></Icon.Button>
            )
            }} />
    </ReservationStack.Navigator>
    );
        }
    export default ReservationStackScreen;