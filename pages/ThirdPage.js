import * as React from 'react';
import {
  Button,
  View,
  Text,
  SafeAreaView
} from 'react-native';

const ThirdPage = ({ route, navigation }) => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1, padding: 16 }}>
      <Text
            style={{
              fontSize: 25,
              textAlign: 'center',
              marginBottom: 16
            }}>
            Your Details
          </Text>
        <View
          style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
            <Text>User:</Text>
          
          
        </View>
        
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