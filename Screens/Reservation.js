import * as React from 'react';
import { View, Text,  StyleSheet,ScrollView ,Image} from 'react-native';
import { Card, ListItem, Button, Icon } from 'react-native-elements'
import {FontAwesome,Feather} from 'react-native-vector-icons';



const ReservationScreen = ({ route, navigation }) => {

  const [data1, setData1] = React.useState([]);
  let checkInDate4=''; 
  let checkOutDate4='';
  let price4='';
  let eventtype='';
  React.useEffect(() => {
    fetch('https://run.mocky.io/v3/6541a298-8af0-4ee5-885d-bd592317d6c0')
      .then((response) => response.json())
      .then((json) => setData1(json))
      .catch((error) => console.error(error))
      
  }, []);
  data1 && data1.filter(
    person=>person.uid===route.params.Name ).map(
        (Aname)=>{
            return(
                
                
                checkInDate4=Aname.checkInDate,
                checkOutDate4=Aname.checkOutDate,
                price4=Aname.price,
                eventtype=Aname.eventtype
                )}) 

const [data11, setData11] = React.useState([]);
let checkInDate3=''; 
 let checkOutDate3='';
let price3='';
let NameG='';
React.useEffect(() => {
  fetch('https://run.mocky.io/v3/fd5fe704-a42b-41e2-ac28-75488c55c5e5')
                    .then((response) => response.json())
                    .then((json) => setData11(json))
                    .catch((error) => console.error(error))
                    
                }, []);
                data11 && data11.filter(
                  person=>person.uid===route.params.Name ).map(
                      (Aname)=>{
                          return(
                              
                              
                              checkInDate3=Aname.checkInDate,
                              checkOutDate3=Aname.checkOutDate,
                              price3=Aname.price,
                              NameG=Aname.guideName
                              )}) 

                              const [data111, setData111] = React.useState([]);
                              let checkInDate2=''; 
                               let checkOutDate2='';
                              let price2='';
                              let Noofrooms='';
                              let Roomtype='';
                              let nooftravellers='';
                              let hotelName='';
                              React.useEffect(() => {
                                fetch('https://run.mocky.io/v3/93acd6ff-6391-46f0-a734-9e4d468351ea')
                                                  .then((response) => response.json())
                                                  .then((json) => setData111(json))
                                                  .catch((error) => console.error(error))
                                                  
                                              }, []);
                                              data111 && data111.filter(
                                                person=>person.uid===route.params.Name ).map(
                                                    (Aname)=>{
                                                        return(
                                                            
                                                            
                                                            checkInDate2=Aname.checkInDate,
                                                            checkOutDate2=Aname.checkOutDate,
                                                            price2=Aname.price,
                                                            Noofrooms=Aname.noOfRooms,
                                                            Roomtype=Aname.roomType,
                                                            nooftravellers=Aname.noOfTravellers,
                                                            hotelName=Aname.hotelName
                                                            
                                                            )}) 
                                                            const [data1111, setData1111] = React.useState([]);
                                                            let checkInDate1=''; 
                                                             let checkOutDate1='';
                                                            let price1='';
                                                            let vehicle='';
                                                            let pickup='';
                                                            let drop='';
                                                            let notrav='';
                                                            React.useEffect(() => {
                                                              fetch('https://run.mocky.io/v3/dc29ebec-fa25-4c53-bcce-01e9143b7576')
                                                                                .then((response) => response.json())
                                                                                .then((json) => setData1111(json))
                                                                                .catch((error) => console.error(error))
                                                                                
                                                                            }, []);
                                                                            data1111 && data1111.filter(
                                                                              person=>person.uid===route.params.Name ).map(
                                                                                  (Aname)=>{
                                                                                      return(
                                                                                          
                                                                                          
                                                                                          checkInDate1=Aname.checkInDate,
                                                                                          checkOutDate1=Aname.checkOutDate,
                                                                                          price1=Aname.price,
                                                                                          vehicle=Aname.vehicleType,
                                                                                          pickup=Aname.pickupLocation,
                                                                                          drop=Aname.dropOffLocation,
                                                                                          notrav=Aname.numOfTravellers
                                                                                          
                                                                                          )}) 
                                  
  function getDiscription(discription){
    return(
            console.log(discription)
    )
  }
 console.log(Roomtype)
  function RCard(props){
    return (
      <View style={styles.container}>
        <View style={styles.footer}>
        <View style={styles.text_detail}>
          <View style={{alignItems: 'center'}}>
             <FontAwesome name={props.icon} color="black" size={45}/>
             <Text style={[styles.text_footer,{fontSize:30}]}>{props.Title}</Text>
          </View>
          <Text style={{padding:5}}>CheckInDate:   {props.checkInDate}</Text>
          <Text style={{padding:5}}>CheckOutDate:  {props.checkOutDate}</Text>
          <Text style={{padding:5}}>Price:  {props.price}</Text>  
             <Text style={styles.text_footer}>{props.discription}</Text>
            
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
           discription={` Hotel :  ${hotelName} \n No Of Rooms :${ Noofrooms} \n Room Type: ${Roomtype} \n No Of Travellers: ${nooftravellers}`}/>
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
            discription={` Guide :  ${NameG}`}
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
}

});
