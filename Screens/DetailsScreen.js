import * as React from "react";
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
const DetailsScreen = ({ route, navigation }) => {
  const [data1, setData1] = React.useState([]);
  const [data2, setData2] = React.useState([{
    "highscore": "",
    "paymentD": 0,
    "pushToken": "",
    "services": "null",
    "servicesgranted": "null",
  }]);
  let email = "";
  let image = "";
  let pno = "";
  let adress = "";
  let Name = "";

  const getData = () => {
    firebase
      .database()
      .ref(`users/${route.params.Name}`)
      .on("value", function (snapshot) {
        setData2(snapshot.val());
      });
  };

  console.log(data2);
  React.useEffect(() => {
    setTimeout(() => {
      getData();
    }, 1000);
  }, []);

 

  if(data2.paymentD !== 0){
    sendPushNotification(data2.pushToken)
  }

  if(data2.services !== "null"){
    servicegranted(data2.pushToken)
  }

  // if(data2.servicesgranted !== "null"){
  //   newserviceacces(data2.pushToken)
  // }

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
    fetch("https://run.mocky.io/v3/c45dd8db-b0cf-48ad-9892-5a6d25f82913")
      .then((response) => response.json())
      .then((json) => setData1(json))
      .catch((error) => console.error(error));
  }, []);
  data1 &&
    data1
      .filter((person) => person.id === route.params.Name)
      .map((Aname) => {
        return (
          (Name = Aname.firstName),
          (email = Aname.email),
          (image = Aname.userurl),
          (pno = Aname.contact),
          (adress = Aname.address)
        );
      });
  // console.log(image)

  // return (
  //        <View style={styles.container}>
  //         {/* <View style={styles.header}></View> */}
  //         <Animatable.View  animation="fadeInUpBig" style={styles.header}>
  //         <Image style={styles.avatar} source={{uri: 'https://bootdey.com/img/Content/avatar/avatar6.png'}}/>
  //         <View style={styles.body}>
  //           <View style={styles.bodyContent}>
  //             <Text style={styles.name}>{Name}</Text>
  //             <Text style={styles.info}>{email}</Text>
  //             <Text style={styles.description}>{pno}</Text>
  //             <Text style={styles.description}>{adress}</Text>
  //             {/* <TouchableOpacity style={styles.buttonContainer}>
  //               <Text>Opcion 1</Text>
  //             </TouchableOpacity>
  //             <TouchableOpacity style={styles.buttonContainer}>
  //               <Text>Opcion 2</Text>
  //             </TouchableOpacity> */}
  //           </View>
  //       </View>
  //       </Animatable.View>
  //     </View>
  //   // <View style={{ flex: 1 }}>
  //   //   <CardEcomOne
  //   //     style={{ flex: 1 }}
  //   //     title={"NIKE SILVER"}
  //   //     price={"$200"}
  //   //     image={require("../assets/ahmed-zayan-n_YWKiIBnp4-unsplash.jpg")} //OR {{uri:"http://......"}}
  //   //     icon={"star"}
  //   //     nbStar={3}
  //   //     iconColor={"#FFC57C"}
  //   //     colorList={["#000000", "#0b8457", "#7ed3b2"]}
  //   //     selectColor={"#000000"}
  //   //     getSelectColor={(color) => alert(color)}
  //   //   />
  //   //   {/* <View style={styles.text_detail}>
  //   // <Text style={styles.text_footer}>Name:</Text><Text>{Name}</Text>
  //   // <Text style={styles.text_footer}>Email    :</Text><Text>{email}</Text>
  //   //       <Text style={styles.text_footer}>Contact No:</Text><Text>{pno}</Text>
  //   //       <Text style={styles.text_footer}>Adress:</Text><Text>{adress}</Text>
  //   //       </View> */}
  //   // </View>
  // );
  return (
    <View style={styles.container}>
      <View style={styles.profiimage}>
        <Image
          style={styles.image}
          source={{ uri: "https://bootdey.com/img/Content/avatar/avatar6.png" }}
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
          <View style={styles.namecard2}>
            <View style={styles.emailwrpper}>
              <View style={styles.atsignwrapper}>
                <View style={styles.at}>
                  <Entypo name="phone" size={14} color="black" />
                </View>
              </View>
              <Text style={styles.email}>{pno}</Text>
            </View>
          </View>
          {/* thirdcard */}
          {/* fourthcard */}
          <View style={styles.namecard2}>
            <View style={styles.emailwrpper}>
              <View style={styles.atsignwrapper}>
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
    backgroundColor: "#174D36",
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
    backgroundColor: "white",
    marginTop: 24,
    borderRadius: 28,
    alignItems: "center",
  },
  name: {
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 20,
  },
  namecard2: {
    width: 318,
    height: 90,
    backgroundColor: "white",
    marginTop: 13,
    borderRadius: 28,
    overflow: "hidden",
  },
  atsignwrapper: {
    width: 48,
    height: 44,
    backgroundColor: "#3E8977",
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
    fontSize: 14,
    marginLeft: 41,
    marginTop: 31,
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
