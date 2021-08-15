import { CustomHeader, CustomListItem } from "../../components";
import {
  FlatList,
  SafeAreaView,
  StatusBar,
  Text,
  TouchableHighlight,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";

import { Button } from "react-native-elements";
import Icon from "react-native-vector-icons/Octicons";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import styled from "styled-components/native";
import { userLogout } from "../../redux/actions";

const SpecView = styled.View`
  flex-direction: column
  align-items: center
`;

const SpecValue = styled.Text`
font-weight: bold,
font-size: 20px
`;

const SpecTitle = styled.Text`
  color: gray;
`;

function TabA({ navigation, route }) {
  const [listData, setListData] = useState([
    {
      id: 1,
      tag: "#personal",
      title: "Do shopping, buy eggs",
      location: "Emart Supermarket",
      time: new Date(),
      isDone: true,
      color: "pink",
    },
    {
      id: 2,
      tag: "#personal",
      title: "Do shopping, buy eggs",
      location: "Emart Supermarket",
      time: new Date(),
      isDone: true,
      color: "pink",
    },
    {
      id: 3,
      tag: "#personal",
      title: "Do shopping, buy eggs",
      location: "Emart Supermarket",
      time: new Date(),
      isDone: true,
      color: "pink",
    },
    {
      id: 4,
      tag: "#personal",
      title: "Do shopping, buy eggs",
      location: "Emart Supermarket",
      time: new Date(),
      isDone: true,
      color: "pink",
    },
    {
      id: 5,
      tag: "#personal",
      title: "Do shopping, buy eggs",
      location: "Emart Supermarket",
      time: new Date(),
      isDone: true,
      color: "pink",
    },
    {
      id: 6,
      tag: "#personal",
      title: "Do shopping, buy eggs",
      location: "Emart Supermarket",
      time: new Date(),
      isDone: true,
      color: "pink",
    },
    {
      id: 7,
      tag: "#personal",
      title: "Do shopping, buy eggs",
      location: "Emart Supermarket",
      time: new Date(),
      isDone: true,
      color: "pink",
    },
    {
      id: 8,
      tag: "#personal",
      title: "Do shopping, buy eggs",
      location: "Emart Supermarket",
      time: new Date(),
      isDone: true,
      color: "pink",
    },
  ]);
  const [tagData, setTagData] = useState([
    { title: "#personal", color: "pink" },
    { title: "#work", color: "lightblue" },
    { title: "#kids", color: "orange" },
    { title: "#houseWork", color: "cyan" },
    { title: "#birthdayPrep", color: "lightgreen" },
  ]);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#4b78ec" }}>
      <StatusBar barStyle="light-content" backgroundColor="#4b78ec" />
      <CustomHeader
        drawerButton
        plusButton={route?.name?.toUpperCase() === "ONGOING"}
        color="white"
        title={route?.name}
        navigation={navigation}
      />
      <View style={{ paddingBottom: 10 }}>
        <View
          style={{
            alignSelf: "center",
            width: "90%",
            borderRadius: 20,
            paddingHorizontal: 20,
            paddingVertical: 25,
            backgroundColor: "white",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <SpecView>
            <SpecValue>80</SpecValue>
            <SpecTitle>overdue</SpecTitle>
          </SpecView>

          <SpecView>
            <SpecValue>123</SpecValue>
            <SpecTitle>to do</SpecTitle>
          </SpecView>

          <SpecView>
            <SpecValue>72</SpecValue>
            <SpecTitle>open</SpecTitle>
          </SpecView>

          <SpecView>
            <SpecValue>51</SpecValue>
            <SpecTitle>due today</SpecTitle>
          </SpecView>
        </View>
      </View>

      <View
        style={{
          paddingVertical: 10,
        }}
      >
        <FlatList
          horizontal={true}
          style={{ width: "100%" }}
          data={tagData}
          keyExtractor={(item) => item?.title}
          renderItem={({ item }) => {
            return (
              <Button
                id={item?.title}
                title={item?.title}
                type="outline"
                titleStyle={{ color: item?.color, fontSize: 14 }}
                buttonStyle={{
                  borderColor: item?.color,
                  borderRadius: 20,
                  borderWidth: 1.5,
                }}
                containerStyle={{
                  marginHorizontal: 5,
                }}
              />
            );
          }}
        />
      </View>

      <View
        style={{
          width: "100%",
          flex: 1,
          paddingTop: 15,
          alignSelf: "center",
          alignItems: "center",
          backgroundColor: "#f2f2f2",
          borderTopStartRadius: 25,
          borderTopEndRadius: 25,
        }}
      >
        <View
          style={{
            width: "90%",
            paddingVertical: 10,
            paddingHorizontal: 10,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Text style={{ color: "gray" }}>Due today</Text>
          <TouchableHighlight
            style={{ flexDirection: "row", alignItems: "center" }}
            underlayColor={"transparent"}
            onPress={() => {}}
          >
            <>
              <Text style={{ color: "gray" }}>Sort by</Text>
              <Icon name="triangle-down" size={14} color="gray" />
            </>
          </TouchableHighlight>
        </View>
        <FlatList
          style={{ width: "100%" }}
          data={listData}
          keyExtractor={(item) => item?.id}
          renderItem={({ item }) => (
            <CustomListItem navigation={navigation} data={item} />
          )}
        />
      </View>
    </SafeAreaView>
  );
}

const mapStateToProps = (state) => {
  return { user: state?.user };
};

const mapDispatchToProps = (dispatch) =>
  bindActionCreators({ userLogout }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(TabA);
