import React from "react";
import { View, StatusBar, SafeAreaView } from "react-native";
import { BasicModal, HalloweenModal } from "./lib/src/index";

const App = () => {
  return (
    <View>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <HalloweenModal halloweenTheme isVisible />
      </SafeAreaView>
    </View>
  );
};

export default App;
