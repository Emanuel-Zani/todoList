import React, { useState } from "react";
import { Text, View, TextInput, Button } from "react-native";
import { useDispatch } from "react-redux";
import { create } from "../../app/todoSlice";
import { useNavigation } from "@react-navigation/native";
import uuid from "react-native-uuid";

export default function Add() {
  const [todo, setTodo] = useState({
    name: "",
    description: "",
  });
  const dispatch = useDispatch();
  const navigation = useNavigation();
  function handleSubmite() {
    dispatch(create({ ...todo, id: uuid.v4() }));
    navigation.goBack();
  }

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        backgroundColor: "#e5e5e5",
        padding: 2,
        height: "100%",
      }}
    >
      <Text
        style={{
          fontSize: 25,
          fontWeight: "bold",
          margin: 10,
          textAlign: "center",
          color: "#000000",
        }}
      >
        Crear nueva Tarea
      </Text>
      <View style={{ backgroundColor: "white", borderRadius: 10, margin: 10 }}>
        <View
          style={{
            padding: 2,
            margin: 10,
          }}
        >
          <Text
            style={{
              alignItems: "flex-end",
              marginBottom: 10,
              fontSize: 25,
              fontWeight: "bold",
            }}
          >
            Nombre de la Tarea:
          </Text>
          <TextInput
            value={todo.name}
            onChangeText={(text) => setTodo({ ...todo, name: text })}
            style={{
              backgroundColor: "white",
              borderStyle: "solid",
              borderColor: "#fca311",
              borderWidth: 2,
              borderRadius: 5,
              padding:5
            }}
          />
        </View>
        <View
          style={{
            padding: 2,
            margin: 10,
          }}
        >
          <Text
            style={{
              alignItems: "flex-end",
              marginBottom: 10,
              fontSize: 25,
              fontWeight: "bold",
            }}
          >
            Descripción:
          </Text>
          <TextInput
            value={todo.description}
            onChangeText={(text) => setTodo({ ...todo, description: text })}
            style={{
              backgroundColor: "white",
              borderStyle: "solid",
              borderColor: "#fca311",
              borderWidth: 2,
              borderRadius: 5,
              height: 35,
              padding:5
            }}
          />
        </View>
      </View>
      <View style={{ margin: 10,marginTop:20 }}>
        <Button onPress={handleSubmite} title="Crear" color="#fca311" />
      </View>
    </View>
  );
}
