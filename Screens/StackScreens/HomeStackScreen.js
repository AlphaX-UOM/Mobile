import React from 'react';
import HomeScreen from '../HomeScreen';
import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/Ionicons';

const HomeStack = createStackNavigator();

const HomeStackScreen = ({navigation}) => (
    <HomeStack.Navigator screenOptions={{
            headerStyle: {
            backgroundColor: '#434a54',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
            fontWeight: 'bold'
            }
        }}>
            <HomeStack.Screen name="Home" component={HomeScreen} options={{
            title:'Home',
            headerLeft: () => (
                <Icon.Button name="ios-menu" size={25} backgroundColor="#434a54" onPress={() => navigation.openDrawer()}></Icon.Button>
            )
            }} />
    </HomeStack.Navigator>
    );

    export default HomeStackScreen;