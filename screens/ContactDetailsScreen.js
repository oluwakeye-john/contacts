import React from "react";
import {
  Text,
  Button,
  Alert,
  Image,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import styled from "styled-components/native";
import { connect } from "react-redux";
import { deleteContact, toggleLikeContact } from "../redux/actions/contacts";
import { FontAwesome } from "@expo/vector-icons";

const ContactDelete = ({ item, deleteContact, navigate }) => {
  const deleteItem = () => {
    deleteContact(item.phone);
    navigate("Home");
  };
  return (
    <DeleteButton>
      <Button
        title="Delete"
        color="red"
        onPress={() =>
          Alert.alert(
            "Warning",
            `Are you sure you want to delete ${item.name}`,
            [{ text: "no" }, { text: "yes", onPress: deleteItem }]
          )
        }
      />
    </DeleteButton>
  );
};

const ContactDetails = ({
  navigation,
  route,
  deleteContact,
  toggleLikeContact,
  contacts,
}) => {
  const phone = route.params.phone;

  const item = contacts.filter((it, index) => {
    if (it.phone === phone) {
      return true;
    }
    return false;
  })[0];

  navigation.setOptions({
    title: item && item.name,
    headerRight: (props) => (
      <ContactDelete
        {...props}
        deleteContact={deleteContact}
        item={item}
        navigate={navigation.navigate}
      />
    ),
  });
  const toggleLike = () => {
    toggleLikeContact(item.phone, !item.isFavorite);
  };
  return (
    <DetailsView>
      <Image
        source={require("../assets/user.png")}
        style={{ width: 100, height: 100 }}
      />
      {item && (
        <ContentView>
          <TouchableWithoutFeedback onPress={toggleLike}>
            <FontAwesome
              name="star"
              size={30}
              color={item.isFavorite ? "gold" : "black"}
            />
          </TouchableWithoutFeedback>
          <Name>{item.name}</Name>
          <Text>{item.phone}</Text>
        </ContentView>
      )}
    </DetailsView>
  );
};

const Name = styled.Text`
  font-size: 25px;
  font-weight: bold;
  margin-bottom: 20px;
  margin-top: 10px;
`;

const DeleteButton = styled.View`
  margin-right: 15px;
`;

const DetailsView = styled.View`
  align-items: center;
  margin-top: 20px;
  justify-content: center;
  flex: 1;
`;

const ContentView = styled.View`
  margin-top: 50px;
  align-items: center;
`;

const mapStateToProps = (state) => {
  return {
    contacts: state.contactsReducer.contacts,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    deleteContact: (phone) => dispatch(deleteContact(phone)),
    toggleLikeContact: (phone, value) =>
      dispatch(toggleLikeContact(phone, value)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ContactDetails);
