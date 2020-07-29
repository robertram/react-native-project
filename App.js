import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, Image, ImageBackground, View, SafeAreaView } from 'react-native';
import ImageList from './app/screens/ImageList';
import { Provider } from 'react-redux';
import configureStore from './app/store';
import { createStore, applyMiddleware } from 'redux';
import imagesReducer from './app/reducers/imagesReducer';
import thunk from 'redux-thunk';
import promise from 'redux-promise';

//Thunk middleware
const enhancer = applyMiddleware(thunk, promise);

// Creates store, sends the reducer and applies the enhancer middleware
const store = createStore(imagesReducer, {}, enhancer);

export default function App() {
  return (
    <Provider store={store}>
      <ImageList />
    </Provider>
  );
}

const styles = StyleSheet.create({

});
