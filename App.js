import React from 'react';
import { View } from 'react-native';
import Header from './components/Header';
import Home from './screens/Home';

export default function App() {
  return (
    <View>
      <Header />
      <Home />
    </View>
  );
};