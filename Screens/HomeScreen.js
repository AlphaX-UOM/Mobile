import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  ScrollView,
  Image,
} from "react-native";
import { useTheme } from "@react-navigation/native";
import { Button, Avatar, Card, Title, Paragraph } from "react-native-paper";
import { CardEcomOne, CardEcomTwo, CardEcomFour } from "react-native-card-ui";
import { ImageBackground } from "react-native";

const HomeScreen = ({ navigation }) => {
  const { colors } = useTheme();
  let gname;
  const [guideAds, setGuideAds] = useState([]);
  const [hotelAds, setHotelAds] = useState([]);
  const [transportAds, setTransportAds] = useState([]);
  const[eventAds, setEventAds] = useState([])
  useEffect(() => {
    fetch("https://alphax-api.azurewebsites.net/api/tourguideservices")
      .then((response) => response.json())
      .then((json) => setGuideAds(json))
      .catch((error) => console.error(error));
  }, []);
const ShowGuideAds=()=>{
  return(
    guideAds.map((Aname) => {
      return (
        <GuideAds colorg={colorarray[Math.floor(Math.random() * colorarray.length)]} gname={Aname.name}  lang={Aname.language} price={Aname.costPerDay}/>
      )
    })
   
  )
}
useEffect(() => {
  fetch("https://alphax-api.azurewebsites.net/api/hotelsservices")
    .then((response) => response.json())
    .then((json) => setHotelAds(json))
    .catch((error) => console.error(error));
}, []);
const ShowhotelAds=()=>{
return(
  hotelAds.map((Aname) => {
    return (
      <HotelAds colorg={colorarray[Math.floor(Math.random() * colorarray.length)]} name={Aname.name} price={Aname.pricePerDay} details={Aname.otherDetails} image={Aname.imgURL}/>
    )
  })
 
)
}
useEffect(() => {
  fetch("https://alphax-api.azurewebsites.net/api/transportservices")
    .then((response) => response.json())
    .then((json) => setTransportAds(json))
    .catch((error) => console.error(error));
}, []);
const ShowtransportAds=()=>{
return(
  transportAds.map((Aname) => {
    return (
      <TransportAds colorg={colorarray[Math.floor(Math.random() * colorarray.length)]} name={Aname.name} price={Aname.pricePerDay} car={Aname.vehicleType} />
    )
  })
 
)
}
useEffect(() => {
  fetch("https://alphax-api.azurewebsites.net/api/eventplannerservices")
    .then((response) => response.json())
    .then((json) => setEventAds(json))
    .catch((error) => console.error(error));
}, []);
const ShowEventAds=()=>{
return(
  eventAds.map((Aname) => {
    return (
      <EventAds colorg={colorarray[Math.floor(Math.random() * colorarray.length)]} name={Aname.name} price={Aname.price} details={Aname.otherDetails}  image={Aname.imgURL}/>
    )
  })
 
)
}
 

  const theme = useTheme();
  const colorarray = [
    "#FFBC25",
    "#FF565E",
    "#3ED598",
    "#FF565E",
    "#0062FF",
    "#FF565E",
    "#0062FF",
    "#3ED598",
  ];
 
  var colorg = colorarray[Math.floor(Math.random() * colorarray.length)];
  return (
    <View style={styles.container}>
      <ScrollView>
        <View>
          <ScrollView horizontal={true}>
          <ShowGuideAds/>
            
          </ScrollView>
        </View>
        <View>
          <ScrollView horizontal={true}>
           <ShowhotelAds/>
            <HotelAds
              colorg={colorarray[Math.floor(Math.random() * colorarray.length)]}
            />
          </ScrollView>
        </View>
        <View>
          <ScrollView horizontal={true}>
           <ShowtransportAds/>
          </ScrollView>
        </View>
        <View>
          <ScrollView horizontal={true}>
            <ShowEventAds/>
          </ScrollView>
        </View>
      </ScrollView>
      <View style={{marginTop: 10}}></View>
    </View>
  );
};

const LeftContent = (props) => <Avatar.Icon {...props} icon="home" />;

const GuideAds = (props) => {
  const guideimage=[require("../assets/guide23.png"),require("../assets/guidillus.png"),require("../assets/guide34.png")]
  return (
    <View
      style={{
        width: 175,
        height: 230,
        backgroundColor: props.colorg,
        borderRadius: 10,
        marginTop: 10,
        marginLeft: 10,
        alignItems: "center",
      }}
    >
      <View>
        <Text style={styles.guidetext}>{props.gname}</Text>
        <Text style={styles.guidetext}>{props.lang}</Text>
        <Text style={styles.guidetext}>{props.price}</Text>
      </View>
      <Image
        style={{ width: 90, height: 90,marginLeft:60 }}
        source={ guideimage[Math.floor(Math.random() * guideimage.length)]}
      />
    </View>
  );
};

const TransportAds = (props) => {
  const guideimage=[require("../assets/transport12.png"),require("../assets//transport23.png"),require("../assets/guide34.png")]
  return (
    <View
      style={{
        width: 183,
        height: 240,
        backgroundColor: props.colorg,
        borderRadius: 10,
        marginTop: 10,
        marginLeft: 10,
        alignItems: "center",
      }}
    >
      <View>
        <Text style={styles.guidetext}>{props.name}</Text>
        <Text style={styles.guidetext}>{props.price}</Text>
        <Text style={styles.guidetext}>{props.car}</Text>
      </View>
      <Image
        style={{ width: 90, height: 100 }}
        source={ guideimage[Math.floor(Math.random() * guideimage.length)]}
      />
    </View>
  );
};

const HotelAds = (props) => {
  return (
    <View style={styles.hoelAds}>
      <View style={{ flexDirection: "row" }}>
        <View
          style={{
            height: 52,
            width: 52,
            backgroundColor: props.colorg,
            borderRadius: 32.5,
            marginTop: 20,
            marginLeft: 19,
          }}
        ></View>
        <View style={styles.hotelttext}>
          <View>
            <Text style={styles.guidetext}>{props.name}</Text>
            <Text style={{ color: "white" }}>{props.price}</Text>
          </View>
        </View>
      </View>
      <View style={{ marginLeft: 19, marginTop: 10,width:355,height:50,}}>
        <Text style={{ color: "white" }}>
          {props.details}
        </Text>
      </View>
      <View style={{ marginTop: 10, marginLeft: 19 }}>
        <Image
          style={{
            width: 355,
            height: 154,
            borderBottomLeftRadius: 20,
            borderBottomRightRadius: 20,
          }}
          source={{
            uri:
              props.image,
          }}
        />
      </View>
    </View>
  );
};
const EventAds = (props) => {
  return (
    <View style={styles.hoelAds}>
      <View style={{ flexDirection: "row" }}>
        <View
          style={{
            height: 52,
            width: 52,
            backgroundColor: props.colorg,
            borderRadius: 32.5,
            marginTop: 20,
            marginLeft: 19,
          }}
        ></View>
        <View style={styles.hotelttext}>
          <View>
            <Text style={styles.guidetext}>{props.name}</Text>
            <Text style={{ color: "white" }}>{props.price}</Text>
          </View>
        </View>
      </View>
      <View style={{ marginLeft: 19, marginTop: 10 ,width:355,height:50,}}>
        <Text style={{ color: "white" }}>
         {props.details}
        </Text>
      </View>
      <View style={{ marginTop: 10, marginLeft: 19 }}>
        <Image
          style={{
            width: 355,
            height: 154,
            borderBottomLeftRadius: 20,
            borderBottomRightRadius: 20,
          }}
          source={{
            uri:
              props.image
          }}
        />
      </View>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#22343C",
  },
  guidetext: {
    color: "white",
    fontSize: 20,
    marginTop: 20,
  },
  hoelAds: {
    width: 390,
    height: 300,
    backgroundColor: "#30444E",
    marginLeft: 12,
    marginTop: 12,
    borderRadius: 20,
  },
  hotelc: {
    height: 52,
    width: 52,
    backgroundColor: "#FF565E",
    borderRadius: 32.5,
    marginTop: 20,
    marginLeft: 19,
  },
  hotelttext: {
    marginTop: 1,
    marginLeft: 10,
  },
});
