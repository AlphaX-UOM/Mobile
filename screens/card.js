import React from 'react';
import { View, Text, Image } from 'react-native'
import { Card, ListItem, Button, Icon } from 'react-native-elements'

const Cardele=(props)=>{


    return (
        <View>
            <Card>
           <Card.Title>{props.title}</Card.Title>
           <Card.Divider/>
           <Card.Image  />
           <Text style={{marginBottom: 10}}>
           {props.text}
           </Text>
           <Button
           icon={<Icon name='code' color='#ffffff' />}
           buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
           title='VIEW NOW' />
           </Card>
        </View>
    )

}

export default Cardele;