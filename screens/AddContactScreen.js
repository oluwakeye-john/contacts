import React, { useState } from "react";
import styled from "styled-components";
import { FontAwesome } from "@expo/vector-icons";
import { connect } from "react-redux";
import { updateContacts, addNewContact } from "../redux/actions/contacts";

const AddContact = ({ navigation, contacts, addNewContact }) => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  const handleSubmit = () => {
    if (!name || !phone) {
      return alert("Please enter the name and phone");
    }
    if (isNaN(phone)) {
      return alert("Invalid phone number");
    }
    if (phone.length !== 11) {
      return alert("Phone number must be 11 digits");
    }
    const newContacts = {
      name,
      phone,
    };

    const isDuplicate = contacts.filter((contact) => {
      if (contact.phone === newContacts.phone) {
        return true;
      }
      return false;
    });

    if (isDuplicate.length) {
      return alert("Phone number already exist");
    }

    addNewContact(newContacts);
    navigation.navigate("Home");
  };

  const disabled = !name || !phone;

  return (
    <StyledContainer>
      <StyledTextInput
        placeholder="Enter name"
        placeholderTextColor="darkslateblue"
        onChangeText={setName}
      />
      <StyledTextInput
        keyboardType="numeric"
        placeholder="Enter phone number"
        placeholderTextColor="darkslateblue"
        onChangeText={setPhone}
      />
      <StyledSubmitButton disabled={disabled} onPress={handleSubmit}>
        <StyledSubmitButtonText>
          <FontAwesome name="plus" />
          Submit
        </StyledSubmitButtonText>
      </StyledSubmitButton>
    </StyledContainer>
  );
};

const StyledContainer = styled.View`
  flex: 1;
  padding: 0 10px;
`;

const StyledTextInput = styled.TextInput`
  border: 1px solid darkslateblue;
  margin-top: 30px;
  border-radius: 5px;
  padding: 4px 10px;
  color: #000;
`;

const StyledSubmitButtonText = styled.Text`
  color: #fff;
  text-align: center;
`;

const StyledSubmitButton = styled.TouchableOpacity`
  background-color: darkslateblue;
  margin-top: 50px;
  padding: 10px 0;

  opacity: ${(props) => (props.disabled ? 0.6 : 1)};
`;

const Icon = styled.View`
  margin-right: 10px;
`;

const mapDispatchToProps = (dispatch) => {
  return {
    addNewContact: (contacts) => dispatch(addNewContact(contacts)),
  };
};

const mapStateToProps = (state) => {
  return {
    contacts: state.contactsReducer.contacts,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AddContact);
