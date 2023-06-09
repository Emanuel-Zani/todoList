import React, { useEffect, useState } from "react";
import { View, Text, Button, TextInput } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { updateTodo } from "../../app/todoSlice";
import { useNavigation } from "@react-navigation/native";
import { selectTodo } from "../../app/todoSlice";

export default function Edit({ route }) {
  const { id, name, description } = route.params;

  const data = useSelector(selectTodo);

  const dispatch = useDispatch();

  const navigation = useNavigation();

  const [todo, setTodo] = useState({
    id: "",
    name: "",
    description: "",
  });

  useEffect(() => {
    if (id) {
      setTodo(data.find((t) => t.id === id));
    }
  }, []);

  function handleSubmit() {
    dispatch(updateTodo(todo));
    navigation.navigate("Home");
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
      <Text
        style={{
          fontSize: 25,
          fontWeight: "bold",
          margin: 10,
          textAlign: "center",
          color: "#000000",
        }}
      >
        Editar Tarea
      </Text>
      <View style={{ backgroundColor: "white", borderRadius: 10, margin: 5,marginTop:2 }}>
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
              padding: 4,
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
              padding: 4,
            }}
          />
        </View>
      </View>
      <View style={{ margin: 10, marginTop: 20 }}>
        <Button onPress={handleSubmit} title="Guardar" color="#fca311" />
      </View>
    </View>
  );
}
