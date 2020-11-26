import { View, Text, Image,ActivityIndicator } from 'react-native'
import { Card, ListItem, Button, Icon } from 'react-native-elements'
import React from 'react';

function CardElement(props){
    return(
        <View>
            <Card>
            <Card.Title>{props.title}</Card.Title>
            <Card.Divider/>
            <Card.Image source={require('../assets/14.jpg')} />
            <Text style={{marginBottom: 10}}>
             {props.details}
            </Text>
           
            </Card>
        </View>

    )
}


export default CardElement;