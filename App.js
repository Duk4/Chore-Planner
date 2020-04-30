import React from 'react';
import { Text, View } from 'react-native';
import Header from './components/Header';
import Home from './screens/Home';
import styles from './styles.js';

export default function App() {
  return (
    <View>
      <Header />
      <Home />
    </View>
  );
};