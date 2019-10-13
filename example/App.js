import React from "react";
import { View, StatusBar, SafeAreaView } from "react-native";
import BasicModal from "./lib/src/BasicModal";
import HalloweenModal from "./lib/src/HalloweenModal";

const App = () => {
  return (
    <View>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <HalloweenModal isVisible />
      </SafeAreaView>
    </View>
  );
};

export default App;
