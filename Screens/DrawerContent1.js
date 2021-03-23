import React from "react";
import { View, StyleSheet, Image } from "react-native";
import {
  useTheme,
  Title,
  Caption,
  Paragraph,
  Drawer,
  Text,
  TouchableRipple,
  Switch,
} from "react-native-paper";
import { DrawerContentScrollView, DrawerItem } from "@react-navigation/drawer";
import AuthContext from "../components/context";

import Icon from "react-native-vector-icons/MaterialCommunityIcons";

function DrawerContent1(props) {
  const { signOut } = React.useContext(AuthContext);

  const paperTheme = useTheme();

  return (
    <View style={{ flex: 1, backgroundColor: "#22343C"}}>
      <DrawerContentScrollView {...props} >
        <View style={styles.drawerContent}>
          <View style={styles.userInfoSection}>
            <View>
              <Image
                source={require("../assets/aliya.png")}
                style={{ width: 68, height:68,marginTop:70,marginLeft:15}}
              />
              <View style={{marginTop:10,marginLeft:15}}>
                <Text style={{fontSize:24,color: 'white',fontWeight: 'bold'}}>Vvisit</Text>
              </View>
            </View>
          </View>

          <Drawer.Section style={styles.drawerSection}>
            <DrawerItem
              style={styles.homelabel}
              icon={({ color, size }) => (
                <Icon name="home-outline" color={"#96A7AF"} size={30} />
              )}
              label="Home"
              labelStyle={{fontSize:20,color: 'white',fontWeight: 'bold'}}
              onPress={() => {
                props.navigation.navigate("HomeDrawer");
              }}
            />
            <DrawerItem
              style={styles.homelabel}
              icon={({ color, size }) => (
                <Icon name="account-outline" color={"#96A7AF"} size={30} />
              )}
              label="Profile"
              labelStyle={{fontSize:20,color: 'white',fontWeight: 'bold'}}
              onPress={() => {
                props.navigation.navigate("userDetails");
              }}
            />
            <DrawerItem
              style={styles.homelabel}
              icon={({ color, size }) => (
                <Icon name="bookmark-outline" color={"#96A7AF"} size={30} />
              )}
              label="Services"
              labelStyle={{fontSize:20,color: 'white',fontWeight: 'bold'}}
              onPress={() => {
                props.navigation.navigate("Services");
              }}
            />
            <DrawerItem
              style={styles.homelabel}
              icon={({ color, size }) => (
                <Icon name="settings-outline" color={"#96A7AF"} size={30} />
              )}
              label="Payments"
              labelStyle={{fontSize:20,color: 'white',fontWeight: 'bold'}}
              onPress={() => {
                props.navigation.navigate("Payments");
              }}
            />
            <DrawerItem
              style={styles.homelabel}
              icon={({ color, size }) => (
                <Icon name="account-check-outline" color={"#96A7AF"} size={30} />
              )}
              label="Support"
              labelStyle={{fontSize:20,color: 'white',fontWeight: 'bold'}}
              onPress={() => {
                props.navigation.navigate("SupportScreen");
              }}
            />
            
          </Drawer.Section>
        </View>
      </DrawerContentScrollView>
      <Drawer.Section style={styles.bottomDrawerSection}>
        <DrawerItem style={styles.bottombutton}
          icon={({ color, size }) => (
            <Icon name="exit-to-app" color='white' size={30} />
          )}
          label="Sign Out" color="white"
          onPress={() => {
            signOut();
          }}
        />
      </Drawer.Section>
    </View>
  );
}
export default DrawerContent1;
const styles = StyleSheet.create({
  drawerContent: {
    flex: 1,
    backgroundColor:"#22343C"
  },
  bottombutton:{
    width: 198,
    height: 40,
    backgroundColor:'#40DF9F',
    borderRadius:13,
  },
  homelabel: {
    width: 198,
    height: 40,
    fontSize:24,
   
    marginTop: 3,
    
  },
  userInfoSection: {
    paddingLeft: 0,
    paddingTop: 0,
    backgroundColor:"#22343C"
  },
  title: {
    fontSize: 16,
    marginTop: 3,
    fontWeight: "bold",
  },
  caption: {
    fontSize: 14,
    lineHeight: 14,
  },
  row: {
    marginTop: 20,
    flexDirection: "row",
    alignItems: "center",
  },
  section: {
    flexDirection: "row",
    alignItems: "center",
    marginRight: 15,
  },
  paragraph: {
    fontWeight: "bold",
    marginRight: 3,
  },
  drawerSection: {
    marginTop: 15,
  },
  bottomDrawerSection: {
    
    backgroundColor: "#22343C",
    
  },
  preference: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
});
