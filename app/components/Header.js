import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import colors from '../constants/colors';

export default function Header() {
  return (
    <>
      <View style={styles.loginButton}></View>
    </>
  )
}

const styles = StyleSheet.create({
  header: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.white
  },
  loginButton: {
    width: '100%',
    height: 50,
    borderBottomWidth: 1,
    borderBottomColor: colors.gray,
    backgroundColor: colors.white
  },

});

