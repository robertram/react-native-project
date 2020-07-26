import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Button, Alert, SafeAreaView, Platform } from 'react-native';

export default function StatusBar() {
  return (
    <SafeAreaView style={[styles.container, stylesContainer]}>
      <Button 
      color='white'
      title='hello' onPress={()=>{Alert.prompt('title', 'message', (text)=>console.log(text))}}/>
    </SafeAreaView>
  );
}

const stylesContainer= {
  backgroundColor: 'orange'
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});
