import React from 'react';
import {
  StyleSheet,
  SafeAreaView,
  StatusBar,
  Text, 
  Image
} from 'react-native';

import colors from '../constants/colors';

export default ({ route }) => {
  const { id, alt_description, urls, created_at, description, likes, user } = route.params;
  return (
    <SafeAreaView style={{ flex: 1, marginBottom: 0 }}>
      <StatusBar barStyle="dark-content" backgroundColor={colors.white} />
      <Image
        resizeMode='contain'
        style={styles.image}
        source={{
          uri: urls.small,
        }}
      />

      <Text style={styles.title}>{alt_description}</Text>
      <Text style={styles.likes}>{likes} Likes</Text>
      
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  image: {
    height: 250,
    width: '100%',
    marginTop: 0,
    paddingTop: 0
  },
  title: {
    color: colors.black,
    fontWeight: 'bold',
    fontSize: 25,
    textAlign: 'center',
    marginBottom: 20,
  },
  likes: {
    color: colors.red,
    fontWeight: 'bold',
    fontSize: 19,
  },
});