import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  ImageBackground,
  ScrollView,
} from 'react-native';

import { FontAwesome, Feather } from 'react-native-vector-icons';

 function MorepaymentDetails({ route, navigation }) {

 let paymentId=route.params.Name;

 

 let nameg;
 let priceg;
 let lang;
 let dateg;

 const [paymentList, setPaymentList] = React.useState([]);
 React.useEffect(() => {
   fetch(
     "https://alphax-api.azurewebsites.net/api/tourguideservicereservations" 
     
   )
     .then((res) => res.json())
     .then((data) => {
       setPaymentList(data);
     });
 }, []);

 paymentList && paymentList.filter((word) => paymentId == word.paymentID)
    .map((Aname, i) => {
       nameg=Aname.tourGuideService.name
       priceg=Aname.tourGuideService.costPerDay
       lang = Aname.tourGuideService.language
       dateg=Aname.tourGuideService.checkIn
    })

    
  

  return (
    <View style={styles.container}>
      <View style={styles.paymentcard}>
        <ImageBackground style={styles.pyc} source={require('../assets/BG.png')}>
          <View style={styles.gift}>
            <FontAwesome name="gift" color="white" size={40} />
          </View>
          <View style={styles.paymenttext}>
            <Text style={styles.ptext}> Payments </Text>
          </View>
          <View style={styles.paymenttext}>
            <Text style={styles.ptext}>{paymentId} </Text>
          </View>
        </ImageBackground>
      </View>

      <View style={styles.footercard}>
        <ScrollView>
          <View style={styles.guidecard}>
            <View style={styles.typename}>
              <View style={styles.type}>
                <Text style={styles.ptext}> Guide </Text>
              </View>
              <View style={styles.name}>
                <Text style={styles.ptext}> {nameg} </Text>
              </View>
            </View>
            <View style={{ flexDirection: 'row' }}>
              <View style={styles.iconbox}>
                <Image
                  style={{ width: 16, height: 16, marginTop: 10 }}
                  source={require('../assets/muna.png')}
                />
              </View>
              <View>
                <View style={{ flexDirection: 'row' }}>
                  <View style={styles.colordot}></View>
                  <View style={styles.datetext}>
                    <Text style={styles.ptext}> Date:{dateg} </Text>
                  </View>
                </View>
                <View style={{ flexDirection: 'row' }}>
                  <View style={styles.colordot1}></View>
                  <View style={styles.datetext}>
                    <Text style={styles.ptext}> Lang:{lang} </Text>
                  </View>
                </View>
              </View>
            </View>
            <View style={styles.pricebox}>
              <View style={styles.priceboxtext}>
                <Text style={styles.pbtext}> {priceg} </Text>
              </View>
            </View>
          </View>
          <View style={styles.guidecard}>
            <View style={styles.typename}>
              <View style={styles.type}>
                <Text style={styles.ptext}> Transport </Text>
              </View>
              <View style={styles.name}>
                <Text style={styles.ptext}> uber </Text>
              </View>
            </View>
            <View style={{ flexDirection: 'row' }}>
              <View style={styles.iconbox1}>
                <Image
                  style={{ width: 30, height: 20, marginTop: 10 }}
                  source={require('../assets/kisspng-sports-car-cartoon-vector-cartoon-car-5a8353bed26d71.9818798415185560948619.png')}
                />
              </View>
              <View>
                <View style={{ flexDirection: 'row' }}>
                  <View style={styles.colordot}></View>
                  <View style={styles.datetext}>
                    <Text style={styles.ptext}> Date: </Text>
                  </View>
                </View>
                <View style={{ flexDirection: 'row' }}>
                  <View style={styles.colordot1}></View>
                  <View style={styles.datetext}>
                    <Text style={styles.ptext}> trav: </Text>
                  </View>
                </View>
              </View>
            </View>
            <View style={styles.priceboxtrans}>
              <View style={styles.priceboxtext}>
                <Text style={styles.pbtext}> $pric </Text>
              </View>
            </View>
          </View>
          <View style={styles.guidecard}>
            <View style={styles.typename}>
              <View style={styles.type}>
                <Text style={styles.ptext}> Hotels </Text>
              </View>
              <View style={styles.name}>
                <Text style={styles.ptext}> shangila</Text>
              </View>
            </View>
            <View style={{ flexDirection: 'row' }}>
              <View style={styles.iconbox}>
                <Image
                  style={{ width: 30, height: 25, marginTop: 10 }}
                  source={require('../assets/kisspng-coconut-water-travel-shading-borders-shading-template-download-shading-5a7432ab61d2d0.1644699015175645874007.png')}
                />
              </View>
              <View>
                <View style={{ flexDirection: 'row' }}>
                  <View style={styles.colordot}></View>
                  <View style={styles.datetext}>
                    <Text style={styles.ptext}> Date: </Text>
                  </View>
                </View>
                <View style={{ flexDirection: 'row' }}>
                  <View style={styles.colordot1}></View>
                  <View style={styles.datetext}>
                    <Text style={styles.ptext}> trav: </Text>
                  </View>
                </View>
              </View>
            </View>
            <View style={styles.pricebox}>
              <View style={styles.priceboxtext}>
                <Text style={styles.pbtext}> $pric </Text>
              </View>
            </View>
          </View>
          <View style={styles.guidecard}>
            <View style={styles.typename}>
              <View style={styles.type}>
                <Text style={styles.ptext}> Events </Text>
              </View>
              <View style={styles.name}>
                <Text style={styles.ptext}> eventName </Text>
              </View>
            </View>
            <View style={{ flexDirection: 'row' }}>
              <View style={styles.iconbox1}>
                <Image
                  style={{ width: 30, height: 30, marginTop: 10 }}
                  source={require('../assets/kisspng-balloon-birthday-clip-art-5afaac6b724372.767997861526377579468.png')}
                />
              </View>
              <View>
                <View style={{ flexDirection: 'row' }}>
                  <View style={styles.colordot}></View>
                  <View style={styles.datetext}>
                    <Text style={styles.ptext}> Date: </Text>
                  </View>
                </View>
                <View style={{ flexDirection: 'row' }}>
                  <View style={styles.colordot1}></View>
                  <View style={styles.datetext}>
                    <Text style={styles.ptext}> Lang: </Text>
                  </View>
                </View>
              </View>
            </View>
            <View style={styles.priceboxtrans}>
              <View style={styles.priceboxtext}>
                <Text style={styles.pbtext}> $pric </Text>
              </View>
            </View>
          </View>
          <View style={{ height: 90, width: 30 }}></View>
        </ScrollView>
      </View>
    </View>
  );
}

export default  MorepaymentDetails;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#22343C',
    alignItems: 'center',
  },
  pyc: {
    width: 370,
    height: 142,
    marginTop: 58,
    alignItems: 'center',
  },

  gift: {
    marginTop: 23.54,
  },
  paymenttext: {
    marginTop: 10,
  },
  ptext: {
    color: 'white',
    fontSize: 16,
  },
  footercard: {
    marginTop: 24,
    backgroundColor: '#2A3C44',
    width: 411,
    height: '75%',
    borderTopEndRadius: 25,
    borderTopLeftRadius: 25,
    alignItems: 'center',
  },
  guidecard: {
    width: 370,
    height: 142,
    backgroundColor: '#30444E',
    borderRadius: 20,
    marginTop: 46,
  },
  typename: {
    flexDirection: 'row',
  },
  type: {
    marginTop: 10,
    marginLeft: 23,
  },
  name: {
    marginTop: 10,
    marginLeft: 80,
  },
  iconbox: {
    width: 42,
    height: 42,
    marginLeft: 25,
    marginTop: 20,
    backgroundColor: '#3ED598',
    borderRadius: 32.5,
    alignItems: 'center',
  },
  iconbox1: {
    width: 42,
    height: 42,
    marginLeft: 25,
    marginTop: 20,
    backgroundColor: '#FFC542',
    borderRadius: 32.5,
    alignItems: 'center',
  },
  colordot: {
    width: 16.4,
    height: 9,
    backgroundColor: '#FFC542',
    borderRadius: 6,
    marginLeft: 31,
    marginTop: 20,
  },
  colordot1: {
    width: 16.4,
    height: 9,
    backgroundColor: '#FF575F',
    borderRadius: 6,
    marginLeft: 31,
    marginTop: 20,
  },
  datetext: {
    marginLeft: 25.58,
    marginTop: 10,
  },
  pricebox: {
    width: 73,
    height: 49,
    backgroundColor: '#FFC542',
    borderRadius: 24,
    marginLeft: 295,
  },
  priceboxtrans: {
    width: 73,
    height: 49,
    backgroundColor: '#FF575F',
    borderRadius: 24,
    marginLeft: 295,
  },
  priceboxtext: {
    alignItems: 'center',
    marginTop: 14,
  },
  pbtext: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
  },
});
