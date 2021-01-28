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
    <View style={{ flex: 2}}>
      <DrawerContentScrollView {...props} >
        <View style={styles.drawerContent}>
          <View style={styles.userInfoSection}>
            <View>
              <Image
                source={require("../assets/Group17.png")}
                Style={{ width: 189, height: 18 }}
              />
            </View>
          </View>

          <Drawer.Section style={styles.drawerSection}>
            <DrawerItem
              style={styles.homelabel}
              icon={({ color, size }) => (
                <Icon name="home-outline" color={"#777777"} size={30} />
              )}
              label="        Home"
              onPress={() => {
                props.navigation.navigate("HomeDrawer");
              }}
            />
            <DrawerItem
              style={styles.homelabel}
              icon={({ color, size }) => (
                <Icon name="account-outline" color={"#777777"} size={30} />
              )}
              label="        Profile"
              onPress={() => {
                props.navigation.navigate("userDetails");
              }}
            />
            <DrawerItem
              style={styles.homelabel}
              icon={({ color, size }) => (
                <Icon name="bookmark-outline" color={"#777777"} size={30} />
              )}
              label="        Reservation"
              onPress={() => {
                props.navigation.navigate("reservation");
              }}
            />
            <DrawerItem
              style={styles.homelabel}
              icon={({ color, size }) => (
                <Icon name="settings-outline" color={"#777777"} size={30} />
              )}
              label="        settings"
              onPress={() => {
                props.navigation.navigate("SettingsScreen");
              }}
            />
            <DrawerItem
              style={styles.homelabel}
              icon={({ color, size }) => (
                <Icon name="account-check-outline" color={"#777777"} size={30} />
              )}
              label="        Support"
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
    flex: 0.5,
  },
  bottombutton:{
    width: 198,
    height: 40,
    backgroundColor:'#174D36',
    borderRadius:13,
  },
  homelabel: {
    width: 198,
    height: 40,
    borderColor: "#777777",
    borderWidth: 1,
    marginTop: 3,
    borderRadius: 29,
  },
  userInfoSection: {
    paddingLeft: 0,
    paddingTop: 0,
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
    marginBottom: 15,
    borderTopColor: "#f4f4f4",
    borderTopWidth: 1,
  },
  preference: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
});



// import React from "react";
// import { View, StyleSheet, Image, ImageBackground } from "react-native";
// import {
//   useTheme,
//   Title,
//   Caption,
//   Paragraph,
//   Drawer,
//   Text,
//   TouchableRipple,
//   Switch,
// } from "react-native-paper";
// import { DrawerContentScrollView, DrawerItem } from "@react-navigation/drawer";
// import AuthContext from "../components/context";

// import Icon from "react-native-vector-icons/MaterialCommunityIcons";

// function DrawerContent(props) {
//   const { signOut } = React.useContext(AuthContext);

//   const paperTheme = useTheme();

//   return (
//     <View style={{ flex: 1 }}>
//       <DrawerContentScrollView {...props}>
//         <View style={styles.drawerContent}>
//           <View style={styles.userInfoSection}>
//             <View>
//               <Image
//                 source={require("../assets/Group17.png")}
//                 borderWidth={0}
//                 resizeMode="contain"
//                 style={{ padding: 0 }}
//               />
//             </View>
//           </View>

//           <Drawer.Section style={styles.drawerSection}>
//             <DrawerItem
//               icon={({ color, size }) => (
//                 <Icon name="home-outline" color={"black"} size={30} />
//               )}
//               label="Home"
//               onPress={() => {
//                 props.navigation.navigate("HomeDrawer");
//               }}
//             />
//             <DrawerItem
//               icon={({ color, size }) => (
//                 <Icon name="account-outline" color={"black"} size={30} />
//               )}
//               label="Profile"
//               onPress={() => {
//                 props.navigation.navigate("userDetails");
//               }}
//             />
//             <DrawerItem
//               icon={({ color, size }) => (
//                 <Icon name="bookmark-outline" color={"black"} size={30} />
//               )}
//               label="Reservations"
//               onPress={() => {
//                 props.navigation.navigate("reservation");
//               }}
//             />
//             <DrawerItem
//               icon={({ color, size }) => (
//                 <Icon name="settings-outline" color={"black"} size={30} />
//               )}
//               label="Settings"
//               onPress={() => {
//                 props.navigation.navigate("SettingsScreen");
//               }}
//             />
//             <DrawerItem
//               icon={({ color, size }) => (
//                 <Icon name="account-check-outline" color={"black"} size={30} />
//               )}
//               label="Support"
//               onPress={() => {
//                 props.navigation.navigate("SupportScreen");
//               }}
//             />
//           </Drawer.Section>
//         </View>
//       </DrawerContentScrollView>
//       <Drawer.Section style={styles.bottomDrawerSection}>
//         <DrawerItem
//           icon={({ color, size }) => (
//             <Icon name="exit-to-app" color={color} size={30} />
//           )}
//           label="Sign Out"
//           onPress={() => {
//             signOut();
//           }}
//         />
//       </Drawer.Section>
//     </View>
//   );
// }
// export default DrawerContent;
// const styles = StyleSheet.create({
//   drawerContent: {
//     flex: 0.5,
//   },
//   userInfoSection: {},
//   title: {
//     fontSize: 16,
//     marginTop: 3,
//     fontWeight: "bold",
//   },
//   caption: {
//     fontSize: 14,
//     lineHeight: 14,
//   },
//   row: {
//     marginTop: 20,
//     flexDirection: "row",
//     alignItems: "center",
//   },
//   section: {
//     flexDirection: "row",
//     alignItems: "center",
//     marginRight: 15,
//   },
//   paragraph: {
//     fontWeight: "bold",
//     marginRight: 3,
//   },
//   drawerSection: {
//     marginTop: 15,
//   },
//   bottomDrawerSection: {
//     marginBottom: 15,
//     borderTopColor: "#f4f4f4",
//     borderTopWidth: 1,
//   },
//   preference: {
//     flexDirection: "row",
//     justifyContent: "space-between",
//     paddingVertical: 12,
//     paddingHorizontal: 16,
//   },
// });
