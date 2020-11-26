import React from 'react';

import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import DetailsScreen from '../DetailsScreen'
import Icon from 'react-native-vector-icons/Ionicons';

const DetailsStack = createStackNavigator();

const DetailsStackScreen = ({navigation}) => (
    <DetailsStack.Navigator screenOptions={{
            headerStyle: {
            backgroundColor: '#434a54',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
            fontWeight: 'bold'
            }
        }}>
            <DetailsStack.Screen name="Profile" component={DetailsScreen} options={{
            headerLeft: () => (
                <Icon.Button name="ios-menu" size={25} backgroundColor="#434a54" onPress={() => navigation.openDrawer()}></Icon.Button>
            )
            }} />
    </DetailsStack.Navigator>
    );
export default DetailsStackScreen;    