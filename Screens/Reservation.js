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
import { NeuView } from "react-native-neu-element";
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

  React.useEffect(() => {
    fetch(
      "https://alphax-api.azurewebsites.net/api/EventPlannerServiceReservations"
    )
      .then((response) => response.json())
      .then((json) => setData1(json))
      .catch((error) => console.error(error));
  }, []);

  React.useEffect(() => {
    fetch("https://alphax-api.azurewebsites.net/api/EventPlannerServices")
      .then((response) => response.json())
      .then((json) => seteventinfo(json))
      .catch((error) => console.error(error));
  }, []);

  React.useEffect(() => {
    fetch(
      "https://alphax-api.azurewebsites.net/api/TourGuideServiceReservations"
    )
      .then((response) => response.json())
      .then((json) => setData11(json))
      .catch((error) => console.error(error));
  }, []);

  React.useEffect(() => {
    fetch("https://alphax-api.azurewebsites.net/api/TourGuideServices")
      .then((response) => response.json())
      .then((json) => setguideinfo(json))
      .catch((error) => console.error(error));
  }, []);

  React.useEffect(() => {
    fetch("https://alphax-api.azurewebsites.net/api/HotelsServiceReservations")
      .then((response) => response.json())
      .then((json) => setData111(json))
      .catch((error) => console.error(error)); 
  }, []);
  React.useEffect(() => {
    fetch("https://alphax-api.azurewebsites.net/api/HotelsServices")
      .then((response) => response.json())
      .then((json) => setHotelinfo(json))
      .catch((error) => console.error(error));
  }, []);

  React.useEffect(() => {
    fetch(
      "https://alphax-api.azurewebsites.net/api/TransportServiceReservations"
    )
      .then((response) => response.json())
      .then((json) => setData1111(json))
      .catch((error) => console.error(error));
  }, []);
  React.useEffect(() => {
    fetch("https://alphax-api.azurewebsites.net/api/TransportServices")
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
          image={require("../assets/danny-howe-bn-D2bCvpik-unsplash.jpg")}
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
          image={require("../assets/ahmed-zayan-n_YWKiIBnp4-unsplash.jpg")}
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
          image={require("../assets/kyle-szegedi-tRQfEwP5P_0-unsplash.jpg")}
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
          image={require("../assets/roberto-nickson-HmieZw0YOC0-unsplash.jpg")}
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
            <ImageBackground
              style={styles.footer3}
              source={require("../assets/taylor-simpson-L-HhvkK7xrM-unsplash.jpg")}
            >
              <View
                style={{
                  alignItems: "center",
                  width: 300,
                  height: 200,
                  fontStyle: "bold",
                }}
              >
                <BlurView
                  intensity={150}
                  style={[StyleSheet.absoluteFill, styles.nonBlurredContent]}
                >
                  <Text
                    style={{ color: "black", fontSize: 40, fontWeight: "bold" }}
                  >
                    Hotels
                  </Text>
                </BlurView>
              </View>
            </ImageBackground>
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
            <ImageBackground
              style={styles.footer3}
              source={require("../assets/priscilla-du-preez-v0kQglce46E-unsplash.jpg")}
            >
              <View
                style={{
                  alignItems: "center",
                  paddingTop: 150,
                  fontStyle: "bold",
                  width: 300,
                  height: 200,
                }}
              >
                <BlurView
                  intensity={150}
                  style={[StyleSheet.absoluteFill, styles.nonBlurredContent]}
                >
                  <Text
                    style={{ color: "black", fontSize: 40, fontWeight: "bold" }}
                  >
                    Events
                  </Text>
                </BlurView>
              </View>
            </ImageBackground>
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
            <ImageBackground
              style={styles.footer3}
              source={require("../assets/severin-hoin-oXVCgaDqX30-unsplash.jpg")}
            >
              <View
                style={{
                  alignItems: "center",
                  paddingTop: 150,
                  fontStyle: "bold",
                  width: 300,
                  height: 200,
                }}
              >
                <BlurView
                  intensity={150}
                  style={[StyleSheet.absoluteFill, styles.nonBlurredContent]}
                >
                  <Text
                    style={{ color: "black", fontSize: 40, fontWeight: "bold" }}
                  >
                    Guide
                  </Text>
                </BlurView>
              </View>
            </ImageBackground>
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
            <ImageBackground
              style={styles.footer3}
              source={require("../assets/ivan-diaz-tG49tjZOui0-unsplash.jpg")}
            >
              <View
                style={{
                  alignItems: "center",
                  paddingTop: 150,
                  fontStyle: "bold",
                  TopborderRadius: 20,
                  width: 300,
                  height: 200,
                }}
              >
                <BlurView
                  intensity={150}
                  style={[StyleSheet.absoluteFill, styles.nonBlurredContent]}
                >
                  <Text
                    style={{ color: "black", fontSize: 40, fontWeight: "bold" }}
                  >
                   Transport
                  </Text>
                </BlurView>
              </View>
            </ImageBackground>
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
