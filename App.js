import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import AllContactScreen from "./screens/AllContactScreen";
import ContactDetailsScreen from "./screens/ContactDetailsScreen";
import AddContactScreen from "./screens/AddContactScreen";
import { Provider, connect } from "react-redux";
import store from "./redux";
import { FontAwesome } from "@expo/vector-icons";
import { StatusBar, Text, View, Button } from "react-native";

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

const Settings = ({ navigation }) => {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Coming soon</Text>
      <Button
        title="Add"
        onPress={() => {
          navigation.navigate("Add");
        }}
      />
    </View>
  );
};

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen
            name="Contacts"
            component={MainTab}
            options={{
              tabBarIcon: ({ focused }) => {
                if (focused) {
                  return <FontAwesome name="phone" size={25} />;
                }
                return <FontAwesome name="phone" size={20} />;
              },
            }}
          />
          <Tab.Screen
            name="Settings"
            component={Settings}
            options={{
              tabBarIcon: () => {
                return <FontAwesome name="gear" size={20} />;
              },
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
