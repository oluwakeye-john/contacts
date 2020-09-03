import React from "react";
import { View, Text, StyleSheet } from "react-native";

const ContactDetails = ({ navigation, route }) => {
  const { name, phone } = route.params;
  navigation.setOptions({
    title: name,
  });
  return (
    <View>
      <Text>Hello</Text>
    </View>
  );
};

export default ContactDetails;
