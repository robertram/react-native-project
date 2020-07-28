import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, Image, ImageBackground, View, SafeAreaView } from 'react-native';
import ImageList from './app/screens/ImageList';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './app/reducers/imagesReducer';

const store = createStore(reducers);

export default function App() {
  return (
    <Provider store={store}>
      <ImageList />
    </Provider>
  );
}

const styles = StyleSheet.create({

});
