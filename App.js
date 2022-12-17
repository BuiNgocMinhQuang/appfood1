import {View, Text} from 'react-native';
import React from 'react';
import Navigators from './src/navigators';
import {Provider} from 'react-redux';
import {store} from './store';
const App = () => {
  return (
    <Provider store={store}>
      <Navigators />
    </Provider>
  );
};

export default App;
