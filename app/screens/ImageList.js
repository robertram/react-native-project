import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, Image, ActivityIndicator, View, FlatList, SafeAreaView, Button } from 'react-native';
import colors from '../config/colors';
import Header from '../components/Header';
import { connect, useDispatch } from 'react-redux';
import { searchImagesBy, deleteImages, axiosSearch } from './../actions';

function ImageList(props) {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  //const dispatch = useDispatch();

  /*useEffect((term) => {
    dispatch(searchImagesBy(term))
  });*/

  //https://api.unsplash.com/search/photos?query=office&client_id=sk6CBTMciDoHkiXCD-GKdV5D4LrtLzCdy1yIGCLBWsA
  /*useEffect(() => {
    fetch('https://api.unsplash.com/search/photos?query=office&client_id=sk6CBTMciDoHkiXCD-GKdV5D4LrtLzCdy1yIGCLBWsA')
      .then((response) => response.json())
      .then((json) => setData(json.results))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, []);*/

  const { fetching, images, searchImagesBy, deleteImages, axiosSearch } = props;

  return (
    <SafeAreaView style={styles.container}>
      <Header></Header>
      {console.log('fetching ', images)}
      <Text style={styles.title}>{fetching}</Text>
      <Button title="load images" onPress={() => { axiosSearch() }}></Button>

      <Button title="get another" onPress={() => { deleteImages() }}></Button>

      {fetching ? <ActivityIndicator/> : (
        <FlatList
          data={images}
          keyExtractor={({ id }, index) => id}
          renderItem={({ item }) => (
            <View style={styles.box}>
              {/*console.log(item)*/}
              <Text style={styles.title}>{item.name}</Text>
              {/*<Image
                resizeMode='contain'
                style={styles.image}
                source={{
                  uri: item.urls.raw,
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
  title: {
    color: colors.black,
    fontSize: 20,
  },
  text: {
    color: colors.black,
  },
  image: {
    height: 150,
    width: 150,
  },
  box: {
    width: '100%',
    flex: 1,
    paddingVertical: 20,
    marginVertical: 50,
    borderWidth: 2,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
    backgroundColor: colors.white,
    borderRadius: 10,
    borderColor: colors.gray,
  }
});

/*const mapStateToProps = (state) => {
  console.log('map state', state.images);
  return { imagesState: state.images }
};*/

const mapStateToProps = (state) => {
  console.log('mapState ', state);
  return {
    images: state.images,
    fetching: state.fetching,
    error: state.error
  }
};

//const mapStateToProps = ({ images }) => ({ images });
const mapDispatchToProps = (dispatch) => ({ 
  searchImagesBy: () => dispatch(searchImagesBy()),
  deleteImages: () => dispatch(deleteImages()),
  axiosSearch: () => dispatch(axiosSearch()) 
})

export default connect(mapStateToProps, mapDispatchToProps)(ImageList);


