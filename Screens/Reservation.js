import * as React from 'react';
import { View, Text,  StyleSheet,ScrollView ,Image} from 'react-native';
import { Card, ListItem, Button, Icon } from 'react-native-elements'
import {FontAwesome,Feather} from 'react-native-vector-icons';
import CollapsibleCard from "./Collapsiablecard";
import CollapsibleCard1 from "./CollapsiableCard1";



const ReservationScreen = ({ route, navigation }) => {

  
  
  let eventId=[];
  let eventname='';
  let evprice='';
  let evevenye='';
  let eventtypeevent='';
  let dateevent='';
  let timeevent='';

  let Gname=''; 
  let languageg='';
  let costPerDayg='';
  let  pnumberg='';
  let otherDetailsg='';
  let Gid=[];

  let nameH='';
  let venueH='';
  let pricePerDayH='';
  let districtH='';
  let features='';
  let otherDetailsH='';
  let hotelNameid=[];

  
  let name='';
  let  district='';
  let pnumber='';
  let descriptiont='';
  let vehicleType='';
  let trnsportId=[]

  let checkInDate21;
  let checkOutDate21;
  let price21; 
  let Noofrooms1;
  let Roomtype1;
  let nooftravellers1;
  let hotelName1

  let transportServiceIDId=[];
  let  tourGuideServiceID=[];
  let eventPlannerServiceID=[];
  let hotelsServiceID=[];
  

  const [data1, setData1] = React.useState([]);
  const [data11, setData11] = React.useState([]);
  const [data111, setData111] = React.useState([]);
  const [data1111, setData1111] = React.useState([]);
  const[hotelinfo,setHotelinfo]=React.useState([])
  const[guideinfo,setguideinfo]=React.useState([])
  const[transportinfo,settransportinfo]=React.useState([])
  const[eventinfo,seteventinfo]=React.useState([])
  


  

  React.useEffect(() => {
    fetch('https://alphax-api.azurewebsites.net/api/EventPlannerServiceReservations')
      .then((response) => response.json())
      .then((json) => setData1(json))
      .catch((error) => console.error(error))
      
  }, []);

React.useEffect(() => {
    fetch('https://alphax-api.azurewebsites.net/api/EventPlannerServices')
      .then((response) => response.json())
      .then((json) => seteventinfo(json))
      .catch((error) => console.error(error))
      
  }, []);


  React.useEffect(() => {
    fetch('https://alphax-api.azurewebsites.net/api/TourGuideServiceReservations')
                .then((response) => response.json())
                .then((json) => setData11(json))
                .catch((error) => console.error(error))
                      
                  }, []);

  React.useEffect(() => {
    fetch('https://alphax-api.azurewebsites.net/api/TourGuideServices')
        .then((response) => response.json())
        .then((json) => setguideinfo(json))
        .catch((error) => console.error(error))
                      
        }, []);

  React.useEffect(() => {
    fetch('https://alphax-api.azurewebsites.net/api/HotelsServiceReservations')
              .then((response) => response.json())
              .then((json) => setData111(json))
              .catch((error) => console.error(error))
                                                            
                }, []);
 React.useEffect(() => {
  fetch('https://alphax-api.azurewebsites.net/api/HotelsServices')
        .then((response) => response.json())
        .then((json) => setHotelinfo(json))
        .catch((error) => console.error(error))
                    
                }, []);
          
  React.useEffect(() => {
     fetch('https://alphax-api.azurewebsites.net/api/TransportServiceReservations')
              .then((response) => response.json())
              .then((json) => setData1111(json))
              .catch((error) => console.error(error))
                                                                                              
                }, []);
  React.useEffect(() => {
    fetch('https://alphax-api.azurewebsites.net/api/TransportServices')
          .then((response) => response.json())
          .then((json) => settransportinfo(json))
          .catch((error) => console.error(error))
                                    
    }, []);
  
 

//  arrayOfArrays && arrayOfArrays.map(
//   (Aname)=>{
//       return(
          
          
//         transportServiceIDId=Aname. transportServiceID,
//         tourGuideServiceID=Aname.tourGuideServiceID,
//         eventPlannerServiceID=Aname.eventPlannerServiceID,
//         hotelsServiceID=Aname.hotelsServiceID

//           )}) 
  
  
data1 && data1.filter(person=>person.userID===route.params.Name ).map(
        (Aname,i)=>{
            return(
                eventId[i]=Aname.eventPlannerServiceID
                )}) 


const Collapsibleevent=()=>{
 
  return ( 
  
    eventinfo  &&  eventinfo.filter((word)=>eventId.indexOf(word)).map((Aname,i)=>{
  return(
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
  
  )
};
 

                
data11 && data11.filter(person=>person.userID===route.params.Name ).map(
                      (Aname,i)=>{
                          return(
                      
                      Gid[i]=Aname.tourGuideServiceID
                      )}) 
 const Collapsibleguid=()=>{
 
        return ( 
                        
        guideinfo  &&  guideinfo.filter((word)=>Gid.indexOf(word)).map((Aname,i)=>{
         return(
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
                        
   )
  };
                                           


data111 && data111.filter(person=>person.userID===route.params.Name ).map(
                   (Aname)=>{
                              
                      return( 
                              
                              hotelNameid=Aname.hotelsServiceID
                                                            
                   )}) 
 const CollapsibleHotels=()=>{
 
       return ( 
                    
    hotelinfo  &&  hotelinfo.filter((word)=>hotelNameid.indexOf(word)).map((Aname,i)=>{
    return(
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
                    
   )
  };







//  otherhotelarray.map(Aname => {return (                                           
//                       checkInDate21=Aname.checkInDate,
//                       checkOutDate21=Aname.checkOutDate,
//                       price21=Aname.price,
//                       Noofrooms1=Aname.noOfRooms,
//                       Roomtype1=Aname.roomType,
//                       nooftravellers1=Aname.noOfTravellers,
//                       hotelName1=Aname.hotelName)})
                                                    
  data1111 && data1111.filter(person=>person.userID===route.params.Name ).map(
      (Aname)=>{
        return(
                                                                                        
       trnsportId=Aname.transportServiceID                                                                                  
   )}) 

  const CollapsibleTransport=()=>{
 
    return ( 
    
      transportinfo  &&  transportinfo.filter((word)=>trnsportId.indexOf(word)).map((Aname,i)=>{
    return(
        <ShowmoreTransport
          
        key={i}
        name={Aname.name} 
        district={Aname.district}
        pnumber={Aname. pnumber}
        descriptiont={Aname.description}
        vehicleType={Aname.vehicleType}
         
         
        />
    );
    })  
    
    )
  };
                                  
  function getDiscription(discription){
    return(
            console.log(discription)
    )
  }

  function Showmoreevents(props){
    return(
            <View>
            <CollapsibleCard1
                title="History"
                style={styles.Rcardtext}
                >
                <View style={{ padding: 8 ,backgroundColor:'#cbf054'  }}>
                <Text style={{padding:3}}>Name: {props.eventname}</Text>
                <Text style={{padding:3}}>Type :{props.evevenye}</Text>

                
                <Text style={{padding:3}}>Price: {props.evprice}</Text>
                <Text style={{padding:3}}>Details: {props.eventtypeevent}</Text>
                <Text style={{padding:3}}>Date :{props.dateevent}</Text>
                <Text style={{padding:3}}>Time :{props.timeevent}</Text>
                </View>
             </CollapsibleCard1>
             </View>
    )
  }

  function Showmoreguide(props){
    return(
            <View>
            <CollapsibleCard1
                title="History"
                style={styles.Rcardtext}
                >
                <View style={{ padding: 8 ,backgroundColor:'#cbf054'  }}>
                <Text style={{padding:3}}>Name: {props.Gname}</Text>

                <Text style={{padding:3}}>Language: {props.languageg}</Text>
                <Text style={{padding:3}}>CostPerDay: {props.costPerDayg}</Text>
                <Text style={{padding:3}}>PNo: {props.pnumberg}</Text>
                <Text style={{padding:3}}>Details: {props.otherDetailsg}</Text>
                
                </View>
             </CollapsibleCard1>
             </View>
    )
  }

  function ShowmoreTransport(props){
    return(
            <View>
            <CollapsibleCard1
                title="History"
                style={styles.Rcardtext}
                >
                <View style={{ padding: 8 ,backgroundColor:'#cbf054' }}>
                <Text style={{padding:3}}>Name: {props.name}</Text>

                <Text style={{padding:3}}>District: {props.district}</Text>
                <Text style={{padding:3}}>PNo: {props.pnumber}</Text>
                <Text style={{padding:3}}>vehicle: {props.vehicleType}</Text>
                <Text style={{padding:3}}>Discription: {props.descriptiont}</Text>
                
                
                </View>
             </CollapsibleCard1>
             </View>
    )
  }
  function Showmorehotels(props){
    return(
            <View>
            <CollapsibleCard1
                title="History"
                style={styles.Rcardtext}
                >
                <View style={{ padding: 8 ,backgroundColor:'#cbf054' }}>
                <Text style={{padding:3}}>Hotel:   {props.nameH}</Text>

                <Text style={{padding:3}}>Venue : {props.venueH}</Text>
                <Text style={{padding:3}}>Price Per Day: {props.pricePerDayH}</Text>
                <Text style={{padding:3}}>District :{props.districtH}</Text>
                <Text style={{padding:3}}>Features: {props.features}</Text>
                <Text style={{padding:3}}>******: {props.otherDetailsH}</Text>
                </View>
             </CollapsibleCard1>
             </View>
    )
  }

  function selection(input){

    if(input==='Hotels'){
      return( CollapsibleHotels())
    }
    if(input==='Transport'){
       return(CollapsibleTransport())
    }
    if(input==='Guide'){
      return(Collapsibleguid() )
    }
    if(input==='Event'){
      return( Collapsibleevent())
    }
     
  }
 
  function RCard(props){
    return (
      <View style={styles.container}>
         <View style={styles.footer}>
            <View style={styles.text_detail}>
               <View style={{alignItems: 'center'}}>
                  <FontAwesome name={props.icon} color="black" size={45}/>
                     <Text style={[styles.text_footer,{fontSize:30}]}>{props.Title}</Text>
               </View>
              
                <View>
                <CollapsibleCard
                title="Show"
                style={styles.Rcardtext}
                >
              
                {selection(props.Title)}
               
                </CollapsibleCard>
                 
                </View>
            
            </View>
        
        </View>
        
      </View>
    )
  }
    return (
      <View style={styles.container}>
        <ScrollView style={{padding:10}}>
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
      
       
       </ScrollView>
      </View>
    );
};

export default ReservationScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    backgroundColor: '#263957'
    
  },
  footer: {
    
    backgroundColor: '#fff',
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingVertical: 50,
    paddingHorizontal: 30,
    padding:10,
    
},
header: {
  flex: 2,
  justifyContent: 'center',
  alignItems: 'center'
},
text_detail:{
  padding: 10
},
Rcardtext: {
  padding:3 ,
  fontSize:40,
  color: 'black'
},
Rcardstylet:{
  padding:10,
  backgroundColor:'white',
  borderRadius: 10
}

});
