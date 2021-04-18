import * as React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Platform,
  Image,
  StyleSheet,
  ImageBackground,
  StatusBar,
  Alert,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { LinearGradient } from "expo-linear-gradient";
import * as Animatable from "react-native-animatable";
import { FontAwesome, Feather } from "react-native-vector-icons";
import AuthContext from "../components/context";
import DetailsScreen from "./DetailsScreen";

import "react-native-gesture-handler";

const SignInScreen = ({ navigation }) => {
  const [data1, setData1] = React.useState([]);

  React.useEffect(() => {
    fetch("https://alphax-api.azurewebsites.net/api/users")
      .then((response) => response.json())
      .then((json) => setData1(json))
      .catch((error) => console.error(error));
  }, []);

  const _storeData = async () => {
    try {
      await AsyncStorage.setItem(data1);
    } catch (error) {
      // Error saving data
    }
  };

  const [data, setData] = React.useState({
    userName: "",
    password: "",
    check_textInputChange: false,
    secureTextEntry: true,
    condition: null,
  });

  const { signIn } = React.useContext(AuthContext);


 

  const textInputChange = (val) => {

    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (reg.test(val) === false) {
      console.log("Email is Not Correct");
      setData({
        ...data,
        userName: val,
        check_textInputChange:false,
      });
      return false;
    }
    else {
      setData({
        ...data,
        emal: val,
        check_textInputChange: true,
      });
      console.log("Email is Correct");
    }
    // if (val.length !== 0) {
    //   setData({
    //     ...data,
    //     userName: val,
    //     check_textInputChange: true,
    //   });
    // } else {
    //   setData({
    //     ...data,
    //     emal: val,
    //     check_textInputChange: false,
    //   });
    // }
  };
  const handlePasswordChange = (val) => {
    setData({
      ...data,
      password: val,
    });
  };

  const updateSecureTextEntry = () => {
    setData({
      ...data,
      secureTextEntry: !data.secureTextEntry,
    });
  };
  const call = () => {
    return data1;
  };
  let condition;
  let i = 0;
  let status = false;
  let person_role = "abc";
  const loginHandle = (userName, password) => {
    return (
      data1 &&
      data1
        .filter(
          (person) => person.email === userName && person.password === password
        )
        .map((Aname) => {
          return (
            signIn(true, Aname.id, Aname.role),
            (status = true),
            (person_role = Aname.role)
          );
        })

      // condition = true;
    );
  };

  const check = () => {
    if (status == false) {
      Alert.alert(
        "Enter Correct Username and Password",
        "",
        [
          {
            text: "",
            onPress: () => console.log("Ask me later pressed"),
          },
          {
            text: "",
            onPress: () => console.log("Cancel Pressed"),
            style: "cancel",
          },
          { text: "OK", onPress: () => console.log("OK Pressed") },
        ],
        { cancelable: false }
      );
    }
  };

  
  return (
    <View style={styles.container}>
      <StatusBar
        backgroundColor="rgba( 0, 0, 0, 05 )"
        barStyle="light-content"
      />

      <View style={styles.iconcontainer}>
        <Image
          style={styles.icon}
          source={require("../assets/path45432.png")}
        />
      </View>
      <View style={styles.hellocontainer}>
        <Text style={styles.hello}>Hello!</Text>
      </View>

      <View style={styles.logincontainer}>
        <Text style={styles.login}>Log In</Text>
      </View>

      <View style={{ flexDirection: "row" }}>
        <View style={styles.userbox}>
          <View style={styles.useradjust}>
            <FontAwesome name="user" color="#FFC542" size={20} />
          </View>
        </View>
        <View style={styles.usernametextcontainer}>
          <TextInput
            placeholder="Email"
            style={styles.textInput}
            placeholderTextColor="#96A7AF"
            onChangeText={(val) => textInputChange(val)}
          />
          
        </View>

        <View style={styles.faviconcontainer}>
        {data.check_textInputChange ?
                <Feather
                 name="check-circle"
                 color="#96A7AF" size={20}
                />
                :  <Feather
                name="alert-octagon"
                color="red" size={20}
               />}
          {/* <FontAwesome name="eye" color="#96A7AF" size={20} /> */}
        </View>
      </View>
      <View style={{ flexDirection: "row" }}>
        <View style={styles.userbox}>
          <View style={styles.useradjust}>
            <FontAwesome name="lock" color="#FF575F" size={20} />
          </View>
        </View>
        <View style={styles.usernametextcontainer}>
          <TextInput
            placeholder="Password"
            placeholderTextColor="#96A7AF"
            style={styles.textInput}
            secureTextEntry={data.secureTextEntry ? true : false}
            onChangeText={(val) => handlePasswordChange(val)}
          />
        </View>

        <View style={styles.faviconcontainer1}>
          {/* <FontAwesome name="eye" color="#96A7AF" size={20} /> */}
          <TouchableOpacity 
                onPress={updateSecureTextEntry}
                >
                    {data.secureTextEntry ?
                <Feather
                 name="eye-off"
                 color="#96A7AF" size={20}
                /> :
                <Feather
                name="eye"
                color="#96A7AF" size={20}
               />}
                </TouchableOpacity>
        </View>
      </View>

     
      <View style={styles.buttonnextcon}>
        <View style={styles.backb}>
          <View style={styles.arrowleft}>
            <FontAwesome name="long-arrow-left" color="#3DD598" size={20} />
          </View>
        </View>

        <TouchableOpacity
          style={styles.getstarttext}
          onPress={() => {
            loginHandle(data.userName, data.password), check();
          }}
        >
          <View style={styles.getstaredbutton}>
            <View style={styles.nexttext}>
              <Text style={styles.texts}>Next</Text>
            </View>
            <View style={styles.arrowright}>
              <FontAwesome name="long-arrow-right" color="white" size={20} />
            </View>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SignInScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,

    backgroundColor: "#22343C",
  },
  icon: {
    width: 44,
    height: 48,
  },
  iconcontainer: {
    marginTop: "9.0625%",
    marginLeft: 33,
  },
  hellocontainer: {
    marginLeft: 33,
  },
  hello: {
    fontSize: 42,
    color: "white",
    fontWeight: "bold",
  },
  logincontainer: {
    marginLeft: 33,
  },
  login: {
    fontSize: 24,
    color: "#96A7AF",
  },
  userbox: {
    width: 38,
    height: 48,
    backgroundColor: "#623A42",
    borderRadius: 12,
    marginLeft: 33,
    marginTop: 18,
    alignItems: "center",
  },
  useradjust: {
    marginTop: 15,
  },
  usernametextcontainer: {
    marginLeft: 18,
    marginTop: 12,width: 180,
  },
  faviconcontainer: {
    marginLeft: 70,
    marginTop: 22,
  },
  faviconcontainer1: {
    marginLeft: 70,
    marginTop: 22,
  },
  buttonnextcon: {
    flexDirection: "row",
    marginTop: "70.5%",
    alignItems: "center",
  },
  nexttext: {
    marginLeft: 91,
  },
  arrowright: {
    marginLeft: 12,
  },
  arrowleft: {
    alignItems: "center",
    marginTop: 17,
  },

  usernamewrapper: {
    width: 250,
    height: 44,
    borderColor: "#777777",
    borderWidth: 1,
    marginTop: 279,
    borderRadius: 21,
  },
  Passwordwrapper: {
    width: 250,
    height: 44,
    borderColor: "#777777",
    borderWidth: 1,
    marginTop: 13,
    borderRadius: 21,
  },
  emailIcon: {
    marginTop: 11,
    marginLeft: 13,
  },
  textemail: {
    marginLeft: 71,
  },
  backb: {
    width: 58,
    height: 59,
    backgroundColor: "#286053",
    borderRadius: 12,
    marginLeft: 45,
  },
  getstaredbutton: {
    width: 255,
    height: 59,
    backgroundColor: "#40DF9F",
    borderRadius: 12,
    alignItems: "center",
    flexDirection: "row",
  },
  getstarttext: {
    marginLeft: 12,
  },
  texts: {
    color: "white",

    fontSize: 16,
    fontWeight: "bold",
  },
  header: {
    flex: 1,
    justifyContent: "flex-end",
    paddingHorizontal: 20,
    paddingBottom: 50,
  },
  footer: {
    flex: 4,
    backgroundColor: "#fff",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingHorizontal: 20,
    paddingVertical: 30,
  },
  text_header: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 30,
  },
  text_footer: {
    color: "#05375a",
    fontSize: 18,
  },
  action: {
    flexDirection: "row",
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#f2f2f2",
    paddingBottom: 5,
  },
  actionError: {
    flexDirection: "row",
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#FF0000",
    paddingBottom: 5,
  },
  textInput: {
    flex: 1,
    marginTop: Platform.OS === "ios" ? 0 : 0,
    fontSize: 18,
    color: "#96A7AF",
  },
  errorMsg: {
    color: "white",
    fontSize: 14,
  },
  button: {
    alignItems: "center",
    marginTop: 50,
  },
  signIn: {
    width: "100%",
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },
  textSign: {
    fontSize: 18,
    fontWeight: "bold",
  },
  ImageBackground: {
    flex: 1,
  },
});
