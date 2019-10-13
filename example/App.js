import React from "react";
import { View, StatusBar, SafeAreaView } from "react-native";
import BasicModal from "./lib/src/BasicModal";

const App = () => {
  return (
    <View>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <BasicModal isVisible />
      </SafeAreaView>
    </View>
  );
};

export default App;
