import React from 'react';
import {View, Text} from 'react-native';
import BasicModal, {Button} from './lib';

interface AppProps {}

const App: React.FC<AppProps> = ({}) => {
  return (
    <View>
      <BasicModal
        isVisible
        title="Hold on!"
        description="Etiam porta sem malesuada magna mollis euismod. Nullam id dolor id nibh ultricies vehicula ut id elit. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit."

        // headerComponent={
        //   <View>
        //     <Text>Hey Header</Text>
        //   </View>
        // }
        // footerComponent={
        //   <View>
        //     <Text>Hey Footer</Text>
        //   </View>
        // }
      />
    </View>
  );
};

export default App;
