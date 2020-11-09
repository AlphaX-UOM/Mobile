import React from 'react';
import { Avatar, Accessory, Card, ListItem,  Icon } from 'react-native-elements';
import {View,Text} from 'react-native';

const Usercard =(props)=> {

    return (

        <Card>
        <Card.Title>welcome {props.title}!</Card.Title>
        <Card.Divider/>
        <Avatar
              size="xlarge"
              rounded
              source={{uri:props.source}}
        />
        <Text style={{marginBottom: 10}}>UserId:</Text>
        <Text style={{marginBottom: 10}}>Adress:</Text>
        <Text style={{marginBottom: 10}}>Email:</Text>
        
        </Card>
    

    )




}

export default Usercard;