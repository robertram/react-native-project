import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Image, ImageBackground, View, SafeAreaView } from 'react-native';
import colors from '../config/colors';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.viewContainer}>
        <View style={styles.closeIcon}></View>
        <View style={styles.deleteIcon}></View>
      </View>
      <View style={styles.imageContainer}>
        <Image
          resizeMode='contain'
          style={styles.image}
          source={{
            uri: 'https://picsum.photos/200/300',
          }}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  imageContainer:{
    flex: 1, 
  },
  image: {
    flex: 1,
    justifyContent: "flex-end",
    height: '100%',
  },
  viewContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start'
  },
  closeIcon: {
    flex: 0.2,
    backgroundColor: colors.blue,
    height: 80,
  },
  deleteIcon: {
    flex: 0.2,
    backgroundColor: colors.red,
    width: 100,
    height: 80
  },

});
