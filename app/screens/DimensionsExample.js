import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View, SafeAreaView} from 'react-native';
import { useDimensions, useDeviceOrientation } from '@react-native-community/hooks';

export default function Dimensions() {
  const {landscape} = useDeviceOrientation();
  
  return (
    <SafeAreaView style={[styles.container]}>
      <View style={{
        backgroundColor:'dodgerblue',
        width: '100%', 
        height: landscape ? '100%': '30%'
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
