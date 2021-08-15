import React, { Component } from "react";
import { Text, View } from "react-native";

import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import PropTypes from "prop-types";
import styled from "styled-components/native";

const HeaderView = styled.View`
flex-direction: row
justify-content: space-between
align-items: center
padding: 3%
`;

const DrawerButton = ({ navigation, color }) => {
  return (
    <View>
      <Icon
        name="menu"
        size={24}
        color={color}
        style={{ marginLeft: 10 }}
        onPress={() => navigation.toggleDrawer()}
      />
    </View>
  );
};

const BackButton = ({ navigation, color }) => {
  return (
    <View>
      <Icon
        name="backburger"
        size={24}
        color={color}
        style={{ marginLeft: 10 }}
        onPress={() => navigation.goBack()}
      />
    </View>
  );
};

const PlusButton = ({ navigation, color }) => {
  return (
    <View>
      <Icon
        name="plus"
        size={24}
        color={color}
        style={{ marginRight: 10 }}
        onPress={() => {
          navigation?.navigate("ToDo Details", {
            data: { id: -1 },
          });
        }}
      />
    </View>
  );
};

const SaveButton = ({ onSave, navigation, color }) => {
  return (
    <View>
      <Icon
        name="check"
        size={24}
        color={color}
        style={{ marginLeft: 10 }}
        onPress={() => onSave()}
      />
    </View>
  );
};

const DeleteButton = ({ onDelete, id, navigation, color }) => {
  return (
    <View>
      <Icon
        name="trash-can"
        size={24}
        color={color}
        style={{ marginLeft: 10 }}
        onPress={() => onDelete(id)}
      />
    </View>
  );
};

export default class CustomHeader extends Component {
  static propTypes = {
    navigation: PropTypes.object,
    title: PropTypes.string,
    color: PropTypes.string,
    plusButton: PropTypes.bool,
    onDelete: PropTypes.func,
    onSave: PropTypes.func,
    data: PropTypes.object,
  };

  render() {
    return (
      <HeaderView>
        {this?.props?.drawerButton && (
          <DrawerButton
            color={this?.props?.color}
            navigation={this?.props?.navigation}
          />
        )}

        {this?.props?.backButton && (
          <BackButton
            color={this?.props?.color}
            navigation={this?.props?.navigation}
          />
        )}

        <View style={{ flex: 1 }}>
          <Text
            style={{
              fontSize: 20,
              fontWeight: "bold",
              color: this?.props?.color,
              alignItems: "center",
              paddingHorizontal: 20,
            }}
          >
            {this?.props?.title}
          </Text>
        </View>

        {this?.props?.plusButton && (
          <PlusButton
            color={this?.props?.color}
            navigation={this?.props?.navigation}
          />
        )}

        {this?.props?.deleteButton && this?.props?.data?.id > -1 && (
          <DeleteButton
            color={this?.props?.color}
            navigation={this?.props?.navigation}
            onDelete={() => this?.props?.onDelete()}
            id={this?.props?.data?.id}
          />
        )}

        {this?.props?.saveButton && (
          <SaveButton
            color={this?.props?.color}
            navigation={this?.props?.navigation}
            onSave={() => this?.props?.onSave()}
          />
        )}
      </HeaderView>
    );
  }
}
