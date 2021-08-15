import { CheckBox, Input } from "react-native-elements";
import React, { useEffect, useState } from "react";
import { SafeAreaView, StatusBar, View } from "react-native";

import { CustomHeader } from "../../components";
import { connect } from "react-redux";

export function TabADetails({ params, navigation, route }) {
  const [adata, setAData] = useState(route?.params?.data);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#4b78ec" }}>
      <StatusBar barStyle="light-content" backgroundColor="#4b78ec" />
      <CustomHeader
        backButton
        deleteButton
        saveButton
        color="white"
        title={route?.name}
        navigation={navigation}
        onSave={() => {
          alert("SAVE");
        }}
        onDelete={() => {
          alert("DELETE");
        }}
        data={adata}
      />
      <View style={{}}>
        <View
          style={{
            alignSelf: "center",
            width: "100%",
            height: "100%",
            padding: 10,
            backgroundColor: "white",
            flexDirection: "column",
            justifyContent: "flex-start",
            alignItems: "center",
          }}
        >
          <Input
            placeholder="Title"
            leftIcon={{ type: "MaterialCommunityIcons", name: "title" }}
            value={adata?.title}
            onChangeText={(value) => setAData({ ...adata, title: value })}
          />

          <Input
            placeholder="Tag"
            leftIcon={{ type: "MaterialCommunityIcons", name: "tag" }}
            value={adata?.tag}
            onChangeText={(value) => setAData({ ...adata, tag: value })}
          />

          <Input
            placeholder="Note"
            multiline={true}
            numberOfLines={3}
            leftIcon={{ type: "MaterialCommunityIcons", name: "note" }}
            value={adata?.note}
            onChangeText={(value) => setAData({ ...adata, note: value })}
          />

          <Input
            placeholder="Location"
            leftIcon={{ type: "MaterialIcons", name: "push-pin" }}
            value={adata?.location}
            onChangeText={(value) => setAData({ ...adata, location: value })}
          />

          <Input
            placeholder="Time"
            leftIcon={{
              type: "MaterialCommunityIcons",
              name: "calendar-today",
            }}
            value={adata?.time?.toString()}
            onChangeText={(value) => setAData({ ...adata, time: value })}
          />

          <CheckBox
            checkedColor="#4b78ec"
            containerStyle={{ width: "100%", backgroundColor: "white" }}
            title="Task Completed"
            checked={adata?.isDone}
            onPress={() => setAData({ ...adata, isDone: !adata?.isDone })}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}

const mapStateToProps = (state) => {
  return { userInfo: state?.userInfo };
};

export default connect(mapStateToProps)(TabADetails);
