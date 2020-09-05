import React from "react";
import { View, Text, Button, FlatList } from "react-native";
import styled from "styled-components/native";
import { connect } from "react-redux";
import { FontAwesome } from "@expo/vector-icons";

const ContactItem = ({ item, navigation }) => {
  const handleClick = () => {
    navigation.navigate("Details", { ...item });
  };
  return (
    <StyledCard onPress={handleClick}>
      <View>
        <CardName>{item.name}</CardName>
        <Text>{item.phone}</Text>
      </View>
      <FontAwesome
        name="star"
        size={15}
        color={item.isFavorite ? "gold" : "black"}
      />
    </StyledCard>
  );
};

const AllContacts = ({ navigation, contacts }) => {
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

  return (
    <StyledViewContainer>
      <StyledCardList>
        {/* {contacts.map((com, index) => (
          
        ))} */}
        <FlatList
          data={contacts}
          renderItem={({ item }) => (
            <ContactItem item={item} navigation={navigation} />
          )}
        />
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

const mapStateToProps = (state) => {
  return {
    contacts: state.contactsReducer.contacts,
  };
};

export default connect(mapStateToProps, null)(AllContacts);
