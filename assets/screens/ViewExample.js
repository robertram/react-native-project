import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { View, ViewPropTypes } from 'react-native';

export default function View() {
  return (
    <View
      style={{
        backgroundColor: '#fff',
        flex: 1, 
        flexDirection: 'row', 
        justifyContent: 'center',
        alignItems: 'center' 
      }}>
      <View
        style={{
          backgroundColor: 'dodgerblue',
          width: 100, 
          height: 100
        }} />
      <View
        style={{
          backgroundColor: 'gold',
          width: 100, 
          height: 100
        }} />
      <View
        style={{
          backgroundColor: 'tomato',
          width: 100, 
          height: 100
        }} />
    </View>
  );
}

