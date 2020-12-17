import * as React from 'react';
import { View, Text,  StyleSheet,ScrollView ,Image} from 'react-native';
import { Card, ListItem, Button, Icon } from 'react-native-elements'
import {FontAwesome,Feather} from 'react-native-vector-icons';
import CollapsibleCard from "./Collapsiablecard";



const ReservationScreen = ({ route, navigation }) => {

  
  let checkInDate4=''; 
  let checkOutDate4='';
  let price4='';
  let eventtype='';
  let eventId=[];
  let eventname='';

  let checkInDate3=''; 
  let checkOutDate3='';
  let price3='';
  let Gid=[];

  let checkInDate2=''; 
  let checkOutDate2='';
  let price2='';
  let Noofrooms='';
  let Roomtype='';
  let nooftravellers='';
  let hotelNameid=[];

  let checkInDate1=''; 
  let checkOutDate1='';
  let price1='';
  let vehicle='';
  let pickup='';
  let drop='';
  let notrav='';
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
     fetch('https://alphax-api.azurewebsites.net/api/TransportServiceReservations')
              .then((response) => response.json())
              .then((json) => setData1111(json))
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
  
    // eventinfo  &&  eventinfo.filter((word)=>eventId.indexOf(word)).map((Aname,i)
   eventinfo  &&  eventinfo.filter((word)=>word.id===eventId[5]).map((Aname,i)=>{
  return(
      <Showmoreevents
        
      key={i}
      eventname={Aname.name} 
       
      />
  );
  })  
  
  )
};
 
console.log(eventId)
                
data11 && data11.filter(person=>person.userID===route.params.Name ).map(
                      (Aname,i)=>{
                          return(
                      
                      Gid[i]=Aname.tourGuideServiceID
                      )}) 
const result1 = guideinfo && guideinfo.filter(word => word.id === Gid );

data111 && data111.filter(person=>person.userID===route.params.Name ).map(
                   (Aname)=>{
                              
                      return( 
                              checkInDate2=Aname.checkIn,
                              checkOutDate2=Aname.checkOut,
                              price2=Aname.price,
                              Noofrooms=Aname.noOfRooms,
                              Roomtype=Aname.roomType,
                              nooftravellers=Aname.noOfTravellers,
                              hotelNameid=Aname.hotelsServiceID
                                                            
                   )}) 








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
                                                                                          
                                                                                          
       checkInDate1=Aname.checkIn,
       checkOutDate1=Aname.checkOut,
       price1=Aname.price,
       vehicle=Aname.vehicleType,
       pickup=Aname.pickUpLocation,
       drop=Aname.dropOffLocation,
       notrav=Aname.numOfTravellers,
       trnsportId=Aname.trnsportId
                                                                                          
   )}) 
                                  
  function getDiscription(discription){
    return(
            console.log(discription)
    )
  }

  function Showmoreevents(props){
    return(
            <View>
            <CollapsibleCard
                title="History"
                style={styles.Rcardtext}
                >
                <View style={{ padding: 8 }}>
                <Text style={styles.paragraph}>{props.checkInDate21}</Text>

                <Text style={styles.paragraph}>{props.eventname}</Text>
                </View>
             </CollapsibleCard>
             </View>
    )
  }

  function selection(input){

    if(input==='Hotels'){
      return( console.log('a'))
    }
    if(input==='Transport'){
      return( console.log('ff'))
    }
    if(input==='Guide'){
      return( console.log('fff'))
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
               <View style={[styles.Rcardstylet]}>
                <Text style={styles.Rcardtext}>CheckInDate:   {props.checkInDate}</Text>
               </View>
               <View style={[styles.Rcardstylet]}>
               <Text style={styles.Rcardtext}>CheckOutDate:  {props.checkOutDate}</Text>
               </View>
               <View style={styles.Rcardstylet}>
                <Text style={styles.Rcardtext}>Price:  {props.price}</Text>  
               </View>
               <View style={[styles.Rcardstylet]}>
                <Text style={styles.Rcardtext}>{props.discription}</Text>
               </View>
                <View>
                  {selection(props.Title)}
                
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
           checkInDate={checkInDate2}
           checkOutDate={checkOutDate2} 
           price={price2}
           discription={` No Of Rooms :${ Noofrooms} \n Room Type: ${Roomtype} \n No Of Travellers: ${nooftravellers}`}/>
        </View>
        <View style={{padding:10}}>
           <RCard icon='cab' Title='Transport'
                  checkInDate={checkInDate1}
                  checkOutDate={checkOutDate1} 
                  price={price1}
                  discription={` Vehicle :  ${vehicle} \n No Travellers :${notrav} \n Pickup at: ${pickup} \n Drop Off at: ${drop}`}/>
          
           
        </View>
        <View style={{padding:10}}>
           <RCard icon='male' Title='Guide' 
           checkInDate={checkInDate3}
           checkOutDate={checkOutDate3} 
            price={price3}
            // discription={` Guide :  ${NameG}`}
            />
        </View>
        <View style={{padding:10}}>
           <RCard icon='grav' Title='Event' 
           checkInDate={checkInDate4}
            checkOutDate={checkOutDate4} 
             price={price4}
             discription={`Events:  ${eventtype}`}
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
  padding:5 ,
  fontSize:18,
  color: 'black'
},
Rcardstylet:{
  padding:10,
  backgroundColor:'white',
  borderRadius: 10
}

});
