import { CheckBox, Input } from "react-native-elements";
import { CustomDateTimePicker, CustomHeader } from "../../components";
import React, { useState } from "react";
import { SafeAreaView, StatusBar, View } from "react-native";
import { todoAdd, todoDelete, todoEdit } from "../../redux/actions";

import { bindActionCreators } from "redux";
import { connect } from "react-redux";

export function TabADetails({
  params,
  navigation,
  route,
  todoAdd,
  todoEdit,
  todoDelete,
}) {
  const [adata, setAData] = useState(route?.params?.data);

  const onSave = () => {
    if (adata?.id === -1) todoAdd(adata);
    else todoEdit(adata);

    navigation.goBack();
  };

  const onDelete = () => {
    todoDelete(adata?.id);
    navigation?.goBack();
  };

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
        onSave={() => onSave()}
        onDelete={() => onDelete()}
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
            leftIcon={{
              type: "MaterialCommunityIcons",
              name: "title",
              size: 18,
            }}
            value={adata?.title}
            onChangeText={(value) => {
              setAData({ ...adata, title: value });
            }}
          />

          <Input
            placeholder="Tag"
            leftIcon={{ type: "MaterialCommunityIcons", name: "tag", size: 18 }}
            value={adata?.tag}
            onChangeText={(value) => setAData({ ...adata, tag: value })}
          />

          <Input
            placeholder="Note"
            multiline={true}
            numberOfLines={3}
            leftIcon={{
              type: "MaterialCommunityIcons",
              name: "note",
              size: 18,
            }}
            value={adata?.note}
            onChangeText={(value) => setAData({ ...adata, note: value })}
          />

          <Input
            placeholder="Location"
            leftIcon={{ type: "MaterialIcons", name: "push-pin", size: 18 }}
            value={adata?.location}
            onChangeText={(value) => setAData({ ...adata, location: value })}
          />

          <CustomDateTimePicker
            value={adata?.time ? new Date(adata?.time) : new Date()}
            onChange={(value) => {
              setAData({ ...adata, time: value.toISOString() });
            }}
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
  return { userInfo: state?.userInfo, todo: state?.todo };
};

const mapDispatchToProps = (dispatch) =>
  bindActionCreators({ todoAdd, todoEdit, todoDelete }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(TabADetails);
