import * as React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import { Card, ListItem, Button, Icon } from "react-native-elements";
import { FontAwesome, Feather } from "react-native-vector-icons";
import CollapsibleCard from "./Collapsiablecard";
import CollapsibleCard1 from "./CollapsiableCard1";
import Swiper from "react-native-web-swiper";
import FlipCard from "react-native-flip-card";

const ServicesScreen = ({ route, navigation }) => {
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
  let hotelNid = [];
  let hotelNameid = [];
  let hotelNameiduserid = [];

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

  const [hotelinfo, setHotelinfo] = React.useState([]);
  const [guideinfo, setguideinfo] = React.useState([]);
  const [transportinfo, settransportinfo] = React.useState([]);
  const [eventinfo, seteventinfo] = React.useState([]);
  const [hotelreser, Sethotelreser] = React.useState([]);
  React.useEffect(() => {
    fetch("https://alphax-api.azurewebsites.net/api/EventPlannerServices")
      .then((response) => response.json())
      .then((json) => seteventinfo(json))
      .catch((error) => console.error(error));
  }, []);

  React.useEffect(() => {
    fetch("https://alphax-api.azurewebsites.net/api/TourGuideServices")
      .then((response) => response.json())
      .then((json) => setguideinfo(json))
      .catch((error) => console.error(error));
  }, []);

  React.useEffect(() => {
    fetch("https://alphax-api.azurewebsites.net/api/HotelsServices")
      .then((response) => response.json())
      .then((json) => setHotelinfo(json))
      .catch((error) => console.error(error));
  }, []);

  React.useEffect(() => {
    fetch("https://alphax-api.azurewebsites.net/api/HotelsServiceReservations")
      .then((response) => response.json())
      .then((json) => Sethotelreser(json))
      .catch((error) => console.error(error));
  }, []);

  React.useEffect(() => {
    fetch("https://alphax-api.azurewebsites.net/api/TransportServices")
      .then((response) => response.json())
      .then((json) => settransportinfo(json))
      .catch((error) => console.error(error));
  }, []);

  const Collapsibleevent = () => {
    return (
      eventinfo &&
      eventinfo
        .filter((person) => person.userID === route.params.Name)
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

  const Collapsibleguid = () => {
    return (
      guideinfo &&
      guideinfo
        .filter((person) => person.userID === route.params.Name)
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

  hotelinfo &&
    hotelinfo
      .filter((person) => person.userID === route.params.Name)
      .map((Aname, i) => {
        return (hotelNid[i] = [Aname.id,Aname.name]);
      });
  hotelreser &&
    hotelreser
      .filter((word) => hotelNid.indexOf(word))
      .map((Aname, i) => {
        return (hotelNameiduserid[i] = [Aname.userID]);
      });
      

     // stooped at here*************************************************************

  console.log("hotel name and id", hotelNameiduserid);
  const CollapsibleTransport = () => {
    return (
      transportinfo &&
      transportinfo
        .filter((person) => person.userID === route.params.Name)
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
      <View>
        <CollapsibleCard1 title="History" style={styles.Rcardtext}>
          <View style={{ padding: 8, backgroundColor: "#cbf054" }}>
            <Text style={{ padding: 3 }}>Name: {props.eventname}</Text>
            <Text style={{ padding: 3 }}>Type :{props.evevenye}</Text>

            <Text style={{ padding: 3 }}>Price: {props.evprice}</Text>
            <Text style={{ padding: 3 }}>Details: {props.eventtypeevent}</Text>
            <Text style={{ padding: 3 }}>Date :{props.dateevent}</Text>
            <Text style={{ padding: 3 }}>Time :{props.timeevent}</Text>
          </View>
        </CollapsibleCard1>
      </View>
    );
  }

  function Showmoreguide(props) {
    return (
      <View>
        <CollapsibleCard1 title="History" style={styles.Rcardtext}>
          <View style={{ padding: 8, backgroundColor: "#cbf054" }}>
            <Text style={{ padding: 3 }}>Name: {props.Gname}</Text>

            <Text style={{ padding: 3 }}>Language: {props.languageg}</Text>
            <Text style={{ padding: 3 }}>CostPerDay: {props.costPerDayg}</Text>
            <Text style={{ padding: 3 }}>PNo: {props.pnumberg}</Text>
            <Text style={{ padding: 3 }}>Details: {props.otherDetailsg}</Text>
          </View>
        </CollapsibleCard1>
      </View>
    );
  }

  function ShowmoreTransport(props) {
    return (
      <View>
        <CollapsibleCard1 title="History" style={styles.Rcardtext}>
          <View style={{ padding: 8, backgroundColor: "#cbf054" }}>
            <Text style={{ padding: 3 }}>Name: {props.name}</Text>

            <Text style={{ padding: 3 }}>District: {props.district}</Text>
            <Text style={{ padding: 3 }}>PNo: {props.pnumber}</Text>
            <Text style={{ padding: 3 }}>vehicle: {props.vehicleType}</Text>
            <Text style={{ padding: 3 }}>
              Discription: {props.descriptiont}
            </Text>
          </View>
        </CollapsibleCard1>
      </View>
    );
  }
  function Showmorehotels(props) {
    return (
      <View>
        <CollapsibleCard1 title="History" style={styles.Rcardtext}>
          <View style={{ padding: 8, backgroundColor: "#cbf054" }}>
            <Text style={{ padding: 3 }}>Hotel: {props.nameH}</Text>

            <Text style={{ padding: 3 }}>Venue : {props.venueH}</Text>
            <Text style={{ padding: 3 }}>
              Price Per Day: {props.pricePerDayH}
            </Text>
            <Text style={{ padding: 3 }}>District :{props.districtH}</Text>
            <Text style={{ padding: 3 }}>Features: {props.features}</Text>
            <Text style={{ padding: 3 }}>******: {props.otherDetailsH}</Text>
          </View>
        </CollapsibleCard1>
      </View>
    );
  }

  function selection(input) {
    if (input === "Hotels") {
      return CollapsibleHotels();
    }
    if (input === "Transport") {
      return CollapsibleTransport();
    }
    if (input === "Guide") {
      return Collapsibleguid();
    }
    if (input === "Event") {
      return Collapsibleevent();
    }
  }

  function RCard(props) {
    return (
      <View style={styles.container}>
        <View style={styles.footer}>
          <View style={styles.text_detail}>
            <View style={{ alignItems: "center" }}>
              <FontAwesome name={props.icon} color="black" size={45} />
              <Text style={[styles.text_footer, { fontSize: 30 }]}>
                {props.Title}
              </Text>
            </View>

            <View>
              <CollapsibleCard title="Show" style={styles.Rcardtext}>
                {selection(props.Title)}
              </CollapsibleCard>
            </View>
          </View>
        </View>
      </View>
    );
  }
  return (
    <View style={styles.container}>
      {/* <ScrollView style={{padding:10}}>
        <View style={{padding:10}}>
       
           <RCard icon='hospital-o' Title='Hotels' 
           />
        </View>
        <View style={{padding:10}}>
           <RCard icon='cab' Title='Transport'
                  />
          
           
        </View>
        <View style={{padding:10}}>
           <RCard icon='male' Title='Guide' 
           
            />
        </View>
        <View style={{padding:10}}>
           <RCard icon='grav' Title='Event' 
          
              />
         
        </View>
      
       
       </ScrollView> */}

      <Swiper>
        <View style={[styles1.slideContainer, styles1.slide1]}>
          <FlipCard>
            <View style={[styles.container, { padding: 10 }]}>
              <ImageBackground
                style={styles.footer3}
                source={require("../assets/taylor-simpson-L-HhvkK7xrM-unsplash.jpg")}
              >
                <View
                  style={{
                    alignItems: "center",
                    paddingTop: 150,
                    fontStyle: "bold",
                  }}
                >
                  <Text style={{ color: "white", fontSize: 40 }}>Hotels</Text>
                </View>
              </ImageBackground>
            </View>
            {/* Back Side */}
            <View style={[styles.container, { padding: 10 }]}>
              <View style={styles.footer3}></View>
            </View>
          </FlipCard>
        </View>

        <View style={[styles1.slideContainer, styles1.slide1]}>
          <FlipCard>
            <View style={[styles.container, { padding: 10 }]}>
              <ImageBackground
                style={styles.footer3}
                source={require("../assets/priscilla-du-preez-v0kQglce46E-unsplash.jpg")}
              >
                <View
                  style={{
                    alignItems: "center",
                    paddingTop: 150,
                    fontStyle: "bold",
                  }}
                >
                  <Text style={{ color: "white", fontSize: 40 }}>Events</Text>
                </View>
              </ImageBackground>
            </View>
            {/* Back Side */}
            <View style={[styles.container, { padding: 10 }]}>
              <View style={styles.footer3}></View>
            </View>
          </FlipCard>
        </View>

        <View style={[styles1.slideContainer, styles1.slide1]}>
          <FlipCard>
            <View style={[styles.container, { padding: 10 }]}>
              <ImageBackground
                style={styles.footer3}
                source={require("../assets/severin-hoin-oXVCgaDqX30-unsplash.jpg")}
              >
                <View
                  style={{
                    alignItems: "center",
                    paddingTop: 150,
                    fontStyle: "bold",
                  }}
                >
                  <Text style={{ color: "white", fontSize: 40 }}>Guide</Text>
                </View>
              </ImageBackground>
            </View>
            {/* Back Side */}
            <View style={[styles.container, { padding: 10 }]}>
              <View style={styles.footer3}></View>
            </View>
          </FlipCard>
        </View>

        <View style={[styles1.slideContainer, styles1.slide1]}>
          <FlipCard>
            <View style={[styles.container, { padding: 10 }]}>
              <ImageBackground
                style={styles.footer3}
                source={require("../assets/ivan-diaz-tG49tjZOui0-unsplash.jpg")}
              >
                <View
                  style={{
                    alignItems: "center",
                    paddingTop: 150,
                    fontStyle: "bold",
                  }}
                >
                  <Text style={{ color: "white", fontSize: 40 }}>
                    Transport
                  </Text>
                </View>
              </ImageBackground>
            </View>
            {/* Back Side */}
            <View style={[styles.container, { padding: 10 }]}>
              <View style={styles.footer3}></View>
            </View>
          </FlipCard>
        </View>
      </Swiper>
    </View>
  );
};

export default ServicesScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000000",
  },
  containerflip: {
    flex: 1,
    backgroundColor: "rgba( 0, 0, 0, 0.6 )",
  },
  ImageBackground: {
    width: 150,
    height: 280,
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
  footer1: {
    backgroundColor: "yellow",
    alignItems: "center",
    width: "95%",
    height: "95%",
  },
  footer2: {
    backgroundColor: "red",

    height: "100%",
    width: "100%",
  },
  footer3: {
    backgroundColor: "#fff",
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    height: "100%",
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
  container: {
    flex: 1,
  },
  container2: {
    justifyContent: "center",
    padding: 1,
    backgroundColor: "#ecf0f1",
  },
  container1: {
    flex: 1,
    justifyContent: "center",
    padding: 1,
    backgroundColor: "yellow",
  },
  slideContainer: {
    flex: 1,
  },
  slide1: {
    backgroundColor: "rgba(20,20,200,0.3)",
  },
  slide2: {
    backgroundColor: "rgba(20,200,20,0.3)",
  },
  slide3: {
    backgroundColor: "rgba(200,20,20,0.3)",
  },
  slide4: {
    backgroundColor: "rgba(200,20,20,0.3)",
  },
  slide5: {
    backgroundColor: "rgba(200,20,20,0.3)",
  },
});
