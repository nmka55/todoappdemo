import React, { Component } from "react";
import { TouchableHighlight, View } from "react-native";

import DateTimePicker from "@react-native-community/datetimepicker";
import Icon from "react-native-vector-icons/Octicons";
import { Input } from "react-native-elements";
import PropTypes from "prop-types";
import moment from "moment";

export default class CustomDateTimePicker extends Component {
  static propTypes = {
    value: PropTypes.any,
    onChange: PropTypes.func,
  };

  render() {
    return (
      <View
        style={{
          width: "100%",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <DateTimePicker
          testID="datetimepicker"
          value={new Date(this?.props?.value)}
          is24Hour={true}
          display="default"
          style={{ width: "100%" }}
          mode="datetime"
          onChange={(event, date) => {
            this?.props?.onChange(date);
          }}
        />
      </View>
    );
  }
}
