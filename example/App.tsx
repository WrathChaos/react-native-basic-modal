import React from 'react';
import {View} from 'react-native';
import BasicModal, {Button} from './lib';

interface AppProps {}

const App: React.FC<AppProps> = ({}) => {
  return (
    <View>
      <BasicModal
        isVisible
        title="Hold on!"
        description="Nulla vitae elit libero, a pharetra augue. Vestibulum id ligula porta felis euismod semper. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Sed posuere consectetur est at lobortis. Etiam porta sem malesuada magna mollis euismod."
      />
    </View>
  );
};

export default App;
