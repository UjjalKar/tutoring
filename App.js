import React from 'react';
import {View, Text} from 'react-native';
import {Provider} from 'react-redux';
import Main from './src/navigationGroup/AppNavigator';
import configStore from './src/Redux/reduxConfig';

const store = configStore();

export default function App() {
  return (
    <Provider store={store}>
      <Main />
    </Provider>
  );
}
// // "@babel/runtime": "^7.8.4",
