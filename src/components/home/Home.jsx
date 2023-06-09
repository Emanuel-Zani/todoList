import React, { useEffect } from "react";
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  FlatList,
  Button,
} from "react-native";

/*Info*/
import { useSelector } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import { selectTodo } from "../../app/todoSlice";
/*Components */
import Todo from "../todo/Todo";

export default function Home() {
  const data = useSelector(selectTodo);

  const navigation = useNavigation();

  return (
    <View
      style={{
        alignContent: "center",
        backgroundColor: "#e5e5e5",
        padding: 20,
        height: "100%",
      }}
    >
      <Text
        style={{
          fontSize: 40,
          fontWeight: "bold",
          margin: 10,
          marginBottom: 5,
          marginTop: 15,
          textAlign: "center",
          color: "#000000",
        }}
      >
        Lista de Tareas:
      </Text>

      <FlatList
        style={{
          margin: 1,
          marginBottom: 15,

          borderRadius: 15,

          padding: 15,
          backgroundColor: "#ffffff",
        }}
        data={data}
        renderItem={({ item }) => <Todo todoInfo={item} />}
        keyExtractor={(item) => item.id}
      />

      <View>
        <View style={{ margin: 20 }}>
          <Button
            onPress={() => {
              navigation.navigate("Add");
            }}
            title="Agregar"
            color="#fca311"
          />
        </View>
      </View>
    </View>
  );
}
