import React from "react";
import { View, StatusBar, SafeAreaView } from "react-native";
import BasicModal from "react-native-basic-modal";

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
