import React from 'react';
import { StyleSheet, Text, View ,Image } from 'react-native';
import {createAppContainer} from 'react-navigation';

import {createBottomTabNavigation} from 'react-navigation';

export default function App() {
  return (
    <AppContainer />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
