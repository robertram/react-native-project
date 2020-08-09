import React from 'react';
import { StyleSheet } from 'react-native';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import imagesReducer from './app/reducers/imagesReducer';
import thunk from 'redux-thunk';
import promise from 'redux-promise';

import HomeScreen from './app/screens/HomeScreen';

const rootReducer = combineReducers({
  imagesReducer
})

//Thunk middleware
const enhancer = applyMiddleware(thunk, promise);

// Creates store, sends the reducer and applies the enhancer middleware
const store = createStore(rootReducer, {}, enhancer);

export default function App() {
  return (
    <Provider store={store}>
      <HomeScreen />
    </Provider>
  );
}

const styles = StyleSheet.create({

});
