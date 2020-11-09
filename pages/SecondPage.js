import * as React from 'react';
import { View,ScrollView,
  Text,
  SafeAreaView,Image
} from 'react-native';
import Cardele from '../screens/card';


const SecondPage = ({ navigation }) => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1, padding: 16 },{backgroundColor:'blue'}}>
      <ScrollView>
        <Cardele title="Hotels" text="no details yet"/>
        <Cardele title="Events" text="no details yet"/>
        <Cardele title="Guide" text="no details yet"/>
        <Cardele title="Transport" text="no details yet"/>
      </ScrollView>
      </View>
    </SafeAreaView>
  );
}

export default SecondPage;