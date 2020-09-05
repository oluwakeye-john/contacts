import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import AllContactScreen from "./screens/AllContactScreen";
import ContactDetailsScreen from "./screens/ContactDetailsScreen";
import AddContactScreen from "./screens/AddContactScreen";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

import { store, persistor } from "./redux";
import { FontAwesome } from "@expo/vector-icons";
import { Text, View, Button } from "react-native";

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
      <PersistGate loading={null} persistor={persistor}>
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
      </PersistGate>
    </Provider>
  );
};

export default App;
