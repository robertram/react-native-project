import React from 'react';
import { StyleSheet } from 'react-native';
import DimensionsExample from './app/screens/DimensionsExample';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import imagesReducer from './app/reducers/imagesReducer';
import thunk from 'redux-thunk';
import promise from 'redux-promise';

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
      <DimensionsExample />
    </Provider>
  );
}

const styles = StyleSheet.create({

});
