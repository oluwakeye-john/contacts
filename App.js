import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import AllContactScreen from "./screens/AllContactScreen";
import ContactDetailsScreen from "./screens/ContactDetailsScreen";
import AddContactScreen from "./screens/AddContactScreen";
import { Provider } from "react-redux";
import store from "./redux";
import { FontAwesome } from "@expo/vector-icons";
import { StatusBar, Text } from "react-native";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const MainTab = () => {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={AllContactScreen} />
      <Stack.Screen name="Details" component={ContactDetailsScreen} />
      <Stack.Screen name="Add" component={AddContactScreen} />
    </Stack.Navigator>
  );
};

const Settings = () => {
  return <Text>Hello</Text>;
};

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen name="Contacts" component={MainTab} />
          <Tab.Screen name="Settings" component={Settings} />
        </Tab.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
