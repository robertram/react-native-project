import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Dimensions, StyleSheet, View, SafeAreaView} from 'react-native';
import { useDimensions } from '@react-native-community/hooks';

export default function App() {
  console.log(useDimensions);
  return (
    <SafeAreaView style={[styles.container]}>
      <View style={{
        backgroundColor:'dodgerblue',
        width: '50%', 
        height: '30%'
      }}></View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});
