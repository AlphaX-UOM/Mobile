import React,{ useState,useEffect} from 'react';
import { View, Text,TouchableOpacity, Button, StyleSheet ,Image,ScrollView} from 'react-native';
import { FontAwesome, Feather, MaterialIcons,Ionicons } from 'react-native-vector-icons';
import { CardEcomOne, CardEcomTwo, CardEcomFour } from "react-native-card-ui";
import ComponentWithFocus from '../components/ComponentWithFocus'
const PaymentScreen = ({ route, navigation }) => {

 

  const [paymentList, setPaymentList] = useState([]);
  useEffect(() => {
    fetch(
      "https://run.mocky.io/v3/73958238-7761-4d81-8577-793ff92c0ea1" 
      
    )
      .then((res) => res.json())
      .then((data) => {
        setPaymentList(data);
      });
  }, []);
const showPayment=() =>{
  return (
    paymentList &&
    paymentList
       .filter((word) => route.params.Name== word.userID)
       .map((Aname, i) => {
      
         return (
           <View style={{padding: 8 }}>
           
           <PaymenCard date={Aname.date} discount={Aname.id} cash={Aname.amount} forwardLink={() => navigation.navigate('morePayments',{itemId: Aname.id})}/> 
           
           </View>
        
         );
       })
   
  )
}


 
    return (
      <View style={styles.container}>
        <View style={styles.paymentbox}>
          <Text style={styles.payment}>Payments</Text>
        </View>
      
       <ScrollView>
          { showPayment()}
       </ScrollView>
      </View>
    );
};

export default PaymentScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1, 
  backgroundColor:'#22343C',
  
  },
  payment:{
    fontSize:42,
    color: "white",
    fontWeight: "bold",
  },
  paymentbox:{
    marginLeft:32,
    paddingBottom: 5
  }
 
});

function PaymenCard(props ){
 
  return(
    
    <TouchableOpacity onPress={props.forwardLink}>
    <View style={styles1.cardbox}>
    <View style={styles1.square}>
      <View style={styles1.dollarbig}>
        <MaterialIcons name="monetization-on" color="#FFC542" size={30} />
      </View>
    </View>
    <View style={styles1.datedisc}>
      <View style={styles1.date}>
        <Text style={styles1.datetext}>{props.date} </Text>
      </View>
      <View style={styles1.discount}>
       <View style={styles1.rocket}>
       <FontAwesome name="rocket" color="#FFC542" size={20} />
      </View>
       <View style={styles1.discountval}>
        <Text style={styles1.discounttext}>{props.discount}</Text>
      </View>
      </View>
    </View>
    <View style={styles1.cashbox}>
    <Text style={styles1.cashtext}>{props.cash}</Text>
    </View>
  </View>
  </TouchableOpacity>
  )
}

const styles1 = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#22343C',
  },
  cardbox: {
    height: 115,
    width: 345,
    backgroundColor: '#30444E',
    borderRadius: 25,
    marginLeft: 22,
    flexDirection: 'row',
  },
  square: {
    height: 57,
    width: 59,

    borderRadius: 12,
    backgroundColor: '#FF565E',
    marginTop: 24,
    marginLeft: 23,
  },
  dollarbig: {
    marginTop: 15,
    alignItems: 'center',
  },
  datedisc: {
    marginTop: 24,
    marginLeft: 16,
    width: 145,
    flexDirection:"column"
  },
  datetext: {
    color: 'white',
    fontSize: 14,
  },
  discount:{
     marginTop:15,
    flexDirection:"row",
  },
  rocket:{
   
  },
  discountval:{
    marginLeft:13
  },
  discounttext:{
    color:"white",
      fontSize: 14,
  },
  cashbox:{
    marginTop:30,
    marginLeft:25
  },
  cashtext:{
    color:"#FF575F",
    fontWeight:"bold",
    fontSize:18
  }

});
