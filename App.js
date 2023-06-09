/*Components*/
import Home from "./src/components/home/Home";
import Detail from "./src/components/detail/Detail";
import Add from "./src/components/add/Add";
import Edit from "./src/components/edit/Edit";

/*Navigation*/
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

/*Redux */
import { store } from "./src/app/store";
import { Provider } from "react-redux";

/*Persist */
import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";
const persistor = persistStore(store)

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Detail" component={Detail} />
        <Stack.Screen name="Add" component={Add} />
        <Stack.Screen name="Edit" component={Edit} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default () => {
  return (
    <PersistGate persistor={persistor}>
      <Provider store={store}>
        <App />
      </Provider>
    </PersistGate>
  );
};
