import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, Image, ImageBackground, View, FlatList, SafeAreaView } from 'react-native';
import colors from '../config/colors';

export default function ImageList() {

  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const auth = {

  }
  //https://api.unsplash.com/search/photos?query=office&client_id=sk6CBTMciDoHkiXCD-GKdV5D4LrtLzCdy1yIGCLBWsA
  useEffect(() => {
    fetch('https://api.unsplash.com/search/photos?query=office&client_id=sk6CBTMciDoHkiXCD-GKdV5D4LrtLzCdy1yIGCLBWsA')
      .then((response) => response.json())
      .then((json) => setData(json.results))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>Hola mundo</Text>
      {isLoading ? <Text style={styles.text}>Loading</Text> : (
        <FlatList
          data={data}
          keyExtractor={({ id }, index) => id}
          renderItem={({ item }) => (
            <View style={styles.box}>
              {console.log(item.urls.raw)}
              <Text>{item.id}</Text>
              {/*<Image
                resizeMode='contain'
                style={styles.image}
                source={{
                  uri: {item.urls.raw},
                }}
              />*/}
            </View>
          )}
        />
      )}
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: colors.black,
  },
  image: {
    height: '50%'
  },
  box: {
    width: '100%',
    flex: 1,
    paddingVertical: 20,
    marginVertical: 50,
    borderWidth: 3
  }
});

