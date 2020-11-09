import * as React from 'react';
import {
  Button,
  View,
  Text,
  SafeAreaView
} from 'react-native';
import Cardele from '../screens/card';
import Usercard from '../screens/userdetailcard';

const ThirdPage = ({ route, navigation }) => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1, padding: 16 }}>
     
          
      <Usercard /> 
        
      </View>
    </SafeAreaView>
  );
}

export default ThirdPage;

/*{<Button
  onPress={
    () => navigation.navigate('FirstPage')
  }
  title="Go to First Page"
/>
<Button
  onPress={
    () => navigation.navigate('SecondPage')
  }
  title="Go to Second Page"
/>}*/