// In App.js in a new project


import * as React from "react";
import * as firebase from "firebase";
import { View, Text, Button,LogBox } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import RootStackScreen from "./Screens/StackScreens/RootStackScreen";
import { ActivityIndicator } from "react-native-paper";
import AuthContext from "./components/context";

import SupportScreen from "./Screens/SupportScreen";

import DrawerContent from "./Screens/DrawerContent";
import DrawerContent1 from "./Screens/DrawerContent1";
import AsyncStorage from "@react-native-async-storage/async-storage";
import HomeStackScreen from "./Screens/StackScreens/HomeStackScreen";
import DetailsStackScreen from "./Screens/StackScreens/DetailStackScreen";
import PaymentStackScreen from "./Screens/StackScreens/paymentStackScreen";
import MorePaymentStackScreen from "./Screens/StackScreens/MorepaymentStackScreen";
import ReservationStackScreen from "./Screens/StackScreens/ReservationStackScreen";
import ServiceStackScreen from "./Screens/StackScreens/ServiceStackScreen";
import * as Notifications from "expo-notifications";
import * as Permissions from "expo-permissions";
import morepaymentDetails from "./Screens/morepaymentDetails"
const Drawer = createDrawerNavigator();
LogBox.ignoreLogs(['Setting a timer']);

Notifications.setNotificationHandler({
  handleNotification: async () => {
    return {
      shouldShowAlert: true,
    };
  },
});

// const [firebaseState,setFirebaseState]=React.useState({dataSource: new ListView.DataSource({
//   rowHasChanged: (row1, row2) => row1 !== row2,
// })})

const firebaseConfig = {
  apiKey: "AIzaSyBUqsaZQSoV67VgFkpozKHJfgD7OLeaXyE",
    authDomain: "vvisit-d6347.firebaseapp.com",
    databaseURL: "https://vvisit-d6347-default-rtdb.firebaseio.com",
    projectId: "vvisit-d6347",
    storageBucket: "vvisit-d6347.appspot.com",
};
firebase.initializeApp(firebaseConfig);

function setcusData(userId, pushToken) {
  firebase
    .database()
    .ref("users/" + userId)
    .set({
      UserId: userId,
      pushToken: pushToken,
      paymentD: 0,
      services: "null",
    });
}

function setSerData(userId, pushToken) {
  firebase
    .database()
    .ref("users/" + userId)
    .set({
      UserId: userId,
      pushToken: pushToken,
      paymentD: 0,
      servicesgranted: "null",
    });
}



function AppContainer() {
  let pushToken;
  const [tokenState, setTokenState] = React.useState("a");
  const [data1, setData1] = React.useState([]);
  

  const getData = (tokenState1) => {
    firebase
      .database()
      .ref(`users/${tokenState1}`)
      .on("value", function (snapshot) {
        setData1(snapshot.val());
      });
  };
  console.log(data1);
  React.useEffect(() => {
    setTimeout(() => {
      getData(tokenState);
      console.log("menname ka", pushToken);
    }, 1000);
  }, []);

  async function sendPushNotification(expoPushToken) {
    const message = {
      to: expoPushToken,
      sound: "default",
      title: "New Massage",
      body: "Your message body",
      data: { someData: "goes here" },
    };

    await fetch("https://exp.host/--/api/v2/push/send", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Accept-encoding": "gzip, deflate",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(message),
    });
  }

  React.useEffect(() => {
    Permissions.getAsync(Permissions.NOTIFICATIONS)
      .then((statusObj) => {
        if (statusObj.status !== "granted") {
          return Permissions.askAsync(Permissions.NOTIFICATIONS);
        }
        return statusObj;
      })
      .then((statusObj) => {
        if (statusObj.status !== "granted") {
          throw new Error("permission not granted");
        }
      })
      .then(() => {
        console.log("getting token");
        return Notifications.getExpoPushTokenAsync();
      })
      .then((response) => {
        const token = response.data;
        console.log("token: " + token);
        pushToken = token;
      })
      .catch((err) => {
        return null;
      });
  }, []);

  React.useEffect(() => {
    const backgroundSubcription = Notifications.addNotificationResponseReceivedListener(
      (response) => {
        console.log(response);
      }
    );

    const foregroundsubscription = Notifications.addNotificationReceivedListener(
      (notification) => {
        console.log(notification);
      }
    );
    return () => {
      foregroundsubscription.remove();
      backgroundSubcription.remove();
    };
  }, []);

  const triggerNotificationHandler = () => {
    // Notifications.scheduleNotificationAsync({
    //   content: {
    //     title: "My first local notification",
    //     body: "this is the first local notification ",
    //   },
    //   trigger: {
    //     seconds: 10,
    //   },
    // });
  };
  // const [isLoading,setIsLoading]=React.useState(true);
  // const [userToken,setUserToken]=React.useState(null);

  // const [isLoading, setLoading] = React.useState(true);

  const initialLoginState = {
    isLoading: true,
    userName: null,
    userToken: null,
    role: null,
  };

  const [roleState, setroleState] = React.useState(null);

  const loginReducer = (prevState, action) => {
    switch (action.type) {
      case "RETRIVE_TOKEN":
        return {
          ...prevState,
          userToken: action.token,
          isLoading: false,
        };
      case "LOGIN":
        return {
          ...prevState,
          userName: action.id,
          userToken: action.token,
          isLoading: false,
        };
      case "LOGOUT":
        return {
          ...prevState,
          userName: null,
          userToken: null,
          isLoading: false,
        };
      case "REGISTER":
        return {
          ...prevState,
          userName: action.id,
          userToken: action.token,
          isLoading: false,
        };
    }
  };
  const [loginState, dispatch] = React.useReducer(
    loginReducer,
    initialLoginState
  );

  const authContext = React.useMemo(
    () => ({
      signIn: async (condition, token, role) => {
        setTokenState(token);
        setroleState(role);
        let userToken;
        userToken = null;
        //  for(i;i<10;i++){
        //    if(userName===data1[i].id){

        //      break;
        //    }
        //    else continue;
        //  }
        //  console.log('user name',data1[0].id)
        //  console.log('pass',data1[0].releaseYear)

        if (condition == true) {
          if (role == "Customer") {
            setcusData(token, pushToken);
          } else {
            setSerData(token, pushToken);
          }

          try {
            userToken = "fksjf";
            await AsyncStorage.setItem("userToken", userToken);
          } catch (e) {
            console.log(e);
          }
        }

        dispatch({ type: "LOGIN", token: userToken });
      },
      signOut: async () => {
        // setUserToken(null);
        // setIsLoading(false);
        try {
          await AsyncStorage.removeItem("userToken");
        } catch (e) {
          console.log(e);
        }
        dispatch({ type: "LOGOUT" });
      },
      signUp: () => {
        //setUserToken('fksjf');
        // setIsLoading(false);
      },
    }),
    []
  );
  React.useEffect(() => {
    setTimeout(async () => {
      // setIsLoading(false);
      let userToken;
      userToken = null;
      try {
        userToken = await AsyncStorage.getItem("userToken");
      } catch (e) {
        console.log(e);
      }

      dispatch({ type: "REGISTER", token: userToken });
    }, 1000);
  }, []);

  if (loginState.isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  return (
    <AuthContext.Provider value={authContext}>
      <NavigationContainer>
        {loginState.userToken !== null ? (
          roleState === "Customer" ? (
            <Drawer.Navigator
              drawerContent={(props) => <DrawerContent {...props} /> } initialRouteName="HomeDrawer"
            >
              <Drawer.Screen name="HomeDrawer" component={HomeStackScreen} />
              <Drawer.Screen
                name="userDetails"
                component={DetailsStackScreen}
                initialParams={{ Name: tokenState }}
              />
             
              <Drawer.Screen
                name="reservation"
                component={ReservationStackScreen}
                initialParams={{ Name: tokenState }}
              />
              <Drawer.Screen
                name="Payments"
                component={PaymentStackScreen}
                initialParams={{ Name: tokenState }}
              />

              <Drawer.Screen
                name="morePayments"
                component={morepaymentDetails}
               
              />

              <Drawer.Screen name="SupportScreen" component={SupportScreen} />
            </Drawer.Navigator>
          ) : (
            <Drawer.Navigator
              drawerContent={(props) => <DrawerContent1 {...props} />} initialRouteName="HomeDrawer"
            >
              <Drawer.Screen
                name="userDetails"
                component={DetailsStackScreen}
                initialParams={{ Name: tokenState }}
              />
              <Drawer.Screen name="HomeDrawer" component={HomeStackScreen} />
              <Drawer.Screen
                name="Services"
                component={ServiceStackScreen}
                initialParams={{ Name: tokenState }}
              />
               <Drawer.Screen
                name="reservation"
                component={ReservationStackScreen}
                initialParams={{ Name: tokenState }}
              />
              <Drawer.Screen
                name="Payments"
                component={PaymentStackScreen}
                initialParams={{ Name: tokenState }}
              />

              <Drawer.Screen
                name="morePayments"
                component={morepaymentDetails}
              
              />

               

              <Drawer.Screen name="SupportScreen" component={SupportScreen} />
            </Drawer.Navigator>
          )
        ) : (
          <RootStackScreen />
        )}
      </NavigationContainer>
    </AuthContext.Provider>
  );
}

export default AppContainer;
