import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  Button,
  FlatList,
  ActivityIndicator,
  RefreshControl,
} from "react-native";
import styled from "styled-components/native";
import { connect } from "react-redux";
import { FontAwesome } from "@expo/vector-icons";

import { updateContacts } from "../redux/actions/contacts";

const ContactItem = ({ item, navigation }) => {
  const handleClick = () => {
    navigation.navigate("Details", { ...item });
  };
  return (
    <StyledCard onPress={handleClick}>
      <View>
        <CardName>{item.name}</CardName>
        <CardPhone>{item.phone}</CardPhone>
      </View>
      <FontAwesome
        name="star"
        size={15}
        color={item.isFavorite ? "gold" : "black"}
      />
    </StyledCard>
  );
};

const AllContacts = ({ navigation, contacts, updateContacts }) => {
  const AddButton = () => {
    return (
      <StyledAddContact>
        <Button
          color="darkslateblue"
          title="Add User"
          onPress={() => navigation.navigate("Add")}
        />
      </StyledAddContact>
    );
  };

  navigation.setOptions({
    headerRight: AddButton,
    title: "Home",
    tabBarBadge: 4,
  });

  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = () => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 3000);
  };

  return (
    <StyledViewContainer>
      <StyledCardList
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      >
        <>
          {contacts && contacts.length !== 0 ? (
            <FlatList
              data={contacts}
              renderItem={({ item }) => (
                <ContactItem item={item} navigation={navigation} />
              )}
            />
          ) : (
            <NoContact>
              <NoContactText>No contacts Yet</NoContactText>
              <Button
                title="Create New Contact"
                onPress={() => {
                  navigation.navigate("Add");
                }}
              />
            </NoContact>
          )}
        </>
      </StyledCardList>
    </StyledViewContainer>
  );
};

const StyledCardList = styled.ScrollView`
  margin-top: 30px;
`;

const StyledViewContainer = styled.View`
  padding: 10px 15px;
`;

const StyledAddContact = styled.View`
  margin-right: 15px;
`;

const StyledCard = styled.TouchableOpacity`
  padding: 10px 0;
  margin-bottom: 10px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const CardName = styled.Text`
  font-weight: bold;
  font-size: 18px;
  color: darkslateblue;
`;

const CardPhone = styled.Text`
  margin-top: 3px;
  font-size: 14px;
  opacity: 0.7;
  letter-spacing: 0.5px;
`;

const NoContact = styled.View`
  align-self: center;
  align-items: center;
`;

const NoContactText = styled.Text`
  margin-bottom: 20px;
`;

const mapStateToProps = (state) => {
  return {
    contacts: state.contactsReducer.contacts,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    updateContacts: (contacts) => dispatch(updateContacts(contacts)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AllContacts);
