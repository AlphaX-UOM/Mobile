import React from 'react';
import ReservationScreen from '../Reservation';
import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/Ionicons';

const ReservationStack = createStackNavigator();

const ReservationStackScreen = ({navigation}) => (
    <ReservationStack.Navigator screenOptions={{
            headerStyle: {
            backgroundColor: '#434a54',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
            fontWeight: 'bold'
            }
        }}>
            <ReservationStack.Screen name="Home" component={ReservationScreen} options={{
            title:'Reservations',
            headerLeft: () => (
                <Icon.Button name="ios-menu" size={25} backgroundColor="#434a54" onPress={() => navigation.openDrawer()}></Icon.Button>
            )
            }} />
    </ReservationStack.Navigator>
    );

    export default ReservationStackScreen;