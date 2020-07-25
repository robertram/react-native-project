import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Button, Alert, SafeAreaView } from 'react-native';

export default function Button() {
  return (
    <SafeAreaView style={styles.container}>
      <Button
        color='orange'
        title='hello' onPress={() => {
          Alert.alert('User granted', 'You are now signed in!', [
            { text: 'Yes', onPress: () => console.log('Yes clicked') },
            { text: 'No', onPress: () => console.log('No clicked') }
          ])
        }} />

      <Button
        color='orange'
        title='hello' onPress={() => { Alert.prompt('title', 'message', (text) => console.log(text)) }} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
