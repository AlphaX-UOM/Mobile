import * as React from "react";
import axios from 'axios';
import {
  View,
  Text,
  Button,
  Image,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { Avatar, Accessory } from "react-native-elements";
import * as Animatable from "react-native-animatable";
import AuthContext from "../components/context";
import "react-native-gesture-handler";
import { CardEcomOne, CardEcomTwo, CardEcomFour } from "react-native-card-ui";
import { FontAwesome, Feather, Entypo } from "react-native-vector-icons";
import { route } from "@react-navigation/native";
import * as firebase from "firebase";
import * as Notifications from "expo-notifications";
import AuthNewContext from "../components/newContext"


const DetailsScreen = ({ route, navigation }) => {

  const {trigermy, setmytriger } = React.useContext(AuthNewContext);
  console.log("🚀 ~ file: DetailsScreen.js ~ line 26 ~ DetailsScreen ~ trigermy", trigermy)
  const [data1, setData1] = React.useState("null");
  const [data2, setData2] = React.useState([]);
  
  const [data4, setData4] = React.useState(0);
  const [data6, setData6] = React.useState(0);
  const [updatepaymentdata, setData5] = React.useState(0);
  
  const [reservation234, setData8] = React.useState(0);
  let email = "";
  let image = "";
  let pno = "";
  let adress = "";
  let Name = "";
  let paymentcount=data4;
 
  // console.log

     


   
     React.useEffect(() => {
      myFunction();
      return () => {
        setData4({}); // This worked for me
      };
    }, []);

    const myFunction = () => {
      fetch(`https://vvisit-d6347-default-rtdb.firebaseio.com/payments.json`)
      .then((response) => response.json())
      .then((json) => setData4(Object.values(json).filter(item => item.custId ===route.params.Name).length),
      
      )
      .catch((error) => console.error(error));
  }
 
 
// console.log("role+>",data1.role)
  
  if(data1.role==="ServiceProvider"){
    React.useEffect(() => {
      myFunction1();
      return () => {
        setData6({}); // This worked for me
      };
    }, []);

    const myFunction1 = () => {
      fetch(`https://vvisit-d6347-default-rtdb.firebaseio.com/reservations.json`)
      .then((response) => response.json())
      .then((json) => setData6(Object.values(json).filter(item => item.serId ===route.params.Name).length),
      
      )
      .catch((error) => console.error(error));
  }
  
    
  }
  else{
    

    React.useEffect(() => {
      myFunction2();
      return () => {
        setData6({}); // This worked for me
      };
    }, []);

    const myFunction2 = () => {
      fetch(`https://vvisit-d6347-default-rtdb.firebaseio.com/reservations.json`)
      .then((response) => response.json())
      .then((json) => setData6(Object.values(json).filter(item => item.custId ===route.params.Name).length),
      
      )
      .catch((error) => console.error(error));
  }
  }
  

  
  

function getData  ()  {

   firebase
    .database()
    .ref(`users/${route.params.Name}`)
    .once("value", function (snapshot) {
      setData2(snapshot.val());
    });

    firebase
    .database()
    .ref(`payments`)
    .on("value", function (snapshot) {
     
      setData5(Object.values(snapshot.val()).filter(item => item.custId ===route.params.Name).length);
     
    });

    if(data1.role==="ServiceProvider"){
      firebase
    .database()
    .ref(`reservations`)
    .on("value", function (snapshot) {
     
      setData8(Object.values(snapshot.val()).filter(item => item.serId ===route.params.Name).length)
    });


    }
    else{

      firebase
    .database()
    .ref(`reservations`)
    .on("value", function (snapshot) {
     
      setData8(Object.values(snapshot.val()).filter(item => item.custId ===route.params.Name).length)
    });


    }


    
    
    // React.useEffect(() => {
    //   fetch(`https://vvisit-d6347-default-rtdb.firebaseio.com/payments.json`)
    //     .then((response) => response.json())
    //     .then((json) => setData3(Object.values(json).filter(item => item.custId ===route.params.Name)))
    //     .catch((error) => console.error(error));
    // }, []);
  
    // React.useEffect(() => {
    //   fetch(`https://vvisit-d6347-default-rtdb.firebaseio.com/reservations.json`)
    //     .then((response) => response.json())
    //     .then((json) => setData4(Object.values(json).filter(item => item.custId ===route.params.Name)))
    //     .catch((error) => console.error(error));
    // }, []);
    
     
  };

  // console.log(reservation234,data6);
  React.useEffect(() => {
    setTimeout(() => {
      getData();
    }, 1000);
  }, []);

 

  if( data4<updatepaymentdata){
    setmytriger(!trigermy)
    sendPushNotification(data2.pushToken)
    let value=updatepaymentdata-data4 
    setData4(data4+value)
  }

  if(data6<reservation234){
    setmytriger(!trigermy)
    servicegranted(data2.pushToken)
    let value=reservation234-data6
    setData6(data6+value)
  }

  

  async function sendPushNotification(expoPushToken) {
    const message = {
      to: expoPushToken,
      sound: "default",
      title: "Payment Success",
      body: "Happy travell :-)",
      data: { someData: "goes here" },
    };

    

    await fetch("https://exp.host/--/api/v2/push/send", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Accept-encoding": "gzip, deflate",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(message),
    });
  }

  async function servicegranted(expoPushToken) {
    const message = {
      to: expoPushToken,
      sound: "default",
      title: "service Succes! Lets GO",
      body: "Welcome To Srilanka",
      data: { someData: "goes here" },
    };

    

    await fetch("https://exp.host/--/api/v2/push/send", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Accept-encoding": "gzip, deflate",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(message),
    });
  }
 async function newserviceacces(expoPushToken) {
    const message = {
      to: expoPushToken,
      sound: "default",
      title: "new Service registration",
      body: "Succes!",
      data: { someData: "goes here" },
    };

    

    await fetch("https://exp.host/--/api/v2/push/send", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Accept-encoding": "gzip, deflate",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(message),
    });
  }




  React.useEffect(() => {
    fetch(`https://alphax-api.azurewebsites.net/api/users/${route.params.Name}`)
      .then((response) => response.json())
      .then((json) => setData1(json))
      .catch((error) => console.error(error));
  }, []);

  
     
        
          Name = data1.firstName;
          email = data1.email;
          image = data1.imgURL;
          pno = data1.contact;
          adress = data1.address;
      
  const image1=image
  return (
    <View style={styles.container}>
      <View style={styles.profiimage}>
        <Image
          style={styles.image}
          source={{ uri:image1  }}
        />
      </View>
      <Animatable.View animation="fadeInUpBig" style={styles.header}>
        {/* all cards */}
        <View style={styles.cardall}>
          {/* firstcard */}
          <View style={styles.namecard}>
            <Text style={styles.name}>{Name}</Text>
          </View>
          {/* firstcard */}
          {/* secondcard */}
          <View style={styles.namecard2}>
            <View style={styles.emailwrpper}>
              <View style={styles.atsignwrapper}>
                <View style={styles.at}>
                  <Entypo name="email" size={14} color="black" />
                </View>
              </View>
              <Text style={styles.email}>{email}</Text>
            </View>
          </View>
          {/* secondcard */}
          {/* thirdcard */}
          <View style={styles.namecard3}>
            <View style={styles.emailwrpper}>
              <View style={styles.atsignwrapper1}>
                <View style={styles.at}>
                  <Entypo name="phone" size={14} color="black" />
                </View>
              </View>
              <Text style={styles.email}>{pno}</Text>
            </View>
          </View>
          {/* thirdcard */}
          {/* fourthcard */}
          <View style={styles.namecard4}>
            <View style={styles.emailwrpper}>
              <View style={styles.atsignwrapper2}>
                <View style={styles.at}>
                  <Entypo name="location" size={14} color="black" />
                </View>
              </View>
              <View style={styles.addresss}>
                <Text style={styles.email}>{adress}</Text>
              </View>
            </View>
          </View>
          {/* fourthcard */}
        </View>
        {/* all cards */}
      </Animatable.View>
    </View>
  );
};

export default DetailsScreen;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#263957",
//   },
//   details: {
//     padding: 40,
//     alignItems: "center",
//     justifyContent: "space-between",

//     height: 1,
//   },
//   footer: {
//     flex: 3,
//     backgroundColor: "#fff",
//     borderTopLeftRadius: 30,
//     borderTopRightRadius: 30,
//     paddingVertical: 50,
//     paddingHorizontal: 30,
//   },
//   header: {
//     flex: 2,
//     justifyContent: "center",
//     alignItems: "center",
//   },
//   text_footer: {
//     color: "blue",
//     fontSize: 18,
//     padding: 10,
//   },
//   text_detail: {
//     padding: 10,
//   },
// });
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#1F2E35",
    flex: 1,
  },
  profiimage: {
    alignItems: "center",
    marginTop: 18,
  },
  image: {
    width: 107,
    height: 108,
    borderRadius: 96.5,
  },
  cardall: {
    alignItems: "center",
  },
  namecard: {
    width: 318,
    height: 90,
   
    marginTop: 24,
    
    alignItems: "center",
  },
  name: {
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 18,
    color:'white',
  },
  namecard2: {
    width: 318,
    height: 90,
    backgroundColor: "#286053",
    marginTop: 13,
    borderRadius: 28,
    overflow: "hidden",
  },
  namecard3: {
    width: 318,
    height: 90,
    backgroundColor: "#625B39",
    marginTop: 13,
    borderRadius: 28,
    overflow: "hidden",
  },
  namecard4: {
    width: 318,
    height: 90,
    backgroundColor: "#623A42",
    marginTop: 13,
    borderRadius: 28,
    overflow: "hidden",
  },
  atsignwrapper: {
    width: 48,
    height: 44,
    backgroundColor: "#3DD598",
    marginLeft: 15,
    marginTop: 21,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 20,
    alignItems: "center",
  },
  atsignwrapper1: {
    width: 48,
    height: 44,
    backgroundColor: "#FFC542",
    marginLeft: 15,
    marginTop: 21,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 20,
    alignItems: "center",
  },
  atsignwrapper2: {
    width: 48,
    height: 44,
    backgroundColor: "#FF565E",
    marginLeft: 15,
    marginTop: 21,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 20,
    alignItems: "center",
  },
  at: {
    marginTop: 17,
    marginLeft: 4,
  },
  email: {
    fontSize: 18,
    marginLeft: 41,
    marginTop: 31,
    color: "#FFFFFF",
  },
  emailwrpper: {
    flexDirection: "row",
    alignItems: "center",
  },
  addresss: {},

  // header:{
  //   backgroundColor: "gray",
  //   height:200,
  // },
  // avatar: {
  //   width: 150,
  //   height: 150,
  //   borderRadius: 80,
  //   borderWidth: 4,
  //   borderColor: "white",
  //   marginBottom:10,
  //   alignSelf:'center',
  //   position: 'absolute',
  //   marginTop:90
  // },
  // name:{
  //   fontSize:22,
  //   color:"#FFFFFF",
  //   fontWeight:'600',
  // },
  // body:{
  //   marginTop:220,
  //   borderRadius:30
  // },
  // bodyContent: {
  //   flex: 1,
  //   alignItems: 'center',
  //   padding:30,
  // },
  // name:{
  //   fontSize:28,
  //   color: "#696969",
  //   fontWeight: "600"
  // },
  // info:{
  //   fontSize:16,
  //   color: "#00BFFF",
  //   marginTop:10
  // },
  // description:{
  //   fontSize:16,
  //   color: "#696969",
  //   marginTop:10,
  //   textAlign: 'center'
  // },
  // buttonContainer: {
  //   marginTop:10,
  //   height:45,
  //   flexDirection: 'row',
  //   justifyContent: 'center',
  //   alignItems: 'center',
  //   marginBottom:20,
  //   width:250,
  //   borderRadius:30,
  //   backgroundColor: "#00BFFF",
  //},
});
