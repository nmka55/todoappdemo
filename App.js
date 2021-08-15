import "react-native-gesture-handler";

import { Provider } from "react-redux";
import React from "react";
import RootContainer from "./src/navigators";
import { SafeAreaProvider } from "react-native-safe-area-context";
import store from "./src/redux/store";

export default function App() {
  return (
    <SafeAreaProvider>
      <Provider store={store}>
        <RootContainer />
      </Provider>
    </SafeAreaProvider>
  );
}
