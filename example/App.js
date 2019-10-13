import React from "react";
import { View, StatusBar, SafeAreaView } from "react-native";
import { BasicModal, HalloweenModal } from "react-native-basic-modal";

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
