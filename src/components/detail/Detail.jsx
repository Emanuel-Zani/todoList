import React from "react";
import { View, Text, Button } from "react-native";
import { deleteTodo } from "../../app/todoSlice";
import { useDispatch } from "react-redux";
import { useNavigation } from "@react-navigation/native";
export default function Detail({ route }) {
  const { id, name, description } = route.params.todoDetail;

  const dispatch = useDispatch();

  const navigation = useNavigation();

  function handleDelete() {
    dispatch(deleteTodo(id));
    navigation.goBack();
  }

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        backgroundColor: "#e5e5e5",
        padding: 5,
        height: "100%",
      }}
    >
      <View
        style={{ backgroundColor: "white", borderRadius: 10, margin: 10 }}
      >
        <Text
          style={{
            fontSize: 40,
            fontWeight: "bold",
            margin: 3,
            textAlign: "center",
            color: "#000000",
          }}
        >
          {name} :
        </Text>
        <View
          style={{
            backgroundColor: "#ffffff",
            margin: 20,
            padding: 10,
            borderStyle: "solid",
            borderRadius: 5,
            borderWidth: 3,
            borderColor: "#fca311",
          }}
        >
          <Text
            style={{
              fontSize: 25,
              fontWeight: "bold",
              margin:10,
              
              textAlign: "left",
              color: "#14213d",
            }}
          >
            {description}
          </Text>
        </View>
        </View>
        <View style={{ margin: 20, marginTop:25 }}>
          <Button onPress={handleDelete} title="Borrar" color="#fca311" />
        </View>
        <View style={{ margin: 20 }}>
          <Button
            onPress={() => {
              navigation.navigate("Edit", {
                id: id,
                name: name,
                description: description,
              });
            }}
            title="Editar"
            color="#fca311"
          />
        </View>
    
    </View>
  );
}
