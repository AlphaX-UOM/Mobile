import React from "react";
import { View, Text, Button, StyleSheet, Image } from "react-native";
import { MaterialIcons } from "react-native-vector-icons";

const GreenUiUi = (props) => {
  return (
    <View style={styles.container}>
      <View
        style={{
          width: 359,
          height: 580,

          marginLeft: 25,
          marginTop: 12,
          borderRadius: 20,
          alignItems: "center",
          backgroundColor: props.color,
        }}
      >
        <View style={{ marginTop: 87 }}>
          <Image source={props.image} style={styles.imagesty} />
        </View>
        <View style={{ marginTop: 10 }}>
          <Text style={{ fontWeight: "bold", color: "white", fontSize: 32 }}>
            {props.Name}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default GreenUiUi;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#22343C",
  },
  frame: {
    width: 359,
    height: 580,

    marginLeft: 25,
    marginTop: 12,
    borderRadius: 20,
    alignItems: "center",
  },
  imagesty: {
    width: 243,
    height: 301,
  },
});
