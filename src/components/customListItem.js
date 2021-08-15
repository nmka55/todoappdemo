import React, { Component } from "react";
import { TouchableHighlight, View } from "react-native";

import Icon from "react-native-vector-icons/Octicons";
import PropTypes from "prop-types";
import moment from "moment";
import styled from "styled-components/native";

const ItemTitle = styled.Text`
font-weight: bold
font-size: 18px
padding-top: 1px
`;

const ItemSubtitle = styled.Text`
color: grey
padding-top: 5px
`;

export default class CustomListItem extends Component {
  static propTypes = {
    navigation: PropTypes.object,
    data: PropTypes.object,
  };

  render() {
    return (
      <View
        style={{
          display: "flex",
          width: "90%",
          marginVertical: 5,
          backgroundColor: "transparent",
          alignSelf: "center",
          shadowColor: "#000",
          shadowOffset: {
            width: 0,
            height: 2,
          },
          shadowOpacity: 0.23,
          shadowRadius: 2.62,
          elevation: 4,
        }}
      >
        <TouchableHighlight
          underlayColor={"gray"}
          style={{ borderRadius: 20 }}
          key={this.props?.data?.id}
          onPress={() => {
            this?.props?.navigation.navigate("ToDo Details", {
              data: this?.props?.data,
            });
          }}
        >
          <View
            style={{
              alignSelf: "center",
              flexDirection: "row",
              overflow: "hidden",
              borderRadius: 20,
            }}
          >
            <View
              style={{ width: "1.5%", height: "100%", backgroundColor: "pink" }}
            />
            <View style={{ backgroundColor: "white", padding: 20, flex: 1 }}>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <ItemSubtitle>
                  <Icon name="tag" /> {this.props?.data?.tag}
                </ItemSubtitle>

                <ItemSubtitle>
                  <Icon
                    name="primitive-dot"
                    size={14}
                    color={this.props?.data?.isDone ? "green" : "orange"}
                  />
                  {this.props?.data?.isDone ? "Completed" : "Ongoing"}
                </ItemSubtitle>
              </View>

              <ItemTitle>{this.props?.data?.title}</ItemTitle>

              <ItemSubtitle>
                <Icon name="pin" size={14} color="gray" />{" "}
                {this.props?.data?.location}
              </ItemSubtitle>

              <ItemSubtitle>
                <Icon name="calendar" size={14} color="gray" />{" "}
                {moment(this.props?.data?.time)?.format("YYYY/MM/DD HH:mm")}
              </ItemSubtitle>
            </View>
          </View>
        </TouchableHighlight>
      </View>
    );
  }
}
