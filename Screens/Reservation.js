import * as React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  StatusBar,
  Image,
  ImageBackground,
} from "react-native";
import { CardEcomOne, CardEcomTwo, CardEcomFour } from "react-native-card-ui";
import { Card, ListItem, Button, Icon } from "react-native-elements";
import { FontAwesome, Feather } from "react-native-vector-icons";
import CollapsibleCard from "./Collapsiablecard";
import CollapsibleCard1 from "./CollapsiableCard1";
import { useTheme } from '@react-navigation/native';
//import Swiper from "react-native-web-swiper";
import FlipCard from "react-native-flip-card";
import { BlurView } from "expo-blur";
import Swiper from "react-native-swiper";
import GreenUiUi from "./GreenUiUi"
const ReservationScreen = ({ route, navigation }) => {

  const { colors } = useTheme();

  const theme = useTheme();

  let eventId = [];
  let eventname = "";
  let evprice = "";
  let evevenye = "";
  let eventtypeevent = "";
  let dateevent = "";
  let timeevent = "";

  let Gname = "";
  let languageg = "";
  let costPerDayg = "";
  let pnumberg = "";
  let otherDetailsg = "";
  let Gid = [];

  let nameH = "";
  let venueH = "";
  let pricePerDayH = "";
  let districtH = "";
  let features = "";
  let otherDetailsH = "";
  let hotelNameid = [];

  let name = "";
  let district = "";
  let pnumber = "";
  let descriptiont = "";
  let vehicleType = "";
  let trnsportId = [];

  let checkInDate21;
  let checkOutDate21;
  let price21;
  let Noofrooms1;
  let Roomtype1;
  let nooftravellers1;
  let hotelName1;

  let transportServiceIDId = [];
  let tourGuideServiceID = [];
  let eventPlannerServiceID = [];
  let hotelsServiceID = [];

  const [data1, setData1] = React.useState([]);
  const [data11, setData11] = React.useState([]);
  const [data111, setData111] = React.useState([]);
  const [data1111, setData1111] = React.useState([]);
  const [hotelinfo, setHotelinfo] = React.useState([]);
  const [guideinfo, setguideinfo] = React.useState([]);
  const [transportinfo, settransportinfo] = React.useState([]);
  const [eventinfo, seteventinfo] = React.useState([]);
  const hotelarray=["https://images.unsplash.com/photo-1544477597-7e30412ada8c?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
"https://images.unsplash.com/photo-1596386461350-326ccb383e9f?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1001&q=80",
"https://images.unsplash.com/photo-1560920452-da0369e98fe7?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
"https://images.unsplash.com/photo-1574691250077-03a929faece5?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=675&q=80",
"https://images.unsplash.com/photo-1570214476695-19bd467e6f7a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
"https://images.unsplash.com/photo-1605538032404-d7f061325b90?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=967&q=80",
"https://images.unsplash.com/photo-1548623832-065a018e01ce?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1017&q=80",
];
  const eventarray=["https://images.unsplash.com/photo-1556125574-d7f27ec36a06?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
"https://images.unsplash.com/photo-1530023367847-a683933f4172?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=634&q=80",
"https://images.unsplash.com/flagged/photo-1570183075251-42dfe72c138e?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
"https://images.unsplash.com/photo-1544926323-8463f67ecb5d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
"https://images.unsplash.com/photo-1508026990909-1a59beab3320?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=967&q=80",
"https://images.unsplash.com/photo-1455906876003-298dd8c44ec8?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1527&q=80",
"https://images.unsplash.com/photo-1610057668097-f1bfdd53020f?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"];
  const guidearray=[
    "https://images.unsplash.com/photo-1530107973768-581951e62d34?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
    "https://images.unsplash.com/photo-1552301726-548e12c4097c?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    "https://images.unsplash.com/photo-1575891594916-2796520b6d83?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    "https://images.unsplash.com/photo-1609849194481-0a0f9d7585e9?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1343&q=80",
    "https://images.unsplash.com/photo-1516503424803-708327384b90?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=966&q=80",
    "https://images.unsplash.com/photo-1603623898218-0cb7f493309b?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    "https://images.unsplash.com/photo-1519686270607-648e58bb7563?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80"
  ];
  const Transportarray=[
    "https://images.unsplash.com/photo-1610411605947-0a96f654d829?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1491&q=80",
    "https://images.unsplash.com/photo-1489824904134-891ab64532f1?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1489&q=80",
    "https://images.unsplash.com/photo-1489307229055-9d55422662bd?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=967&q=80",
    "https://images.unsplash.com/photo-1423439793616-f2aa4356b37e?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1489&q=80",
    "https://images.unsplash.com/photo-1548792231-0bccaf8933bb?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=639&q=80",
    "https://images.unsplash.com/photo-1598551292015-e171a0c8a85c?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    "https://images.unsplash.com/photo-1590846414898-69b9811de9e6?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    "https://images.unsplash.com/photo-1534086184399-1ddd8c3b6b83?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1351&q=80"
  ];

  var item = hotelarray[Math.floor(Math.random() * hotelarray.length)];
  console.log(item);

  React.useEffect(() => {
    fetch(
      "https://run.mocky.io/v3/80584d2c-6096-45f8-b16b-ea1d0602106d"
    )
      .then((response) => response.json())
      .then((json) => setData1(json))
      .catch((error) => console.error(error));
  }, []);

  React.useEffect(() => {
    fetch("https://run.mocky.io/v3/bb7949a9-003e-4c8e-80d2-136dc09bb0f8")
      .then((response) => response.json())
      .then((json) => seteventinfo(json))
      .catch((error) => console.error(error));
  }, []);

  React.useEffect(() => {
    fetch(
      "https://run.mocky.io/v3/b7224c5d-e72c-4985-a8c4-18bdb4842c9e"
    )
      .then((response) => response.json())
      .then((json) => setData11(json))
      .catch((error) => console.error(error));
  }, []);

  React.useEffect(() => {
    fetch("https://run.mocky.io/v3/db39e5c4-e595-4a3c-a3d2-0aa9ae1859b3")
      .then((response) => response.json())
      .then((json) => setguideinfo(json))
      .catch((error) => console.error(error));
  }, []);

  React.useEffect(() => {
    fetch("https://run.mocky.io/v3/2a1a4cbe-b935-4e10-8e3b-21cee8d82d9e")
      .then((response) => response.json())
      .then((json) => setData111(json))
      .catch((error) => console.error(error)); 
  }, []);
  React.useEffect(() => {
    fetch("https://run.mocky.io/v3/042b3a38-e875-4203-80ad-0080eadd1104")
      .then((response) => response.json())
      .then((json) => setHotelinfo(json))
      .catch((error) => console.error(error));
  }, []);

  React.useEffect(() => {
    fetch(
      "https://run.mocky.io/v3/1b4133ef-0c8e-4727-89a3-74588bfddae4"
    )
      .then((response) => response.json())
      .then((json) => setData1111(json))
      .catch((error) => console.error(error));
  }, []);
  React.useEffect(() => {
    fetch("https://run.mocky.io/v3/492eae31-c7e8-4ce1-9029-7e48216c9f11")
      .then((response) => response.json())
      .then((json) => settransportinfo(json))
      .catch((error) => console.error(error));
  }, []);

  //  arrayOfArrays && arrayOfArrays.map(
  //   (Aname)=>{
  //       return(

  //         transportServiceIDId=Aname. transportServiceID,
  //         tourGuideServiceID=Aname.tourGuideServiceID,
  //         eventPlannerServiceID=Aname.eventPlannerServiceID,
  //         hotelsServiceID=Aname.hotelsServiceID

  //           )})

  data1 &&
    data1
      .filter((person) => person.userID === route.params.Name)
      .map((Aname, i) => {
        return (eventId[i] = Aname.eventPlannerServiceID);
      });

  const Collapsibleevent = () => {
    return (
      eventinfo &&
      eventinfo
        .filter((word) => eventId.indexOf(word))
        .map((Aname, i) => {
          return (
            <Showmoreevents
              key={i}
              eventname={Aname.name}
              evprice={Aname.price}
              evevenye={Aname.eventType}
              eventtypeevent={Aname.otherDetails}
              dateevent={Aname.date}
              timeevent={Aname.time}
            />
          );
        })
    );
  };

  data11 &&
    data11
      .filter((person) => person.userID === route.params.Name)
      .map((Aname, i) => {
        return (Gid[i] = Aname.tourGuideServiceID);
      });
  const Collapsibleguid = () => {
    return (
      guideinfo &&
      guideinfo
        .filter((word) => Gid.indexOf(word))
        .map((Aname, i) => {
          return (
            <Showmoreguide
              key={i}
              Gname={Aname.name}
              languageg={Aname.language}
              costPerDayg={Aname.costPerDay}
              pnumberg={Aname.pnumber}
              otherDetailsg={Aname.otherDetails}
            />
          );
        })
    );
  };

  data111 &&
    data111
      .filter((person) => person.userID === route.params.Name)
      .map((Aname) => {
        return (hotelNameid = Aname.hotelsServiceID);
      });
  const CollapsibleHotels = () => {
    return (
      hotelinfo &&
      hotelinfo
        .filter((word) => hotelNameid.indexOf(word))
        .map((Aname, i) => {
          return (
            <Showmorehotels
              key={i}
              nameH={Aname.name}
              venueH={Aname.venue}
              pricePerDayH={Aname.pricePerDay}
              districtH={Aname.district}
              features={Aname.features}
              otherDetailsH={Aname.otherDetails}
            />
          );
        })
    );
  };

  //  otherhotelarray.map(Aname => {return (
  //                       checkInDate21=Aname.checkInDate,
  //                       checkOutDate21=Aname.checkOutDate,
  //                       price21=Aname.price,
  //                       Noofrooms1=Aname.noOfRooms,
  //                       Roomtype1=Aname.roomType,
  //                       nooftravellers1=Aname.noOfTravellers,
  //                       hotelName1=Aname.hotelName)})

  data1111 &&
    data1111
      .filter((person) => person.userID === route.params.Name)
      .map((Aname) => {
        return (trnsportId = Aname.transportServiceID);
      });

  const CollapsibleTransport = () => {
    return (
      transportinfo &&
      transportinfo
        .filter((word) => trnsportId.indexOf(word))
        .map((Aname, i) => {
          return (
            <ShowmoreTransport
              key={i}
              name={Aname.name}
              district={Aname.district}
              pnumber={Aname.pnumber}
              descriptiont={Aname.description}
              vehicleType={Aname.vehicleType}
            />
          );
        })
    );
  };

  function getDiscription(discription) {
    return console.log(discription);
  }

  function Showmoreevents(props) {
    return (
      // Your Code

      <View style={{ padding: 8 }}>
        <CardEcomFour
          title={props.eventname}
          subTitle={props.evevenye}
          price={
            "$" +
            props.evprice +
            `\n` +
            `\n` +
            props.dateevent +
            `\n` +
            `\n` +
            props.timeevent
          }
          image={{uri:eventarray[Math.floor(Math.random() * eventarray.length)]}}
        />
      </View>
    );
  }

  function Showmoreguide(props) {
    return (
      <View style={{ padding: 8 }}>
        <CardEcomFour
          title={props.Gname}
          subTitle={props.languageg}
          price={"$" + props.costPerDayg + `\n` + `\n` + props.otherDetailsg}
          image={{uri:guidearray[Math.floor(Math.random() * guidearray.length)]}}
        />
      </View>
    );
  }

  function ShowmoreTransport(props) {
    return (
      <View>
        <CardEcomFour
          title={props.name}
          subTitle={props.vehicleType}
          price={
            "$" +
            `\n` +
            `\n` +
            props.district +
            `\n` +
            `\n` +
            props.descriptiont
          }
          image={{uri:Transportarray[Math.floor(Math.random() * Transportarray.length)]}}
        />
      </View>
    );
  }
  function Showmorehotels(props) {
    return (
      <View>
        <CardEcomFour
          title={props.nameH}
          subTitle={props.venueH}
          price={
            "$" +
            props.pricePerDayH +
            `\n` +
            `\n` +
            props.districtH +
            `\n` +
            `\n` +
            props.features
          }
          image={{uri:hotelarray[Math.floor(Math.random() * hotelarray.length)]}}
        />
      </View>
    );
  }

  return (
    
      
    <Swiper style={styles1.wrapper} showsButtons={true}>
       
      <View style={styles1.slide1}>
      <StatusBar barStyle= { theme.dark ? "light-content" : "dark-content" }/>
        <FlipCard>
          <View style={{ flex: 1 }}>
          <GreenUiUi image={require('../assets/HotelIcon.png')} Name="Hotels" />
          </View>

          <View style={[styles.container, { padding: 10 }]}>
            <View style={styles.footer3}>
              <ScrollView>{CollapsibleHotels()}</ScrollView>
            </View>
          </View>
        </FlipCard>
      </View>
      <View style={styles1.slide2}>
        <FlipCard>
          <View style={{ flex: 1 }}>
          <GreenUiUi image={require('../assets/3357503-256.png')} Name="Events" />
          </View>

          <View style={[styles.container, { padding: 10 }]}>
            <View style={styles.footer3}>
              <ScrollView>{Collapsibleevent()}</ScrollView>
            </View>
          </View>
        </FlipCard>
      </View>
      <View style={styles1.slide2}>
        <FlipCard>
          <View style={{ flex: 1 }}>
          <GreenUiUi image={require('../assets/1530078-256.png')} Name="Guide" />
          </View>

          <View style={[styles.container, { padding: 10 }]}>
            <View style={styles.footer3}>
              <ScrollView>{Collapsibleguid()}</ScrollView>
            </View>
          </View>
        </FlipCard>
      </View>
      <View style={styles1.slide2}>
        <FlipCard>
          <View style={{ flex: 1 }}>
          <GreenUiUi image={require('../assets/3687823-256.png')} Name="Transport" />
          </View>

          <View style={[styles.container, { padding: 10 }]}>
            <View style={styles.footer3}>
              <ScrollView>{CollapsibleTransport()}</ScrollView>
            </View>
          </View>
        </FlipCard>
      </View>
    </Swiper>
   
  );
};

export default ReservationScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  blurredImage: {
    width: 192,
    height: 192,
  },
  nonBlurredContent: {
    alignItems: "center",
    justifyContent: "center",
  },
  containerflip: {
    flex: 1,
    backgroundColor: "rgba( 0, 0, 0, 0.6 )",
  },
  ImageBackground: {
    width: 150,
    height: 280,
  },
  footer3: {
    backgroundColor: "white",
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    height: "100%",
    width: "100%",
  },
  footer: {
    backgroundColor: "#fff",
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingVertical: 50,
    paddingHorizontal: 30,
    padding: 10,
  },
  header: {
    flex: 2,
    justifyContent: "center",
    alignItems: "center",
  },
  text_detail: {
    padding: 10,
  },
  Rcardtext: {
    padding: 3,
    fontSize: 40,
    color: "black",
  },
  Rcardstylet: {
    padding: 10,
    backgroundColor: "white",
    borderRadius: 10,
  },
});

const styles1 = StyleSheet.create({
  wrapper: {},
  slide1: {
    flex: 1,

    backgroundColor: "#9DD6EB",
  },
  slide2: {
    flex: 1,

    backgroundColor: "#97CAE5",
  },
  slide3: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#92BBD9",
  },
  text: {
    color: "black",
    fontSize: 18,
    fontWeight: "bold",
  },
});
