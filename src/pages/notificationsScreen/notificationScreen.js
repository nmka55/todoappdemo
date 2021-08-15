import { SafeAreaView, StatusBar, Text, View } from "react-native";

import { CustomHeader } from "../../components";
import React from "react";

export default function NotificationsScreen({ navigation, route }) {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#4b78ec" }}>
      <StatusBar barStyle="light-content" backgroundColor="#4b78ec" />
      <CustomHeader drawerButton color="white" title={route?.name} navigation={navigation} />
      <View style={{}}>
        <View
          style={{
            alignSelf: "center",
            width: "100%",
            height: "100%",
            backgroundColor: "white",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text>No new notifications</Text>
        </View>
      </View>
    </SafeAreaView>
  );
}
