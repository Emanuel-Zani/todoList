import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function Todo({ todoInfo }) {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      style={styles.item}
      onPress={() => {
        navigation.navigate("Detail", {
          todoDetail: todoInfo,
        });
      }}
    >
      <View style={styles.itemLeft}>
        <Text style={styles.text}>{todoInfo.name}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  item: {
    backgroundColor: "#fca311",
    padding: 15,
    borderRadius: 10, 
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 20,
  },

  text: {
    fontSize: 25,
    maxWidth: "80%",
    color:"#000000",
  },

});
