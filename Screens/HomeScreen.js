import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, StatusBar,ScrollView } from 'react-native';
import { useTheme } from '@react-navigation/native';
import {Button, Avatar,  Card, Title, Paragraph } from 'react-native-paper';
const HomeScreen = ({navigation}) => {

  const { colors } = useTheme();

  const theme = useTheme();



    
  
    return (

      <View >
        <StatusBar barStyle= { theme.dark ? "light-content" : "dark-content" }/>
        <ScrollView>
        
        <MyComponent/>
        <MyComponent/>
        <MyComponent/>
        
        </ScrollView>
      
      </View>
    );
};

const LeftContent = props => <Avatar.Icon {...props} icon="home" />

const MyComponent = () => (
  <Card>
    <Card.Title title="ADs" subtitle="Card Subtitle" left={LeftContent} />
    <Card.Content>
      <Title></Title>
      <Paragraph>Card content</Paragraph>
    </Card.Content>
    <Card.Cover source={require('../assets/819-700x700.jpg')} />
    <Card.Actions>
      <Button>Cancel</Button>
      <Button>Ok</Button>
    </Card.Actions>
  </Card>
);

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'center'
  },
});
