import "react-native-gesture-handler";

import React, { useEffect } from "react";
import { persistor, store } from "./src/redux/store";

import { PersistGate } from "redux-persist/integration/react";
import { Provider } from "react-redux";
import RootContainer from "./src/navigators";
import { SafeAreaProvider } from "react-native-safe-area-context";

export default function App() {
  return (
    <SafeAreaProvider>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <RootContainer />
        </PersistGate>
      </Provider>
    </SafeAreaProvider>
  );
}
