import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
import BasicModal from './lib/src/BasicModal';

const App = () => {
  return (
    <View>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <BasicModal />
      </SafeAreaView>
    </View>
  );
};

export default App;
