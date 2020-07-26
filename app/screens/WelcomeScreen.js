import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, Image, ImageBackground, View, SafeAreaView } from 'react-native';

export default function WelcomeScreen() {
  return (
      <ImageBackground style={styles.background}
        source={{
          uri: 'https://picsum.photos/200/300',
        }}>
        <View style={styles.logoContainer}>
          <Image
            style={styles.logo}
            source={{
              uri: 'https://www.freelogodesign.org/Content/img/logo-samples/flooop.png',
            }}
          />
          <Text style={styles.text}>Welcome to our app</Text>
        </View>
        <View style={styles.loginButton}></View>
        <View style={styles.registerButton}></View>
      </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  background: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: 'center',
    width: '100%',
    height: '100%',
  },
  logo: {
    width: 200, 
    height: 200
  },
  logoContainer: {
    position: 'absolute', 
    top: 70, 
    alignItems: 'center'
  },
  text: {
    
  },
  loginButton: {
    width: '100%', 
    height: 70,
    backgroundColor: 'dodgerblue',
  },
  registerButton: {
    width: '100%', 
    height: 70,
    backgroundColor: 'tomato',
  },
});
